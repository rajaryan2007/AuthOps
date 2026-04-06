"use client";
import { Send, MessageSquare, BellRing } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function TelegramStatus({ userId }: { userId?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <Card className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg shadow-[4px_4px_0px_rgba(94,129,172,0.08)] hover:shadow-[2px_2px_0px_rgba(94,129,172,0.04)] hover:translate-y-[2px] transition-all duration-200 group h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#5E81AC]/10 border-2 border-[#5E81AC]/20 flex items-center justify-center group-hover:bg-[#5E81AC]/15 transition-colors">
              <Send className="w-5 h-5 text-[#5E81AC]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground tracking-tight">Telegram Alerts</h3>
              <p className="text-xs text-muted-foreground">Agent notifications via messaging</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-muted/50 border-2 border-border/60 rounded-lg p-3 space-y-2.5">
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-xs text-muted-foreground font-medium">Activation Command</span>
              <div className="flex items-center gap-2">
                <code className="text-[10.5px] px-2 py-1.5 bg-background rounded-md text-primary font-mono border border-primary/20 break-all select-all flex-1 text-center">
                  /start {userId || "login-first"}
                </code>
              </div>
              <p className="text-[10px] text-center text-muted-foreground mt-1">Send this to the bot to link chat.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Notify on Auto-Merge</span>
              <div className="w-9 h-5 bg-[#A3BE8C] rounded-full relative cursor-pointer shadow-[0_0_8px_rgba(163,190,140,0.3)] border border-[#A3BE8C]/60">
                <div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 top-[3px] shadow-sm" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <button className="btn-retro flex items-center justify-center gap-2 py-2.5 bg-card border-2 border-border rounded-lg text-xs text-foreground" style={{ boxShadow: "2px 2px 0px #1a1d23" }}>
              <MessageSquare className="w-3.5 h-3.5" />
              Connect Telegram Bot
            </button>
            <button className="btn-retro flex items-center justify-center gap-2 py-2.5 bg-[#5E81AC] text-white border-2 border-[#4a6a8f] rounded-lg text-xs" style={{ boxShadow: "3px 3px 0px #3d5775" }}>
              <BellRing className="w-3.5 h-3.5" />
              Test Notification
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
