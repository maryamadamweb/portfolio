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
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "A short one-line description of this genre.",
    cover: "/genres/graphic-design/cover.png",
    coverWidth: 1188,
    coverHeight: 1147,
    tags: ["Design"],
  },
  {
    slug: "henna",
    title: "Henna",
    summary: "A short one-line description of this genre.",
    cover: "/genres/henna/cover.png",
    coverWidth: 1448,
    coverHeight: 2835,
    tags: ["Henna"],
  },
  {
    slug: "paintings",
    title: "Paintings",
    summary: "A short one-line description of this genre.",
    cover: "/genres/paintings/cover.png",
    coverWidth: 1057,
    coverHeight: 1057,
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
    slug: "residencies",
    title: "Residencies",
    summary: "A short one-line description of this genre.",
    cover: "/genres/residencies/cover.jpg",
    coverWidth: 561,
    coverHeight: 394,
    tags: ["Residencies"],
  },
  {
    slug: "about",
    title: "About",
    summary: "A short one-line description of this genre.",
    cover: "/genres/about/cover-poster.jpg",
    coverVideo: "/genres/about/cover.mp4",
    coverWidth: 480,
    coverHeight: 480,
    tags: ["About"],
  },
];

export function getGenreMeta(slug: string): GenreMeta | undefined {
  return genres.find((genre) => genre.slug === slug);
}
