import type { Metadata, ResolvingMetadata } from "next";
import fjord from "@/fjord.config";
import { fetchPostBySlug } from "@/lib/data";
import { convert } from "html-to-text";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post: PostProps = await fetchPostBySlug(params?.slug);

  const title = `${convert(post.title.rendered, { wordwrap: false })}`;
  const titleWithSiteName = `${title} | ${fjord.site_name}`;
  const description =
    convert(post.excerpt?.rendered || "", {
      wordwrap: false,
      limits: { maxInputLength: 160 },
    }) + "...";

  const image = `${fjord.site_domain}/img?url=${
    post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large
      .source_url || `${fjord.site_domain}/opengraph-image.jpg`
  }`;

  const url = `${fjord.site_domain}/articles/${post.slug}`;

  return {
    title: titleWithSiteName,
    description: description,
    metadataBase: new URL(fjord.site_domain),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: fjord.site_name,
      images: [
        {
          url: image,
          width: 1024,
          height: 538,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithSiteName,
      description: description,
      images: [image], // Must be an absolute URL
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="">{children}</main>;
}
