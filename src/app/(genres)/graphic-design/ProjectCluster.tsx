"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import type { MediaItem, Project } from "./projects";
import { ProjectDialog } from "./ProjectDialog";
import { useHlsSource } from "./useHlsSource";
import styles from "./ProjectCluster.module.css";

const HERO_WIDTH = 340;
const REST_WIDTH = 230;
const GAP = 16;

function estimatedHeight(item: MediaItem, width: number) {
  return (width / item.width) * item.height;
}

// The first item is the standout piece, sized on its own. The rest are
// bin-packed into as many side columns as it takes to roughly match the
// hero's height — so a handful of shorter items actually stack up to fill
// the space alongside one tall item, instead of leaving it mostly empty.
function layoutCluster(
  media: MediaItem[],
  heroWidth: number,
  columnOverride?: number
) {
  const [hero, ...rest] = media;
  const heroHeight = estimatedHeight(hero, heroWidth);

  if (rest.length === 0) {
    return { hero, columns: [] as MediaItem[][] };
  }

  const restTotalHeight = rest.reduce(
    (sum, item) => sum + estimatedHeight(item, REST_WIDTH) + GAP,
    0
  );
  const columnCount =
    columnOverride ?? Math.max(1, Math.ceil(restTotalHeight / heroHeight));

  const columns: MediaItem[][] = Array.from(
    { length: columnCount },
    () => []
  );
  const columnHeights = new Array(columnCount).fill(0);

  for (const item of rest) {
    const shortest = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortest].push(item);
    columnHeights[shortest] += estimatedHeight(item, REST_WIDTH) + GAP;
  }

  return { hero, columns };
}

// Slight vertical overlap between items stacked in the same column, like
// items pinned close together rather than evenly spaced apart.
const COLUMN_OVERLAP = [0, -0.75, 1, -1, 0.5, -0.5];

function overlapStyle(indexInColumn: number): CSSProperties {
  if (indexInColumn === 0) return {};
  return { marginTop: `${COLUMN_OVERLAP[indexInColumn % COLUMN_OVERLAP.length]}rem` };
}

// Matches the collage's actual flex layout exactly: hero width plus each
// side column's width and the gap preceding it (.collage's `gap: 1rem` sits
// between every adjacent child, hero included).
function clusterWidth(columnCount: number, heroWidth: number) {
  return heroWidth + columnCount * (REST_WIDTH + GAP);
}

// Only the hero plus the first side column are guaranteed to share a row —
// beyond that, .collage's flex-wrap can drop later columns to the next line
// depending on the viewport, so capping the summary any wider risks it
// overhanging past whatever actually rendered on the first row.
function summaryWidth(columnCount: number, heroWidth: number) {
  return columnCount > 0 ? heroWidth + GAP + REST_WIDTH : heroWidth;
}

// Videos stream as adaptive-bitrate HLS from Bunny Stream. Only attach the
// manifest once the tile scrolls into view, so a visitor who never reaches
// this section never downloads it.
function LazyVideo({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!videoEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [videoEl]);

  useHlsSource(videoEl, inView ? src : undefined, inView);

  return (
    <video
      ref={setVideoEl}
      width={width}
      height={height}
      preload="none"
      muted
      loop
      autoPlay={inView}
      playsInline
      className={className}
    />
  );
}

function Media({
  item,
  sizes,
  className,
}: {
  item: MediaItem;
  sizes: string;
  className?: string;
}) {
  if (item.type === "video") {
    return (
      <LazyVideo
        src={item.src}
        width={item.width}
        height={item.height}
        className={className}
      />
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      sizes={sizes}
      className={className}
    />
  );
}

export function ProjectCluster({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const heroWidth = project.heroWidth ?? HERO_WIDTH;
  const { hero, columns } = useMemo(
    () => layoutCluster(project.media, heroWidth),
    [project.media, heroWidth]
  );

  function openAt(item: MediaItem) {
    setSelectedIndex(project.media.indexOf(item));
    setDialogOpen(true);
  }

  return (
    <section
      className={styles.cluster}
      style={{ maxWidth: clusterWidth(columns.length, heroWidth) }}
    >
      <h2 className={styles.name}>{project.name}</h2>
      {project.summary && (
        <p
          className={styles.summary}
          style={{ maxWidth: summaryWidth(columns.length, heroWidth) }}
        >
          {project.summary}
        </p>
      )}
      <div className={styles.collage}>
        <button
          type="button"
          className={styles.hero}
          style={{ flexBasis: heroWidth, maxWidth: heroWidth }}
          onClick={() => openAt(hero)}
        >
          <Media
            item={hero}
            sizes={`(max-width: 700px) 60vw, ${heroWidth}px`}
            className={styles.media}
          />
        </button>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.column}>
            {column.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={styles.frame}
                style={overlapStyle(index)}
                onClick={() => openAt(item)}
              >
                <Media
                  item={item}
                  sizes="(max-width: 700px) 45vw, 230px"
                  className={styles.media}
                />
              </button>
            ))}
          </div>
        ))}
      </div>
      <ProjectDialog
        item={selectedIndex !== null ? project.media[selectedIndex] : null}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
