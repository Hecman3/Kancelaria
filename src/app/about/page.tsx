export const revalidate = 10;

import BannerHeader from "@/components/BannerHeader";
import { Separator } from "@/components/ui/separator";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { customDefaultComponents } from "@/components/CustomBlockComponents";
import PageTitle from "@/components/PageTitle";

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

  return content[0];
};

const About = async () => {
  const sanityData = await getAbout();
  return (
    <div>
      <BannerHeader sanityData={sanityData} />
      <section className="max-w-screen-lg mx-auto px-4">
        {(sanityData.title || sanityData.description) && (
          <PageTitle
            title={sanityData.title}
            description={sanityData.description}
          />
        )}
        {sanityData.content && (
          <PortableText
            value={sanityData.content}
            components={customDefaultComponents}
          />
        )}
        <div className=""></div>
      </section>
    </div>
  );
};

export default About;
