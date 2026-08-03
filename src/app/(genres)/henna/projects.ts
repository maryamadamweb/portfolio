export type ProjectItem =
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      description: string;
      clickable?: boolean;
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
  summary: string;
  items: ProjectItem[];
};

const placeholder = "A short placeholder description of this piece.";
const projectSummary = "A sentence or two about this project.";

export const projects: Project[] = [
  {
    slug: "hue",
    name: "Hue",
    summary: projectSummary,
    items: [
      {
        type: "video",
        src: "/genres/henna/hue/hue-clip.mp4",
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
    name: "Aunty Ji",
    summary: projectSummary,
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
    summary: projectSummary,
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
        src: "/genres/henna/dazed/dazed-clip.mp4",
        width: 720,
        height: 1280,
        description: placeholder,
      },
    ],
  },
  {
    slug: "levis",
    name: "Levis",
    summary: projectSummary,
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
        type: "image",
        src: "/genres/henna/levis/levis-3.jpg",
        width: 750,
        height: 422,
        alt: "Levis henna piece",
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
      {
        type: "image",
        src: "/genres/henna/levis/levis-10.jpg",
        width: 1200,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-12.png",
        width: 773,
        height: 1600,
        alt: "Levis henna piece",
        description: placeholder,
      },
      {
        type: "image",
        src: "/genres/henna/levis/levis-13.png",
        width: 868,
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
        type: "video",
        src: "/genres/henna/levis/levis-clip.mp4",
        width: 720,
        height: 1280,
        description: placeholder,
      },
    ],
  },
];
