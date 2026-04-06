import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";
import prisma from "@/lib/prisma";
import { inngest } from "@/lib/inngest/client";

export async function POST(req: Request) {
  try {
    const session = await auth0.getSession();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message, sessionId: clientSessionId } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // 1. Find or create the user in our DB
    let user = await prisma.user.findUnique({
      where: { authOId: session.user.sub },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          authOId: session.user.sub,
          email: session.user.email || "",
          username: session.user.nickname || session.user.name || "user",
          telegramUserId: "",
          telegramChatId: "",
          vercelAcessToken: "",
          preferredFramework: "NEXTJS",
        },
      });
    }

    // Resolve Session
    let activeSessionId = clientSessionId;
    if (!activeSessionId) {
      const newSession = await prisma.chatSession.create({
        data: { userId: user.id, title: message.substring(0, 30) }
      });
      activeSessionId = newSession.id;
    }

    // 2. Save the user's message to the DB
    const userMessage = await prisma.chatMessage.create({
      data: {
        userId: user.id,
        sessionId: activeSessionId,
        role: "user",
        content: message,
      },
    });

    // 3. Trigger the Inngest workflow for the AI response
    await inngest.send({
      name: "chat/message.sent",
      data: {
        userId: user.id,
        sessionId: activeSessionId,
        content: message,
      },
    });

    return NextResponse.json({ 
      success: true, 
      messageId: userMessage.id,
      sessionId: activeSessionId,
      status: "AI is thinking..." 
    });
  } catch (error) {
    console.error("Chat Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
