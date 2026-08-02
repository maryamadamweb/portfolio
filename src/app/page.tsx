import Image from "next/image";
import { genres } from "@/lib/genres";
import { GenreCard } from "@/components/genres/GenreCard";
import styles from "./page.module.css";

// Entry point. Each card is a genre — click into it to go to that genre's page.
// Cards are split evenly to flank the centered title image.
export default function MainPage() {
  const mid = Math.ceil(genres.length / 2);
  const leftGenres = genres.slice(0, mid);
  const rightGenres = genres.slice(mid);

  return (
    <main className={styles.page}>
      <Image
        src="/home-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        preload
        className={styles.background}
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <div className={styles.layout}>
        <div className={styles.column}>
          {leftGenres.map((genre) => (
            <GenreCard key={genre.slug} genre={genre} />
          ))}
        </div>
        <Image
          src="/maryam-adam-title.png"
          alt="Maryam Adam"
          width={700}
          height={496}
          className={styles.centerImage}
          priority
        />
        <div className={styles.column}>
          {rightGenres.map((genre) => (
            <GenreCard key={genre.slug} genre={genre} />
          ))}
        </div>
      </div>
    </main>
  );
}
