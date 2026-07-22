"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import TextReveal from "@/components/ui/TextReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { SYSTEMS, SITE } from "@/lib/site";
import { pick } from "@/lib/i18n";
import { viewportOnce } from "@/lib/motion";

export default function Technology() {
  const { lang, ui } = useLanguage();

  return (
    <section id="systems" className="relative border-t border-white/5 py-section">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel>{ui.systems.label}</SectionLabel>
              <TextReveal
                key={ui.systems.heading}
                as="h2"
                text={ui.systems.heading}
                className="mt-8 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-editorial"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-6 max-w-md leading-relaxed text-chalk-muted"
              >
                {ui.systems.intro}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="mt-8 text-xs uppercase tracking-[0.24em] text-signal-soft"
              >
                {pick(SITE.partner, lang)}
              </motion.p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4">
              {SYSTEMS.map((system, i) => (
                <motion.article
                  key={system.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor="Void"
                  className="group relative overflow-hidden rounded-4xl border border-white/10 bg-ink-800/40 p-8 transition-colors duration-500 hover:bg-ink-800 md:p-10"
                >
                  <div className="absolute -inset-32 bg-[radial-gradient(circle,rgba(194,26,90,0.12),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-sm text-chalk-dim">0{i + 1}</span>
                      <h3 className="font-display text-3xl font-semibold tracking-tightest md:text-4xl">
                        {system.name}
                      </h3>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-signal-soft">
                      {pick(system.kind, lang)}
                    </span>
                  </div>
                  <p className="relative mt-5 max-w-2xl leading-relaxed text-chalk-dim">
                    {pick(system.body, lang)}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
