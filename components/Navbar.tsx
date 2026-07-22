"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import MagneticButton from "./ui/MagneticButton";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { NAV_LINKS } from "@/lib/site";
import { pick } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { lang, ui } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: reduce ? 0 : -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-signal",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div
          className={cn(
            "container-editorial flex items-center justify-between rounded-full transition-all duration-500 ease-signal",
            scrolled && "glass px-6 py-3"
          )}
        >
          <Link href="#top" aria-label="VONE home" data-cursor="Top">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm tracking-tight text-chalk-muted transition-colors hover:text-white"
              >
                {pick(link.label, lang)}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-500 ease-signal group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle />
            <MagneticButton href="#contact" variant="solid" className="px-6 py-3" cursor="Talk">
              {ui.nav.cta}
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-[120] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={cn(
                "h-px w-6 bg-white transition-all duration-300",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-white transition-all duration-300",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] flex flex-col justify-center bg-ink-900/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-editorial flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-5xl font-semibold tracking-tightest text-white"
                  >
                    {pick(link.label, lang)}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex items-center gap-4">
                <MagneticButton href="#contact" onClick={() => setOpen(false)}>
                  {ui.nav.cta}
                </MagneticButton>
                <LanguageToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
