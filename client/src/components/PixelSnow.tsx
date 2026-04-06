"use client";

import { useEffect, useRef } from "react";

interface PixelSnowProps {
  count?: number;
  color?: string;
  speed?: number;
}

export default function PixelSnow({ count = 60, color = "#008062", speed = 0.4 }: PixelSnowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; size: number; speedY: number; speedX: number; opacity: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: Math.random() * 3 + 1.5,
          speedY: (Math.random() * 0.6 + 0.15) * speed,
          speedX: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const p of particles) {
        ctx!.fillStyle = color;
        ctx!.globalAlpha = p.opacity;

        // Pixel-style squares
        const s = Math.floor(p.size);
        ctx!.fillRect(Math.floor(p.x), Math.floor(p.y), s, s);

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > canvas!.height) {
          p.y = -5;
          p.x = Math.random() * canvas!.width;
        }
        if (p.x > canvas!.width) p.x = 0;
        if (p.x < 0) p.x = canvas!.width;
      }

      ctx!.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [count, color, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.8 }}
    />
  );
}
