import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Strona główna",
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
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Zawartość",
      type: "blockContent",
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
