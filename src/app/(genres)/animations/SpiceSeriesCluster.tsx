"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ClipMedia } from "./Media";
import { AnimationDialog, type AnimationLightboxItem } from "./AnimationDialog";
import type { AnimationClip, AnimationProjectMeta, SpiceEntry } from "./videos";
import styles from "./SpiceSeriesCluster.module.css";

type IndexedClip = { clip: AnimationClip; position: number };

const CENTER_POSITIONS = [6, 7];

function spiceForPosition(entries: SpiceEntry[], position: number) {
  return entries.find((entry) => entry.clipIndices.includes(position));
}

// Some taglines (e.g. Saffron's) already read as a full sentence naming the
// spice, so prefixing "Name: " would repeat it — skip the prefix whenever
// the tagline already mentions the name.
function spiceCaption(spice: SpiceEntry) {
  if (!spice.tagline) return spice.name;
  if (spice.tagline.toLowerCase().includes(spice.name.toLowerCase())) {
    return spice.tagline;
  }
  return `${spice.name}: ${spice.tagline}`;
}

// Small tilt per tile, same rotate-in-place effect AnimationCluster uses for
// the khichdi/cervical-cancer-screening collages (no x/y drift). Keyed by the
// clip's fixed position rather than its side-local index — left and right
// each restart a local index at 0, so indexing by that replayed the exact
// same angle sequence on both sides. One fixed value per position also keeps
// left/right from each clumping into all-negative or all-positive.
const TILT_BY_POSITION: Record<number, number> = {
  1: -4,
  2: 3,
  3: 5,
  4: -5,
  5: -2,
  8: 2,
};

function tiltStyle(position: number): CSSProperties {
  return { "--tilt": `${TILT_BY_POSITION[position] ?? 0}deg` } as CSSProperties;
}

// A non-interactive wrapper around a clickable video button (opens the
// lightbox) plus a separate caption link out to the spice's article — kept
// as siblings rather than nesting the link inside the button, since nested
// interactive elements aren't valid HTML.
function SpiceClipTile({
  clip,
  position,
  entries,
  onOpen,
}: {
  clip: AnimationClip;
  position: number;
  entries: SpiceEntry[];
  onOpen: (indexed: IndexedClip) => void;
}) {
  const spice = spiceForPosition(entries, position);
  return (
    <div className={styles.frame} style={tiltStyle(position)}>
      <button
        type="button"
        className={styles.mediaButton}
        onClick={() => onOpen({ clip, position })}
      >
        <ClipMedia clip={clip} className={styles.media} />
      </button>
      {spice && (
        <a
          href={spice.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.caption}
        >
          {spiceCaption(spice)}
        </a>
      )}
    </div>
  );
}

// Layout is bespoke for this project: the client wants the two Instagram
// reels stacked dead center, with the six plain video clips flanking them
// left/right — a different shape from every other cluster's centered-grid
// layout, so this doesn't reuse AnimationCluster.
export function SpiceSeriesCluster({
  meta,
  clips,
  entries,
}: {
  meta: AnimationProjectMeta;
  clips: AnimationClip[];
  entries: SpiceEntry[];
}) {
  const [item, setItem] = useState<AnimationLightboxItem | null>(null);
  const [open, setOpen] = useState(false);

  const { center, left, right } = useMemo(() => {
    const indexed: IndexedClip[] = clips.map((clip, index) => ({
      clip,
      position: index + 1,
    }));
    // Positions 6 and 7 were the original Instagram-embed slots. They're real
    // bunny clips now too, but stay pinned to the center column (stacked
    // vertically) instead of joining the left/right video split.
    const center = indexed.filter((c) => CENTER_POSITIONS.includes(c.position));
    const videos = indexed.filter(
      (c) => c.clip.type === "video" && !CENTER_POSITIONS.includes(c.position)
    );
    return {
      center,
      left: videos.filter((_, i) => i % 2 === 0),
      right: videos.filter((_, i) => i % 2 === 1),
    };
  }, [clips]);

  function openClip({ clip, position }: IndexedClip) {
    const spice = spiceForPosition(entries, position);
    setItem({
      clip,
      caption: spice?.name,
      tagline: spice?.tagline,
      href: spice?.href,
    });
    setOpen(true);
  }

  return (
    <section className={styles.cluster}>
      <h2 className={styles.name}>{meta.name}</h2>
      <div className={styles.collage}>
        <div className={styles.side}>
          {left.map(({ clip, position }) => (
            <SpiceClipTile
              key={position}
              clip={clip}
              position={position}
              entries={entries}
              onOpen={openClip}
            />
          ))}
        </div>

        <div className={styles.center}>
          {center.map(({ clip, position }) => (
            <div key={position} className={styles.embedFrame}>
              <ClipMedia clip={clip} className={styles.embedMedia} />
            </div>
          ))}
        </div>

        <div className={styles.side}>
          {right.map(({ clip, position }) => (
            <SpiceClipTile
              key={position}
              clip={clip}
              position={position}
              entries={entries}
              onOpen={openClip}
            />
          ))}
        </div>
      </div>
      <AnimationDialog item={item} open={open} onOpenChange={setOpen} />
    </section>
  );
}
