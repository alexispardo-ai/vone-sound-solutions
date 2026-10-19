"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE, NAV_LINKS } from "@/lib/site";
import { pick } from "@/lib/i18n";

export default function Footer() {
  const { lang, ui } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 pb-10 pt-20">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-full.png"
              alt="VONE · Vibrational One · Sound Solutions · Powered by VOID Acoustic"
              className="w-[220px] max-w-full select-none"
              draggable={false}
            />
            <p className="mt-6 max-w-sm leading-relaxed text-chalk-dim">{ui.about.p1}</p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs uppercase tracking-[0.28em] text-chalk-dim">{ui.footer.explore}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-chalk-muted transition-colors hover:text-white"
                  >
                    {pick(link.label, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.28em] text-chalk-dim">{ui.footer.connect}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {SITE.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chalk-muted transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`} className="text-chalk-muted transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="text-chalk-muted transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-20 select-none overflow-hidden">
          <p className="font-display text-[clamp(4rem,20vw,18rem)] font-semibold leading-[0.8] tracking-tightest text-white/[0.04]">
            VONE
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-chalk-dim md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name} · {SITE.legalName}. {ui.footer.rights}
          </p>
          <p>{SITE.location}</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">{ui.footer.privacy}</Link>
            <Link href="#" className="transition-colors hover:text-white">{ui.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
