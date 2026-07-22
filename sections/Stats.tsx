"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { useLanguage } from "@/components/LanguageProvider";
import { STATS } from "@/lib/site";
import { pick } from "@/lib/i18n";
import { viewportOnce } from "@/lib/motion";

function Stat({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { ref, value: current } = useCounter(value, 2200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col gap-3 border-t border-white/10 pt-6"
    >
      <span
        ref={ref}
        className="font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-none tracking-tightest"
      >
        {current.toLocaleString()}
        <span className="text-signal">{suffix}</span>
      </span>
      <span className="text-sm uppercase tracking-[0.2em] text-chalk-dim">{label}</span>
    </motion.div>
  );
}

export default function Stats() {
  const { lang } = useLanguage();
  return (
    <section className="relative overflow-hidden py-section">
      {/* faint soundwave bars in background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-1 opacity-[0.04]">
        {Array.from({ length: 64 }).map((_, i) => (
          <span
            key={i}
            className="h-40 w-1 origin-bottom bg-white"
            style={{
              animation: `pulse-line ${1.2 + (i % 7) * 0.2}s ${i * 0.03}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-editorial relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => (
            <Stat
              key={i}
              index={i}
              value={stat.value}
              suffix={stat.suffix}
              label={pick(stat.label, lang)}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-line {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
