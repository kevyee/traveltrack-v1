// Next Imports
import Link from "next/link";

// Component Imports
import * as Craft from "@/components/craft/layout";
import BackButton from "../global/elements/back-button";
import AboutAuthor from "./about-author";

const Article = ({ post, date, author }: ArticleProps) => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="">
          <h1
            className="max-w-none !leading-[1.1] font-semibold text-4xl md:text-5xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h1>
          {post._embedded?.["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
              ?.source_url && (
              // <div className="relative mt-12 h-96 w-full md:h-[500px]">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden mt-12 rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  placeholder="blur"
                  className="w-full h-full object-cover rounded-2xl"
                  src={
                    post._embedded["wp:featuredmedia"][0].media_details.sizes
                      .full.source_url
                  }
                  alt="Post image"
                />
              </div>
            )}
        </div>
        <Craft.Article className="mx-auto">
          <div
            className="pt-6 md:pt-12"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </Craft.Article>

        {/* <AboutAuthor {...{ post, date, author }} /> */}
      </Craft.Container>
    </Craft.Section>
  );
};

export default Article;
