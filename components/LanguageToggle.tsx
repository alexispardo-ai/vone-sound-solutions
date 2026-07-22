"use client";

import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

/** ES / EN pill toggle. */
export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          data-cursor={l.toUpperCase()}
          className={cn(
            "rounded-full px-3 py-1 uppercase tracking-widest transition-colors duration-300",
            lang === l ? "bg-white text-ink-900" : "text-chalk-dim hover:text-white"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
