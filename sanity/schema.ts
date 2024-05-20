import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import homePage from "./schemaTypes/homePage";
import contactPage from "./schemaTypes/contactPage";
import servicesPage from "./schemaTypes/servicesPage";
import other from "./schemaTypes/other";
import headerBlockContent from "./schemaTypes/headerBlockContent";
import aboutPage from "./schemaTypes/aboutPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    blockContent,
    servicesPage,
    contactPage,
    other,
    headerBlockContent,
    aboutPage,
  ],
};
