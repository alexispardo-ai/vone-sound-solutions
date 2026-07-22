"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { viewportOnce } from "@/lib/motion";

export default function About() {
  const { ui } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative py-section">
      <div className="container-editorial">
        <SectionLabel>{ui.about.label}</SectionLabel>

        <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TextReveal
              key={ui.about.heading}
              as="h2"
              text={ui.about.heading}
              className="font-display text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-editorial"
            />
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-chalk-muted">{ui.about.p1}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="leading-relaxed text-chalk-dim">{ui.about.p2}</p>
            </Reveal>
          </div>
        </div>

        {/* Large editorial image band with parallax */}
        <div
          ref={ref}
          className="relative mt-20 aspect-[16/8] w-full overflow-hidden rounded-4xl"
          data-cursor="Our craft"
        >
          <motion.div style={{ y: imgY }} className="absolute inset-[-8%] bg-ink-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about.jpg"
              alt="VONE — sistema Void en directo ante el público"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-end justify-between p-8 md:p-12"
          >
            <span className="max-w-xs text-sm leading-relaxed text-chalk-muted">
              {ui.about.bandNote}
            </span>
            <span className="font-display text-5xl font-semibold tracking-tightest text-white/10 md:text-7xl">
              {ui.about.bandBig}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
