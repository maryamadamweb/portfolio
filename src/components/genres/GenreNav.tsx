import Link from "next/link";
import { genres } from "@/lib/genres";
import styles from "./GenreNav.module.css";

export function GenreNav({ currentSlug }: { currentSlug: string }) {
  return (
    <nav className={styles.nav} aria-label="Genres">
      <Link href="/" className={styles.homeLink}>
        Home
      </Link>
      <ul className={styles.list}>
        {genres.map((genre) => {
          const isActive = genre.slug === currentSlug;
          return (
            <li key={genre.slug}>
              <Link
                href={`/${genre.slug}`}
                className={isActive ? `${styles.link} ${styles.active}` : styles.link}
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
