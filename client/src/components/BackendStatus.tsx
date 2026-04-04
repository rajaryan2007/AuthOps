"use client";
import { Server, Activity, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackendStatus() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function testConnection() {
      setStatus("loading");
      try {
        const res = await fetch("/api/proxy/api/profile");
        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setMessage(data.message || "Connected to Express!");
        } else {
          setStatus("error");
          setMessage(data.error || "Connection failed");
        }
      } catch (err) {
        setStatus("error");
        setMessage("Network error");
      }
    }

    testConnection();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass p-6 rounded-2xl flex flex-col gap-4 col-span-1 md:col-span-2 lg:col-span-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/20 rounded-xl">
            <Server className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Express Backend Connection
            </h3>
            <p className="text-sm text-gray-400">Live API Proxy Verification</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {status === "loading" && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/20">
              <Activity className="w-4 h-4 animate-spin" /> Pinging...
            </div>
          )}
          {status === "success" && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-full text-xs font-medium border border-green-500/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Secure Tunnel Active
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 text-red-400 rounded-full text-xs font-medium border border-red-500/20">
              <AlertCircle className="w-4 h-4" /> Disconnected
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 bg-black/40 border border-[var(--color-panel-border)] rounded-xl p-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl" />
        <p className="text-sm text-gray-300 font-mono ml-2">
          {status === "loading" ? "Establishing handshake..." : `> Backend Response: ${message}`}
        </p>
      </div>
    </motion.div>
  );
}
