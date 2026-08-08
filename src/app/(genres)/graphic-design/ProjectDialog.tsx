"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import type { MediaItem } from "./projects";
import { useHlsSource } from "./useHlsSource";
import styles from "./ProjectDialog.module.css";

export function ProjectDialog({
  item,
  open,
  onOpenChange,
}: {
  item: MediaItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  useHlsSource(videoEl, item?.type === "video" ? item.src : undefined, true);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={`${styles.content} ${styles.contentCentered}`}>
          {item && (
            <>
              <div
                className={styles.mediaPane}
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                {item.type === "video" ? (
                  <video
                    ref={setVideoEl}
                    controls
                    autoPlay
                    className={styles.media}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="90vw"
                    className={styles.media}
                  />
                )}
              </div>
              <Dialog.Title className={styles.srOnly}>
                {item.type === "image" ? item.alt : "Video"}
              </Dialog.Title>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
