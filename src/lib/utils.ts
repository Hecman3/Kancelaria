import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const builder = ImageUrlBuilder(client);

export function urlFor(source: string) {
  return builder
    .image(source)
    .format("webp")
    .quality(75)
    .width(1600)
    .height(960)
    .url();
}
