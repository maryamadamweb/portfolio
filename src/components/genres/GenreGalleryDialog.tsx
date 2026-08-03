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
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          {image && (
            <>
              <div className={styles.imagePane}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="60vw"
                  className={styles.image}
                />
              </div>
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
                  {image.description}
                </Dialog.Description>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
