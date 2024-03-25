import * as Craft from "@/components/craft/layout";
import Placeholder from "@/public/hero.webp";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { badgeVariants } from "../ui/badge";

const Hero = () => {
  return (
    <Craft.Section className="border-b overflow-hidden relative p-0 h-96 md:h-[20rem] lg:h-[30rem] xl:h-[40rem]">
      <Image
        rel="preload"
        // className="absolute  -z-10  object-cover top-1/2 -translate-y-1/2 !border-0"
        src="/hero.jpeg?v=2"
        priority={true}
        layout="fill" // This makes the image fill the container
        objectFit="cover" // This scales the image nicely to cover the container
        quality={100} // Optional: Sets the image quality to 100%
        className="z-[-1] !border-0 !mt-0 !mb-0 !rounded-none bg-black" // Ensure the image stays in the background
        alt="Hero Image"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-40 z-10"></div>
      <div className="w-full p-8 z-40 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <div className="not-prose">
          {/* <Badge variant="outline">{subtitle}</Badge> */}
          <h2 className="text-4xl lg:text-6xl mt-4 mb-6 text-white font-bold">
            Explore the world with us
          </h2>
          <p className="text-white">
            Discover unforgettable experiences and hidden gems in every corner
            of the globe.
          </p>
        </div>
      </div>
    </Craft.Section>
  );
};

export default Hero;
