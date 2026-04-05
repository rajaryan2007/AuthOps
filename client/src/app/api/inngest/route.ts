import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { helloWorld, sendTelegramNotification, processAiChat, performGithubOperation, createGithubRepoFromTemplate } from "@/lib/inngest/functions";

// Setting up the Inngest API route handler.
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    sendTelegramNotification,
    processAiChat,
    performGithubOperation,
    createGithubRepoFromTemplate
  ],
});
