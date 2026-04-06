"use client";
import { Cloud, Play, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function VercelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L22 22H2L12 2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function VercelStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
    >
      <Card className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg shadow-[4px_4px_0px_rgba(255,255,255,0.05)] hover:shadow-[2px_2px_0px_rgba(255,255,255,0.02)] hover:translate-y-[2px] transition-all duration-200 group h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-foreground/5 border-2 border-border flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <VercelIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground tracking-tight">Vercel Deployments</h3>
              <p className="text-xs text-muted-foreground">Manage automatic deployments</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-muted/50 border-2 border-border/60 rounded-lg p-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Project ID</span>
              <span className="text-[11px] px-2 py-0.5 bg-muted rounded-md text-foreground font-mono border border-border/60">
                prj_authops123
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Last Deploy</span>
              <span className="text-xs text-[#A3BE8C] font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#A3BE8C] animate-pulse" />
                Ready (2m ago)
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <button className="btn-retro flex items-center justify-center gap-2 py-2.5 bg-card border-2 border-border rounded-lg text-xs text-foreground" style={{ boxShadow: "2px 2px 0px #1a1d23" }}>
              <Settings className="w-3.5 h-3.5" />
              Manage API Token
            </button>
            <button className="btn-retro flex items-center justify-center gap-2 py-2.5 bg-foreground text-background border-2 border-foreground rounded-lg text-xs font-semibold" style={{ boxShadow: "3px 3px 0px rgba(255,255,255,0.2)" }}>
              <Play className="w-3.5 h-3.5 fill-current" />
              Force Redeploy
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
