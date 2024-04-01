// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import Article from "@/components/content/article-wrapper";
import RecentPosts from "@/components/sections/recent-posts";
import CTA from "@/components/sections/cta";

// Next Imports
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Data Imports
import { fetchPostBySlug } from "@/lib/data";

export default async function Page({ params }: { params: { slug: string } }) {
  const post: PostProps = await fetchPostBySlug(params?.slug);
  if (!post) {
    return notFound();
  }

  const date = new Date(post.date);
  const author = post._embedded?.author?.[0] ?? null;

  // Ensure that the excerpt and author are not undefined before passing to the Article component
  if (!post.excerpt || !author) {
    return notFound();
  }

  return (
    <div>
      <Article
        post={{
          ...post,
          excerpt: post.excerpt || { rendered: "" },
        }}
        date={date}
        author={author}
      />
      <RecentPosts excludeId={post.id} />
      {/* <CTA /> */}
    </div>
  );
}
