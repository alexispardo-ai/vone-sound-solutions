"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";

export default function NotFound() {
  const { ui } = useLanguage();
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-[clamp(6rem,22vw,18rem)] font-semibold leading-none tracking-tightest text-white/[0.06]">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight">
        {ui.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-chalk-dim">{ui.notFound.body}</p>
      <div className="mt-10">
        <MagneticButton href="/" variant="solid">
          {ui.notFound.cta}
        </MagneticButton>
      </div>
    </main>
  );
}
