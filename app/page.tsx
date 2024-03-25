// Fjord Config
import fjord from "@/fjord.config";
import * as Craft from "@/components/craft/layout";
import Balancer from "react-wrap-balancer";
import Hero from "@/components/sections/hero";
import CTA from "@/components/sections/cta";
import { fetchTags, fetchPosts } from "@/lib/data";
import ContentGrid from "@/components/content/content-grid";
import PostCard from "@/components/content/post-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const page = 1;
  const offset = (page - 1) * fjord.posts_per_page;
  const { data, totalPosts } = await fetchPosts(fjord.posts_per_page, offset);
  const lastPage = Math.ceil(totalPosts / fjord.posts_per_page);
  const tags = await fetchTags();
  return (
    <Craft.Main>
      <Hero />

      <Craft.Section>
        <Craft.Container className="not-prose">
          <h3 className="text-4xl mb-12">Our latest travel articles</h3>
          <ContentGrid id="articles">
            {data.map((post: PostProps) => (
              <PostCard
                key={post.id}
                post={post}
                tags={post._embedded["wp:term"]?.[0] ?? []}
              />
            ))}
          </ContentGrid>
          <div className="text-center mt-8">
            <Button asChild className="text-center">
              <Link href="/articles" className="!text-white">
                Explore more
              </Link>
            </Button>
          </div>
          {/* <Separator className="my-6 md:my-12" /> */}
          {/* <PaginationWrapper page={page} lastPage={lastPage} /> */}
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
