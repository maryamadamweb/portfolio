"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ClipMedia, ImageMedia } from "./Media";
import { AnimationDialog, type AnimationLightboxItem } from "./AnimationDialog";
import type { AnimationProject } from "./videos";
import styles from "./AnimationCluster.module.css";

// Cervical Cancer Screening has far more clips/images than any other
// project (10 clips, 15 images) so it keeps the original compact sizing;
// every other project renders "large" — matching the HERO_WIDTH/REST_WIDTH
// scale graphic-design/henna/residencies already use for their big-hero
// clusters, rather than inventing new numbers.
const SMALL = { heroTile: 190, restWidth: 150 };
const LARGE = { heroTile: 340, restWidth: 230 };

const HERO_COLS = 3;
const HERO_GAP = 12;
const REST_GAP = 16;

function estimatedClipHeight(clip: AnimationProject["clips"][number], width: number) {
  // Instagram embeds don't carry width/height — this codepath is only ever
  // exercised for hyphen-online-spice-series's clip array, which renders
  // through SpiceSeriesCluster instead, so a square-ish fallback is fine.
  return clip.type === "video" ? (width / clip.width) * clip.height : width;
}

// Tiles keep each clip's native aspect ratio (no forced square crop), so
// row height varies with content — estimate it from the actual average
// clip height at the fixed tile width rather than assuming a fixed size.
function heroGridHeight(clips: AnimationProject["clips"], heroTile: number, heroCols: number) {
  if (clips.length === 0) return heroTile;
  const rows = Math.max(1, Math.ceil(clips.length / heroCols));
  const avgHeight =
    clips.reduce((sum, clip) => sum + estimatedClipHeight(clip, heroTile), 0) /
    clips.length;
  return rows * avgHeight + (rows - 1) * HERO_GAP;
}

// The hero grid's own width, sized to fit exactly as many columns as there
// are clips (up to heroCols) — so a single-clip project's hero isn't a
// half-empty multi-column-wide box pushing the side scatter unnaturally far
// out, and a project that wants a strict quadrant (heroCols=2) gets one.
function heroGridWidth(clipCount: number, heroTile: number, heroCols: number) {
  const cols = Math.max(1, Math.min(clipCount, heroCols));
  return cols * heroTile + (cols - 1) * HERO_GAP;
}

function estimatedImageHeight(image: AnimationProject["images"][number], restWidth: number) {
  return (restWidth / image.width) * image.height;
}

// Bin-packs the illustrations/gifs into as many columns as it takes to
// roughly match the centered clip grid's height, then hands them out
// left/right by alternating column index — so the scatter grows evenly on
// both sides of the hero as a project accumulates more decoration.
function scatterImages(
  images: AnimationProject["images"],
  heroHeight: number,
  restWidth: number
) {
  if (images.length === 0) {
    return { left: [] as AnimationProject["images"][], right: [] as AnimationProject["images"][] };
  }

  const totalHeight = images.reduce(
    (sum, image) => sum + estimatedImageHeight(image, restWidth) + REST_GAP,
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
    columnHeights[shortest] += estimatedImageHeight(image, restWidth) + REST_GAP;
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

export function AnimationCluster({
  project,
  large = false,
  heroCols = HERO_COLS,
  summaryMaxWidth,
  heroTileOverride,
  restWidthOverride,
  showSoundIcon = false,
}: {
  project: AnimationProject;
  large?: boolean;
  // Override for the hero grid's column count — e.g. LOVE wants a strict
  // 2-wide quadrant instead of the default 3-wide wrap.
  heroCols?: number;
  // Override for the summary paragraph's max-width, which otherwise
  // defaults to 66vw (roughly 2/3 of the screen) via CSS. A cluster sharing
  // a paired row with another (half the row's width) needs something much
  // narrower than 66vw or its text alone forces the row to wrap.
  summaryMaxWidth?: string;
  // Per-project bump beyond the standard LARGE tile size — e.g. Unappealing
  // and Converse asked to be bigger still than every other large cluster.
  heroTileOverride?: number;
  restWidthOverride?: number;
  // Plain speaker glyph next to the hero, flagging that opening it plays
  // sound — used by unappealing (an "audio piece").
  showSoundIcon?: boolean;
}) {
  const [item, setItem] = useState<AnimationLightboxItem | null>(null);
  const [open, setOpen] = useState(false);
  const hasDescription = Boolean(project.credit || project.summary);

  const { heroTile: baseHeroTile, restWidth: baseRestWidth } = large ? LARGE : SMALL;
  const heroTile = heroTileOverride ?? baseHeroTile;
  const restWidth = restWidthOverride ?? baseRestWidth;
  const heroHeight = heroGridHeight(project.clips, heroTile, heroCols);
  const heroWidth = heroGridWidth(project.clips.length, heroTile, heroCols);
  const { left, right } = useMemo(
    () => scatterImages(project.images, heroHeight, restWidth),
    [project.images, heroHeight, restWidth]
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
      <h2
        className={styles.name}
        style={hasDescription ? undefined : { marginBottom: "2.5rem" }}
      >
        {project.name}
      </h2>
      {project.credit && <p className={styles.credit}>{project.credit}</p>}
      {project.summary && (
        <p
          className={styles.summary}
          style={{
            ...(summaryMaxWidth ? { maxWidth: summaryMaxWidth } : null),
            // Tighten the gap before the links list right below it — the
            // full 1.5rem summary/collage gap read as too much empty space
            // hanging over that first link when links directly follow.
            ...(project.links ? { marginBottom: "0.5rem" } : null),
          }}
        >
          {project.summary}
        </p>
      )}
      {project.links && (
        <ul className={styles.links}>
          {project.links.map((link) => (
            <li key={link.href}>
              <span className={styles.linkLabel}>{link.label} : </span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {link.href}
              </a>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.collage}>
        <div className={styles.side}>
          {left.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={styles.column}
              style={{ width: restWidth }}
            >
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
                    sizes={`(max-width: 700px) 35vw, ${restWidth}px`}
                    className={styles.media}
                  />
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.hero} style={{ width: heroWidth }}>
          {project.clips.map((clip, index) => (
            <button
              key={index}
              type="button"
              className={styles.heroFrame}
              style={{ width: heroTile }}
              onClick={() => openClip(clip)}
            >
              <ClipMedia clip={clip} className={styles.heroMedia} />
            </button>
          ))}
          {showSoundIcon && (
            <span className={styles.soundIcon} title="Has sound" aria-label="Has sound">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 9.8c0-1 .8-1.8 1.8-1.8h2.1l4.6-3.9c.9-.8 2.3-.1 2.3 1.1v13.6c0 1.2-1.4 1.9-2.3 1.1L7.9 16H5.8C4.8 16 4 15.2 4 14.2V9.8Z"
                  fill="currentColor"
                />
                <path
                  d="M16.2 8.8a4.5 4.5 0 0 1 0 6.4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
        </div>

        <div className={styles.side}>
          {right.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={styles.column}
              style={{ width: restWidth }}
            >
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
                    sizes={`(max-width: 700px) 35vw, ${restWidth}px`}
                    className={styles.media}
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <AnimationDialog item={item} open={open} onOpenChange={setOpen} />
    </section>
  );
}
