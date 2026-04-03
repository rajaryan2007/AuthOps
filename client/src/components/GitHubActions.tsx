"use client";
import { GitPullRequest, GitMerge, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function GitHubActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass p-6 rounded-2xl flex flex-col gap-4"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 bg-white/10 rounded-xl">
          <GithubIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            GitHub Operations
          </h3>
          <p className="text-sm text-gray-400">Agentic PR and Merge controls</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Repository (e.g., owner/repo)"
          className="w-full bg-black/40 border border-[var(--color-panel-border)] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 transition-colors"
          defaultValue="AuthOps/agent-core"
        />

        <div className="grid grid-cols-2 gap-3 mt-2">
          <button className="flex cursor-pointer items-center justify-center gap-2 py-3 bg-[var(--color-panel)] hover:bg-white/10 border border-[var(--color-panel-border)] rounded-xl text-sm font-medium text-white transition-all">
            <GitPullRequest className="w-4 h-4" />
            Create PR
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-2 py-3 bg-brand/20 hover:bg-brand/30 border border-brand/30 rounded-xl text-sm font-medium text-brand transition-all shadow-[0_0_10px_rgba(139,92,246,0.1)]">
            <GitMerge className="w-4 h-4" />
            Auto-Merge
          </button>
        </div>
      </div>

      <div className="mt-2 pt-4 border-t border-[var(--color-panel-border)]">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>Recent Activity</span>
          <Settings2 className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        </div>
        <div className="flex items-center gap-2 p-3 bg-black/40 rounded-lg border border-[var(--color-panel-border)]">
          <div className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          <span className="text-sm text-gray-300">
            Agent spawned feature/auth0-vault PR #42
          </span>
        </div>
      </div>
    </motion.div>
  );
}
