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
    const { userId, sessionId, content } = event.data as { userId: string; sessionId: string; content: string };

    // 1. Fetch History
    const history = await step.run("fetch-history", async () => {
      const messages = await prisma.chatMessage.findMany({
        where: { userId, sessionId },
        orderBy: { createdAt: "desc" },
        take: 10,
      });
      return messages.reverse().map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      }));
    });

    // 2. Fetch Github Auth Context
    const authData = await step.run("fetch-auth-data", async () => {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      const { getGithubTokenFromAuth0 } = await import("@/lib/auth0-management");
      const token = await getGithubTokenFromAuth0(user!.authOId);
      if (!token) throw new Error("Could not find GitHub Token. Please link your GitHub account.");

      const octokit = new Octokit({ auth: token });
      const { data: authUser } = await octokit.rest.users.getAuthenticated();
      return { token, defaultOwner: authUser.login };
    });

    const SYSTEM_PROMPT = {
      role: "system",
      content: "You are a friendly AuthOps AI. Answer naturally. You have tools for GitHub operations. ONLY call tools if explicitly requested. Try to format data nicely. If no owner is provided for a repo, your system uses the authenticated user by default."
    };

    const TOOLS = [
      {
        type: "function", function: {
          name: "create_github_repo", description: "Queue background workflow to create a repo.",
          parameters: { type: "object", properties: { repoName: { type: "string" }, isPrivate: { type: "boolean" } }, required: ["repoName"] },
        }
      },
      {
        type: "function", function: {
          name: "get_repo_stats", description: "Get stars, forks, and watchers for a repo.",
          parameters: { type: "object", properties: { repo: { type: "string" }, owner: { type: "string", description: "Optional. Leave blank to use current user." } }, required: ["repo"] },
        }
      },
      {
        type: "function", function: {
          name: "create_issue", description: "Create a new issue in a repo.",
          parameters: { type: "object", properties: { repo: { type: "string" }, title: { type: "string" }, body: { type: "string" }, owner: { type: "string" } }, required: ["repo", "title", "body"] },
        }
      },
      {
        type: "function", function: {
          name: "check_pull_requests", description: "List open pull requests for a repo.",
          parameters: { type: "object", properties: { repo: { type: "string" }, owner: { type: "string" } }, required: ["repo"] },
        }
      },
      {
        type: "function", function: {
          name: "star_repository", description: "Star a repository.",
          parameters: { type: "object", properties: { repo: { type: "string" }, owner: { type: "string" } }, required: ["repo"] },
        }
      },
      {
        type: "function", function: {
          name: "summarize_commits", description: "Fetch the latest 5 commits for a repo.",
          parameters: { type: "object", properties: { repo: { type: "string" }, owner: { type: "string" } }, required: ["repo"] },
        }
      },
      {
        type: "function", function: {
          name: "get_trending_repos", description: "Fetch the current trending GitHub repositories based on stars from the past week.",
          parameters: { type: "object", properties: { limit: { type: "integer", description: "Number of repos to return (max 10)", default: 5 } } },
        }
      },
      {
        type: "function", function: {
          name: "review_pull_request", description: "Fetch the code diff of a PR to review it.",
          parameters: { type: "object", properties: { repo: { type: "string" }, pr_number: { type: "integer" }, owner: { type: "string" } }, required: ["repo", "pr_number"] },
        }
      },
      {
        type: "function", function: {
          name: "read_file", description: "Read the full contents of a file in a repository.",
          parameters: { type: "object", properties: { repo: { type: "string" }, path: { type: "string", description: "Path to file e.g. src/index.ts" }, owner: { type: "string" } }, required: ["repo", "path"] },
        }
      },
      {
        type: "function", function: {
          name: "update_file", description: "Update or create a file directly on GitHub with new code.",
          parameters: { type: "object", properties: { repo: { type: "string" }, path: { type: "string" }, message: { type: "string", description: "Commit message" }, content: { type: "string", description: "New exact raw file contents" }, owner: { type: "string" } }, required: ["repo", "path", "message", "content"] },
        }
      },
      {
        type: "function", function: {
          name: "deploy_to_vercel", description: "Trigger a production deployment of the application on Vercel.",
          parameters: { type: "object", properties: { projectName: { type: "string", description: "Name of the project to deploy" } } },
        }
      }
    ];


    const groqResponse = await step.run("call-groq-turn-1", async () => {
      const completion = await groq.chat.completions.create({
        messages: [SYSTEM_PROMPT as any, ...history, { role: "user", content }],
        model: "llama-3.3-70b-versatile",
        tools: TOOLS as any,
        tool_choice: "auto",
      });
      return completion.choices[0]?.message;
    });

    let aiResponse = "I'm sorry, I couldn't generate a response.";

    if (groqResponse?.tool_calls && groqResponse.tool_calls.length > 0) {
      // Execute synchronous GitHub API calls
      const toolResults = await step.run("execute-tools", async () => {
        const octokit = new Octokit({ auth: authData.token });
        const results = [];

        for (const call of groqResponse.tool_calls as any[]) {
          const args = JSON.parse(call.function.arguments);
          const owner = args.owner || authData.defaultOwner;
          const repo = args.repoName || args.repo;

          let content = "";
          try {
            if (call.function.name === "create_github_repo") {
              content = "Workflow triggered successfully in background.";
            } else if (call.function.name === "get_repo_stats") {
              const { data } = await octokit.rest.repos.get({ owner, repo });
              content = JSON.stringify({ stars: data.stargazers_count, forks: data.forks_count, description: data.description });
            } else if (call.function.name === "create_issue") {
              const { data } = await octokit.rest.issues.create({ owner, repo, title: args.title, body: args.body });
              content = `Issue created: ${data.html_url}`;
            } else if (call.function.name === "check_pull_requests") {
              const { data } = await octokit.rest.pulls.list({ owner, repo, state: "open" });
              content = JSON.stringify(data.map(pr => ({ title: pr.title, user: pr.user?.login, url: pr.html_url })).slice(0, 5));
            } else if (call.function.name === "star_repository") {
              await octokit.rest.activity.starRepoForAuthenticatedUser({ owner, repo });
              content = `Successfully starred ${owner}/${repo}`;
            } else if (call.function.name === "summarize_commits") {
              const { data } = await octokit.rest.repos.listCommits({ owner, repo, per_page: 5 });
              content = JSON.stringify(data.map((c: any) => ({ msg: c.commit.message, author: c.commit.author?.name })));
            } else if (call.function.name === "get_trending_repos") {
              const lastWeekDate = new Date();
              lastWeekDate.setDate(lastWeekDate.getDate() - 7);
              const dateQuery = lastWeekDate.toISOString().split("T")[0];
              const per_page = args.limit ? Math.min(args.limit, 10) : 5;
              const { data } = await octokit.rest.search.repos({
                q: `created:>=${dateQuery}`,
                sort: "stars",
                order: "desc",
                per_page
              });
              content = JSON.stringify((data as any).items.map((repo: any) => ({ name: repo.full_name, stars: repo.stargazers_count, url: repo.html_url })));
            } else if (call.function.name === "review_pull_request") {
              const { data } = await octokit.rest.pulls.listFiles({ owner, repo, pull_number: args.pr_number });
              content = data.map((f: any) => `File: ${f.filename}\nPatch:\n${f.patch}`).join("\n\n").substring(0, 5000);
            } else if (call.function.name === "read_file") {
              const { data } = await octokit.rest.repos.getContent({ owner, repo, path: args.path });
              if ("content" in data && data.type === "file") {
                content = Buffer.from(data.content, "base64").toString("utf-8");
              } else {
                throw new Error("Target is not a readable file.");
              }
            } else if (call.function.name === "update_file") {
              let sha: string | undefined;
              try {
                const { data: existing } = await octokit.rest.repos.getContent({ owner, repo, path: args.path });
                if ("sha" in existing) sha = existing.sha;
              } catch (e) {

              }
              const { data } = await octokit.rest.repos.createOrUpdateFileContents({
                owner, repo, path: args.path,
                message: args.message,
                content: Buffer.from(args.content).toString("base64"),
                sha
              });
              content = `File updated successfully! Commit: ${data.commit.html_url}`;
            } else if (call.function.name === "deploy_to_vercel") {
              const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
              
              if (hookUrl) {
                // Actually trigger the real deployment!
                const res = await fetch(hookUrl, { method: "POST" });
                const textBody = await res.text();
                
                if (res.ok) {
                   content = `Vercel Deployment Triggered Successfully! Vercel Response: ${textBody}`;
                } else {
                   content = `Failed to deploy to Vercel. Status: ${res.status}. Vercel Response: ${textBody}`;
                }
              } else {
                content = `Error: VERCEL_DEPLOY_HOOK_URL is not set in your .env file. I cannot deploy until you give me the hook url!`;
              }
            }
          } catch (e: any) {
            content = `Error executing tool: ${e.message}`;
          }
          results.push({ tool_call_id: call.id, role: "tool", name: call.function.name, content });
        }
        return results;
      });

      // Dispatch background event ONLY for create_github_repo (outside step.run)
      for (const call of groqResponse.tool_calls as any[]) {
        if (call.function.name === "create_github_repo") {
          const args = JSON.parse(call.function.arguments);
          await step.sendEvent("trigger-repo-creation", {
            name: "github/repo.create_from_template",
            data: { userId, repoName: args.repoName || args.repo, isPrivate: args.isPrivate || false }
          });
        }
      }

      // TURN 2: Pass data back to Groq for final reply
      const finalReply = await step.run("call-groq-turn-2", async () => {
        const completion = await groq.chat.completions.create({
          messages: [
            SYSTEM_PROMPT as any,
            ...history,
            { role: "user", content },
            groqResponse as any,
            ...toolResults
          ],
          model: "llama-3.3-70b-versatile",
        });
        return completion.choices[0]?.message?.content;
      });

      aiResponse = finalReply || "Completed processing your request.";
    } else {
      aiResponse = groqResponse?.content as string;
    }

    await step.run("save-assistant-reply", async () => {
      await prisma.chatMessage.create({
        data: { userId, sessionId, role: "assistant", content: aiResponse },
      });
    });

    await step.run("send-telegram-reply", async () => {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (user?.telegramChatId && process.env.TELEGRAM_BOT_TOKEN) {
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST", headers: { "Content-Type": "application/json" },
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
