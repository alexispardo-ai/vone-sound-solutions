"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";
import { wordReveal, stagger, viewportOnce } from "@/lib/motion";

export default function CTA() {
  const { ui } = useLanguage();
  const LINE = ui.cta.words;

  return (
    <section id="contact" className="relative overflow-hidden py-section">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,26,90,0.16),transparent_60%)] blur-2xl" />

      <div className="container-editorial relative text-center">
        <motion.h2
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-5xl flex-wrap justify-center font-display text-[clamp(2.5rem,9vw,8rem)] font-semibold leading-[0.95] tracking-tightest"
        >
          {LINE.map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em]">
              <motion.span
                variants={wordReveal}
                className={i === LINE.length - 1 ? "signal-gradient inline-block" : "inline-block"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-lg text-chalk-muted"
        >
          {ui.cta.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href={`mailto:${SITE.email}`} variant="solid" cursor="Email">
            {ui.cta.primary}
          </MagneticButton>
          <MagneticButton href={SITE.whatsapp} variant="outline" cursor="Chat">
            {ui.cta.secondary}
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-2 text-sm text-chalk-dim"
        >
          <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
            {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="transition-colors hover:text-white">
            {SITE.phone}
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {SITE.address}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
