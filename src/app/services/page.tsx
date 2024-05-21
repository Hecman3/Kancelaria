export const revalidate = 10;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "../../../sanity/lib/client";
import { Asterisk } from "lucide-react";
import BannerHeader from "@/components/BannerHeader";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/lib/utils";

const getServices = async () => {
  const CONTENT_QUERY = `*[_type == "services"] {
    title,
    description,
    services,
    headerImg {
      asset -> {
        url
      },
      alt
    },
    headerTitle
  }`;
  const content = await client.fetch(CONTENT_QUERY);
  const servicesData = content[0];
  if (servicesData.headerImg?.asset) {
    servicesData.headerImg.optimizedUrl = urlFor({
      source: servicesData.headerImg.asset.url,
    });
  }
  return content[0];
};
type ServiceType = {
  title: string;
  description: string;
};

const Services = async () => {
  const sanityData = await getServices();
  return (
    <div>
      <BannerHeader sanityData={sanityData} />
      <Separator className="max-w-screen-lg mt-10 md:mt-14 md:mb-14 mb-10 mx-auto" />
      <section className="px-4 max-w-screen-lg mx-auto">
        <div className="space-y-1 mb-8">
          <h1 className="text-3xl font-medium">{sanityData?.title}</h1>
          <p>{sanityData?.description}</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8">
          {sanityData &&
            sanityData.services.map((service: ServiceType, index: number) => (
              <Card key={index} className="">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <span>{service.description}</span>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
