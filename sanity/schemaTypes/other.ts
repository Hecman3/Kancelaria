import { defineField, defineType } from "sanity";

export default defineType({
  name: "other",
  title: "Inne",
  type: "document",
  fields: [
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
    }),
  ],
});
