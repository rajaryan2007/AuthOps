import { Request, Response } from "express";
import { logger } from "../utils/logger.js";
import groq from "../utils/groq.js";

const SYSTEM_PROMPT = `You are AuthOps Agent, a concise and helpful AI assistant embedded in the AuthOps platform. 
You help users manage their Auth0 token vaults, GitHub integrations, Telegram notifications, and agentic workflows.
Keep responses short, direct, and actionable. Use markdown formatting when helpful.
Do not exceed 200 words per response to conserve tokens.`;


const conversations = new Map<string, Array<{ role: "user" | "assistant" | "system"; content: string }>>();

export const handleChat = async (req: Request, res: Response) => {
  const { message } = req.body;
  const userId = req.user?.sub || "anonymous";
  const userName = req.user?.name || "User";

  logger.info(`Chat message from ${userName}: ${message}`);

  try {
    // Get or initialize conversation history for this user
    if (!conversations.has(userId)) {
      conversations.set(userId, [
        { role: "system", content: SYSTEM_PROMPT }
      ]);
    }

    const history = conversations.get(userId)!;
    history.push({ role: "user", content: message });

    // Keep only last 10 messages + system prompt to save tokens
    if (history.length > 12) {
      const systemMsg = history[0];
      conversations.set(userId, [systemMsg, ...history.slice(-10)]);
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: conversations.get(userId)!,
      temperature: 0.7,
      max_tokens: 512,
    });

    const reply = completion.choices[0]?.message?.content || "I couldn't generate a response.";

    // Save assistant reply to history
    conversations.get(userId)!.push({ role: "assistant", content: reply });

    logger.info(`Groq response for ${userName}: ${reply.substring(0, 80)}...`);

    res.json({ reply });
  } catch (error) {
    logger.error("Groq API error:", error);
    const errMsg = error instanceof Error ? error.message : "Unknown Groq error";
    res.status(500).json({ reply: `Error communicating with AI: ${errMsg}` });
  }
};
