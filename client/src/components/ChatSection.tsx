"use client";

import { useState, useEffect, useRef } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatSectionProps {
  activeSessionId: string | null;
  onChatCreated: (session: { id: string; title: string }) => void;
}

export function ChatSection({ activeSessionId, onChatCreated }: ChatSectionProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [workingSessionId, setWorkingSessionId] = useState<string | null>(activeSessionId);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // When parent changes the active session, reset local state
  useEffect(() => {
    if (activeSessionId === null) {
      setMessages([]);
      setIsTyping(false);
      setIsInitialLoading(false);
      setWorkingSessionId(null);
      return;
    }

    setWorkingSessionId(activeSessionId);

    let cancelled = false;
    setIsInitialLoading(true);
    fetch(`/api/chat/history?sessionId=${activeSessionId}`)
      .then(res => res.json())
      .then(data => {
        if (cancelled) return;
        setMessages(data.messages || []);
        const lastMsg = data.messages?.[data.messages.length - 1];
        setIsTyping(lastMsg?.role === "user");
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setIsInitialLoading(false); });
    return () => { cancelled = true; };
  }, [activeSessionId]);

  // Polling when AI is thinking
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTyping && workingSessionId) {
      interval = setInterval(async () => {
        try {
          const res = await fetch(`/api/chat/history?sessionId=${workingSessionId}`);
          if (res.ok) {
            const data = await res.json();
            const lastMsg = data.messages?.[data.messages.length - 1];
            setMessages(data.messages || []);
            if (lastMsg?.role === "assistant") {
              setIsTyping(false);
            }
          }
        } catch {}
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isTyping, workingSessionId]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const currentInput = input;
    setInput("");

    const tempId = Date.now().toString();
    setMessages(prev => [...prev, { id: tempId, role: "user", content: currentInput }]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput, sessionId: workingSessionId })
      });

      if (res.ok) {
        const data = await res.json();
        if (!workingSessionId && data.sessionId) {
          setWorkingSessionId(data.sessionId);
          onChatCreated({
            id: data.sessionId,
            title: currentInput.substring(0, 30) || "New Chat"
          });
        }
      }
    } catch {
      setMessages(prev => [...prev, { id: "err-" + tempId, role: "assistant", content: "Error: Could not connect to AI." }]);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background relative selection:bg-primary/20">
      
      {/* Header — Nord polar glass */}
      <header className="absolute top-0 left-0 w-full h-[56px] flex items-center px-4 z-10 bg-card/80 backdrop-blur-xl border-b-2 border-border/50">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <h2 className="ml-4 font-bold text-foreground text-sm tracking-tight">AuthOps AI</h2>
        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 tracking-wider">AGENT</span>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-12 lg:px-24 pt-20 pb-36">
        {isInitialLoading ? (
          <div className="flex items-center justify-center py-20 text-primary">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto w-full flex flex-col gap-6">
            {messages.length === 0 && (
              <div className="text-center w-full py-20">
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground text-xl font-bold mb-2">How can I help you today?</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
                  Trigger Inngest workflows, create repositories, review PRs, or modify code directly.
                </p>
                {/* Quick action suggestions */}
                <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
                  {["Create a new repo", "Review latest PR", "Run a workflow", "Check deployments"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setInput(suggestion)}
                      className="btn-retro px-3 py-1.5 text-xs bg-card border-2 border-border rounded-lg text-muted-foreground hover:text-foreground"
                      style={{ boxShadow: "2px 2px 0px #1a1d23" }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <div key={msg.id} className="w-full flex gap-3.5 text-base group">
                <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5">
                  {msg.role === "user" ? (
                    <div className="w-full h-full bg-muted text-foreground flex items-center justify-center rounded-lg border-2 border-border">
                      <User className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-primary text-primary-foreground flex items-center justify-center rounded-lg border-2 border-[#5a97a5] shadow-[0_0_10px_rgba(136,192,208,0.2)]">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className={`flex-1 overflow-x-auto py-1 leading-7 ${msg.role === "user" ? "text-foreground" : "text-foreground/85"}`}>
                  {msg.role === "assistant" && (
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">AuthOps Agent</span>
                  )}
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="w-full flex gap-3.5 text-base">
                <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5">
                  <div className="w-full h-full bg-primary text-primary-foreground flex items-center justify-center rounded-lg border-2 border-[#5a97a5] shadow-[0_0_10px_rgba(136,192,208,0.2)]">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
                <div className="flex-1 py-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">AuthOps Agent</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:300ms]" />
                    <span className="ml-2 text-muted-foreground text-sm">Processing workflow...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input — RetroUI styled */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background via-background to-transparent pt-10 pb-6 px-4">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="max-w-3xl mx-auto relative">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={isTyping}
            className="w-full bg-card/80 backdrop-blur-xl border-2 border-border rounded-xl py-4 pl-5 pr-14 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(136,192,208,0.1)] transition-all text-sm"
            placeholder="Message AuthOps Agent..."
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 disabled:opacity-40 disabled:cursor-not-allowed w-10 h-10 rounded-lg flex items-center justify-center text-primary-foreground transition-all border-2 border-[#5a97a5] shadow-[2px_2px_0px_#4a7f8b] hover:shadow-[1px_1px_0px_#4a7f8b] hover:translate-y-[calc(-50%+1px)] active:shadow-none active:translate-y-[calc(-50%+2px)] cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-center text-xs text-muted-foreground/50 mt-4">
          AI Agent may generate inaccurate code. Always review proposed changes.
        </p>
      </div>
    </div>
  );
}
