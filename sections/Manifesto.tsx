"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/components/LanguageProvider";
import { MANIFESTO } from "@/lib/site";
import { pick } from "@/lib/i18n";
import { viewportOnce, wordReveal, stagger } from "@/lib/motion";

/**
 * Brand manifesto — VONE's own real marketing lines, set as oversized
 * statements. Honest by construction (their words), and more distinctive
 * than invented testimonials for an emerging company.
 */
export default function Manifesto() {
  const { lang, ui } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-white/5 py-section">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,26,90,0.1),transparent_65%)] blur-2xl" />

      <div className="container-editorial relative">
        <SectionLabel>{ui.manifesto.label}</SectionLabel>

        <div className="mt-14 flex flex-col gap-10 md:gap-14">
          {MANIFESTO.map((line, i) => (
            <motion.p
              key={i}
              variants={stagger(0.04)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex max-w-5xl flex-wrap font-display text-[clamp(1.75rem,5vw,4rem)] font-semibold leading-[1.05] tracking-editorial"
            >
              {pick(line, lang)
                .split(" ")
                .map((word, w) => (
                  <span key={w} className="mr-[0.25em] inline-block overflow-hidden pb-[0.06em]">
                    <motion.span
                      variants={wordReveal}
                      className={i === MANIFESTO.length - 1 ? "inline-block text-chalk-dim" : "inline-block"}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
