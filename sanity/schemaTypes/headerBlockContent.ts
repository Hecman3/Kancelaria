import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Header block Content",
  name: "headerBlockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "H2", value: "h2" },
        { title: "Normal", value: "normal" },
      ],
      lists: [],
      marks: {
        decorators: [],
        annotations: [],
      },
    }),
  ],
});
