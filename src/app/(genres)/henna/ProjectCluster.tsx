"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "./projects";
import { ProjectDialog } from "./ProjectDialog";
import styles from "./ProjectCluster.module.css";

export function ProjectCluster({
  project,
  size = "default",
}: {
  project: Project;
  size?: "default" | "large";
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className={styles.cluster}>
      <h2 className={styles.name}>{project.name}</h2>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.grid} data-size={size}>
        {project.items.map((item, index) => {
          const isPortraitVideo = item.type === "video" && item.height > item.width;
          const clickable = item.clickable !== false;

          const media =
            item.type === "video" ? (
              <div className={styles.videoWrap}>
                <video
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className={styles.media}
                />
                {isPortraitVideo && (
                  <span className={styles.verticalCaption}>
                    {project.summary}
                  </span>
                )}
              </div>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes={
                  size === "large"
                    ? "(max-width: 900px) 60vw, 420px"
                    : "(max-width: 900px) 45vw, 300px"
                }
                className={styles.media}
              />
            );

          if (!clickable) {
            return (
              <div key={item.src} className={`${styles.tile} ${styles.tileStatic}`}>
                {media}
              </div>
            );
          }

          return (
            <button
              key={item.src}
              type="button"
              className={styles.tile}
              onClick={() => {
                setSelectedIndex(index);
                setDialogOpen(true);
              }}
            >
              {media}
            </button>
          );
        })}
      </div>
      <ProjectDialog
        item={selectedIndex !== null ? project.items[selectedIndex] : null}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
