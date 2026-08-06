import Image from "next/image";
import type { GalleryImage } from "@/types/genre";
import styles from "./GenreGalleryTile.module.css";

export function GenreGalleryTile({
  image,
  badgeSrc,
  badgeWidth,
  badgeHeight,
  onSelect,
}: {
  image: GalleryImage;
  badgeSrc: string;
  badgeWidth: number;
  badgeHeight: number;
  onSelect: () => void;
}) {
  return (
    <button type="button" className={styles.tile} onClick={onSelect}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 900px) 45vw, 500px"
        className={styles.image}
      />
      <Image
        src={badgeSrc}
        alt=""
        width={badgeWidth}
        height={badgeHeight}
        sizes="100px"
        className={styles.badge}
      />
    </button>
  );
}
