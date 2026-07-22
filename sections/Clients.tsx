"use client";

import Marquee from "@/components/Marquee";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/components/LanguageProvider";
import { CLIENTS } from "@/lib/site";

export default function Clients() {
  const { ui } = useLanguage();
  return (
    <section className="relative border-y border-white/5 py-24">
      <div className="container-editorial mb-12">
        <SectionLabel>{ui.clients.label}</SectionLabel>
      </div>
      <div className="flex flex-col gap-6">
        <Marquee items={CLIENTS} />
        <Marquee items={[...CLIENTS].reverse()} reverse itemClassName="text-chalk-dim/70" />
      </div>
    </section>
  );
}
