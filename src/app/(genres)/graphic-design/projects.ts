export type MediaItem =
  | { type: "image"; src: string; width: number; height: number; alt: string }
  | { type: "video"; src: string; width: number; height: number };

export type Project = {
  slug: string;
  name: string;
  summary?: string;
  media: MediaItem[];
  heroWidth?: number;
};

const BASE = "/genres/graphic-design";

// Order follows the client's requested sequence.
export const projects: Project[] = [
  {
    slug: "our-story-our-superpower",
    name: "Our Story, Our Superpower",
    summary:
      "Printed editorial publication documenting a community storytelling programme for Havering Changing. The final output included a multi-page zine combining participant writing, photography, and illustration, designed for public distribution and long-term community archiving.",
    heroWidth: 510,
    media: [
      // Streamed as adaptive HLS from Bunny Stream. Dimensions confirmed
      // via ffprobe against the 720p rendition.
      {
        type: "video",
        src: "https://vz-cacde0a9-0c8.b-cdn.net/06310609-1204-49c8-9109-0922bcb86060/playlist.m3u8",
        width: 966,
        height: 720,
      },
    ],
  },
  {
    slug: "from-my-mothers-hands",
    name: "From My Mother's Hands",
    summary:
      "A self-initiated, research-led project interrogating the marginalisation of South Asian craft within dominant design narratives. Through intergenerational interviews, indigenous textile processes, and the creation of a custom Gujarati typeface, the project reframes typography as a tactile, cultural practice. The work culminated in a khadi zine and embroidered textile pieces that centre ancestral labour, language, and memory.",
    media: [
      {
        type: "image",
        src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-1.jpg`,
        width: 1600,
        height: 2000,
        alt: "From My Mother's Hands graphic design piece",
      },
      {
        type: "image",
        src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-2.jpg`,
        width: 2000,
        height: 1125,
        alt: "From My Mother's Hands graphic design piece",
      },
      {
        type: "image",
        src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-3.jpg`,
        width: 2000,
        height: 1333,
        alt: "From My Mother's Hands graphic design piece",
      },
      {
        type: "image",
        src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-4.jpg`,
        width: 2000,
        height: 1333,
        alt: "From My Mother's Hands graphic design piece",
      },
      {
        type: "image",
        src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-5.jpg`,
        width: 2000,
        height: 1333,
        alt: "From My Mother's Hands graphic design piece",
      },
      {
        type: "image",
        src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-6.jpg`,
        width: 2000,
        height: 1333,
        alt: "From My Mother's Hands graphic design piece",
      },
      {
        type: "image",
        src: `${BASE}/from-my-mothers-hands/from-my-mothers-hands-7.jpg`,
        width: 2000,
        height: 1454,
        alt: "From My Mother's Hands graphic design piece",
      },
    ],
  },
  {
    slug: "the-creative-process",
    name: "The Creative Process",
    summary:
      "A self-initiated typographic and visual response to James Baldwin's 1962 essay The Creative Process.",
    media: [
      {
        type: "image",
        src: `${BASE}/the-creative-process/the-creative-process-1.jpg`,
        width: 1651,
        height: 1173,
        alt: "The Creative Process graphic design piece",
      },
      {
        type: "image",
        src: `${BASE}/the-creative-process/the-creative-process-2.jpg`,
        width: 1657,
        height: 1173,
        alt: "The Creative Process graphic design piece",
      },
    ],
  },
  {
    slug: "international-womens-month",
    name: "IWM",
    summary:
      "Posters commissioned by London for Sudan for various protest related events.",
    media: [
      {
        type: "image",
        src: `${BASE}/international-womens-month/international-womens-month-1.jpg`,
        width: 1600,
        height: 2000,
        alt: "IWM graphic design piece",
      },
    ],
  },
  {
    slug: "roots-of-collective-liberation",
    name: "Roots of Collective Liberation",
    summary: "Graphics and logo design for Roots of Collective Liberation.",
    media: [
      {
        type: "image",
        src: `${BASE}/roots-of-collective-liberation/roots-of-collective-liberation-1.jpg`,
        width: 1414,
        height: 2000,
        alt: "Roots of Collective Liberation graphic design piece",
      },
    ],
  },
  {
    slug: "muzz-x-huq-that",
    name: "Muzz x Huq That",
    summary:
      "Poster commissioned by Muzz with Huq That to promote their Henna and Halwa event.",
    media: [
      {
        type: "image",
        src: `${BASE}/muzz-x-huq-that/muzz-x-huq-that-1.jpg`,
        width: 1600,
        height: 2000,
        alt: "Muzz x Huq That graphic design piece",
      },
    ],
  },
];
