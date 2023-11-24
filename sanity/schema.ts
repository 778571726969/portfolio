import { type SchemaTypeDefinition } from "sanity";
import { logo } from "./logo";
import { socialMedia } from "./socialMedia";
import { vedios } from "./vedios";
import { Ads } from "./ads";
import { banners } from "./banner";
import { business } from "./business";
import { flyer } from "./flyer";
import { mobile } from "./mobile";
import { mockups } from "./mockups";
import { thumbnails } from "./thumbnail";
import { web } from "./web";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    logo,
    socialMedia,
    banners,
    business,
    flyer,
    mobile,
    mockups,
    thumbnails,
    web,
    vedios,
    Ads,
  ],
};
