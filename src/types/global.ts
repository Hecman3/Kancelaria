import { TypedObject } from "sanity";

export type ContentPropsType = {
  headerImg: { asset: { url: string }; alt: string };
  headerTitle: TypedObject | TypedObject[];
};
