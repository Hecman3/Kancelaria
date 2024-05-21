import { linkArray } from "@/data/subpages";
import Link from "next/link";
import React from "react";
import { client } from "../../sanity/lib/client";

const getFooter = async () => {
  const CONTACT_QUERY = `*[_type == "contact"] {
    title,
    addresses,
  
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
    <footer className="border-t bg-white border-t-zinc-100 pt-4 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 space-y-8">
        <div className="flex gap-4 flex-col sm:flex-row justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              {sanityData.contact.title}
            </h2>
            <p className="text-sm text-zinc-600">
              {sanityData.contact?.addresses[0].street}
              <br />
              {sanityData.contact?.addresses[0].city}
              <br />
              {sanityData.contact && (
                <span>tel. {sanityData.contact.addresses[0].addressPhone}</span>
              )}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Menu</h2>
            <ul className="space-y-2">
              {linkArray.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.path}
                    className={`transition-colors ease-out inline-block border-y-2 border-y-transparent hover:border-b-zinc-300`}
                  >
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-center text-zinc-600">
          {sanityData.other.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
