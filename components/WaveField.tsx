"use client";

import { useEffect, useRef } from "react";

/**
 * vONE "Motor de Ondas" from the brand manual (§06): generative vertical
 * capsules that vibrate, blended across Pulse Magenta, Laser Cyan and Volt
 * Lime, with a neon glow on Black Void. Ported from the manual's waves.js.
 * Respects prefers-reduced-motion (single static frame) and pauses offscreen.
 */
const PALETTE = ["#ea00ff", "#00e2ff", "#a4ff00"];

function hexToRgb(h: string): [number, number, number] {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function colorAt(t: number) {
  const seg = t * (PALETTE.length - 1);
  const i = Math.min(PALETTE.length - 2, Math.floor(seg));
  const f = seg - i;
  const a = hexToRgb(PALETTE[i]);
  const b = hexToRgb(PALETTE[i + 1]);
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * f)},${Math.round(a[1] + (b[1] - a[1]) * f)},${Math.round(a[2] + (b[2] - a[2]) * f)})`;
}

export default function WaveField({
  density = 72,
  amp = 0.85,
  className = "absolute inset-0 h-full w-full",
}: {
  density?: number;
  amp?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 1, H = 1, raf = 0, time = 0, visible = true;
    let bars: { t: number; phase: number; freq: number; env: number; color: string }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = Math.max(1, r.width);
      H = Math.max(1, r.height);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // fewer bars on narrow screens so each one keeps its weight
      const n = W < 640 ? Math.round(density * 0.55) : density;
      bars = Array.from({ length: n }, (_, i) => {
        const t = i / (n - 1);
        return {
          t,
          phase: t * Math.PI * 2 * 1.5,
          freq: 0.6 + Math.sin(t * Math.PI) * 0.9,
          env: 0.18 + Math.pow(Math.sin(t * Math.PI), 1.2) * 0.82,
          color: colorAt(t),
        };
      });
    };

    const draw = () => {
      time += 0.018;
      ctx.clearRect(0, 0, W, H);
      const gap = W / bars.length;
      const barW = Math.max(2, gap * 0.42);
      const mid = H * 0.5;
      ctx.shadowBlur = 16;
      for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        const wob = Math.sin(time * bar.freq + bar.phase) + 0.4 * Math.sin(time * bar.freq * 2.3 + bar.phase * 1.7);
        const h = (0.12 + Math.abs(wob) * 0.5 * amp) * bar.env * H;
        const x = i * gap + (gap - barW) / 2;
        const y = mid - h / 2;
        const r = barW / 2;
        ctx.fillStyle = bar.color;
        ctx.shadowColor = bar.color;
        ctx.beginPath();
        ctx.moveTo(x, y + r);
        ctx.arc(x + r, y + r, r, Math.PI, 0);
        ctx.lineTo(x + barW, y + h - r);
        ctx.arc(x + r, y + h - r, r, 0, Math.PI);
        ctx.closePath();
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    draw();
    if (!reduce) raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        resize();
        draw();
      }, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [density, amp]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
