"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Magnetic hover: an element gently follows the cursor within its bounds.
 * Returns a ref + handlers to spread onto the target element.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
