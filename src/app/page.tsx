export const revalidate = 10;
import { client } from "../../sanity/lib/client";
import { Separator } from "@/components/ui/separator";
import { PortableText } from "@portabletext/react";
import { customDefaultComponents } from "@/components/CustomBlockComponents";
import BannerHeader from "@/components/BannerHeader";

async function getContent() {
  const CONTENT_QUERY = `*[_type == "homepage"] {
    title,
    description,
    content[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url
        }
      }
    },
    headerImg {
      asset -> {
        url
      },
      alt
    },
    headerTitle
  
  }`;
  const content = await client.fetch(CONTENT_QUERY);
  return content[0];
}

export default async function Home() {
  const sanityData = await getContent();
  return (
    <div>
      <BannerHeader sanityData={sanityData} />
      <Separator className="max-w-screen-lg mt-12 md:mt-16 md:mb-14 mb-10 mx-auto" />
      <section className="max-w-screen-lg mx-auto px-4">
        {sanityData.description && (
          <p className="text-xl text-zinc-600">{sanityData.description}</p>
        )}
        {sanityData.content && (
          <PortableText
            value={sanityData.content}
            components={customDefaultComponents}
          />
        )}
      </section>
    </div>
  );
}
