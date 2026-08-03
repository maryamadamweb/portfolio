export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  description: string;
};

export type GenreMeta = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  coverVideo?: string;
  coverAnimation?: string;
  tags: string[];
  images?: GalleryImage[];
};
