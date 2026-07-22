"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WaveField from "@/components/WaveField";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";
import { wordReveal, stagger } from "@/lib/motion";

export default function Hero() {
  const { ui } = useLanguage();
  const HEADLINE = ui.hero.headline;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Cinematic video backdrop + Three.js soundfield accent */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/*
          Base layer: drop a cinematic loop at /public/videos/hero.mp4 and it plays here.
          Until then, the poster image (a Void festival still) is shown — so the hero
          looks finished with or without the video.
        */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/manawa.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/50 to-ink-900" />
        {/* Soundfield accent on top of the footage */}
        <WaveField />
      </motion.div>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/70" />
      <div className="absolute inset-0 bg-ink-900/30" />

      <motion.div
        style={{ opacity }}
        className="container-editorial relative z-10 pb-28 pt-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-chalk-muted"
        >
          <span className="h-px w-10 bg-signal" />
          {ui.hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={stagger(0.09, 0.5)}
          initial="hidden"
          animate="visible"
          className="max-w-[15ch] font-display text-[clamp(3rem,11vw,11rem)] font-semibold leading-[0.9] tracking-tightest"
        >
          {HEADLINE.map((word, i) => (
            <span key={i} className="mr-[0.2em] inline-block overflow-hidden pb-[0.08em]">
              <motion.span
                variants={wordReveal}
                className={i === HEADLINE.length - 1 ? "signal-gradient inline-block" : "inline-block"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-muted"
        >
          {ui.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#work" variant="solid" cursor="View">
            {ui.hero.primary}
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline" cursor="Talk">
            {ui.hero.secondary}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-chalk-dim">{ui.hero.scroll}</span>
        <span className="relative flex h-12 w-6 justify-center overflow-hidden rounded-full border border-white/20">
          <motion.span
            className="mt-1 h-2 w-1 rounded-full bg-signal"
            animate={{ y: [0, 22, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
