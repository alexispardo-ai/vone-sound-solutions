"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Small eyebrow label with an animated signal line — used to open each section. */
export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("flex items-center gap-4", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{ hidden: {}, visible: {} }}
    >
      <motion.span
        className="block h-px w-10 origin-left bg-signal"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="text-xs font-medium uppercase tracking-[0.28em] text-chalk-dim">
        {children}
      </span>
    </motion.div>
  );
}
