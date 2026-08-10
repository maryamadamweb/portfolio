"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { InstagramEmbed } from "./InstagramEmbed";
import { useHlsSource } from "./useHlsSource";
import type { AnimationClip } from "./videos";
import styles from "./AnimationDialog.module.css";

// What the dialog opens to. Plain clips/images (the common case) render
// alone, centered. Spice-series items add a caption/tagline/link sidebar.
export type AnimationLightboxItem = {
  clip?: AnimationClip;
  image?: { src: string; width: number; height: number; alt: string };
  caption?: string;
  tagline?: string;
  href?: string;
};

export function AnimationDialog({
  item,
  open,
  onOpenChange,
}: {
  item: AnimationLightboxItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const clip = item?.clip;

  useHlsSource(videoEl, clip?.type === "video" ? clip.src : undefined, true);

  const hasSidebar = Boolean(item?.caption || item?.tagline || item?.href);

  const aspectRatio =
    clip?.type === "video"
      ? `${clip.width} / ${clip.height}`
      : item?.image
        ? `${item.image.width} / ${item.image.height}`
        : undefined;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={
            hasSidebar
              ? styles.content
              : `${styles.content} ${styles.contentCentered}`
          }
        >
          {item && (
            <>
              <div
                className={styles.mediaPane}
                style={aspectRatio ? { aspectRatio } : undefined}
              >
                {clip?.type === "video" && (
                  <video
                    ref={setVideoEl}
                    controls
                    autoPlay
                    className={styles.media}
                  />
                )}
                {clip?.type === "instagram-embed" && (
                  <InstagramEmbed
                    permalink={clip.permalink}
                    className={styles.embed}
                  />
                )}
                {item.image && (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="90vw"
                    className={styles.media}
                  />
                )}
              </div>
              {hasSidebar ? (
                <div className={styles.textPane}>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className={styles.closeButton}
                      aria-label="Close"
                    >
                      close
                    </button>
                  </Dialog.Close>
                  {item.caption && (
                    <Dialog.Title className={styles.title}>
                      {item.caption}
                    </Dialog.Title>
                  )}
                  {item.tagline && (
                    <Dialog.Description className={styles.tagline}>
                      {item.tagline}
                    </Dialog.Description>
                  )}
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Read the article
                    </a>
                  )}
                </div>
              ) : (
                <Dialog.Title className={styles.srOnly}>
                  {item.caption ?? item.image?.alt ?? "Animation"}
                </Dialog.Title>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
