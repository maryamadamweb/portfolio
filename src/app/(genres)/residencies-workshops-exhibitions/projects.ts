import type { GalleryImage } from "@/types/genre";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  images: GalleryImage[];
  // Overrides ProjectCluster's auto-computed side-column count. Only needed
  // when a hero image is an outlier aspect ratio that the formula can't
  // balance well (see Reinstate below).
  restColumnCount?: number;
  // Opts into a bespoke stacked-rows layout instead of the default
  // hero+side-columns one: images are grouped in array order into rows of
  // these sizes (e.g. [1, 2, 3] = one full-width image, then a row of 2,
  // then a row of 3), each row shorter than the last. Used for clusters
  // the client wants a specific curated composition for rather than the
  // auto-computed one.
  rows?: number[];
  // Shrinks the hero below the default HERO_WIDTH (also used when
  // estimating its height for the column-count formula, so bin-packing
  // stays consistent with the smaller hero). Frees up row width for the
  // rest columns to flex-grow into — paired with growColumns below.
  heroWidth?: number;
  // Loosens the rest columns' default max-width cap (REST_WIDTH) so
  // flex-grow (already enabled on .column) can expand each column to fill
  // whatever width is left in its row. `true` removes the cap entirely;
  // a number sets a higher cap instead of uncapping it fully, for clusters
  // where unlimited growth over-fills solo-image rows.
  growColumns?: boolean | number;
  // Column indices (in the auto-computed column layout, 0 = the column
  // immediately right of the hero) that should space their images with a
  // normal gap instead of the default pinned-overlap stacking.
  looseColumns?: number[];
  // Overrides the default 1rem gap used between images in a loose column.
  looseColumnGap?: number;
  // Nudges images after the first in a loose column rightward by this many
  // rem, so the stack reads as an intentionally imperfect, hand-placed
  // arrangement rather than a rigid grid.
  looseColumnShift?: number;
  // Row indices (in "rows" layout mode) that should size each image by
  // aspect ratio instead of splitting the row width evenly — so images of
  // very different aspect ratios in the same row render at the same
  // height instead of the narrower one looking stretched-tall. No
  // cropping: each image keeps its own ratio, just narrower or wider. The
  // resulting row is also scaled down (JUSTIFIED_ROW_SCALE) and centered
  // rather than stretched edge to edge, with a slightly larger gap
  // (JUSTIFIED_GAP) between images.
  justifyRows?: number[];
};

const summaryPlaceholder = "A short placeholder description of this project.";
const piece = "A short placeholder description of this piece.";

const BASE = "/genres/residencies-workshops-exhibitions";

// Order is loosely by category (residency, workshops, exhibitions) but the
// single-image exhibitions are interspersed throughout rather than left to
// clump at the end, so the page doesn't read as "big stuff, then a row of
// tiny leftovers" — each one sits next to a larger cluster instead.
export const projects: Project[] = [
  {
    slug: "rabbits-road-press",
    name: "Rabbits Road Press (Residency)",
    summary:
      "Rabbits Road Press Residency (2023) — Explored early POC-owned businesses in Newham through archival research and design, using shop fronts as visual markers of care, migration, and belonging.",
    // Client feedback: the hero was leaving the postcard-set column
    // (residency-3/5, column 0) short of its height with dead space below
    // — shrink the hero a bit to give every rest column more row width to
    // grow into, and give column 0 a normal gap instead of the pinned
    // overlap so residency-3/5 read bigger and clearly separated.
    heroWidth: 300,
    growColumns: true,
    looseColumns: [0],
    images: [
      {
        src: `${BASE}/residencies/rabbits-road-press/residency-1.jpg`,
        width: 1200,
        height: 1600,
        alt: "Rabbits Road Press residency",
        description: piece,
      },
      {
        src: `${BASE}/residencies/rabbits-road-press/residency-3.png`,
        width: 726,
        height: 504,
        alt: "Rabbits Road Press residency",
        description: piece,
      },
      {
        src: `${BASE}/residencies/rabbits-road-press/residency-4.png`,
        width: 788,
        height: 569,
        alt: "Rabbits Road Press residency",
        description: piece,
      },
      {
        src: `${BASE}/residencies/rabbits-road-press/residency-2.jpg`,
        width: 1200,
        height: 1600,
        alt: "Rabbits Road Press residency",
        description: piece,
      },
      {
        src: `${BASE}/residencies/rabbits-road-press/residency-5.png`,
        width: 682,
        height: 474,
        alt: "Rabbits Road Press residency",
        description: piece,
      },
      {
        src: `${BASE}/residencies/rabbits-road-press/residency-6.png`,
        width: 724,
        height: 523,
        alt: "Rabbits Road Press residency",
        description: piece,
      },
    ],
  },
  {
    slug: "newham-heritage-month",
    name: "Newham Heritage Month (Workshops)",
    summary:
      "Newham Heritage Month (2022-2023) — Led creative workshops for local children, exploring heritage and identity through art to build confidence and pride in their stories.",
    // Client feedback: "can these be aligned like this but neater" — a
    // curated 2/3/1 stack (rugs+beads, then 3 craft close-ups, then the
    // floral illustration full-width at the bottom) instead of the
    // auto-computed hero+columns split.
    rows: [2, 3, 1],
    images: [
      {
        src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-5.jpg`,
        width: 1280,
        height: 1600,
        alt: "Newham Heritage Month workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-1.jpg`,
        width: 1072,
        height: 1600,
        alt: "Newham Heritage Month workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-3.jpg`,
        width: 900,
        height: 1600,
        alt: "Newham Heritage Month workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-4.jpg`,
        width: 900,
        height: 1600,
        alt: "Newham Heritage Month workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-2.jpg`,
        width: 900,
        height: 1600,
        alt: "Newham Heritage Month workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/newham-heritage-month/newham-heritage-month-6.jpg`,
        width: 1600,
        height: 800,
        alt: "Newham Heritage Month workshop",
        description: piece,
      },
    ],
  },
  {
    slug: "somewhere-i-live",
    name: "Somewhere I Live",
    summary: "Exhibition display.",
    images: [
      {
        src: `${BASE}/exhibitions/somewhere-i-live/somewhere-i-live-1.jpg`,
        width: 1200,
        height: 1600,
        alt: "Somewhere I Live exhibition",
        description: piece,
      },
    ],
  },
  {
    slug: "rosetta-arts",
    name: "Rosetta Arts (Artist Accelerator Programme)",
    summary:
      "Frottage in nature workshop with locals at the Stratford Waterglades.",
    // Client feedback: put rosetta-arts-3 and rosetta-arts-4 next to each
    // other instead of stacked in the same column — one column per rest
    // image puts all 3 side by side.
    restColumnCount: 3,
    images: [
      {
        src: `${BASE}/workshops/rosetta-arts/rosetta-arts-1.jpg`,
        width: 1280,
        height: 1600,
        alt: "Rosetta Arts Artist Accelerator Programme",
        description: piece,
      },
      {
        src: `${BASE}/workshops/rosetta-arts/rosetta-arts-2.jpg`,
        width: 1280,
        height: 1600,
        alt: "Rosetta Arts Artist Accelerator Programme",
        description: piece,
      },
      {
        src: `${BASE}/workshops/rosetta-arts/rosetta-arts-3.jpg`,
        width: 1170,
        height: 1450,
        alt: "Rosetta Arts Artist Accelerator Programme",
        description: piece,
      },
      {
        src: `${BASE}/workshops/rosetta-arts/rosetta-arts-4.png`,
        width: 514,
        height: 495,
        alt: "Rosetta Arts Artist Accelerator Programme",
        description: piece,
      },
    ],
  },
  {
    slug: "va-east",
    name: "V&A East (Workshops)",
    summary:
      "V&A East Summer School (Workshops) — Co-facilitated screen-print workshops with Memunatu Barrie for young people in Stratford.",
    images: [
      {
        src: `${BASE}/workshops/va-east/va-east-1.jpg`,
        width: 1600,
        height: 1067,
        alt: "V&A East workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/va-east/va-east-2.jpg`,
        width: 1600,
        height: 1067,
        alt: "V&A East workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/va-east/va-east-3.jpg`,
        width: 1600,
        height: 1067,
        alt: "V&A East workshop",
        description: piece,
      },
    ],
  },
  {
    slug: "william-morris-gallery",
    name: "William Morris Gallery",
    summary: "Exhibition display.",
    images: [
      {
        src: `${BASE}/exhibitions/william-morris-gallery/william-morris-gallery-1.jpg`,
        width: 1280,
        height: 1600,
        alt: "William Morris Gallery exhibition",
        description: piece,
      },
    ],
  },
  {
    slug: "henna-workshops",
    name: "Henna Workshops",
    summary: "Various co-led henna workshops for Huq That.",
    // Client feedback: images read too small relative to the leftover
    // column width — let each column's flex-grow (already enabled, just
    // capped) expand into whatever width is free instead of staying
    // pinned at REST_WIDTH. Uncapped growth over-filled the many
    // solo-image rows this cluster's 7-column split produces, so this
    // caps growth at 260px (~0.8x the ~325px it grew to uncapped) instead
    // of removing the cap entirely.
    growColumns: 260,
    images: [
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-1.jpg`,
        width: 1280,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-5.jpg`,
        width: 900,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-8.jpg`,
        width: 900,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-2.jpg`,
        width: 1280,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-9.jpg`,
        width: 900,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-3.jpg`,
        width: 1067,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-7.jpg`,
        width: 1200,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-6.jpg`,
        width: 1280,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
      {
        src: `${BASE}/workshops/henna-workshops/henna-workshops-4.jpg`,
        width: 1280,
        height: 1600,
        alt: "Henna workshop",
        description: piece,
      },
    ],
  },
  {
    slug: "reinstate",
    name: "Reinstate — Workshops and Community Mural",
    summary:
      "Reinstate (2024) — Co-led participatory mural workshops with former Tate & Lyle workers and residents, transforming shared histories into collective visual storytelling. Commissioned by Newham Council.",
    // Client feedback: lead with the mural building itself, then pair the
    // kids' original pencil drawing with a close-up of the painted panel
    // it became, then the 3 workshop-process shots at the bottom — a
    // curated 1/2/3 stack instead of the auto-computed hero+columns split.
    rows: [1, 2, 3],
    // reinstate-1 is a much narrower crop (461w) than reinstate-2 (900w),
    // so splitting their row evenly by width made reinstate-1 render far
    // taller than reinstate-2 — justify row 1 by aspect ratio instead so
    // they match heights.
    justifyRows: [1],
    images: [
      {
        src: `${BASE}/workshops/reinstate/reinstate-3.jpg`,
        width: 1600,
        height: 1200,
        alt: "Reinstate workshop and community mural",
        description: piece,
      },
      {
        src: `${BASE}/workshops/reinstate/reinstate-1.jpg`,
        width: 461,
        height: 1600,
        alt: "Reinstate workshop and community mural",
        description: piece,
      },
      {
        src: `${BASE}/workshops/reinstate/reinstate-2.jpg`,
        width: 900,
        height: 1600,
        alt: "Reinstate workshop and community mural",
        description: piece,
      },
      {
        src: `${BASE}/workshops/reinstate/reinstate-4.jpg`,
        width: 1200,
        height: 1600,
        alt: "Reinstate workshop and community mural",
        description: piece,
      },
      {
        src: `${BASE}/workshops/reinstate/reinstate-5.jpg`,
        width: 1200,
        height: 1600,
        alt: "Reinstate workshop and community mural",
        description: piece,
      },
      {
        src: `${BASE}/workshops/reinstate/reinstate-6.jpg`,
        width: 900,
        height: 1600,
        alt: "Reinstate workshop and community mural",
        description: piece,
      },
    ],
  },
  {
    slug: "humble-abode",
    name: "Humble Abode",
    summary: "Co-curated exhibition, fashion show and event.",
    // Client feedback: align the group photo and the room shot as one
    // stacked column instead of side-by-side columns, with extra breathing
    // room between them and the room shot nudged right so the pair reads
    // as a deliberately imperfect, hand-placed stack rather than a grid.
    restColumnCount: 1,
    looseColumns: [0],
    looseColumnGap: 2,
    looseColumnShift: 1.5,
    images: [
      {
        src: `${BASE}/exhibitions/humble-abode/humble-abode-1.jpg`,
        width: 1200,
        height: 1600,
        alt: "Humble Abode exhibition",
        description: piece,
      },
      {
        src: `${BASE}/exhibitions/humble-abode/humble-abode-2.jpg`,
        width: 1292,
        height: 1600,
        alt: "Humble Abode exhibition",
        description: piece,
      },
      {
        src: `${BASE}/exhibitions/humble-abode/humble-abode-3.jpg`,
        width: 960,
        height: 1280,
        alt: "Humble Abode exhibition",
        description: piece,
      },
    ],
  },
  {
    slug: "fruit-salad",
    name: "Fruit Salad",
    summary: "Exhibition display.",
    // Client feedback: make this bigger.
    rows: [1],
    images: [
      {
        src: `${BASE}/exhibitions/fruit-salad/fruit-salad-1.jpg`,
        width: 1600,
        height: 1200,
        alt: "Fruit Salad exhibition",
        description: piece,
      },
    ],
  },
];
