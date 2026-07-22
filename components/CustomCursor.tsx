"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A minimal, premium cursor: a small dot with a lagging ring.
 * Grows and labels itself over interactive elements.
 */
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const el = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      setLabel(el?.dataset.cursor ?? "");
      ring.current?.classList.toggle("is-active", !!el);
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={dot}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={ring}
        className="cursor-ring absolute left-0 top-0 flex h-10 w-10 -ml-5 -mt-5 items-center justify-center rounded-full border border-white/40 mix-blend-difference transition-[width,height,opacity] duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {label && (
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white">
            {label}
          </span>
        )}
      </div>
      <style jsx>{`
        .cursor-ring.is-active {
          width: 5.5rem;
          height: 5.5rem;
          margin-left: -2.75rem;
          margin-top: -2.75rem;
          background: rgba(255, 255, 255, 0.06);
          border-color: transparent;
        }
      `}</style>
    </div>
  );
}
