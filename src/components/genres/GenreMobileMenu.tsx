"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { genres } from "@/lib/genres";
import { GenreLink } from "./GenreLink";
import styles from "./GenreMobileMenu.module.css";

const menuButtonGenre = genres.find((genre) => genre.slug === "illustrations")!;

export function GenreMobileMenu({
  currentSlug,
  open,
  onOpenChange,
}: {
  currentSlug: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open genres menu"
        >
          <Image
            src={menuButtonGenre.cover}
            alt=""
            width={menuButtonGenre.coverWidth}
            height={menuButtonGenre.coverHeight}
            sizes="44px"
            className={styles.menuButtonImage}
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.sheet} aria-describedby={undefined}>
          <Dialog.Title className={styles.srOnly}>Genres</Dialog.Title>
          <Dialog.Close asChild>
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close genres menu"
            >
              close
            </button>
          </Dialog.Close>
          <ul className={styles.sheetList}>
            {genres.map((genre) => (
              <GenreLink
                key={genre.slug}
                genre={genre}
                isActive={genre.slug === currentSlug}
                onNavigate={() => onOpenChange(false)}
              />
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
