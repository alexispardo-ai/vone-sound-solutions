import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./site";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  cover: string | null;
  lang: Locale;
  author: string;
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

function readRaw(slug: string) {
  const full = path.join(BLOG_DIR, `${slug}.md`);
  return matter(fs.readFileSync(full, "utf8"));
}

function toMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: data.date ? new Date(data.date as string).toISOString() : new Date().toISOString(),
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    cover: typeof data.cover === "string" ? data.cover : null,
    lang: data.lang === "en" ? "en" : "es",
    author: typeof data.author === "string" ? data.author : "VONE",
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

/** All post slugs (filenames without .md). */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_") && f.toLowerCase() !== "readme.md")
    .map((f) => f.replace(/\.md$/, ""));
}

/** All posts' metadata, newest first. */
export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { data, content } = readRaw(slug);
      return toMeta(slug, data, content);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** One full post (metadata + rendered HTML). */
export function getPostBySlug(slug: string): Post {
  const { data, content } = readRaw(slug);
  const meta = toMeta(slug, data, content);
  const html = marked.parse(content, { async: false }) as string;
  return { ...meta, html };
}
