import * as Craft from "@/components/craft/layout";
import PostCard from "@/components/content/post-card";
import fjord from "@/fjord.config";
import { fetchPosts } from "@/lib/data";

export default async function RecentPosts({
  className,
  excludeId,
}: {
  className?: string;
  excludeId?: number;
}) {
  const posts = await fetchPosts(4, 0);

  // Filter out the post with the given ID and limit to three posts
  const filteredPosts = posts.data
    .filter((post: PostProps) => post.id !== excludeId)
    .slice(0, 3);

  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Explore our latest stories</h3>
          <div className="m-auto grid max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-12">
            {filteredPosts.map((post: PostProps) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
