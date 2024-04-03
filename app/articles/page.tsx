// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import * as Craft from "@/components/craft/layout";
import PostCard from "@/components/content/post-card";
import SecondaryHero from "@/components/sections/secondary-hero";
import ContentGrid from "@/components/content/content-grid";
import CTA from "@/components/sections/cta";
import PaginationWrapper from "@/components/content/pagination-wrapper";
import { Separator } from "@/components/ui/separator";

// Next Imports
import type { Metadata } from "next";

// Data Imports
import { fetchTags, fetchPosts } from "@/lib/data";

// Meta Data
export const metadata: Metadata = {
  title: `Articles | ${fjord.site_name}`,
  description:
    "Explore articles from our the world. From travel tips to destination guides, we have it all.",
  metadataBase: new URL(fjord.site_domain),
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: `Articles | ${fjord.site_name}`,
    description:
      "Explore articles from our the world. From travel tips to destination guides, we have it all.",
    url: "/articles",
    siteName: fjord.site_name,
    images: [
      {
        url: `${fjord.site_domain}/opengraph-image.jpg`, // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: fjord.site_description,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Articles | ${fjord.site_name}`,
    description:
      "Explore articles from our the world. From travel tips to destination guides, we have it all.",
    images: [`${fjord.site_domain}/opengraph-image.jpg`], // Must be an absolute URL
  },
};

export default async function Posts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" && +searchParams.page > 1
      ? +searchParams.page
      : 1;
  const offset = (page - 1) * fjord.posts_per_page;
  const { data, totalPosts } = await fetchPosts(fjord.posts_per_page, offset);
  const lastPage = Math.ceil(totalPosts / fjord.posts_per_page);
  const tags = await fetchTags();

  return (
    <Craft.Main>
      <SecondaryHero
        title="Our travel articles"
        subtitle={`${fjord.site_name} blog`}
      >
        Explore articles from our the world. From travel tips to destination
        guides, we have it all.
      </SecondaryHero>
      <Craft.Section>
        <Craft.Container>
          <ContentGrid id="articles">
            {data.map((post: PostProps) => (
              <PostCard
                key={post.id}
                post={post}
                tags={post._embedded["wp:term"]?.[0] ?? []}
              />
            ))}
          </ContentGrid>
          <Separator className="my-6 md:my-12" />
          <PaginationWrapper page={page} lastPage={lastPage} />
        </Craft.Container>
      </Craft.Section>
      {/* <CTA /> */}
    </Craft.Main>
  );
}
