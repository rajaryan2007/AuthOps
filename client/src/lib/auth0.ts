import { Auth0Client } from "@auth0/nextjs-auth0/server";

/**
 * Auth0 v4 client singleton.
 * Configured specifically to use your existing .env variable names.
 */
export const auth0 = new Auth0Client({
  secret: process.env.AUTH0_SECRET,
  appBaseUrl: process.env.AUTH0_BASE_URL,
  domain: (process.env.AUTH0_ISSUER_BASE_URL || "").replace("https://", "").replace("/", ""),
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
});
