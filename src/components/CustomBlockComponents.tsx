import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/utils";

export const customDefaultComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-medium my-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold my-4">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-zinc-800 mb-8 ">{children}</p>
    ),
    listParagraph: ({ children }) => (
      <p className="text-lg text-zinc-800 mt-8">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 mt-2 text-lg space-y-2 text-zinc-800">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  types: {
    image: ({ value }: { value: any }) => {
      if (value.asset.url) {
        value.optimizedUrl = urlFor({
          source: value.asset.url,
          height: 350,
          width: 550,
        });
      }
      return (
        <Image
          width={550}
          height={350}
          className="object-top aspect-auto h-[350px] w-[550px] object-cover rounded-lg mb-8"
          src={value.optimizedUrl || ""}
          alt={value.alt || "Zdjęcie Marcin Hećman"}
        />
      );
    },
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value: any; children: React.ReactNode }) => (
      <a href={value.href} className="text-blue-500 underline">
        {children}
      </a>
    ),
  },
} as PortableTextComponents;

export const customHeaderComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl mb-2 font-medium text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl mb-1 font-semibold text-white">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-zinc-300">{children}</p>
    ),
  },
} as PortableTextComponents;
