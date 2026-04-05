import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { inngest } from "@/lib/inngest/client";

const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

async function sendTelegramMessage(chatId: string | number, text: string) {
  await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

export async function POST(req: Request) {
  try {
    const update = await req.json();

    if (!update.message || !update.message.text) {
      return NextResponse.json({ ok: true }); // Ignore non-text messages
    }

    const chatId = update.message.chat.id.toString();
    const text = update.message.text as string;

    // 1. Handle Account Linking (/start command)
    if (text.startsWith("/start ")) {
      const parts = text.split(" ");
      if (parts.length > 1) {
        const userId = parts[1];
        
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (user) {
          await prisma.user.update({
            where: { id: userId },
            data: { telegramChatId: chatId, telegramUserId: update.message.from.id.toString() }
          });
          await sendTelegramMessage(chatId, "✅ Your AuthOps account is now successfully linked! You can chat with the Agent from here.");
        } else {
          await sendTelegramMessage(chatId, "❌ Invalid activation token. User not found.");
        }
        return NextResponse.json({ ok: true });
      }
    }

    // 2. Look up the linked user
    const user = await prisma.user.findUnique({ where: { telegramChatId: chatId } });
    
    if (!user) {
      await sendTelegramMessage(chatId, "⚠️ Your account is not linked. Please go to AuthOps Web and get your activation link.");
      return NextResponse.json({ ok: true });
    }

    // 3. Save Chat Message to DB
    await prisma.chatMessage.create({
      data: {
        userId: user.id,
        role: "user",
        content: text,
      },
    });

    // 4. Trigger Inngest AI Workflow
    await inngest.send({
      name: "chat/message.sent",
      data: {
        userId: user.id,
        content: text,
        source: "telegram" // Optional context
      }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
