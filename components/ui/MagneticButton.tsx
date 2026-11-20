"use client";

import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost" | "glass";
  className?: string;
  onClick?: () => void;
  cursor?: string;
};

/**
 * A magnetic, cursor-aware button used across the site.
 * Renders as a link when `href` is provided, otherwise a button.
 */
export default function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
  onClick,
  cursor,
}: Props) {
  const magnetic = useMagnetic<HTMLSpanElement>(0.4);

  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 font-display text-[0.7rem] uppercase tracking-[0.08em] transition-[color,background-color,box-shadow,border-color] duration-500 ease-signal will-change-transform";

  const variants = {
    solid: "bg-signal text-white shadow-[0_0_0_rgba(234,0,255,0)] hover:shadow-[0_0_24px_rgba(234,0,255,0.55),0_0_4px_rgba(234,0,255,0.8)]",
    outline: "border border-white/20 text-white hover:border-white/60",
    ghost: "text-white/80 hover:text-white",
    glass: "liquid-glass",
  } as const;

  // Glass variant: feed the pointer position to the CSS specular highlight.
  const onPointerMove =
    variant === "glass"
      ? (e: React.PointerEvent<HTMLElement>) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
      : undefined;

  const inner = (
    <span
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      className="inline-flex items-center gap-3 transition-transform duration-500 ease-signal"
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="relative z-10 inline-block h-1.5 w-1.5 rounded-full bg-current transition-transform duration-500 ease-signal group-hover:translate-x-1"
      />
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        data-cursor={cursor}
        onClick={onClick}
        onPointerMove={onPointerMove}
        className={cn(base, variants[variant], className)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor={cursor}
      onPointerMove={onPointerMove}
      className={cn(base, variants[variant], className)}
    >
      {inner}
    </button>
  );
}
