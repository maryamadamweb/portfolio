export type Painting = {
  src: string;
  width: number;
  height: number;
  name: string;
  subtitle: string;
  about: string;
};

const namePlaceholder = "Painting name";
const subtitlePlaceholder = "Medium, dimensions, year";
const aboutPlaceholder = "A sentence or two about this painting.";

export const paintings: Painting[] = [
  {
    src: "/genres/paintings/painting-2.jpg",
    width: 1083,
    height: 1600,
    name: "Orchid-Terrarium",
    subtitle: "Oil painting, 2025",
    about: "Orchid-Terrarium explores the cyclical relationship between humans and the earth, focusing on how imperialists have historically disregarded the land they sought and currently seek to inhabit, viewing it as a resource for extraction rather than a living system requiring reciprocal care. Read more: https://substack.com/@naramm/p-182720240",
  },
  {
    src: "/genres/paintings/painting-1.jpg",
    width: 1600,
    height: 1592,
    name: "'The Land of Sad Oranges' for Fruit Salad",
    subtitle: "Oil on canvas, 100 x 100cm, 2023",
    about: "Watered by Strange Hands is a painting inspired by Ghassan Kanafani's The Land of Sad Oranges, capturing the displacement of Palestinians in 1948. Through the symbol of the Jaffa orange, the artwork reflects the decay brought by colonialism, highlighting how the occupier remains disconnected from the land they claim. The piece conveys that colonizers will never nurture or mourn the land and its people the way Palestinians do. Curated by Sara David and Alexis Parinas.",
  },
  {
    src: "/genres/paintings/painting-3.jpg",
    width: 1280,
    height: 1600,
    name: namePlaceholder,
    subtitle: subtitlePlaceholder,
    about: aboutPlaceholder,
  },
  {
    src: "/genres/paintings/painting-4.jpg",
    width: 1200,
    height: 1600,
    name: "'Talking Petals'",
    subtitle: "Commission, oil on canvas, 100 x 70cm, 2024",
    about: "A commission for a client, the brief was to focus on the client's mother, grief, vibrant colours, a plum orchid, and her foggy morning walks — tied together with the quote 'With every hardship comes ease.'",
  },
];
