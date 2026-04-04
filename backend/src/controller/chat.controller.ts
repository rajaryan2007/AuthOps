import { Request, Response } from "express";
import { logger } from "../utils/logger.js";

export const handleChat = (req: Request, res: Response) => {
  const { message } = req.body;
  const userName = req.user?.name || "User";

  logger.info(`Chat message received from ${userName}: ${message}`);

  // Simulate AI delay
  setTimeout(() => {
    res.json({
      reply: `Hello ${userName}, I received your message: "${message}". The Express Backend & Agent interface is fully connected.`
    });
  }, 1000);
};
