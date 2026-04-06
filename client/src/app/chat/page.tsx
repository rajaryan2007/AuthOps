import { Lock, ArrowLeft } from "lucide-react";
import { auth0 } from "@/lib/auth0";
import AuthButton from "@/components/AuthButton";
import { ChatLayoutClient } from "@/components/ChatLayoutClient";
import Link from "next/link";

export default async function ChatPage() {
  const session = await auth0.getSession();

  if (!session?.user) {
    return (
      <main className="min-h-screen relative flex items-center justify-center p-6">
        <div className="absolute top-6 left-6 z-20">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-card px-4 py-2.5 rounded-xl border border-border font-medium text-sm">
             <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center p-12 bg-card rounded-3xl max-w-2xl mx-auto text-center border border-border shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="p-5 rounded-full bg-primary/10 mb-6 border border-primary/20">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Chat Restricted</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Please sign in using your Auth0 credentials to access the AuthOps Agent relay.
          </p>
          <div className="scale-110">
            <AuthButton />
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden">
        <ChatLayoutClient />
    </div>
  );
}

