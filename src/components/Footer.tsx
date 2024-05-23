export const revalidate = 10;
import { linkArray } from "@/data/subpages";
import Link from "next/link";
import React from "react";
import { client } from "../../sanity/lib/client";

const getFooter = async () => {
  const CONTACT_QUERY = `*[_type == "contact"] {
    title,
    addresses,
    emails,
    phones
  
  }`;
  const OTHER_QUERY = `*[_type == "other"] {
    copyright,
  
  }`;
  const contact = await client.fetch(CONTACT_QUERY);
  const other = await client.fetch(OTHER_QUERY);
  return { contact: contact[0], other: other[0] };
};

const Footer = async () => {
  const sanityData = await getFooter();
  return (
    <footer className="border-t bg-white border-t-zinc-100 pt-12 md:pt-14 pb-12 md:pb-14">
      <div className="max-w-screen-xl mx-auto px-4 space-y-12 md:space-y-14">
        <div className="flex gap-8 flex-col sm:flex-row justify-between">
          <div>
            <h2 className="text-lg font-medium mb-1">
              Kancelaria Adwokacka Adwokat Marcin Hećman
            </h2>
            <div className="space-y-1 text-zinc-600">
              {sanityData.contact?.addresses[0] &&
                sanityData.contact?.addresses[0].street && (
                  <span className="block border-b-2 border-transparent">
                    {sanityData.contact.addresses[0].street}
                  </span>
                )}
              {sanityData.contact?.addresses[0] &&
                sanityData.contact?.addresses[0].city && (
                  <span className="block border-b-2 border-transparent">
                    {sanityData.contact.addresses[0].city}
                  </span>
                )}
              {sanityData.contact.emails[0] && (
                <div>
                  <a
                    href={`mailto:${sanityData.contact.emails[0]}`}
                    className="border-b-2 border-transparent hover:text-zinc-800 hover:underline"
                  >
                    {sanityData.contact.emails[0]}
                  </a>
                </div>
              )}
              {sanityData.contact.phones[0] && (
                <div>
                  <a
                    href={`tel:${sanityData.contact.phones[0]}`}
                    className="inline-block border-b-2 border-transparent hover:text-zinc-800 hover:underline"
                  >
                    {sanityData.contact.phones[0]}
                  </a>
                </div>
              )}
              {sanityData.contact.addresses[0] &&
                sanityData.contact.addresses[0].addressPhone && (
                  <span className="block border-b-2 border-transparent">
                    {sanityData.contact.addresses[0].addressPhone}
                  </span>
                )}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-1">Menu</h2>
            <ul className="space-y-1">
              {linkArray &&
                linkArray.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.path}
                      className={`transition-colors text-left text-zinc-600 ease-out inline-block border-y-2 border-y-transparent hover:text-foreground hover:border-b-zinc-300`}
                    >
                      {link.value}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {sanityData.other.copyright && (
          <p className="text-sm text-center text-zinc-600">
            {sanityData.other.copyright}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
