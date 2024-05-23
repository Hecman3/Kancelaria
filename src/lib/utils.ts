import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";
import { ImageFormat } from "@sanity/image-url/lib/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const builder = ImageUrlBuilder(client);
type UrlBuilderTypes = {
  source: any;
  width?: number;
  height?: number;
  format?: ImageFormat;
  quality?: number;
};
export function urlFor({
  source,
  format = "webp",
  height = 600,
  quality = 90,
  width = 1240,
}: UrlBuilderTypes) {
  return builder
    .image(source)
    .width(width)
    .height(height)
    .format(format)
    .quality(quality)
    .url();
}
