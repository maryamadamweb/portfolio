export type HandImage = {
  src: string;
  width: number;
  height: number;
  top: number; // percentage down the page
  left: number; // percentage across the page
  rotate?: number; // degrees, defaults to 0
  scale?: number; // multiplier, defaults to 1
};

// Decorative frame photos for this page only — not part of the shared
// GenreMeta/GalleryImage model since they're specific to this one layout.
// top/left/rotate are hand-tuned approximations of the sketch — nudge these
// directly to reposition any individual hand.
export const hands: HandImage[] = [
  {
    src: "/genres/henna/hands/henna-1.png",
    width: 1344,
    height: 1600,
    top: 3,
    left: 50,
    rotate: 0,
  },
  {
    src: "/genres/henna/hands/henna-2.png",
    width: 1600,
    height: 1517,
    top: 22,
    left: 90,
    rotate: 0,
  },

  {
    src: "/genres/henna/hands/henna-4.png",
    width: 1374,
    height: 1600,
    top: 50,
    left: 4,
    rotate: 8,
  },
  {
    src: "/genres/henna/hands/henna-5.png",
    width: 1403,
    height: 1600,
    top: 50,
    left: 9,
    rotate: -6,
  },
  {
    src: "/genres/henna/hands/henna-6.png",
    width: 1278,
    height: 1600,
    top: 50,
    left: 3,
    rotate: 5,
  },
  {
    src: "/genres/henna/hands/henna-7.png",
    width: 854,
    height: 1600,
    top: 30,
    left: 8,
    rotate: -7,
  },
  {
    src: "/genres/henna/hands/henna-8.png",
    width: 1600,
    height: 1567,
    top: 40,
    left: 4,
    rotate: 6,
  },
  {
    src: "/genres/henna/hands/henna-9.png",
    width: 962,
    height: 1600,
    top: 6,
    left: 86,
    rotate: 25,
    scale: 0.8,
  },
  // {
  //   src: "/genres/henna/hands/henna-10.png",
  //   width: 917,
  //   height: 1600,
  //   top: 26,
  //   left: 70,
  //   rotate: -6,
  // },
  {
    src: "/genres/henna/hands/henna-11.png",
    width: 1326,
    height: 1600,
    top: 7,
    left: 20,
    rotate: -80,
  },
  {
    src: "/genres/henna/hands/henna-3.png",
    width: 1244,
    height: 1600,
    top: 6,
    left: 10,
    rotate: -10,
    scale: 0.8,
  },
  {
    src: "/genres/henna/hands/henna-12.png",
    width: 1600,
    height: 963,
    top: 15,
    left: 89,
    rotate: -5,
  },
  {
    src: "/genres/henna/hands/henna-13.png",
    width: 735,
    height: 1600,
    top: 40,
    left: 95,
    rotate: 6,
  },
  {
    src: "/genres/henna/hands/henna-14.png",
    width: 1084,
    height: 1600,
    top: 40,
    left: 90,
    rotate: -8,
  },
  {
    src: "/genres/henna/hands/henna-15.png",
    width: 1236,
    height: 1600,
    top: 50,
    left: 95,
    rotate: 5,
  },
];
