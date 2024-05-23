export const revalidate = 10;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "../../../sanity/lib/client";
import BannerHeader from "@/components/BannerHeader";
import { Separator } from "@/components/ui/separator";
import React from "react";
import * as icons from "lucide-react";

const getServices = async () => {
  const CONTENT_QUERY = `*[_type == "services"] {
    title,
    description,
    "services": services[] {
      title,
      description,
      "currentTag": currentTag->{
        label,
        value
      },
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
};

type ServiceType = {
  title: string;
  description: string;
  currentTag: { label: string; value: any } | null;
};
type IconNames = keyof typeof icons;
type IconType = React.ComponentType<{ size?: string | number; color?: string }>;

const Services = async () => {
  const sanityData = await getServices();

  const getIconComponent = (iconName: string | undefined): IconType | null => {
    if (iconName && iconName in icons) {
      const IconComponent = icons[iconName as IconNames];
      return IconComponent as IconType;
    }
    return null;
  };

  return (
    <div>
      <BannerHeader sanityData={sanityData} />
      <Separator className="max-w-screen-lg mt-10 md:mt-14 md:mb-14 mb-10 mx-auto" />
      <section className="px-4 max-w-screen-lg mx-auto">
        <div className="space-y-1 mb-8">
          <h1 className="text-3xl font-medium">{sanityData?.title}</h1>
          <p>{sanityData?.description}</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 ">
          {sanityData &&
            sanityData.services.map((service: ServiceType, index: number) => {
              const IconComponent = getIconComponent(service.currentTag?.value);
              return (
                <Card
                  key={`services-${index}`}
                  className={`hover:scale-105  hover:shadow-lg transition ease-in-out duration-300`}
                >
                  <CardHeader className="pb-2">
                    {service.currentTag && IconComponent && (
                      <div className="flex justify-center">
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                    )}
                    <CardTitle className="text-lg text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-zinc-600 block text-center">
                      {service.description}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Services;
