"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import TextReveal from "@/components/ui/TextReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { CASE_STUDIES, WORK_FILTERS } from "@/lib/site";
import { pick } from "@/lib/i18n";
import { viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Work() {
  const { lang, ui } = useLanguage();
  const [filter, setFilter] = useState<"all" | "festival" | "private">("all");

  const items = useMemo(
    () =>
      filter === "all"
        ? CASE_STUDIES
        : CASE_STUDIES.filter((c) => c.categoryKey === filter),
    [filter]
  );

  return (
    <section id="work" className="relative border-t border-white/5 py-section">
      <div className="container-editorial">
        <SectionLabel>{ui.work.label}</SectionLabel>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <TextReveal
            key={ui.work.heading}
            as="h2"
            text={ui.work.heading}
            className="max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-editorial"
          />

          <div className="flex flex-wrap gap-2">
            {WORK_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                data-cursor="Filter"
                className={cn(
                  "rounded-full border px-5 py-2 text-sm tracking-tight transition-all duration-400 ease-signal",
                  filter === f.key
                    ? "border-white bg-white text-ink-900"
                    : "border-white/15 text-chalk-muted hover:border-white/40"
                )}
              >
                {pick(f.label, lang)}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="Void"
                className={cn(
                  "group relative overflow-hidden rounded-4xl border border-white/10 bg-ink-800",
                  i % 3 === 0 ? "md:aspect-[16/11]" : "aspect-[16/12]"
                )}
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${item.id}.jpg`}
                    alt={`${item.title}, ${item.system}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] transition-transform duration-[1.2s] ease-signal group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-ink-900/30 transition-colors duration-700 group-hover:bg-ink-900/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                <div className="absolute -inset-40 bg-[radial-gradient(circle,rgba(255,46,136,0.14),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest text-chalk-muted">
                      {pick(item.category, lang)}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-signal-soft">
                      {item.system}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm text-chalk-dim">{item.client}</p>
                    <h3 className="mt-2 font-display text-4xl font-semibold tracking-tightest md:text-5xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
