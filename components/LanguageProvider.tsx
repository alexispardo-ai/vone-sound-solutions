"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/site";
import { UI, DEFAULT_LOCALE, type UIStrings } from "@/lib/i18n";

type Ctx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  toggle: () => void;
  ui: UIStrings;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>(DEFAULT_LOCALE);

  // Restore preference; otherwise infer from the browser once.
  useEffect(() => {
    const saved = window.localStorage.getItem("vone-lang") as Locale | null;
    if (saved === "es" || saved === "en") {
      setLangState(saved);
    } else if (navigator.language?.toLowerCase().startsWith("en")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Locale) => {
    setLangState(l);
    window.localStorage.setItem("vone-lang", l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang(lang === "es" ? "en" : "es");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, ui: UI[lang] as UIStrings }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
