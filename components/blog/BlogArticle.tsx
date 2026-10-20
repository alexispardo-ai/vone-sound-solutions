"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { BLOG_UI, DATE_LOCALE } from "@/lib/i18n";
import type { Post } from "@/lib/blog";

export default function BlogArticle({ post }: { post: Post }) {
  const { lang } = useLanguage();
  const t = BLOG_UI[lang];
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(DATE_LOCALE[post.lang], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <article className="container-editorial pb-section pt-40">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-chalk-dim transition-colors hover:text-white"
      >
        <span aria-hidden>&larr;</span>
        {t.back}
      </Link>

      <header className="mx-auto mt-10 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-chalk-dim">
          <span>{fmt(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-signal" />
          <span>
            {post.readingMinutes} {t.min}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-signal-soft">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-6 font-display text-[clamp(2rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-tightest">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-chalk-dim">{post.author}</p>
      </header>

      {post.cover && (
        <div className="relative mx-auto mt-12 aspect-[16/8] max-w-5xl overflow-hidden rounded-4xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      )}

      <div
        className="article-body mx-auto mt-12 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <div className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-8">
        <Link href="/blog" className="text-sm text-signal-soft transition-colors hover:text-white">
          {t.back}
        </Link>
      </div>
    </article>
  );
}
