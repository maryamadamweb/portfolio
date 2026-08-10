"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ClipMedia, ImageMedia } from "./Media";
import { AnimationDialog, type AnimationLightboxItem } from "./AnimationDialog";
import type { AnimationProject } from "./videos";
import styles from "./AnimationCluster.module.css";

const HERO_TILE = 190;
const HERO_COLS = 3;
const HERO_GAP = 12;

const REST_WIDTH = 150;
const REST_GAP = 16;

function heroGridHeight(clipCount: number) {
  const rows = Math.max(1, Math.ceil(clipCount / HERO_COLS));
  return rows * HERO_TILE + (rows - 1) * HERO_GAP;
}

function estimatedImageHeight(image: AnimationProject["images"][number]) {
  return (REST_WIDTH / image.width) * image.height;
}

// Bin-packs the illustrations/gifs into as many columns as it takes to
// roughly match the centered clip grid's height, then hands them out
// left/right by alternating column index — so the scatter grows evenly on
// both sides of the hero as a project accumulates more decoration.
function scatterImages(images: AnimationProject["images"], heroHeight: number) {
  if (images.length === 0) {
    return { left: [] as AnimationProject["images"][], right: [] as AnimationProject["images"][] };
  }

  const totalHeight = images.reduce(
    (sum, image) => sum + estimatedImageHeight(image) + REST_GAP,
    0
  );
  const columnCount = Math.max(2, Math.ceil(totalHeight / heroHeight));

  const columns: AnimationProject["images"][] = Array.from(
    { length: columnCount },
    () => []
  );
  const columnHeights = new Array(columnCount).fill(0);

  for (const image of images) {
    const shortest = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortest].push(image);
    columnHeights[shortest] += estimatedImageHeight(image) + REST_GAP;
  }

  return {
    left: columns.filter((_, index) => index % 2 === 0),
    right: columns.filter((_, index) => index % 2 === 1),
  };
}

// Small alternating tilt per tile so the scatter reads as loosely dotted
// around rather than aligned into tidy columns.
const ROTATE_JITTER = [-4, 3, -2, 5, -3, 2];

function tiltStyle(index: number): CSSProperties {
  return { "--tilt": `${ROTATE_JITTER[index % ROTATE_JITTER.length]}deg` } as CSSProperties;
}

export function AnimationCluster({ project }: { project: AnimationProject }) {
  const [item, setItem] = useState<AnimationLightboxItem | null>(null);
  const [open, setOpen] = useState(false);

  const heroHeight = heroGridHeight(project.clips.length);
  const { left, right } = useMemo(
    () => scatterImages(project.images, heroHeight),
    [project.images, heroHeight]
  );

  function openClip(clip: AnimationProject["clips"][number]) {
    setItem({ clip });
    setOpen(true);
  }

  function openImage(image: AnimationProject["images"][number]) {
    setItem({ image });
    setOpen(true);
  }

  return (
    <section className={styles.cluster}>
      <h2 className={styles.name}>{project.name}</h2>
      {project.credit && <p className={styles.credit}>{project.credit}</p>}
      {project.summary && <p className={styles.summary}>{project.summary}</p>}
      <div className={styles.collage}>
        <div className={styles.side}>
          {left.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              {column.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={styles.frame}
                  style={tiltStyle(columnIndex + index)}
                  onClick={() => openImage(image)}
                >
                  <ImageMedia
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 700px) 35vw, 150px"
                    className={styles.media}
                  />
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.hero}>
          {project.clips.map((clip, index) => (
            <button
              key={index}
              type="button"
              className={styles.heroFrame}
              onClick={() => openClip(clip)}
            >
              <ClipMedia clip={clip} className={styles.heroMedia} />
            </button>
          ))}
        </div>

        <div className={styles.side}>
          {right.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              {column.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={styles.frame}
                  style={tiltStyle(columnIndex + index + 1)}
                  onClick={() => openImage(image)}
                >
                  <ImageMedia
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 700px) 35vw, 150px"
                    className={styles.media}
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      {project.links && (
        <ul className={styles.links}>
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <AnimationDialog item={item} open={open} onOpenChange={setOpen} />
    </section>
  );
}
