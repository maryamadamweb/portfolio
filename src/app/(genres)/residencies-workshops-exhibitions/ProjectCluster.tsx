"use client";

import { useState } from "react";
import Image from "next/image";
import { GenreGalleryDialog } from "@/components/genres/GenreGalleryDialog";
import type { Project } from "./projects";
import styles from "./ProjectCluster.module.css";

export function ProjectCluster({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className={styles.cluster}>
      <h2 className={styles.name}>{project.name}</h2>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.grid}>
        {project.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === 0 ? styles.tileFeatured : styles.tile}
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
              sizes="(max-width: 480px) 90vw, (max-width: 900px) 45vw, 200px"
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
