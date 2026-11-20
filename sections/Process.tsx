"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import TextReveal from "@/components/ui/TextReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { PROCESS } from "@/lib/site";
import { pick } from "@/lib/i18n";
import { viewportOnce } from "@/lib/motion";

export default function Process() {
  const { lang, ui } = useLanguage();
  return (
    <section id="process" className="relative border-t border-white/5 py-section">
      <div className="container-editorial">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>{ui.process.label}</SectionLabel>
            <TextReveal
              key={ui.process.heading}
              as="h2"
              text={ui.process.heading}
              className="mt-8 font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.2] tracking-brand"
            />
          </div>
          <p className="max-w-sm text-chalk-dim">{ui.process.intro}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/10 md:grid-cols-5">
          {PROCESS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-cursor={pick(item.title, lang)}
              className="group relative flex min-h-[22rem] flex-col justify-between bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
            >
              <span className="font-display text-4xl tracking-brand text-white/10 transition-colors duration-500 group-hover:text-signal/60">
                {item.step}
              </span>
              <div>
                <h3 className="font-display text-base tracking-brand md:text-lg">{pick(item.title, lang)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-chalk-dim">{pick(item.body, lang)}</p>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-signal transition-transform duration-500 ease-signal group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
