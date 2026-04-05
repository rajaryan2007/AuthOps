import { inngest } from "./client";
import prisma from "@/lib/prisma";
import Groq from "groq-sdk";
import { Octokit } from "@octokit/rest";

const groq = new Groq({ apiKey: process.env.API_KEY_GROQ });

export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: [{ event: "test/hello.world" }] },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello World! Event data: ${JSON.stringify(event.data)}` };
  }
);

export const processAiChat = inngest.createFunction(
  {
    id: "process-ai-chat",
    triggers: [{ event: "chat/message.sent" }],
    retries: 0,
    onFailure: async ({ event, error }) => {
      const originalEvent = event.data.event;
      if (originalEvent && originalEvent.data && originalEvent.data.userId) {
        const { userId } = originalEvent.data;

        await prisma.chatMessage.create({
          data: {
            userId,
            role: "assistant",
            content: `I encountered an internal error: ${error.message}. Please try again.`,
          },
        });
      }
    }
  },
  async ({ event, step }) => {
    const { userId, content } = event.data as { userId: string; content: string };
    const history = await step.run("fetch-history", async () => {
      const messages = await prisma.chatMessage.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 10,
      });
      return messages.reverse().map((msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      }));
    });


    const groqResponse = await step.run("call-groq", async () => {
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a friendly and helpful AI assistant for AuthOps. You can have general conversations with the user. If they just say hi, greet them back warmly. ONLY use your tools if they explicitly ask you to create a GitHub repository. Otherwise, just chat normally."
          },
          ...history,
          { role: "user", content },
        ],
        model: "llama-3.3-70b-versatile",
        tools: [
          {
            type: "function",
            function: {
              name: "create_github_repo",
              description: "Triggers a background workflow to create a new GitHub repository from the workflow template.",
              parameters: {
                type: "object",
                properties: {
                  repoName: {
                    type: "string",
                    description: "The exact name of the new GitHub repository requested by the user. (e.g. if user says 'create repo auth-app', this must be 'auth-app'). Do NOT use the function name.",
                  },
                  isPrivate: {
                    type: "boolean",
                    description: "Whether the repo should be private (true) or public (false). Defaults to false.",
                  }
                },
                required: ["repoName"],
              },
            },
          }
        ],
        tool_choice: "auto",
      });

      const message = completion.choices[0]?.message;

      if (message?.tool_calls && message.tool_calls.length > 0) {
        return {
          type: "tool",
          calls: message.tool_calls.map(tc => ({
            name: tc.function.name,
            args: JSON.parse(tc.function.arguments)
          }))
        };
      }

      return { type: "message", content: message?.content || "I'm sorry, I couldn't generate a response." };
    });

    let aiResponse = "";

    // Process the tool calls OUTSIDE of step.run
    if (groqResponse.type === "tool") {
      let responseText = "I am processing your request.";
      const calls = (groqResponse as any).calls || [];

      for (const call of calls) {
        if (call.name === "create_github_repo") {
          // It's crucial this step.sendEvent happens out here!
          await step.sendEvent("trigger-repo-creation", {
            name: "github/repo.create_from_template",
            data: {
              userId,
              repoName: call.args.repoName,
              isPrivate: call.args.isPrivate || false
            }
          });

          responseText = `I have started the background workflow to create your GitHub repository called **${call.args.repoName}**! Because it is handled in the background, it is completely non-blocking.`;
        }
      }
      aiResponse = responseText;
    } else {
      aiResponse = (groqResponse as any).content as string;
    }

    await step.run("save-assistant-reply", async () => {
      await prisma.chatMessage.create({
        data: {
          userId,
          role: "assistant",
          content: aiResponse,
        },
      });
    });

    await step.run("send-telegram-reply", async () => {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (user?.telegramChatId && process.env.TELEGRAM_BOT_TOKEN) {
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: user.telegramChatId, text: aiResponse }),
        });
      }
    });

    return { success: true };
  }
);



export const sendTelegramNotification = inngest.createFunction(
  { id: "send-telegram-notification", triggers: [{ event: "notification/send.telegram" }] },
  async ({ event, step }) => {
    const { chatId, message } = event.data as { chatId: string; message: string };

    await step.run("log-notification", async () => {
      console.log(`Sending Telegram notification to ${chatId}: ${message}`);
      return { status: "simulated-success" };
    });

    return { success: true };
  }
);


export const performGithubOperation = inngest.createFunction(
  { id: "github-operation", triggers: [{ event: "github/operation.perform" }] },
  async ({ event, step }) => {
    const { token, operation, repo, owner } = event.data as { token: string; operation: string; repo?: string; owner?: string };

    const result = await step.run("execute-octokit", async () => {
      const octokit = new Octokit({ auth: token || process.env.GITHUB_TOKEN });

      if (operation === "user-info") {
        const { data } = await octokit.rest.users.getAuthenticated();
        return data;
      }

      if (operation === "repo-issues" && owner && repo) {
        const { data } = await octokit.rest.issues.listForRepo({ owner, repo });
        return data;
      }

      return { error: "Unknown operation or missing parameters" };
    });

    return { success: true, result };
  }
);

export const createGithubRepoFromTemplate = inngest.createFunction(
  { id: "create-github-repo-from-template", triggers: [{ event: "github/repo.create_from_template" }] },
  async ({ event, step }) => {

    const { userId, repoName, isPrivate = false } = event.data as { userId: string; repoName: string; isPrivate?: boolean };

    const result = await step.run("create-repo-from-template", async () => {

      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) throw new Error("User not found in DB");

      const { getGithubTokenFromAuth0 } = await import("@/lib/auth0-management");
      const githubToken = await getGithubTokenFromAuth0(user.authOId);

      if (!githubToken) {
        throw new Error("Could not find GitHub token in Auth0 for this user. Ensure they logged in via GitHub.");
      }

      const octokit = new Octokit({ auth: githubToken });

      const response = await octokit.rest.repos.createUsingTemplate({
        template_owner: "rajaryan2007",
        template_repo: "template-for-workflow",
        name: repoName,
        private: isPrivate,
      });

      return {
        url: response.data.html_url,
        clone_url: response.data.clone_url,
        full_name: response.data.full_name
      };
    });

    return { success: true, result };
  }
);
