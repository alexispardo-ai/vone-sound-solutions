"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage, LOCALES } from "./LanguageProvider";
import type { Locale } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

/** Compact language selector (ES / EN / FR / DE) as a small dropdown. */
export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen((v) => !v)}
        data-cursor="Lang"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-chalk-muted transition-colors duration-300 hover:border-white/40 hover:text-white"
      >
        {lang}
        <svg
          aria-hidden
          viewBox="0 0 10 6"
          width="9"
          height="6"
          className={cn("transition-transform duration-300", open && "rotate-180")}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass absolute right-0 top-full z-50 mt-2 min-w-[8.5rem] overflow-hidden rounded-2xl p-1"
          >
            {LOCALES.map((l) => (
              <li key={l}>
                <button
                  role="option"
                  aria-selected={lang === l}
                  onClick={() => {
                    setLang(l);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200",
                    lang === l ? "bg-white/10 text-white" : "text-chalk-muted hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span>{NAMES[l]}</span>
                  <span className="text-[10px] uppercase tracking-widest text-chalk-dim">{l}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
