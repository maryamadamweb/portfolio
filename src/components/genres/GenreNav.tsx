"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { genres } from "@/lib/genres";
import styles from "./GenreNav.module.css";

export function GenreNav() {
  const currentSlug = useSelectedLayoutSegment();

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
        {genres.map((genre) => {
          const isActive = genre.slug === currentSlug;
          return (
            <li key={genre.slug}>
              <Link
                href={`/${genre.slug}`}
                className={
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                aria-current={isActive ? "page" : undefined}
              >
                {genre.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
