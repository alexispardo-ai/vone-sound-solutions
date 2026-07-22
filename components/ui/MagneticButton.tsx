"use client";

import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
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
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-tight transition-colors duration-500 ease-signal will-change-transform";

  const variants = {
    solid: "bg-white text-ink-900 hover:bg-signal hover:text-white",
    outline: "border border-white/20 text-white hover:border-white/60",
    ghost: "text-white/80 hover:text-white",
  } as const;

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
      className={cn(base, variants[variant], className)}
    >
      {inner}
    </button>
  );
}
