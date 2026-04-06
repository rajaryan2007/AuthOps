import { NextResponse, NextRequest } from "next/server";
import { auth0 } from "@/lib/auth0";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const session = await auth0.getSession();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { authOId: session.user.sub },
    });

    if (!user) {
      return NextResponse.json({ sessions: [], messages: [] });
    }

    let sessions = await prisma.chatSession.findMany({
      where: { userId: user.id },
      orderBy: { updatedAt: "desc" }
    });

    if (sessions.length === 0) {
      const newSession = await prisma.chatSession.create({
        data: { userId: user.id, title: "New Chat" }
      });
      sessions = [newSession];
    }

    const sessionId = req.nextUrl.searchParams.get("sessionId");

    let messages: any[] = [];
    if (sessionId) {
      messages = await prisma.chatMessage.findMany({
        where: { userId: user.id, sessionId },
        orderBy: { createdAt: "asc" },
      });
    } else if (sessions.length > 0) {
      messages = await prisma.chatMessage.findMany({
        where: { userId: user.id, sessionId: sessions[0].id },
        orderBy: { createdAt: "asc" },
      });
    }

    return NextResponse.json({
      sessions,
      messages,
      telegramLinkingId: user.id,
      isLinked: !!user.telegramChatId
    });
  } catch (error) {
    console.error("Chat History Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
