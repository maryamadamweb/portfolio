"use client";

import { useState } from "react";
import Image from "next/image";
import { GenreGalleryDialog } from "@/components/genres/GenreGalleryDialog";
import type { Illustration } from "./illustrations";
import styles from "./IllustrationCluster.module.css";

export function IllustrationCluster({
  illustration,
}: {
  illustration: Illustration;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className={styles.cluster}>
      <h2 className={styles.name}>{illustration.name}</h2>
      {illustration.credit && (
        <p className={styles.credit}>{illustration.credit}</p>
      )}
      <div
        className={styles.collage}
        data-count={illustration.images.length}
      >
        {illustration.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={styles.frame}
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
              sizes="(max-width: 700px) 80vw, 610px"
              className={styles.media}
            />
          </button>
        ))}
      </div>
      {illustration.links && (
        <ul className={styles.links}>
          {illustration.links.map((link) => (
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
      <GenreGalleryDialog
        image={
          selectedIndex !== null
            ? {
                ...illustration.images[selectedIndex],
                description: illustration.summary,
                links: illustration.links,
              }
            : null
        }
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
