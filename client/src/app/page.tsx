import { VaultConfig } from "@/components/VaultConfig";
import { GitHubActions } from "@/components/GitHubActions";
import { TelegramStatus } from "@/components/TelegramStatus";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import { auth0 } from "@/lib/auth0";
import NavbarServer from "@/components/NavbarServer";
import PixelSnow from "@/components/PixelSnow";
import Link from "next/link";

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <>
      <NavbarServer />
      <main className="min-h-screen flex flex-col items-center bg-background selection:bg-primary/20 relative overflow-hidden">
        
        {/* Pixel Snow Background — frost particles */}
        <PixelSnow count={80} color="#88C0D0" speed={0.4} />

        {/* Radial gradients for Nord depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(136,192,208,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(143,188,187,0.04)_0%,transparent_60%)] pointer-events-none" />

        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto px-6 pt-32 pb-16 text-center relative z-10">
          {/* RetroUI Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-primary/10 text-primary text-[11px] font-bold mb-8 tracking-wider uppercase border-2 border-primary/30 shadow-[2px_2px_0px_rgba(136,192,208,0.2)]">
            <Sparkles className="w-3 h-3" />
            Agentic Automation Platform
          </span>

          <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-[-0.04em] text-foreground leading-[1] mb-7">
            Authorized to{" "}
            <span className="text-gradient">Act</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
            Secure Auth0 token vaults, automated GitHub ops,
            and real-time Telegram sync — all in one agent.
          </p>

          {/* CTA Buttons — RetroUI 3D style */}
          <div className="flex items-center justify-center gap-4">
            {session?.user ? (
              <Link
                href="/chat"
                className="btn-retro group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold overflow-hidden bg-primary text-primary-foreground border-2 border-[#5a97a5]"
                style={{
                  boxShadow: "4px 4px 0px #4a7f8b, inset 0 1px 0 rgba(255,255,255,0.15)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4" />
                  Open Agent Chat
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ) : (
              <>
                <a
                  href="/auth/login"
                  className="btn-retro group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold overflow-hidden bg-primary text-primary-foreground border-2 border-[#5a97a5]"
                  style={{
                    boxShadow: "4px 4px 0px #4a7f8b, inset 0 1px 0 rgba(255,255,255,0.15)"
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative z-10 flex items-center gap-2.5">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
                <Link
                  href="/chat"
                  className="btn-retro inline-flex items-center gap-2 px-7 py-4 rounded-lg text-foreground/80 text-sm font-semibold bg-card border-2 border-[#2E3440]"
                  style={{
                    boxShadow: "3px 3px 0px #1a1d23"
                  }}
                >
                  Learn More
                </Link>
              </>
            )}
          </div>
        </section>

        {/* Feature pills on landing (not logged in) */}
        {!session?.user && (
          <section className="w-full max-w-4xl mx-auto px-6 pb-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard icon={<Zap className="w-5 h-5" />} title="Agentic Workflows" description="Background task execution via Inngest with multi-turn tool calling." />
              <FeatureCard icon={<Globe className="w-5 h-5" />} title="GitHub Operations" description="Create repos, review PRs, edit files, and summarize commits autonomously." />
              <FeatureCard icon={<Sparkles className="w-5 h-5" />} title="Cross-Platform Sync" description="Seamless synchronization between Web and Telegram in real-time." />
            </div>
          </section>
        )}

        {/* Dashboard cards (logged in) */}
        {session?.user && (
          <section className="w-full max-w-5xl mx-auto px-6 pb-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <VaultConfig />
              <GitHubActions />
              <TelegramStatus />
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="w-full border-t border-border/50 py-6 mt-auto relative z-10">
          <p className="text-center text-[11px] text-muted-foreground/60 tracking-wide">
            Built with Auth0 · Inngest · Groq — AuthOps © {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg bg-card/80 border-2 border-border p-6 hover:border-primary/30 transition-all duration-200 group shadow-[3px_3px_0px_rgba(136,192,208,0.08)] hover:shadow-[1px_1px_0px_rgba(136,192,208,0.05)] hover:translate-y-[2px]">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform bg-primary/10 border-2 border-primary/20">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-foreground tracking-tight mb-1.5">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
