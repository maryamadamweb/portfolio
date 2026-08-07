import type { GalleryImage } from "@/types/genre";

export type Project = {
  slug: string;
  name: string;
  images: GalleryImage[];
};

const BASE = "/genres/graphic-design";

// Order follows the client's requested sequence. Three more projects
// (Our Story Our Superpower, IWM, Muzz x Huq That) are pending images and
// will slot into this list once assets are provided.
export const projects: Project[] = [
  {
    slug: "from-my-mothers-hands",
    name: "From My Mother's Hands",
    images: [
      { src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-1.jpg`, width: 1600, height: 2000, alt: "From My Mother's Hands graphic design piece" },
      { src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-2.jpg`, width: 2000, height: 1125, alt: "From My Mother's Hands graphic design piece" },
      { src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-3.jpg`, width: 2000, height: 1098, alt: "From My Mother's Hands graphic design piece" },
      { src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-4.jpg`, width: 2000, height: 1057, alt: "From My Mother's Hands graphic design piece" },
      { src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-5.jpg`, width: 2000, height: 987, alt: "From My Mother's Hands graphic design piece" },
      { src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-6.jpg`, width: 2000, height: 1087, alt: "From My Mother's Hands graphic design piece" },
      { src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-7.jpg`, width: 1750, height: 1430, alt: "From My Mother's Hands graphic design piece" },
    ],
  },
  {
    slug: "the-creative-process",
    name: "The Creative Process",
    images: [
      { src: `${BASE}/the-creative-process/the-creative-process-1.jpg`, width: 1651, height: 1173, alt: "The Creative Process graphic design piece" },
      { src: `${BASE}/the-creative-process/the-creative-process-2.jpg`, width: 1657, height: 1173, alt: "The Creative Process graphic design piece" },
    ],
  },
  {
    slug: "roots-of-collective-liberation",
    name: "Roots of Collective Liberation",
    images: [
      { src: `${BASE}/roots-of-collective-liberation/roots-of-collective-liberation-1.jpg`, width: 1414, height: 2000, alt: "Roots of Collective Liberation graphic design piece" },
    ],
  },
  {
    slug: "henna-and-halwa",
    name: "Henna & Halwa",
    images: [
      { src: `${BASE}/henna-and-halwa/henna-and-halwa-1.jpg`, width: 1600, height: 2000, alt: "Henna & Halwa graphic design piece" },
    ],
  },
];
