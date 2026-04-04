import { VaultConfig } from "@/components/VaultConfig";
import { GitHubActions } from "@/components/GitHubActions";
import { TelegramStatus } from "@/components/TelegramStatus";
import { Shield, Lock } from "lucide-react";
import PlasmaBackground from "@/components/PlasmaBackground";
import { auth0 } from "@/lib/auth0";
import AuthButton from "@/components/AuthButton";
import { BackendStatus } from "@/components/BackendStatus";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <main className="min-h-screen bg-[#060010] relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PlasmaBackground color="#8b5cf6" opacity={0.6} direction="forward" speed={0.5} />
      </div>

      <div className="absolute top-6 right-6 z-20">
        <AuthButton />
      </div>

      <div className="w-full max-w-6xl px-6 py-12 md:py-20 flex flex-col gap-12 z-10 relative">
        <header className="flex flex-col items-center text-center gap-6 mt-8">
          <div className="inline-flex items-center justify-center p-4 glass rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.15)] mb-4">
            <Shield className="w-12 h-12 text-brand" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Authorized to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#0088cc]">Act</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Empower your agentic workflows with secure Auth0 Token Vaults, extending automated operations to GitHub and real-time Telegram notifications.
          </p>
        </header>


        {session?.user ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
            <VaultConfig />
            <GitHubActions />
            <TelegramStatus />
            <BackendStatus />
            <Link href="/chat" className="glass p-6 rounded-2xl flex flex-col justify-center gap-4 col-span-1 md:col-span-2 lg:col-span-3 border border-brand/20 hover:bg-brand/10 hover:border-brand/40 transition-all group overflow-hidden relative">
              <div className="absolute right-0 top-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-all" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-4 bg-brand/20 rounded-xl group-hover:scale-110 group-hover:bg-brand/30 transition-all">
                  <MessageSquare className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-100 transition-colors">Launch Agent Chat</h3>
                  <p className="text-sm text-gray-400 mt-1">Open the dedicated full-screen internal agent relay tunnel interface</p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-12 mb-20 p-12 glass rounded-3xl max-w-2xl mx-auto text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="p-5 rounded-full bg-brand/10 mb-6 border border-brand/20">
              <Lock className="w-10 h-10 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Access Restricted</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Please sign in using your Auth0 credentials to access the AuthOps tokens and agentic automation dashboard.
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
