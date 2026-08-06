"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import { GenreGalleryDialog } from "@/components/genres/GenreGalleryDialog";
import type { Project } from "./projects";
import styles from "./ProjectCluster.module.css";

type GalleryImage = Project["images"][number];

const HERO_WIDTH = 340;
const REST_WIDTH = 230;
const GAP = 16;

function estimatedHeight(image: GalleryImage, width: number) {
  return (width / image.width) * image.height;
}

// The first image is the standout piece, sized on its own. The rest are
// bin-packed into as many side columns as it takes to roughly match the
// hero's height — so a handful of shorter images actually stack up to fill
// the space alongside one tall image, instead of leaving it mostly empty.
function layoutCluster(images: GalleryImage[]) {
  const [hero, ...rest] = images;
  const heroHeight = estimatedHeight(hero, HERO_WIDTH);

  if (rest.length === 0) {
    return { hero, columns: [] as GalleryImage[][] };
  }

  const restTotalHeight = rest.reduce(
    (sum, image) => sum + estimatedHeight(image, REST_WIDTH) + GAP,
    0
  );
  const columnCount = Math.max(1, Math.ceil(restTotalHeight / heroHeight));

  const columns: GalleryImage[][] = Array.from(
    { length: columnCount },
    () => []
  );
  const columnHeights = new Array(columnCount).fill(0);

  for (const image of rest) {
    const shortest = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortest].push(image);
    columnHeights[shortest] += estimatedHeight(image, REST_WIDTH) + GAP;
  }

  return { hero, columns };
}

// Slight vertical overlap between images stacked in the same column, like
// items pinned close together rather than evenly spaced apart.
const COLUMN_OVERLAP = [0, -0.75, 1, -1, 0.5, -0.5];

function overlapStyle(indexInColumn: number): CSSProperties {
  if (indexInColumn === 0) return {};
  return { marginTop: `${COLUMN_OVERLAP[indexInColumn % COLUMN_OVERLAP.length]}rem` };
}

function clusterWidth(columnCount: number) {
  return HERO_WIDTH + GAP + columnCount * (REST_WIDTH + GAP) + 40;
}

export function ProjectCluster({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { hero, columns } = useMemo(
    () => layoutCluster(project.images),
    [project.images]
  );

  function openAt(image: GalleryImage) {
    setSelectedIndex(project.images.indexOf(image));
    setDialogOpen(true);
  }

  return (
    <section
      className={styles.cluster}
      style={{ maxWidth: clusterWidth(columns.length) }}
    >
      <h2 className={styles.name}>{project.name}</h2>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.collage}>
        <button
          type="button"
          className={styles.hero}
          onClick={() => openAt(hero)}
        >
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            sizes="(max-width: 700px) 60vw, 340px"
            className={styles.media}
          />
        </button>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.column}>
            {column.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={styles.frame}
                style={overlapStyle(index)}
                onClick={() => openAt(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 700px) 45vw, 230px"
                  className={styles.media}
                />
              </button>
            ))}
          </div>
        ))}
      </div>
      <GenreGalleryDialog
        image={selectedIndex !== null ? project.images[selectedIndex] : null}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
