import BannerHeader from "@/components/BannerHeader";
import { Separator } from "@/components/ui/separator";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { customDefaultComponents } from "@/components/CustomBlockComponents";
import { urlFor } from "@/lib/utils";

const getAbout = async () => {
  const CONTENT_QUERY = `*[_type == "about"] {
    title,
    content,
    headerImg {
      asset -> {
        url
      },
      alt
    },
    headerTitle
  }`;
  const content = await client.fetch(CONTENT_QUERY);
  const aboutData = content[0];
  if (aboutData.headerImg?.asset) {
    aboutData.headerImg.optimizedUrl = urlFor(aboutData.headerImg.asset.url);
  }
  return aboutData;
};

const About = async () => {
  const sanityData = await getAbout();
  return (
    <div>
      <BannerHeader sanityData={sanityData} />
      <Separator className="max-w-screen-lg mt-10 md:mt-14 md:mb-14 mb-10 mx-auto" />
      <section className="px-4">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl mb-4 font-medium text-zinc-900">
            {sanityData?.title}
          </h2>
          <PortableText
            value={sanityData?.content}
            components={customDefaultComponents}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
