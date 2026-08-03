import Image from "next/image";
import { genres } from "@/lib/genres";
import { GenreCard } from "@/components/genres/GenreCard";
import styles from "./page.module.css";

// Entry point. Each card is a genre — click into it to go to that genre's page.
// Positions are hand-placed via CSS grid-area (one class per slug in page.module.css)
// to match the intended collage layout, not a generic repeating grid.

export default function MainPage() {
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
        <Image
          src="/maryam-adam-title.png"
          alt="Maryam Adam"
          width={2323}
          height={378}
          className={styles.centerImage}
          preload
        />
        {genres.map((genre) => (
          <div key={genre.slug} className={styles[genre.slug]}>
            <GenreCard genre={genre} />
          </div>
        ))}
      </div>
    </main>
  );
}
