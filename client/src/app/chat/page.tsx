import { Lock, ArrowLeft } from "lucide-react";
import PlasmaBackground from "@/components/PlasmaBackground";
import { auth0 } from "@/lib/auth0";
import AuthButton from "@/components/AuthButton";
import { ChatSection } from "@/components/ChatSection";
import Link from "next/link";

export default async function ChatPage() {
  const session = await auth0.getSession();

  return (
    <main className="min-h-screen bg-[#060010] relative overflow-hidden flex items-center justify-center pt-24 pb-12 px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PlasmaBackground color="#8b5cf6" opacity={0.6} direction="forward" speed={0.5} />
      </div>

      <div className="absolute top-6 right-6 z-20">
        <AuthButton />
      </div>
      
      <div className="absolute top-6 left-6 z-20">
         <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/40 px-4 py-2.5 rounded-xl backdrop-blur-md border border-white/5 font-medium text-sm hover:border-white/10">
            <ArrowLeft className="w-4 h-4" /> Dashboard
         </Link>
      </div>

      <div className="w-full max-w-5xl flex flex-col flex-1 z-10 h-full max-h-[800px]">
        {session?.user ? (
          <ChatSection />
        ) : (
          <div className="flex flex-col items-center justify-center p-12 glass rounded-3xl max-w-2xl mx-auto text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] my-auto relative">
            <div className="p-5 rounded-full bg-brand/10 mb-6 border border-brand/20">
              <Lock className="w-10 h-10 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Chat Restricted</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Please sign in using your Auth0 credentials to access the internal Agent relay.
            </p>
            <div className="scale-110">
              <AuthButton />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
