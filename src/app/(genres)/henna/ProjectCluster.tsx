"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "./projects";
import { ProjectDialog } from "./ProjectDialog";
import styles from "./ProjectCluster.module.css";

// Videos are heavy static files served as-is from /public (no transcoding,
// no CDN optimization). Only attach `src` once the tile scrolls into view,
// so a visitor who never reaches this section never downloads it.
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
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={inView ? src : undefined}
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
      {project.credit && <p className={styles.credit}>{project.credit}</p>}
      <div className={styles.textBackdrop}>
        <p className={styles.summary}>{project.summary}</p>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {project.link.label}
          </a>
        )}
      </div>
      <div className={styles.grid} data-size={size} data-single={project.items.length === 1}>
        {project.items.map((item, index) => {
          const showCaption = item.type === "image" && item.caption;
          const clickable = item.clickable !== false;

          const media =
            item.type === "video" ? (
              <LazyVideo
                src={item.src}
                width={item.width}
                height={item.height}
                className={styles.media}
              />
            ) : showCaption ? (
              <div className={styles.captionWrap}>
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
                <span className={styles.verticalCaption}>{item.caption}</span>
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
