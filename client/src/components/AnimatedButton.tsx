"use client";

import React from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
  };

export default function AnimatedButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: AnimatedButtonProps) {
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,128,98,0.25)] hover:shadow-[0_0_30px_rgba(0,128,98,0.4)] border border-primary/30",
    secondary:
      "bg-card text-foreground border border-border hover:border-primary/40 hover:bg-primary/5",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/5",
    outline:
      "bg-transparent text-primary border border-primary/30 hover:bg-primary/10 hover:border-primary/60",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs font-medium rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm font-medium rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base font-semibold rounded-xl gap-2.5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "relative inline-flex items-center justify-center cursor-pointer transition-all duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Subtle shine sweep on hover */}
      <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full hover-parent:translate-x-full transition-transform duration-700" />
      </span>
      <span className="relative z-10 flex items-center gap-inherit">{children}</span>
    </motion.button>
  );
}
