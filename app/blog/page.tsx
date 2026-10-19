import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos de VONE · Vibrational One sobre sonido, Void Acoustics y producción de eventos en España y Portugal.",
  alternates: { canonical: `${SITE.domain}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main>
      <BlogIndex posts={posts} />
    </main>
  );
}
