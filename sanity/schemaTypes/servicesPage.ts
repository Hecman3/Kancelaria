import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Usługi",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Opis",
      type: "text",
    }),
    defineField({
      name: "services",
      title: "Usługi",
      type: "array",
      of: [
        defineField({
          name: "service",
          title: "Usługa",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Tytuł",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Opis",
              type: "text",
            }),
            defineField({
              name: "currentTag",
              title: "Tag",
              type: "reference",
              to: [{ type: "tag" }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "headerImg",
      title: "Zdjęcie nagłówka",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "headerTitle",
      title: "Tytuł nagłówka",
      type: "headerBlockContent",
    }),
  ],
});
