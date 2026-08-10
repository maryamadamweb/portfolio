"use client";

import { useMemo, useState } from "react";
import { ClipMedia } from "./Media";
import { AnimationDialog, type AnimationLightboxItem } from "./AnimationDialog";
import type { AnimationClip, AnimationProjectMeta, SpiceEntry } from "./videos";
import styles from "./SpiceSeriesCluster.module.css";

type IndexedClip = { clip: AnimationClip; position: number };

function spiceForPosition(entries: SpiceEntry[], position: number) {
  return entries.find((entry) => entry.clipIndices.includes(position));
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

  const { embeds, left, right } = useMemo(() => {
    const indexed: IndexedClip[] = clips.map((clip, index) => ({
      clip,
      position: index + 1,
    }));
    const embeds = indexed.filter((c) => c.clip.type === "instagram-embed");
    const videos = indexed.filter((c) => c.clip.type === "video");
    return {
      embeds,
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
          {left.map(({ clip, position }) => {
            const spice = spiceForPosition(entries, position);
            return (
              <button
                key={position}
                type="button"
                className={styles.frame}
                onClick={() => openClip({ clip, position })}
              >
                <ClipMedia clip={clip} className={styles.media} />
                {spice && <span className={styles.caption}>{spice.name}</span>}
              </button>
            );
          })}
        </div>

        <div className={styles.center}>
          {embeds.map(({ clip, position }) => (
            <div key={position} className={styles.embedFrame}>
              <ClipMedia clip={clip} className={styles.embedMedia} />
            </div>
          ))}
        </div>

        <div className={styles.side}>
          {right.map(({ clip, position }) => {
            const spice = spiceForPosition(entries, position);
            return (
              <button
                key={position}
                type="button"
                className={styles.frame}
                onClick={() => openClip({ clip, position })}
              >
                <ClipMedia clip={clip} className={styles.media} />
                {spice && <span className={styles.caption}>{spice.name}</span>}
              </button>
            );
          })}
        </div>
      </div>
      <AnimationDialog item={item} open={open} onOpenChange={setOpen} />
    </section>
  );
}
