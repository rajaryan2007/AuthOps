"use client";
import { Lock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function VaultConfig() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
    >
      <Card className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg shadow-[4px_4px_0px_rgba(136,192,208,0.08)] hover:shadow-[2px_2px_0px_rgba(136,192,208,0.05)] hover:translate-y-[2px] transition-all duration-200 group h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground tracking-tight">Auth0 Token Vault</h3>
                <p className="text-xs text-muted-foreground">Manage agent authorizations</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A3BE8C]/10 text-[#A3BE8C] rounded-md text-[11px] font-bold border-2 border-[#A3BE8C]/20">
              <CheckCircle2 className="w-3 h-3" />
              Connected
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-muted/50 border-2 border-border/60 rounded-lg p-3">
            <code className="text-xs text-primary/70 font-mono tracking-wider">
              vault_tok_******************
            </code>
          </div>
          <button className="btn-retro w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm border-2 border-[#5a97a5]" style={{ boxShadow: "3px 3px 0px #4a7f8b" }}>
            Rotate Auth0 Token
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
