"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import type { GalleryImage } from "@/types/genre";
import styles from "./GenreGalleryDialog.module.css";

export function GenreGalleryDialog({
  image,
  open,
  onOpenChange,
}: {
  image: GalleryImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const hasDescription = Boolean(image?.description);
  const hasLinks = Boolean(image?.links?.length);
  const hasSidebar = hasDescription || hasLinks;

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
          {image && (
            <>
              <div
                className={styles.imagePane}
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="90vw"
                  className={styles.image}
                />
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
                  <Dialog.Title className={styles.title}>About</Dialog.Title>
                  {hasDescription && (
                    <Dialog.Description className={styles.description}>
                      {image.description}
                    </Dialog.Description>
                  )}
                  {hasLinks && (
                    <ul className={styles.links}>
                      {image.links!.map((link) => (
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
                </div>
              ) : (
                <Dialog.Title className={styles.srOnly}>
                  {image.alt}
                </Dialog.Title>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
