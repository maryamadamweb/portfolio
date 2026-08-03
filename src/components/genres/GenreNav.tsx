"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import { genres } from "@/lib/genres";
import { GenreLink } from "./GenreLink";
import { GenreMobileMenu } from "./GenreMobileMenu";
import styles from "./GenreNav.module.css";

export function GenreNav() {
  const currentSlug = useSelectedLayoutSegment();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevSlug, setPrevSlug] = useState(currentSlug);

  if (currentSlug !== prevSlug) {
    setPrevSlug(currentSlug);
    setMenuOpen(false);
  }

  return (
    <nav className={styles.nav} aria-label="Genres">
      <Link href="/" className={styles.homeLink}>
        <Image
          src="/maryam-adam-title.png"
          alt="Home"
          width={2323}
          height={378}
          className={styles.homeImage}
        />
      </Link>

      <ul className={styles.list}>
        {genres.map((genre) => (
          <GenreLink
            key={genre.slug}
            genre={genre}
            isActive={genre.slug === currentSlug}
          />
        ))}
      </ul>

      <GenreMobileMenu
        currentSlug={currentSlug}
        open={menuOpen}
        onOpenChange={setMenuOpen}
      />
    </nav>
  );
}
