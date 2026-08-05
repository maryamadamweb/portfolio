import Image from "next/image";
import Link from "next/link";
import type { GenreMeta } from "@/types/genre";
import styles from "./GenreCard.module.css";

export function GenreCard({ genre }: { genre: GenreMeta }) {
  return (
    <Link href={`/${genre.slug}`} className={styles.card}>
      {genre.coverAnimation ? (
        // Animated WebP with real alpha transparency — next/image's optimizer
        // would re-encode and strip the animation, so it's served unoptimized as-is.
        <Image
          src={genre.coverAnimation}
          alt=""
          width={genre.coverWidth}
          height={genre.coverHeight}
          unoptimized
          loading="eager"
          className={styles.cover}
        />
      ) : genre.coverVideo ? (
        <video
          className={styles.cover}
          src={genre.coverVideo}
          poster={genre.cover}
          width={genre.coverWidth}
          height={genre.coverHeight}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          src={genre.cover}
          alt=""
          width={genre.coverWidth}
          height={genre.coverHeight}
          sizes="(max-width: 900px) 320px, 480px"
          loading="eager"
          className={styles.cover}
        />
      )}
      <h2 className={styles.title}>{genre.title}</h2>
    </Link>
  );
}
