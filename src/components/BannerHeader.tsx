import { ContentPropsType } from "@/types/global";
import { PortableText } from "@portabletext/react";
import { customHeaderComponents } from "./CustomBlockComponents";
import Image from "next/image";

const BannerHeader = ({
  sanityData,
  queue,
}: {
  sanityData: ContentPropsType;
  queue: number;
}) => {
  return (
    <header className="grid max-w-screen-xl mx-auto w-full px-4 gap-12 md:gap-16 pt-12 md:pt-16 grid-cols-1 justify-items-stretch items-center">
      <div className="relative h-[400px] flex items-center justify-center p-12">
        <Image
          src={`/images/banner${queue}.jpg`}
          alt={sanityData?.headerImg?.alt}
          height={400}
          width={1248}
          priority
          className="absolute top-0 left-0 w-full h-full object-center object-cover rounded-lg "
        />
        <div className="absolute inset-0 bg-black bg-opacity-55 rounded-lg bg-cover p-12"></div>
        <div className="relative  space-y-1 max-w-screen-sm text-center">
          <PortableText
            value={sanityData?.headerTitle || ""}
            components={customHeaderComponents}
          />
        </div>
      </div>
    </header>
  );
};

export default BannerHeader;
