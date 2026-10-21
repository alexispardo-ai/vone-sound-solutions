"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import type { CaseStudy, L } from "@/lib/site";
import { pick } from "@/lib/i18n";

const T: Record<"close" | "prev" | "next" | "photo", L> = {
  close: { es: "Cerrar", en: "Close", fr: "Fermer", de: "Schließen" },
  prev: { es: "Anterior", en: "Previous", fr: "Précédente", de: "Zurück" },
  next: { es: "Siguiente", en: "Next", fr: "Suivante", de: "Weiter" },
  photo: { es: "Foto", en: "Photo", fr: "Photo", de: "Foto" },
};

/** Full-screen gallery for one project: photos with captions, arrows, keys and swipe. */
export default function ProjectGallery({
  project,
  onClose,
}: {
  project: CaseStudy | null;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const [i, setI] = useState(0);
  const photos = project?.gallery ?? [];
  const n = photos.length;

  useEffect(() => setI(0), [project?.id]);

  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, go]);

  const photo = photos[i];

  return (
    <AnimatePresence>
      {project && photo && (
        <motion.div
          key="gallery"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[150] flex flex-col bg-ink-900/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Header */}
          <div
            className="container-editorial flex items-center justify-between gap-4 pt-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-signal-soft">
                {pick(project.category, lang)} · {project.system}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label={pick(T.close, lang)}
              data-cursor={pick(T.close, lang)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/50"
            >
              <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden>
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Photo */}
          <div className="relative flex flex-1 items-center justify-center px-4 py-6 md:px-20">
            <AnimatePresence mode="wait">
              <motion.figure
                key={photo.src}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex max-h-full w-full max-w-6xl flex-col items-center"
                onClick={(e) => e.stopPropagation()}
                drag={n > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={pick(photo.caption, lang)}
                  draggable={false}
                  className="max-h-[68vh] w-auto max-w-full select-none rounded-3xl object-contain"
                />
                <figcaption className="mt-5 flex w-full max-w-3xl items-baseline justify-center gap-3 text-center text-sm leading-relaxed text-chalk-muted md:text-base">
                  <span className="shrink-0 font-mono text-xs text-chalk-dim">
                    {String(i + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
                  </span>
                  <span>{pick(photo.caption, lang)}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {n > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label={pick(T.prev, lang)}
                  className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/60 text-white transition-colors hover:border-white/50 md:flex"
                >
                  &larr;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label={pick(T.next, lang)}
                  className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-900/60 text-white transition-colors hover:border-white/50 md:flex"
                >
                  &rarr;
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {n > 1 && (
            <div
              className="container-editorial flex justify-center gap-2 pb-8"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.map((p, idx) => (
                <button
                  key={p.src}
                  onClick={() => setI(idx)}
                  aria-label={`${pick(T.photo, lang)} ${idx + 1}`}
                  aria-current={idx === i}
                  className={`h-14 w-20 overflow-hidden rounded-xl border transition-all duration-300 md:h-16 md:w-24 ${
                    idx === i ? "border-white opacity-100" : "border-white/10 opacity-50 hover:opacity-90"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
