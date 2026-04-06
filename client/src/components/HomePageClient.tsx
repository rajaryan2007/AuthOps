"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { VaultConfig } from "@/components/VaultConfig";
import { GitHubActions } from "@/components/GitHubActions";
import { TelegramStatus } from "@/components/TelegramStatus";
import { VercelStatus } from "@/components/VercelStatus";
import { GlowCard } from "@/components/GlowCard";
import PixelSnow from "@/components/PixelSnow";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  MessageSquare,
  Clock,
  Users,
  Terminal,
  LayoutGrid,
  Send,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

// Avatar placeholders for bento grid
const AVATAR_1 =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";
const AVATAR_2 =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop";

// --- HERO (Parallax + Scroll Fade) ---
function HeroSection({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 text-center">
      {/* Parallax glow orbs */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(136,192,208,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(143,188,187,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(163,190,140,0.04)_0%,transparent_60%)] pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex max-w-4xl flex-col items-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 rounded-full border-2 border-primary/25 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-semibold tracking-wide text-xs uppercase">
            Agentic Platform v2.0
          </span>
          <ArrowRight size={14} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-6xl font-bold tracking-tighter text-foreground md:text-8xl lg:text-[7rem] leading-none"
        >
          Authorized to <br />
          <span className="text-gradient">Act</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Secure Auth0 token vaults, automated GitHub ops, and real-time
          Telegram sync — all in one agentic platform.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex gap-4"
        >
          {isLoggedIn ? (
            <Link
              href="/chat"
              className="btn-retro flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground border-2 border-[#5a97a5]"
              style={{ boxShadow: "4px 4px 0px #4a7f8b" }}
            >
              <Sparkles size={20} />
              Open Agent Chat
              <ArrowRight size={20} />
            </Link>
          ) : (
            <>
              <a
                href="/auth/login"
                className="btn-retro flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground border-2 border-[#5a97a5]"
                style={{ boxShadow: "4px 4px 0px #4a7f8b" }}
              >
                Get Started
                <ArrowRight size={20} />
              </a>
              <a
                href="https://github.com"
                className="btn-retro flex items-center gap-2 rounded-xl border-2 border-border bg-card px-8 py-4 text-lg font-medium text-foreground"
                style={{ boxShadow: "4px 4px 0px #1a1d23" }}
              >
                <GithubIcon className="w-5 h-5" />
                Star us
              </a>
            </>
          )}
        </motion.div>
      </div>

      {/* Floating App Screenshot Mockup */}
      <motion.div
        initial={{ y: 100, opacity: 0, rotateX: 20 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ perspective: "1000px" }}
        className="mt-20 w-full max-w-5xl"
      >
        <div className="overflow-hidden rounded-t-3xl border-x-2 border-t-2 border-border bg-card/40 p-2 md:p-4 shadow-[0_-20px_80px_rgba(136,192,208,0.15)] backdrop-blur-sm">
          <div className="relative rounded-2xl border-2 border-border overflow-hidden bg-background shadow-2xl h-[300px] md:h-[600px]">
            {/* Actual AuthOps app screenshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/authops.png"
              alt="AuthOps Application"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// --- BENTO FEATURES (Logged out) ---
function BentoFeatures() {
  return (
    <section className="relative z-10 pb-32 pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            One Agent.{" "}
            <span className="text-muted-foreground">Every Platform.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Manage your infrastructure with agentic automation across GitHub,
            Auth0, and Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[280px]">
          {/* Large Card — Team Planner */}
          <GlowCard className="md:col-span-2 lg:col-span-2 lg:row-span-2 p-8 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-lg bg-primary/15 p-3 text-primary border-2 border-primary/20">
                <LayoutGrid size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Agentic Dashboard
              </h3>
              <p className="mt-2 text-muted-foreground">
                Centralized view of all operations — token vaults, GitHub
                actions, and alert channels in one command center.
              </p>
            </div>
            <div className="relative mt-8 h-64 overflow-hidden rounded-xl border-2 border-border bg-muted/30">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              />

              {/* Simulated dashboard content */}
              <div className="absolute bottom-0 left-0 w-full p-4 space-y-3 z-10">
                <div className="flex gap-3">
                  <div className="h-16 w-1/2 rounded-lg bg-primary/10 border-2 border-primary/20 p-3 backdrop-blur-md">
                    <div className="h-2 w-12 rounded bg-primary mb-2" />
                    <div className="h-2 w-8 rounded bg-primary/50" />
                  </div>
                  <div className="h-16 w-1/2 rounded-lg bg-muted/80 border-2 border-border p-3 backdrop-blur-md">
                    <div className="h-2 w-10 rounded bg-muted-foreground/60 mb-2" />
                    <div className="h-2 w-14 rounded bg-muted-foreground/30" />
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-4 left-4 z-20 flex items-center gap-3 rounded-lg border-2 border-border bg-card/80 p-3 backdrop-blur-md"
              >
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs">
                  <div className="text-foreground font-bold">
                    Token Rotated
                  </div>
                  <div className="text-primary">2 min ago</div>
                </div>
              </motion.div>
            </div>
          </GlowCard>

          {/* Small Card — Chat */}
          <GlowCard className="p-6 md:col-span-1 lg:col-span-1">
            <MessageSquare className="mb-4 text-[#B48EAD]" size={32} />
            <h3 className="text-xl font-bold text-foreground">AI Chat</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Multi-threaded agent conversations.
            </p>
            <div className="mt-5 space-y-2.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-muted/40 p-2"
                >
                  <div className="h-5 w-5 rounded-full bg-border" />
                  <div
                    className="h-2 rounded bg-border"
                    style={{ width: `${40 + i * 12}px` }}
                  />
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Small Card — Time Tracking / Inngest */}
          <GlowCard className="p-6 md:col-span-1 lg:col-span-1">
            <Clock className="mb-4 text-[#D08770]" size={32} />
            <h3 className="text-xl font-bold text-foreground">
              Inngest Flows
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Background task orchestration.
            </p>
            <div className="mt-5 flex items-center justify-center">
              <div className="relative h-24 w-24 rounded-full border-4 border-border">
                <div className="absolute inset-0 rounded-full border-4 border-[#D08770] border-t-transparent rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-foreground font-mono">
                  3/5
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Wide Card — Virtual Office / Telegram */}
          <GlowCard className="md:col-span-3 lg:col-span-2 p-8 flex items-center gap-8 overflow-hidden">
            <div className="flex-1 z-10">
              <Users className="mb-4 text-[#A3BE8C]" size={32} />
              <h3 className="text-2xl font-bold text-foreground">
                Telegram Sync
              </h3>
              <p className="mt-2 text-muted-foreground">
                Real-time alerts, cross-platform chat threads, and agent
                notifications — all synced between web and Telegram.
              </p>
            </div>
            <div className="hidden md:block w-48 relative">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#A3BE8C]/15 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-2">
                {[AVATAR_1, AVATAR_2, AVATAR_1, AVATAR_2].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-12 w-12 rounded-full border-2 border-card"
                  />
                ))}
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

// --- DASHBOARD BENTO (Logged in) ---
function DashboardBento({ userId }: { userId?: string }) {
  return (
    <section className="relative z-10 pb-32 pt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Command Center
          </h2>
          <p className="mt-3 text-muted-foreground">
            Your agentic operations at a glance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          <VaultConfig />
          <GitHubActions />
          <TelegramStatus userId={userId} />
          <VercelStatus />
        </div>
      </div>
    </section>
  );
}

// --- PRODUCTIVITY SECTION ---
function ProductivitySection() {
  return (
    <section className="py-24 px-6 border-t-2 border-border/40">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
            Built for <br />
            <span className="text-muted-foreground">speed.</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Keyboard shortcuts for everything. Instant AI responses. Background
            workflows via Inngest. AuthOps keeps you in flow state.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Cmd+K Search",
              "Multi-Thread Chat",
              "Auto Token Rotate",
              "PR Auto-Merge",
            ].map((shortcut) => (
              <div
                key={shortcut}
                className="rounded-lg border-2 border-border bg-muted/30 px-4 py-2 text-sm font-mono text-muted-foreground"
              >
                {shortcut}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
          <GlowCard className="aspect-square bg-gradient-to-br from-card to-background p-6 md:p-8 flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl bg-muted/50 backdrop-blur-sm border-2 border-border shadow-2xl p-4 md:p-6 flex flex-col items-center justify-center overflow-hidden">

              {/* Subtle Dot Grid Background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at center, #88C0D0 1px, transparent 1px)`,
                  backgroundSize: "24px 24px"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/80 pointer-events-none" />

              <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-4">

                {/* 1. GitHub Node */}
                <div className="flex w-full items-center justify-between rounded-xl border-2 border-border bg-card/90 p-3 md:p-4 shadow-xl backdrop-blur-md transform transition-transform hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/10 border border-border">
                      <GithubIcon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">GitHub</div>
                      <div className="text-xs text-muted-foreground">PR #42 Merged</div>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[#A3BE8C] shadow-[0_0_8px_#A3BE8C] animate-pulse" />
                </div>

                {/* Vertical Connection Line 1 */}
                <div className="relative h-8 w-0.5 bg-border/50">
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#A3BE8C] to-primary overflow-hidden h-full">
                    <div className="w-full h-1/2 bg-white/50 animate-[translate_1.5s_linear_infinite]" style={{ animationName: "pulse-down" }} />
                  </div>
                </div>

                {/* 2. AuthOps Agent Node */}
                <div className="flex w-full items-center justify-between rounded-xl border-2 border-primary/40 bg-primary/10 p-3 md:p-4 shadow-[0_10px_30px_rgba(136,192,208,0.15)] backdrop-blur-md transform transition-transform hover:scale-105 relative">
                  <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-xl -z-10" />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary border-2 border-[#5a97a5] shadow-inner">
                      <Terminal className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">AuthOps Agent</div>
                      <div className="text-xs text-primary/80">Executing workflow...</div>
                    </div>
                  </div>
                </div>

                {/* Vertical Connection Line 2 */}
                <div className="relative h-8 w-0.5 bg-border/50">
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-[#5E81AC] overflow-hidden h-full">
                    <div className="w-full h-1/2 bg-white/50 animate-[translate_1.5s_linear_infinite]" style={{ animationName: "pulse-down" }} />
                  </div>
                </div>

                {/* 3. Telegram Node */}
                <div className="flex w-full items-center justify-between rounded-xl border-2 border-border bg-card/90 p-3 md:p-4 shadow-xl backdrop-blur-md transform transition-transform hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5E81AC]/20 border border-[#5E81AC]/30">
                      <Send className="h-5 w-5 text-[#5E81AC] -ml-1" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">Telegram</div>
                      <div className="text-xs text-muted-foreground">Alert sent to team</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#5E81AC] border-2 border-card shadow-sm">
                    <span className="text-[9px] font-bold text-white">1</span>
                  </div>
                </div>
              </div>

              {/* Inline keyframes for pulse-down animation */}
              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pulse-down {
                  0% { transform: translateY(-100%); opacity: 0; }
                  50% { opacity: 1; }
                  100% { transform: translateY(200%); opacity: 0; }
                }
              `}} />
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

// --- FOOTER ---
function SiteFooter() {
  return (
    <footer className="border-t-2 border-border/40 pb-12 pt-24 text-muted-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-foreground">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AuthOps</span>
            </div>
            <p className="mt-4 max-w-xs text-sm">
              Agentic automation platform. Secure Auth0 vaults, GitHub
              operations, and Telegram sync — all in one agent.
            </p>
          </div>

          {[
            {
              title: "Platform",
              links: ["Dashboard", "AI Chat", "Workflows", "Integrations"],
            },
            {
              title: "Resources",
              links: [
                "Documentation",
                "Changelog",
                "Community",
                "API Reference",
              ],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-bold text-foreground">{col.title}</h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t-2 border-border/40 pt-8 text-xs md:flex-row">
          <span>© {new Date().getFullYear()} AuthOps. Apache 2.0 Open Source.</span>
          <div className="flex gap-6 items-center">
            <GithubIcon className="w-4 h-4 text-foreground" />
            <span>Twitter</span>
            <span>Discord</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- MAIN PAGE WRAPPER ---
export default function HomePageClient({
  isLoggedIn,
  userId,
}: {
  isLoggedIn: boolean;
  userId?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <PixelSnow count={80} color="#88C0D0" speed={0.4} />
      <main>
        <HeroSection isLoggedIn={isLoggedIn} />
        {isLoggedIn ? <DashboardBento userId={userId} /> : <BentoFeatures />}
        <ProductivitySection />
      </main>
      <SiteFooter />
    </div>
  );
}
