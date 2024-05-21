import { TypedObject } from "sanity";

export type ContentPropsType = {
  headerImg: { asset: { url: string }; optimizedUrl:string; alt: string };
  headerTitle: TypedObject | TypedObject[];
};
