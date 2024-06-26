import { ContentPropsType } from "@/types/global";
import { PortableText } from "@portabletext/react";
import { customHeaderComponents } from "./CustomBlockComponents";
import Image from "next/image";
import { urlFor } from "@/lib/utils";
import { Separator } from "./ui/separator";

const BannerHeader = ({ sanityData }: { sanityData: ContentPropsType }) => {
  if (sanityData.headerImg?.asset.url) {
    sanityData.headerImg.optimizedUrl = urlFor({
      source: sanityData.headerImg.asset.url,
    });
  }
  return (
    <>
      <header className="grid max-w-screen-xl mx-auto w-full px-4 gap-12 md:gap-16 pt-12 md:pt-16 grid-cols-1 justify-items-stretch items-center">
        <div className="relative h-[400px] flex items-center justify-center lg:p-12 p-4">
          <Image
            src={sanityData.headerImg?.optimizedUrl || ""}
            alt={sanityData.headerImg?.alt || "Zdjęcie w banerze"}
            fill
            priority
            className="absolute aspect-auto top-0 left-0 w-full h-full object-top object-cover rounded-lg "
          />
          <div className="absolute inset-0 bg-black bg-opacity-55 rounded-lg bg-cover"></div>
          {sanityData.headerTitle && (
            <div className="relative space-y-1 max-w-screen-sm text-center">
              <PortableText
                value={sanityData.headerTitle}
                components={customHeaderComponents}
              />
            </div>
          )}
        </div>
      </header>
      <Separator className="max-w-screen-lg mt-12 md:mt-16 md:mb-14 mb-10 mx-auto" />
    </>
  );
};

export default BannerHeader;
