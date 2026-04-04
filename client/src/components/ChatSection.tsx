"use client";

import { useState } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! The Express Backend & Agent interface is connected. Send a message to test the proxy tunnel!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/proxy/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text })
      });

      const data = await res.json();
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: res.ok ? data.reply : `Error: ${data.message || data.error || 'Failed to communicate with Express'}`
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Error: Network error. Proxy might be down."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass rounded-2xl flex flex-col mt-8 w-full overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-[var(--color-panel-border)] col-span-1 md:col-span-2 lg:col-span-3"
      style={{ minHeight: "400px", maxHeight: "600px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--color-panel-border)] bg-black/40">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand/20 rounded-lg border border-brand/30">
            <Bot className="w-5 h-5 text-brand" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Agent Connect</h3>
            <p className="text-xs text-gray-400">Tunneling via proxy to Express on port 3001</p>
          </div>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id}
              className={`flex items-start gap-3 max-w-[85%] ${
                msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
                  msg.sender === "user" 
                    ? "bg-brand/20 text-brand border border-brand/30" 
                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                }`}
              >
                {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              
              <div
                className={`p-4 rounded-2xl text-sm shadow-xl leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-brand/10 text-brand-100 border border-brand/20 rounded-tr-sm"
                    : "bg-black/60 text-gray-300 border border-[var(--color-panel-border)] rounded-tl-sm backdrop-blur-md"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-4 rounded-2xl bg-black/60 border border-[var(--color-panel-border)] rounded-tl-sm backdrop-blur-md text-gray-400 text-sm italic flex items-center gap-2">
                Express backend is processing...
              </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-black/60 border-t border-[var(--color-panel-border)]">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="relative max-w-4xl mx-auto flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            placeholder="Send a message to the backend..."
            className="flex-1 bg-black/50 border border-[var(--color-panel-border)] rounded-xl px-5 py-3.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand/50 focus:border-brand/30 shadow-inner transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-3.5 bg-brand hover:bg-brand-hover text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-transparent disabled:border-transparent active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
