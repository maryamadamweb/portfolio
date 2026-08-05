"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import type { ProjectItem } from "./projects";
import styles from "./ProjectDialog.module.css";

export function ProjectDialog({
  item,
  open,
  onOpenChange,
}: {
  item: ProjectItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const hasDescription = Boolean(item?.description);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={
            hasDescription
              ? styles.content
              : `${styles.content} ${styles.contentCentered}`
          }
        >
          {item && (
            <>
              <div
                className={styles.mediaPane}
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
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
              {hasDescription ? (
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
                  <Dialog.Title className={styles.title}>About</Dialog.Title>
                  <Dialog.Description className={styles.description}>
                    {item.description}
                  </Dialog.Description>
                </div>
              ) : (
                <Dialog.Title className={styles.srOnly}>
                  {item.type === "image" ? item.alt : "Video"}
                </Dialog.Title>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
