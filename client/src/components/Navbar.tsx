"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, MessageSquare, LayoutDashboard, Send, ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  isLoggedIn?: boolean;
  userName?: string;
  userPicture?: string;
  secretId?: string;
}

export default function Navbar({ isLoggedIn, userName, userPicture, secretId }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl"
    >
      <div
        className={`
          flex items-center justify-between px-2 py-1.5 rounded-xl
          transition-all duration-500 ease-out border-2
          ${scrolled
            ? "bg-[rgba(22,25,31,0.92)] border-[rgba(59,66,82,0.5)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "bg-[rgba(22,25,31,0.75)] border-[rgba(59,66,82,0.3)] shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-lg"
          }
        `}
      >
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-0.5">
          <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-primary/15 border border-primary/25">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">AuthOps</span>
          </Link>

          <div className="w-px h-5 bg-border/40 mx-1" />

          <NavLink href="/" icon={<LayoutDashboard className="w-3.5 h-3.5" />} label="Dashboard" />
          <NavLink href="/chat" icon={<MessageSquare className="w-3.5 h-3.5" />} label="Chat" />
        </div>

        {/* Right: CTA or User */}
        <div className="flex items-center gap-1.5">
          {isLoggedIn ? (
            <>
              {/* RetroUI 3D Agent button */}
              <Link
                href="/chat"
                className="btn-retro hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs bg-primary text-primary-foreground border-2 border-[#5a97a5] overflow-hidden relative group"
                style={{ boxShadow: "2px 2px 0px #4a7f8b" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Send className="w-3 h-3 relative z-10" />
                <span className="relative z-10">Agent</span>
              </Link>

              {/* User dropdown */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
                >
                  {userPicture ? (
                    <Image src={userPicture} alt="" width={24} height={24} className="rounded-full border border-border" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold border border-primary/30">
                      {userName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                  <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-[rgba(22,25,31,0.97)] backdrop-blur-xl border-2 border-border shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-border/60">
                      <p className="text-sm font-medium text-foreground">{userName || "User"}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">Authenticated via Auth0</p>
                    </div>
                    {secretId && (
                      <div className="px-4 py-2.5 border-b border-border/60">
                        <p className="text-[10px] uppercase text-primary font-bold tracking-wider mb-1">Telegram Link</p>
                        <code className="text-[11px] font-mono text-muted-foreground select-all cursor-copy block">
                          /start {secretId}
                        </code>
                      </div>
                    )}
                    <a
                      href="/auth/logout"
                      className="flex items-center gap-2 px-4 py-2.5 text-xs text-[#BF616A] hover:bg-[#BF616A]/10 transition-colors w-full"
                    >
                      Logout
                    </a>
                  </motion.div>
                )}
              </div>
            </>
          ) : (
            <a
              href="/auth/login"
              className="btn-retro flex items-center gap-2 px-5 py-2 rounded-lg text-xs bg-primary text-primary-foreground border-2 border-[#5a97a5] relative group overflow-hidden"
              style={{ boxShadow: "2px 2px 0px #4a7f8b" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Sign In</span>
            </a>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all"
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </Link>
  );
}
