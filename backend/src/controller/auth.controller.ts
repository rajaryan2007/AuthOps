import { Request, Response } from "express";
import { logger } from "../utils/logger.js";

export const getProfile = (req: Request, res: Response): void => {
  const userId = req.user?.sub;

  logger.info(`Profile accessed by user: ${userId}`);

  res.json({
    message: "This is a protected response",
    user: {
      sub: req.user?.sub,
      email: req.user?.email,
      name: req.user?.name,
    },
  });
};
