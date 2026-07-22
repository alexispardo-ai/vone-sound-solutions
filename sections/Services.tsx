"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import TextReveal from "@/components/ui/TextReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { SERVICES } from "@/lib/site";
import { pick } from "@/lib/i18n";
import { viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Services as an interactive editorial list. Hovering a row lifts it, reveals
 * its summary + tags, and slides a signal-coloured index marker into view —
 * a "list that behaves like cards" pattern that feels premium and stays fast.
 */
export default function Services() {
  const { lang, ui } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative border-t border-white/5 py-section">
      <div className="container-editorial">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>{ui.services.label}</SectionLabel>
            <TextReveal
              key={ui.services.heading}
              as="h2"
              text={ui.services.heading}
              className="mt-8 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-editorial"
            />
          </div>
          <p className="max-w-sm text-chalk-dim">{ui.services.intro}</p>
        </div>

        <div className="mt-16 border-t border-white/10">
          {SERVICES.map((service, i) => {
            const isActive = active === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActive(service.id)}
                onMouseLeave={() => setActive(null)}
                data-cursor="Explore"
                className={cn(
                  "group relative grid grid-cols-12 items-center gap-4 border-b border-white/10 px-2 py-7 transition-colors duration-500 md:py-9",
                  isActive && "bg-white/[0.02]"
                )}
              >
                {/* signal fill sweep */}
                <span
                  className={cn(
                    "absolute left-0 top-0 h-full w-full origin-left scale-x-0 bg-gradient-to-r from-signal/[0.08] to-transparent transition-transform duration-700 ease-signal",
                    isActive && "scale-x-100"
                  )}
                  aria-hidden
                />
                <span className="relative z-10 col-span-2 font-mono text-sm text-chalk-dim md:col-span-1">
                  {service.index}
                </span>

                <div className="relative z-10 col-span-10 flex flex-col gap-3 md:col-span-11 md:flex-row md:items-center md:justify-between">
                  <h3
                    className={cn(
                      "font-display text-3xl font-semibold tracking-tightest transition-transform duration-500 ease-signal md:text-5xl",
                      isActive ? "translate-x-2 text-white md:translate-x-4" : "text-chalk-muted"
                    )}
                  >
                    {pick(service.title, lang)}
                  </h3>

                  <div className="flex flex-col items-start gap-4 md:max-w-md md:items-end">
                    <motion.p
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        height: isActive ? "auto" : 0,
                      }}
                      className="overflow-hidden text-sm leading-relaxed text-chalk-dim md:text-right"
                    >
                      {pick(service.summary, lang)}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {pick(service.tags, lang).map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "rounded-full border px-3 py-1 text-[11px] uppercase tracking-widest transition-colors duration-500",
                            isActive
                              ? "border-signal/40 text-signal-soft"
                              : "border-white/10 text-chalk-dim"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
