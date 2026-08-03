import Link from "next/link";
import type { GenreMeta } from "@/types/genre";
import styles from "./GenreLink.module.css";

export function GenreLink({
  genre,
  isActive,
  onNavigate,
}: {
  genre: GenreMeta;
  isActive: boolean;
  onNavigate?: () => void;
}) {
  return (
    <li>
      <Link
        href={`/${genre.slug}`}
        className={isActive ? `${styles.link} ${styles.active}` : styles.link}
        aria-current={isActive ? "page" : undefined}
        onClick={onNavigate}
      >
        {genre.title}
      </Link>
    </li>
  );
}
