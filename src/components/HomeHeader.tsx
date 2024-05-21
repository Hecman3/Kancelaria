import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ContentPropsType } from "@/types/global";
import { ReactNode } from "react";
import { PortableTextComponents } from "@portabletext/react";

const customComponents = {
  block: {
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="text-2xl font-medium">{children}</h2>
    ),
    normal: ({ children }: { children: ReactNode }) => (
      <p className="text-xl text-zinc-600">{children}</p>
    ),
  },
} as PortableTextComponents;

const HomeHeader = ({ sanityData }: { sanityData: ContentPropsType }) => {
  return (
    <header className="grid max-w-screen-xl mx-auto w-full px-4 gap-12 md:gap-16 pt-12 md:pt-16 md:grid-cols-2 grid-cols-1 justify-items-stretch items-center">
      <div className="flex md:justify-end justify-center">
        <Image
          src={sanityData.headerImg.asset.url}
          alt={sanityData.headerImg.alt}
          width={550}
          height={350}
          priority
          className="object-top aspect-auto h-[350px] w-[550px] object-cover md:rounded-tr-lg md:rounded-bl-lg md:rounded-br-3xl md:rounded-tl-3xl rounded-lg"
        />
      </div>
      <div>
        <div className="max-w-[550px] mx-auto text-center space-y-2 md:mx-0 md:text-left">
          <PortableText
            value={sanityData.headerTitle}
            components={customComponents}
          />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
