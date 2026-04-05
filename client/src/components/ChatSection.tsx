"use client";

import { useState, useEffect, useCallback } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Fetch chat history from the database
  const fetchHistory = useCallback(async () => {
    try {
      const res = await fetch("/api/chat/history");
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
        
        // If the last message is from the user, it means AI is still processing
        const lastMsg = data.messages[data.messages.length - 1];
        if (lastMsg && lastMsg.role === "user") {
          setIsTyping(true);
        } else {
          setIsTyping(false);
        }
      }
    } catch (err) {
      console.error("Failed to fetch history:", err);
    } finally {
      setIsInitialLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  // Polling logic when AI is thinking
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTyping) {
      interval = setInterval(async () => {
        try {
          const res = await fetch("/api/chat/history");
          if (res.ok) {
            const data = await res.json();
            const lastMsg = data.messages[data.messages.length - 1];
            
            // Update messages
            setMessages(data.messages);

            // If assistant replied, stop typing/polling
            if (lastMsg && lastMsg.role === "assistant") {
              setIsTyping(false);
            }
          }
        } catch (err) {
          console.error("Polling error:", err);
        }
      }, 2000); // Poll every 2 seconds
    }
    return () => clearInterval(interval);
  }, [isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const optimisticMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, optimisticMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      
      // We don't wait for the reply here; the polling effect will pick it up
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages(prev => [...prev, {
        id: "error-" + Date.now(),
        role: "assistant",
        content: "Error: Failed to trigger AI workflow. Please try again."
      }]);
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
            <p className="text-xs text-gray-400">Powered by Groq & Inngest Workflow</p>
          </div>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {isInitialLoading ? (
          <div className="flex items-center justify-center h-full opacity-50">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        ) : (
          <AnimatePresence initial={false}>
            {messages.length === 0 && (
               <div className="text-center text-gray-500 text-sm py-10">
                  No messages yet. Send a message to start the Inngest workflow!
               </div>
            )}
            {messages.map((msg) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={msg.id}
                className={`flex items-start gap-3 max-w-[85%] ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
                    msg.role === "user" 
                      ? "bg-brand/20 text-brand border border-brand/30" 
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                
                <div
                  className={`p-4 rounded-2xl text-sm shadow-xl leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-brand/10 text-brand-100 border border-brand/20 rounded-tr-sm"
                      : "bg-black/60 text-gray-300 border border-[var(--color-panel-border)] rounded-tl-sm backdrop-blur-md"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
        
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-start gap-2">
            <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-4 rounded-2xl bg-black/60 border border-[var(--color-panel-border)] rounded-tl-sm backdrop-blur-md text-gray-400 text-sm italic flex items-center gap-2">
                  Workflow processing...
                </div>
            </div>
            <button 
              onClick={() => {
                setIsTyping(false);
                setMessages(prev => [...prev, { id: "stop-" + Date.now(), role: "assistant", content: "Generation stopped by user." }]);
              }}
              className="ml-11 text-xs text-red-500/80 hover:text-red-400 hover:underline transition-all flex items-center gap-1"
            >
              <div className="w-2 h-2 rounded-sm bg-red-500/80" /> Stop Generating
            </button>
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
            placeholder="Send a message to trigger the workflow..."
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
