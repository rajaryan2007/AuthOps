"use client";
import { Send, MessageSquare, BellRing } from "lucide-react";
import { motion } from "framer-motion";

export function TelegramStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass p-6 rounded-2xl flex flex-col gap-4"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 bg-[#0088cc]/20 rounded-xl">
          <Send className="w-6 h-6 text-[#0088cc]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Telegram Alerts</h3>
          <p className="text-sm text-gray-400">
            Agent notifications via messaging
          </p>
        </div>
      </div>

      <div className="bg-black/40 border border-[var(--color-panel-border)] rounded-xl p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Chat ID</span>
          <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 font-mono">
            105829302
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Notify on Auto-Merge</span>
          <div className="w-10 h-5 bg-brand rounded-full relative cursor-pointer shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mt-auto">
        <button className="flex cursor-pointer items-center justify-center gap-2 py-3 bg-transparent hover:bg-white/5 border border-[var(--color-panel-border)] rounded-xl text-sm font-medium text-white transition-all">
          <MessageSquare className="w-4 h-4" />
          Connect Telegram Bot
        </button>
        <button className="flex cursor-pointer items-center justify-center gap-2 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl text-sm font-medium transition-all shadow-[0_0_15px_rgba(0,136,204,0.3)] hover:shadow-[0_0_20px_rgba(0,136,204,0.5)]">
          <BellRing className="w-4 h-4" />
          Test Notification
        </button>
      </div>
    </motion.div>
  );
}
