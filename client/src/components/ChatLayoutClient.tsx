"use client";

import { useState, useEffect } from "react";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Plus, MessageSquare } from "lucide-react";
import { ChatSection } from "./ChatSection";

interface Session {
  id: string;
  title: string;
}

export function ChatLayoutClient() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/chat/history")
      .then(res => res.json())
      .then(data => {
        if (data.sessions && data.sessions.length > 0) {
          setSessions(data.sessions);
          setActiveSessionId(data.sessions[0].id);
        }
      });
  }, []);

  const handleNewChat = () => {
    setActiveSessionId(null);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background overflow-hidden relative">
        <Sidebar className="border-r-2 border-border bg-sidebar h-full text-foreground">
          <SidebarHeader className="p-4 border-b-2 border-border/60">
            <button 
              onClick={handleNewChat}
              className="btn-retro w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-primary-foreground rounded-lg text-sm border-2 border-[#5a97a5]"
              style={{ boxShadow: "3px 3px 0px #4a7f8b" }}
            >
              <Plus className="w-4 h-4" /> New Chat
            </button>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {sessions.map(s => (
                  <SidebarMenuItem key={s.id}>
                    <SidebarMenuButton 
                      isActive={activeSessionId === s.id}
                      onClick={() => setActiveSessionId(s.id)}
                      className="cursor-pointer font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-foreground data-[active=true]:border-l-2 data-[active=true]:border-primary rounded-none px-4 py-3"
                    >
                      <MessageSquare className="w-4 h-4 mr-2 opacity-50" />
                      <span className="truncate">{s.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col h-full bg-background min-w-0">
          <ChatSection 
            activeSessionId={activeSessionId} 
            onChatCreated={(newSession) => {
              setSessions(prev => [newSession, ...prev]);
              setActiveSessionId(newSession.id);
            }} 
          />
        </main>
      </div>
    </SidebarProvider>
  );
}
