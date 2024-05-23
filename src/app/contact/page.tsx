export const revalidate = 10;
import BannerHeader from "@/components/BannerHeader";
import { client } from "../../../sanity/lib/client";
import { Separator } from "@/components/ui/separator";
import Map from "@/components/Map";

type AddressTypes = {
  street: string;
  city: string;
  addressPhone: string;
};

const getContact = async () => {
  const CONTENT_QUERY = `*[_type == "contact"] {
    title,
    addresses,
    phones,
    emails,
    REGON,
    NIP,
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
              <h1 className="text-2xl font-semibold mb-6">
                {sanityData.title}
              </h1>
              <div className="text-zinc-600 space-y-2">
                {sanityData.addresses.map(
                  (address: AddressTypes, index: number) => (
                    <div key={`address-${index}`} className="space-y-2">
                      <div>{address.street}</div>
                      <div>{address.city}</div>
                      <div>
                        <a href={`tel:${address.addressPhone}`}>
                          {address.addressPhone}
                        </a>
                      </div>
                    </div>
                  )
                )}

                <div className="pt-6 space-y-2">
                  {sanityData.phones &&
                    sanityData.phones.map((phone: string, index: number) => (
                      <div key={`phones-${index}`}>
                        <a
                          href={`tel:${phone}`}
                          className="hover:text-zinc-800 hover:underline"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  {sanityData.emails &&
                    sanityData.emails.map((email: string, index: number) => (
                      <div key={`emails-${index}`}>
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-zinc-800 hover:underline"
                        >
                          {email}
                        </a>
                      </div>
                    ))}
                </div>
                <div className="pt-6">
                  <span>NIP: </span>
                  <span>{sanityData.NIP}</span>
                </div>
                <div>
                  <span>REGON: </span>
                  <span>{sanityData.REGON}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:basis-2/3 min-w-[350px] ">
            <Map addresses={sanityData.addresses} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
