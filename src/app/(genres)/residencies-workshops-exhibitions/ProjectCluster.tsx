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
//
// `columnOverride` exists for clusters whose hero is an outlier aspect
// ratio (e.g. Reinstate's very tall portrait scan) where the auto-computed
// column count leaves each column short of the hero's height no matter how
// the images are split — forcing fewer, taller columns there fixes it
// without changing the formula for every other cluster.
function layoutCluster(
  images: GalleryImage[],
  columnOverride?: number,
  heroWidth = HERO_WIDTH
) {
  const [hero, ...rest] = images;
  const heroHeight = estimatedHeight(hero, heroWidth);

  if (rest.length === 0) {
    return { hero, columns: [] as GalleryImage[][] };
  }

  const restTotalHeight = rest.reduce(
    (sum, image) => sum + estimatedHeight(image, REST_WIDTH) + GAP,
    0
  );
  const columnCount =
    columnOverride ?? Math.max(1, Math.ceil(restTotalHeight / heroHeight));

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

function clusterWidth(columnCount: number, heroWidth = HERO_WIDTH) {
  return heroWidth + GAP + columnCount * (REST_WIDTH + GAP) + 40;
}

// Fixed width for the "rows" layout mode — derived from the same
// REST_WIDTH/GAP scale as the hero+columns mode so a 3-wide bottom row
// reads at a consistent size with the rest of the page.
const ROWS_WIDTH = 3 * REST_WIDTH + 2 * GAP;

function layoutRows(images: GalleryImage[], rows: number[]) {
  const result: GalleryImage[][] = [];
  let i = 0;
  for (const count of rows) {
    result.push(images.slice(i, i + count));
    i += count;
  }
  return result;
}

export function ProjectCluster({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const heroWidth = project.heroWidth ?? HERO_WIDTH;
  const { hero, columns } = useMemo(
    () => layoutCluster(project.images, project.restColumnCount, heroWidth),
    [project.images, project.restColumnCount, heroWidth]
  );
  const rows = useMemo(
    () => (project.rows ? layoutRows(project.images, project.rows) : null),
    [project.images, project.rows]
  );

  function openAt(image: GalleryImage) {
    setSelectedIndex(project.images.indexOf(image));
    setDialogOpen(true);
  }

  return (
    <section
      className={styles.cluster}
      style={{
        maxWidth: rows ? ROWS_WIDTH : clusterWidth(columns.length, heroWidth),
      }}
    >
      <h2 className={styles.name}>{project.name}</h2>
      <p className={styles.summary}>{project.summary}</p>
      {rows ? (
        <div className={styles.rows}>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  className={styles.rowItem}
                  onClick={() => openAt(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={`(max-width: 700px) 90vw, ${Math.round(ROWS_WIDTH / row.length)}px`}
                    className={styles.media}
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.collage}>
          <button
            type="button"
            className={styles.hero}
            style={
              heroWidth !== HERO_WIDTH
                ? { flexBasis: heroWidth, maxWidth: heroWidth }
                : undefined
            }
            onClick={() => openAt(hero)}
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              sizes={`(max-width: 700px) 60vw, ${heroWidth}px`}
              className={styles.media}
            />
          </button>
          {columns.map((column, columnIndex) => {
            const loose = project.looseColumns?.includes(columnIndex);
            return (
              <div
                key={columnIndex}
                className={styles.column}
                style={
                  project.growColumns
                    ? {
                        maxWidth:
                          typeof project.growColumns === "number"
                            ? project.growColumns
                            : "none",
                      }
                    : undefined
                }
              >
                {column.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={styles.frame}
                    style={
                      loose
                        ? index === 0
                          ? undefined
                          : { marginTop: "1rem" }
                        : overlapStyle(index)
                    }
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
            );
          })}
        </div>
      )}
      <GenreGalleryDialog
        image={selectedIndex !== null ? project.images[selectedIndex] : null}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
