import { inngest } from "./client";
import prisma from "@/lib/prisma";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.API_KEY_GROQ });

/**
 * Basic 'Hello World' function
 */
export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: [{ event: "test/hello.world" }] },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello World! Event data: ${JSON.stringify(event.data)}` };
  }
);

/**
 * Handles the AI chat generation in a durable Inngest workflow.
 * Triggers when a user sends a message.
 */
export const processAiChat = inngest.createFunction(
  {
    id: "process-ai-chat",
    triggers: [{ event: "chat/message.sent" }]
  },
  async ({ event, step }) => {
    const { userId, content } = event.data as { userId: string; content: string };

    // 1. Retrieve conversation history for context
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

    // 2. Call Groq for the AI response
    const aiResponse = await step.run("call-groq", async () => {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful AI assistant for AuthOps, a serverless security platform." },
          ...history,
          { role: "user", content },
        ],
        model: "llama-3.3-70b-versatile",
      });

      return completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
    });

    // 3. Save the assistant's reply to the database
    await step.run("save-assistant-reply", async () => {
      await prisma.chatMessage.create({
        data: {
          userId,
          role: "assistant",
          content: aiResponse,
        },
      });
    });

    return { success: true };
  }
);

/**
 * Placeholder for sending Telegram Notifications
 */
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
