import type { Variants } from "framer-motion";

/** Shared premium easing curve, expo-out feel. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: EASE } },
};

/** Container that staggers its children on reveal. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Per-word reveal for headline text. */
export const wordReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;
