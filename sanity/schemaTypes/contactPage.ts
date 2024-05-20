import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
    }),
    defineField({
      name: "addresses",
      title: "Adresy",
      type: "array",
      of: [
        defineField({
          name: "address",
          title: "Adres",
          type: "object",
          fields: [
            defineField({
              name: "street",
              title: "Ulica",
              type: "string",
            }),
            defineField({
              name: "city",
              title: "Miasto",
              type: "string",
            }),
            defineField({
              name: "addressPhone",
              title: "Number telefonu podanego adresu",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "phones",
      title: "Numery telefonu",
      type: "array",
      of: [
        defineField({
          name: "phone",
          title: "Numer telefonu",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "emails",
      title: "Adresy email",
      type: "array",
      of: [
        defineField({
          name: "authorEmail",
          title: "Email",
          type: "string",
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
