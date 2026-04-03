"use client";
import { Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function VaultConfig() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass p-6 rounded-2xl flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-brand/20 rounded-xl">
            <Lock className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Auth0 Token Vault
            </h3>
            <p className="text-sm text-gray-400">Manage agent authorizations</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-full text-xs font-medium border border-green-500/20">
          <CheckCircle2 className="w-4 h-4" /> Connected
        </div>
      </div>

      <div className="mt-4 bg-black/40 border border-[var(--color-panel-border)] rounded-xl p-4">
        <code className="text-xs text-brand tracking-wider">
          vault_tok_******************
        </code>
      </div>

      <button className="w-full py-3 mt-2 bg-brand hover:bg-[var(--color-brand-hover)] text-white rounded-xl font-medium transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer">
        Rotate Auth0 Token
      </button>
    </motion.div>
  );
}
