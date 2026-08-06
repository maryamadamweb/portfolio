export type ProjectItem =
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      description: string;
      clickable?: boolean;
      // Shown as a vertical caption beside this image.
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      width: number;
      height: number;
      description: string;
      clickable?: boolean;
    };

export type Project = {
  slug: string;
  name: string;
  credit?: string;
  summary: string;
  link?: { href: string; label: string };
  items: ProjectItem[];
  // Forces placement into a specific wall column instead of the default
  // alternating layout — used when a project needs to sit under a specific
  // neighbour regardless of its position in this array.
  column?: "left" | "right";
};

const placeholder = "A short placeholder description of this piece.";

export const projects: Project[] = [
  {
    slug: "hue",
    name: "Hue",
    summary: "Featured on Hue as 'Muse of the Month'.",
    items: [
      {
        type: "video",
        src: "https://vz-cacde0a9-0c8.b-cdn.net/9c00b1f5-bc4f-4df4-8121-9d8ccc3339b1/playlist.m3u8",
        width: 720,
        height: 1280,
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/extras/extra-1.jpg",
        width: 1170,
        height: 1462,
        alt: "Henna extra",
        description: placeholder,
        clickable: false,
        caption: "Juicy Couture x Huq That",
      },
      {
        type: "image",
        src: "/genres/henna/extras/extra-3.JPG",
        width: 1600,
        height: 1067,
        alt: "Henna extra",
        description: placeholder,
        clickable: false,
      },
    ],
  },
  {
    slug: "aunty-ji",
    name: "ਆਂਟੀ ਜੀ / آنٹی جی / AUNTY JI",
    credit: "Written by M Zain Dada, directed by Milli Bhatia",
    summary:
      "AuntyJi is a film born out of grief, the ugly, disorientating kind that distorts time, reality, and language itself. Centred on an elderly South Asian woman, a figure so often overlooked or reduced to stereotype in British narratives, the film uses surrealism to give her full emotional interiority, exploring the immigrant experience of displacement, codeswitching, and the negotiation between survival and belonging. It is ultimately a film about grief and love intertwined, and an invitation to sit with both in all their distortion.\n\nI created the henna work for the film, applied with a deliberately faded effect that needed a couple of days to set, so it could visually echo the grief and yearning at the film's core. Alongside Urdu poetry and imagery of the lote tree, the henna helped root the film's surrealism in something ancestral. I really enjoyed that the henna was a subtle, but well thought out detail of this film.",
    items: [
      {
        type: "image",
        src: "/genres/henna/aunty-ji/aunty-ji-1.JPG",
        width: 1093,
        height: 1457,
        alt: "Aunty Ji henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/aunty-ji/aunty-ji-2.jpg",
        width: 1080,
        height: 1350,
        alt: "Aunty Ji henna piece",
        description: placeholder,
      },
    ],
  },
  {
    slug: "dazed",
    name: "Dazed",
    summary: "Featured on Dazed & Dazed Beauty for Eid.",
    items: [
      {
        type: "image",
        src: "/genres/henna/dazed/dazed-1.jpg",
        width: 1170,
        height: 1462,
        alt: "Dazed henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/extras/extra-2.jpg",
        width: 1600,
        height: 1061,
        alt: "Henna extra",
        description: placeholder,
        clickable: false,
      },
      {
        type: "video",
        src: "https://vz-cacde0a9-0c8.b-cdn.net/fb3bf58c-e95a-409d-8af2-1a7366a9dcb1/playlist.m3u8",
        width: 720,
        height: 1280,
        description: placeholder,
      },
    ],
  },
  {
    slug: "levis",
    name: "Levis x Hadiyah Hussain",
    summary:
      "Henna designs featured in Hadiyah Hussain's meri jaan / میری جان campaign, used as patches in the Levi's collaboration.\n\nMehndi for Hadiyah Hussain's Valentine's Day campaign, featuring original designs.",
    items: [
      {
        type: "image",
        src: "/genres/henna/levis/levis-1.jpg",
        width: 1067,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-2.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "video",
        src: "https://vz-cacde0a9-0c8.b-cdn.net/a39e28eb-70b2-4dc4-a4ad-c03a802e1f18/playlist.m3u8",
        width: 720,
        height: 1280,
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-4.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-5.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-3.jpg",
        width: 750,
        height: 422,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-6.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-7.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-14.png",
        width: 1420,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-8.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-9.jpg",
        width: 1170,
        height: 1560,
        alt: "Levis henna piece",
        description: placeholder,
      },
      // {
      //   type: "image",
      //   src: "/genres/henna/levis/levis-12.png",
      //   width: 773,
      //   height: 1600,
      //   alt: "Levis henna piece",
      //   description: placeholder,
      // },
      // {
      //   type: "image",
      //   src: "/genres/henna/levis/levis-13.png",
      //   width: 868,
      //   height: 1600,
      //   alt: "Levis henna piece",
      //   description: placeholder,
      // },
      {
        type: "image",
        src: "/genres/henna/levis/levis-10.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
    ],
  },
  {
    slug: "colours",
    name: "'The Colours of Henna'",
    credit: "By Ruqaiyyah Patel (Henna Artist and Creative Director/Producer)",
    summary:
      "'The Colours of Henna' explores the hues of henna from powder to natural stain through colour, art and culture.\n\n\"This film addresses my love for the art of henna in 3 acts. These acts reflect the physical and aesthetic development of henna whilst exploring the many memories and thoughts I hold of this art and medium.\" — Ruqaiyyah Patel\n\nMaryam Adam — Key Cast, 'Act 2 Henna Artist'.",
    link: { href: "https://vimeo.com/1102983081", label: "Full film" },
    items: [
      {
        type: "video",
        src: "https://vz-cacde0a9-0c8.b-cdn.net/f3f4b74d-ca30-418d-98a6-2f613184e4ed/playlist.m3u8",
        width: 1276,
        height: 718,
        description: placeholder,
      },
    ],
  },
  {
    slug: "mother-tongue",
    name: "Mother Tongue",
    summary: "A short placeholder description of this project.",
    column: "left",
    items: [
      {
        type: "video",
        src: "https://vz-cacde0a9-0c8.b-cdn.net/95742576-7d3f-4ded-8e88-46033497ca8f/playlist.m3u8",
        width: 720,
        height: 576,
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/mother-tongue/mother-tongue-1.jpg",
        width: 1400,
        height: 1750,
        alt: "Mother Tongue henna piece",
        description: placeholder,
      },
      {
        type: "video",
        src: "https://vz-cacde0a9-0c8.b-cdn.net/479cc092-a4e4-4d5b-9837-9e81fa3c9d56/playlist.m3u8",
        width: 540,
        height: 960,
        description: placeholder,
      },
    ],
  },
];
