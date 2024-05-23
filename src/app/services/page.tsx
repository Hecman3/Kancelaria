export const revalidate = 10;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "../../../sanity/lib/client";
import BannerHeader from "@/components/BannerHeader";
import { Separator } from "@/components/ui/separator";
import React from "react";
import * as icons from "lucide-react";
import PageTitle from "@/components/PageTitle";

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
    subtitle,
    subdescription,
    "files": files[].asset->{
      url,
      originalFilename,
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
      <section className="px-4 max-w-screen-lg mx-auto">
        {(sanityData.title || sanityData.description) && (
          <PageTitle
            title={sanityData.title}
            description={sanityData.description}
          />
        )}
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {sanityData.services &&
            sanityData.services.length > 0 &&
            sanityData.services.map((service: ServiceType, index: number) => {
              const IconComponent = getIconComponent(service.currentTag?.value);
              return (
                <Card
                  key={`services-${index}`}
                  className="hover:scale-105 hover:shadow-lg transition ease-in-out duration-300"
                >
                  <CardHeader className="pb-2">
                    {service.currentTag && IconComponent && (
                      <div className="flex justify-center">
                        {IconComponent && <IconComponent size={26} />}
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
        {sanityData.files && sanityData.files.length > 0 && (
          <div>
            {sanityData.subtitle && (
              <h2 className="text-3xl font-medium my-4">
                {sanityData.subtitle}
              </h2>
            )}
            {sanityData.subdescription && (
              <p className="text-lg text-zinc-800 mb-8">
                {sanityData.subdescription}
              </p>
            )}
            <div className="flex gap-8">
              {sanityData.files.map((file: any, index: number) => {
                return (
                  <Card
                    key={`file-${index}`}
                    className="hover:scale-105 hover:shadow-lg transition ease-in-out duration-300"
                  >
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardContent className="pt-6 flex flex-col items-center gap-2">
                        <icons.FileDown size={48} className="text-primary" />
                        {file.originalFilename}
                      </CardContent>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
