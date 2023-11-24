export const banners = {
  name: "banners",
  title: "Banners",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Banners",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};
