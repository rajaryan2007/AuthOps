"use client";
import { GitPullRequest, GitMerge, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function GitHubActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <Card className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg shadow-[4px_4px_0px_rgba(216,222,233,0.04)] hover:shadow-[2px_2px_0px_rgba(216,222,233,0.02)] hover:translate-y-[2px] transition-all duration-200 group h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-foreground/5 border-2 border-foreground/10 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <GithubIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground tracking-tight">GitHub Operations</h3>
              <p className="text-xs text-muted-foreground">Agentic PR and Merge controls</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <input
            type="text"
            placeholder="owner/repo"
            className="w-full bg-muted/50 border-2 border-border/60 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all font-mono text-xs"
            defaultValue="AuthOps/agent-core"
          />
          <div className="grid grid-cols-2 gap-2">
            <button className="btn-retro flex items-center justify-center gap-2 py-2.5 bg-card border-2 border-border rounded-lg text-xs text-foreground" style={{ boxShadow: "2px 2px 0px #1a1d23" }}>
              <GitPullRequest className="w-3.5 h-3.5" />
              Create PR
            </button>
            <button className="btn-retro flex items-center justify-center gap-2 py-2.5 bg-primary/15 border-2 border-primary/30 rounded-lg text-xs text-primary" style={{ boxShadow: "2px 2px 0px #4a7f8b" }}>
              <GitMerge className="w-3.5 h-3.5" />
              Auto-Merge
            </button>
          </div>
          <div className="pt-3 border-t-2 border-border/40">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
              <span className="font-bold uppercase tracking-wider">Recent Activity</span>
              <Settings2 className="w-3.5 h-3.5 cursor-pointer hover:text-foreground transition-colors" />
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 bg-muted/50 rounded-lg border-2 border-border/40">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A3BE8C] animate-pulse shadow-[0_0_6px_rgba(163,190,140,0.8)]" />
              <span className="text-xs text-muted-foreground">
                Agent spawned feature/auth0-vault PR #42
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
