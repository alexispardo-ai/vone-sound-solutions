"use client";

import { cn } from "@/lib/utils";

/**
 * Infinite, seamless marquee. Duplicates its children once and translates
 * -50% via CSS keyframes so the loop is perfectly continuous.
 */
export default function Marquee({
  items,
  className,
  itemClassName,
  reverse = false,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
}) {
  const row = (
    <ul className="flex shrink-0 items-center gap-16 px-8" aria-hidden>
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            "whitespace-nowrap font-display text-2xl font-medium tracking-tight text-chalk-dim transition-colors duration-300 hover:text-white sm:text-3xl",
            itemClassName
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn("group relative flex overflow-hidden", className)}
      role="marquee"
    >
      <div
        className="flex animate-scroll-x group-hover:[animation-play-state:paused]"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {row}
        {row}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent" />
    </div>
  );
}
