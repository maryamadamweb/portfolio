import type { GalleryImage } from "@/types/genre";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  images: GalleryImage[];
};

const summaryPlaceholder = "A short placeholder description of this project.";
const piece = "A short placeholder description of this piece.";

const BASE = "/genres/residencies-workshops-exhibitions";

export const projects: Project[] = [
  {
    slug: "rabbits-road-press",
    name: "Rabbits Road Press (Residency)",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/residencies/rabbits-road-press/residency-1.jpg`, width: 1200, height: 1600, alt: "Rabbits Road Press residency", description: piece },
      { src: `${BASE}/residencies/rabbits-road-press/residency-2.jpg`, width: 1200, height: 1600, alt: "Rabbits Road Press residency", description: piece },
      { src: `${BASE}/residencies/rabbits-road-press/residency-3.png`, width: 788, height: 1400, alt: "Rabbits Road Press residency", description: piece },
      { src: `${BASE}/residencies/rabbits-road-press/residency-4.png`, width: 788, height: 1400, alt: "Rabbits Road Press residency", description: piece },
      { src: `${BASE}/residencies/rabbits-road-press/residency-5.png`, width: 788, height: 1400, alt: "Rabbits Road Press residency", description: piece },
      { src: `${BASE}/residencies/rabbits-road-press/residency-6.png`, width: 788, height: 1400, alt: "Rabbits Road Press residency", description: piece },
    ],
  },
  {
    slug: "newham-heritage-month",
    name: "Newham Heritage Month (Workshops)",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-1.jpg`, width: 1072, height: 1600, alt: "Newham Heritage Month workshop", description: piece },
      { src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-2.jpg`, width: 900, height: 1600, alt: "Newham Heritage Month workshop", description: piece },
      { src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-3.jpg`, width: 900, height: 1600, alt: "Newham Heritage Month workshop", description: piece },
      { src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-4.jpg`, width: 900, height: 1600, alt: "Newham Heritage Month workshop", description: piece },
      { src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-5.jpg`, width: 1280, height: 1600, alt: "Newham Heritage Month workshop", description: piece },
      { src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-6.jpg`, width: 1600, height: 800, alt: "Newham Heritage Month workshop", description: piece },
    ],
  },
  {
    slug: "rosetta-arts",
    name: "Rosetta Arts (Artist Accelerator Programme)",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/workshops/rosetta-arts/rosetta-arts-1.jpg`, width: 1280, height: 1600, alt: "Rosetta Arts Artist Accelerator Programme", description: piece },
      { src: `${BASE}/workshops/rosetta-arts/rosetta-arts-2.jpg`, width: 1280, height: 1600, alt: "Rosetta Arts Artist Accelerator Programme", description: piece },
      { src: `${BASE}/workshops/rosetta-arts/rosetta-arts-3.jpg`, width: 1170, height: 1450, alt: "Rosetta Arts Artist Accelerator Programme", description: piece },
      { src: `${BASE}/workshops/rosetta-arts/rosetta-arts-4.png`, width: 514, height: 495, alt: "Rosetta Arts Artist Accelerator Programme", description: piece },
    ],
  },
  {
    slug: "va-east",
    name: "V&A East (Workshops)",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/workshops/va-east/va-east-1.jpg`, width: 1600, height: 1067, alt: "V&A East workshop", description: piece },
      { src: `${BASE}/workshops/va-east/va-east-2.jpg`, width: 1600, height: 1067, alt: "V&A East workshop", description: piece },
      { src: `${BASE}/workshops/va-east/va-east-3.jpg`, width: 1600, height: 1067, alt: "V&A East workshop", description: piece },
    ],
  },
  {
    slug: "henna-workshops",
    name: "Henna Workshops",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-1.jpg`, width: 1280, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-2.jpg`, width: 1280, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-3.jpg`, width: 1067, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-4.jpg`, width: 1280, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-5.jpg`, width: 900, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-6.jpg`, width: 1280, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-7.jpg`, width: 1200, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-8.jpg`, width: 900, height: 1600, alt: "Henna workshop", description: piece },
      { src: `${BASE}/workshops/henna-workshops/henna-workshops-9.jpg`, width: 900, height: 1600, alt: "Henna workshop", description: piece },
    ],
  },
  {
    slug: "reinstate",
    name: "Reinstate — Workshops and Community Mural",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/workshops/reinstate/reinstate-1.jpg`, width: 461, height: 1600, alt: "Reinstate workshop and community mural", description: piece },
      { src: `${BASE}/workshops/reinstate/reinstate-2.jpg`, width: 900, height: 1600, alt: "Reinstate workshop and community mural", description: piece },
      { src: `${BASE}/workshops/reinstate/reinstate-3.jpg`, width: 1600, height: 1200, alt: "Reinstate workshop and community mural", description: piece },
      { src: `${BASE}/workshops/reinstate/reinstate-4.jpg`, width: 1200, height: 1600, alt: "Reinstate workshop and community mural", description: piece },
      { src: `${BASE}/workshops/reinstate/reinstate-5.jpg`, width: 1200, height: 1600, alt: "Reinstate workshop and community mural", description: piece },
      { src: `${BASE}/workshops/reinstate/reinstate-6.jpg`, width: 900, height: 1600, alt: "Reinstate workshop and community mural", description: piece },
    ],
  },
  {
    slug: "humble-abode",
    name: "Humble Abode",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/exhibitions/humble-abode/humble-abode-1.jpg`, width: 1200, height: 1600, alt: "Humble Abode exhibition", description: piece },
      { src: `${BASE}/exhibitions/humble-abode/humble-abode-2.jpg`, width: 1292, height: 1600, alt: "Humble Abode exhibition", description: piece },
      { src: `${BASE}/exhibitions/humble-abode/humble-abode-3.jpg`, width: 960, height: 1280, alt: "Humble Abode exhibition", description: piece },
    ],
  },
  {
    slug: "william-morris-gallery",
    name: "William Morris Gallery",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/exhibitions/william-morris-gallery/william-morris-gallery-1.jpg`, width: 1280, height: 1600, alt: "William Morris Gallery exhibition", description: piece },
    ],
  },
  {
    slug: "somewhere-i-live",
    name: "Somewhere I Live",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/exhibitions/somewhere-i-live/somewhere-i-live-1.jpg`, width: 1200, height: 1600, alt: "Somewhere I Live exhibition", description: piece },
    ],
  },
  {
    slug: "fruit-salad",
    name: "Fruit Salad",
    summary: summaryPlaceholder,
    images: [
      { src: `${BASE}/exhibitions/fruit-salad/fruit-salad-1.jpg`, width: 1600, height: 1200, alt: "Fruit Salad exhibition", description: piece },
    ],
  },
];
