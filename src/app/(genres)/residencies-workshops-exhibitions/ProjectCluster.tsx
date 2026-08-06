"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { GenreGalleryDialog } from "@/components/genres/GenreGalleryDialog";
import type { Project } from "./projects";
import styles from "./ProjectCluster.module.css";

// First image is the standout piece for the cluster; the rest alternate
// between two smaller sizes so the group doesn't read as a uniform grid.
function sizeFor(index: number) {
  if (index === 0) return "large";
  return index % 2 === 1 ? "medium" : "small";
}

// Deterministic scatter presets cycled by index — real overlap (negative
// margin pulling each frame over the previous one) plus a slight rotation,
// like photos taped up on a wall rather than a tidy row. The first frame in
// each cluster stays put as the anchor the rest overlap onto.
const JITTER: { rotate: number; top: number; left: number }[] = [
  { rotate: 0, top: 0, left: 0 },
  { rotate: 4, top: 4, left: -6 },
  { rotate: -3, top: -3.5, left: -5.5 },
  { rotate: 3, top: 5, left: -7 },
  { rotate: -4, top: -2.5, left: -5 },
  { rotate: 2.5, top: 3, left: -6.5 },
  { rotate: -2.5, top: -4, left: -5.5 },
];

function jitterStyle(index: number): CSSProperties {
  const jitter = JITTER[index % JITTER.length];
  return {
    transform: `rotate(${jitter.rotate}deg)`,
    marginTop: index === 0 ? 0 : `${jitter.top}rem`,
    marginLeft: index === 0 ? 0 : `${jitter.left}rem`,
    zIndex: index,
  };
}

export function ProjectCluster({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className={styles.cluster}>
      <h2 className={styles.name}>{project.name}</h2>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.collage}>
        {project.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={styles.frame}
            data-size={sizeFor(index)}
            style={jitterStyle(index)}
            onClick={() => {
              setSelectedIndex(index);
              setDialogOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 700px) 60vw, 320px"
              className={styles.media}
            />
          </button>
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
