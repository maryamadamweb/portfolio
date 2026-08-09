import type { GalleryImage } from "@/types/genre";

export type IllustrationLink = { href: string; label: string };

export type Illustration = {
  slug: string;
  name: string;
  credit?: string;
  summary?: string;
  images: GalleryImage[];
  links?: IllustrationLink[];
};

const BASE = "/genres/illustrations";

// Order follows the client's requested sequence.
export const illustrations: Illustration[] = [
  {
    slug: "islamic-relief",
    name: "Islamic Relief",
    summary:
      "Illustrated calendar as part of a wider printed pack, featuring a front-facing illustration of Sunnah fruits and a reverse Islamic calendar layout. Designed using existing brand fonts and assets, prepared for print.",
    images: [
      {
        src: `${BASE}/illustration-1.webp`,
        width: 1871,
        height: 2000,
        alt: "Islamic Relief illustrated calendar pack",
      },
    ],
  },
  {
    slug: "steward",
    name: "Steward",
    summary:
      "Illustrating 18 components of a layered ecosystem (Chaparral) to be part of a dynamic NFT collection, built to use blockchain technology and NFTs for environmental good.",
    images: [
      {
        src: `${BASE}/illustration-2.webp`,
        width: 2000,
        height: 1905,
        alt: "Steward Chaparral ecosystem illustration",
      },
    ],
  },
  {
    slug: "telling",
    name: "'Telling' — Together We Belong",
    credit: "Merrachi",
    summary:
      "An observation on the visible and invisible labor of women, and the generational systems of care that sustain community while remaining unseen. Featured in Merrachi's fundraising book 'Together We Belong'.",
    images: [
      {
        src: `${BASE}/illustration-3.webp`,
        width: 1871,
        height: 2000,
        alt: "'Telling' illustration for Merrachi's Together We Belong",
      },
    ],
  },
  {
    slug: "hyphen-online",
    name: "Hyphen Online",
    summary: "Various article features for Hyphen Online.",
    images: [
      {
        src: `${BASE}/illustration-4.webp`,
        width: 1871,
        height: 2000,
        alt: "Hyphen Online article illustrations",
      },
    ],
    links: [
      {
        href: "https://hyphenonline.com/2024/01/31/ns-nuseibeh-namesake-extract-house-guests-hospitality-hijab/",
        label: "House guests, hospitality and the hijab",
      },
      {
        href: "https://hyphenonline.com/2023/11/22/muslim-and-minority-renters-are-at-the-sharp-end-of-londons-housing-crisis/",
        label:
          "Muslim and minority renters are at the sharp end of London's housing crisis",
      },
      {
        href: "https://hyphenonline.com/2023/10/05/a-nightly-bargain-an-exclusive-poem-momtaza-mehri/",
        label: "A Nightly Bargain — an exclusive poem",
      },
    ],
  },
  {
    slug: "unappealing",
    name: "Unappealing",
    summary: "On grief, and the out-of-body experience.",
    images: [
      {
        src: `${BASE}/illustration-5.webp`,
        width: 1423,
        height: 2000,
        alt: "Unappealing illustration",
      },
      {
        src: `${BASE}/illustration-5b.webp`,
        width: 757,
        height: 2000,
        alt: "Unappealing pear detail",
      },
    ],
  },
  {
    slug: "olives-for-resistance",
    name: "Olives for Resistance",
    summary:
      "'Olives for Resistance' is a digital illustration of olive tree branches that have famously lived and been taken care of in Palestine for hundreds of years. Thousands of olive trees in Palestine have been burnt down, vandalised and destroyed by the settlers. The olives in this piece take a hyperrealistic approach to the fishnet and olive leaf pattern on the Palestinian keffiyeh.",
    images: [
      {
        src: `${BASE}/illustration-6.webp`,
        width: 1871,
        height: 2000,
        alt: "Olives for Resistance illustration",
      },
    ],
  },
  {
    slug: "roots-for-resistance",
    name: "Roots for Resistance",
    summary:
      "'Roots for Resistance' is a digital illustration that lives within the @beyondtheb_x and @buildhollywood 'Expressions of Resilience' exhibition, curated by @akif.ur and @tlnfilms. Sudan is currently facing one of the world's largest humanitarian crises, primarily in areas like Darfur. Photographer Sali Mudawi points out that \"At least 150,000 people are dead, 10 million displaced, 800,000 facing catastrophic levels of food insecurity, 25.6 million facing high levels of acute food insecurity and 8 million people are on the brink of starvation.\" The ongoing proxy war has devastated the population and destabilised the country. It has resulted in a man-made famine, and the country's heavy dependence on agriculture for both sustenance and the economy makes this crisis even more critical.\n\nThis illustration shows the Nile intertwined with wilting sorghum plants, a crop from Sudan, as a reminder of how essential it is for us to \"increase awareness, support humanitarian organisations and on-the-ground fundraisers, and advocate for international intervention and aid.\" Like many countries, Sudan still bears the scars of British colonisation, which set the stage for its current state by \"leaving a legacy of division and weak governance\" — the same imperialist powers now being called on to prioritise Sudan's urgent humanitarian needs. As the world continues to scramble for Sudan's abundant resources, its people continue to bleed.",
    images: [
      {
        src: `${BASE}/illustration-7.webp`,
        width: 1737,
        height: 2000,
        alt: "Roots for Resistance illustration",
      },
    ],
  },
  {
    slug: "dates",
    name: "Dates",
    images: [
      {
        src: `${BASE}/illustration-8.webp`,
        width: 1871,
        height: 2000,
        alt: "Dates illustration",
      },
    ],
  },
  {
    slug: "newham-heritage-month",
    name: "Newham Heritage Month",
    summary:
      "Creating digital banners and other marketing materials showcasing the Newham Heritage Month workshop theme 'Art and Islam'. Incorporating both English and Arabic typography. Produced and co-led workshops within Newham on cultural heritage and preservation.",
    images: [
      {
        src: `${BASE}/illustration-9.webp`,
        width: 1871,
        height: 2000,
        alt: "Newham Heritage Month workshop banner illustration",
      },
    ],
  },
];
