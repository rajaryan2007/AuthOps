import express from "express";
import { logger } from "./logger.js";



export const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.OIDC_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL?.startsWith("http")
    ? process.env.ISSUER_BASE_URL
    : `https://${process.env.ISSUER_BASE_URL}`,
};

const INTERNAL_SECRET = process.env.OIDC_SECRET || '';

export function verifyInternalRequest(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const secret = req.headers['x-internal-secret'];

  if (!secret || secret !== INTERNAL_SECRET) {
    logger.warn(`Unauthorized internal request from ${req.ip}`);
    res.status(401).json({ error: "Unauthorized: Invalid internal secret" });
    return;
  }


  req.user = {
    sub: req.headers['x-user-sub'] as string || '',
    email: req.headers['x-user-email'] as string || '',
    name: req.headers['x-user-name'] as string || '',
  };

  next();
}

