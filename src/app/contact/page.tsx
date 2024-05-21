import BannerHeader from "@/components/BannerHeader";
import { client } from "../../../sanity/lib/client";
import { Separator } from "@/components/ui/separator";
import Map from "@/components/Map";
import { urlFor } from "@/lib/utils";

type AddressTypes = {
  street: string;
  city: string;
  addressPhone: string;
};

const getContact = async () => {
  const CONTENT_QUERY = `*[_type == "contact"] {
    title,
    addresses,
    phones,emails,
    headerImg {
      asset -> {
        url
      },
      alt
    },
    headerTitle
  }`;
  const content = await client.fetch(CONTENT_QUERY);
  const contactData = content[0];

  if (contactData.headerImg?.asset) {
    contactData.headerImg.optimizedUrl = urlFor({
      source: contactData.headerImg.asset.url,
    });
  }
  return contactData;
};

const Contact = async () => {
  const sanityData = await getContact();
  return (
    <div>
      <BannerHeader sanityData={sanityData} />
      <Separator className="max-w-screen-lg mt-10 md:mt-14 md:mb-14 mb-10 mx-auto" />
      <section className="px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex gap-4 flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-2">
                {sanityData.title}
              </h1>
              <div className="text-sm text-zinc-600 space-y-4">
                {sanityData.addresses.map(
                  (address: AddressTypes, index: number) => (
                    <div key={index}>
                      {address.street}
                      <br />
                      {address.city}
                      <br />
                      {address.addressPhone}
                    </div>
                  )
                )}
                {sanityData.phones && (
                  <div>
                    {sanityData.phones.map((phone: string, index: number) => (
                      <span key={index} className="block">
                        {phone}
                      </span>
                    ))}
                  </div>
                )}
                {sanityData.emails && (
                  <div>
                    {sanityData.emails.map((email: string, index: number) => (
                      <span key={index} className="block">
                        {email}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:basis-2/3 ">
            <Map addresses={sanityData.addresses} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
