"use client";

import { useState } from "react";
import type { GenreMeta } from "@/types/genre";
import { GenreGalleryDialog } from "./GenreGalleryDialog";
import { GenreGalleryTile } from "./GenreGalleryTile";
import styles from "./GenreGallery.module.css";

export function GenreGallery({ genre }: { genre: GenreMeta }) {
  const images = genre.images ?? [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <GenreGalleryTile
            key={image.src}
            image={image}
            badgeSrc={genre.cover}
            badgeWidth={genre.coverWidth}
            badgeHeight={genre.coverHeight}
            onSelect={() => {
              setSelectedIndex(index);
              setDialogOpen(true);
            }}
          />
        ))}
      </div>
      <GenreGalleryDialog
        image={selectedIndex !== null ? images[selectedIndex] : null}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
