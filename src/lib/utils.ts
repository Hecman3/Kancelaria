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
    .width(1240)
    .height(400)
    .format("webp")
    .quality(90)
    .url();
}
