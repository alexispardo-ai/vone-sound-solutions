"use client";

import { motion } from "framer-motion";
import { wordReveal, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
  delay?: number;
};

/**
 * Word-by-word masked headline reveal.
 * Each word rides up from behind a clip mask on scroll-in.
 */
export default function TextReveal({
  text,
  className,
  as = "h2",
  stagger: staggerAmt = 0.06,
  delay = 0,
}: Props) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      variants={stagger(staggerAmt, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden className="mr-[0.25em] inline-block overflow-hidden py-[0.05em]">
          <motion.span variants={wordReveal} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
