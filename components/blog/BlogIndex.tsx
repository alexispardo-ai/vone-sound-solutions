"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/components/LanguageProvider";
import { BLOG_UI, DATE_LOCALE } from "@/lib/i18n";
import { viewportOnce } from "@/lib/motion";
import type { PostMeta } from "@/lib/blog";

export default function BlogIndex({ posts }: { posts: PostMeta[] }) {
  const { lang } = useLanguage();
  const t = BLOG_UI[lang];
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(DATE_LOCALE[lang], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <section className="container-editorial pb-section pt-40">
      <SectionLabel>{t.label}</SectionLabel>
      <h1 className="mt-8 max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tightest">
        {t.title}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-chalk-muted">{t.intro}</p>

      {posts.length === 0 ? (
        <p className="mt-20 text-chalk-dim">{t.empty}</p>
      ) : (
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: (i % 2) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/blog/${p.slug}`}
                data-cursor={t.read}
                className="group block h-full overflow-hidden rounded-4xl border border-white/10 bg-ink-800 transition-colors duration-500 hover:border-white/25"
              >
                {p.cover && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.cover}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-signal group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
                  </div>
                )}
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-chalk-dim">
                    <span>{fmt(p.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-signal" />
                    <span>
                      {p.readingMinutes} {t.min}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-chalk-muted">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-signal-soft">
                    {t.read}
                    <span aria-hidden className="transition-transform duration-500 ease-signal group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
