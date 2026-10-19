import type { Metadata } from "next";
import BlogArticle from "@/components/blog/BlogArticle";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `${SITE.domain}/blog/${post.slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt,
        publishedTime: post.date,
        images: post.cover ? [post.cover] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  // Only valid slugs are built (generateStaticParams), so this always resolves.
  const post = getPostBySlug(params.slug);
  return (
    <main>
      <BlogArticle post={post} />
    </main>
  );
}
