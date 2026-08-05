import type { GenreMeta } from "@/types/genre";

// Each entry links to a top-level route at app/<slug>/page.tsx.
// Cover assets live at public/genres/<slug>/cover.* (+ cover-poster.jpg for video covers).
// Add a genre by adding an entry here AND creating that folder.
export const genres: GenreMeta[] = [
  {
    slug: "illustrations",
    title: "Illustrations",
    summary: "A short one-line description of this genre.",
    cover: "/genres/illustrations/cover.png",
    coverWidth: 1427,
    coverHeight: 1606,
    tags: ["Design", "Web"],
    images: [
      {
        src: "/genres/illustrations/islamic-relief.jpeg",
        width: 960,
        height: 1165,
        alt: "Islamic Relief Artwork",
        // description: "A short placeholder description of this piece.",
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "A short one-line description of this genre.",
    cover: "/genres/graphic-design/cover-v3.png",
    coverWidth: 800,
    coverHeight: 766,
    tags: ["Design"],
    images: [
      {
        src: "/genres/graphic-design/cover-v3.png",
        width: 800,
        height: 766,
        alt: "Graphic design piece",
        description: "A short placeholder description of this piece.",
      },
    ],
  },
  {
    slug: "henna",
    title: "Henna",
    summary: "A short one-line description of this genre.",
    cover: "/genres/henna/cover-v2.png",
    coverWidth: 409,
    coverHeight: 800,
    tags: ["Henna"],
  },
  {
    slug: "paintings",
    title: "Paintings",
    summary: "A short one-line description of this genre.",
    cover: "/genres/paintings/cover-v2.png",
    coverWidth: 800,
    coverHeight: 800,
    tags: ["Paintings"],
  },
  {
    slug: "animations",
    title: "Animations",
    summary: "A short one-line description of this genre.",
    cover: "/genres/animations/cover.webp",
    coverAnimation: "/genres/animations/cover.webp",
    coverWidth: 960,
    coverHeight: 506,
    tags: ["Animation"],
  },
  {
    slug: "residencies-workshops-exhibitions",
    title: "Residencies / Workshops / Exhibitions",
    summary: "A short one-line description of this genre.",
    cover: "/genres/residencies-workshops-exhibitions/cover.jpg",
    coverWidth: 561,
    coverHeight: 394,
    tags: ["Residencies"],
  },
  {
    slug: "about",
    title: "About",
    summary: "A short one-line description of this genre.",
    cover: "/genres/about/cover-v3.webp",
    coverAnimation: "/genres/about/cover-v3.webp",
    coverWidth: 287,
    coverHeight: 500,
    tags: ["About"],
  },
];

export function getGenreMeta(slug: string): GenreMeta | undefined {
  return genres.find((genre) => genre.slug === slug);
}
