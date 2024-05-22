import { defineField, defineType } from "sanity";

export default defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Pokazana nazwa",
    }),
    defineField({
      name: "value",
      type: "string",
      title: "Nazwa icony",
      description: "Nazwa ikony z pakiety lucide icons np. Asterisk, Weight",
    }),
  ],
});
