import { getGenreMeta } from "@/lib/genres";
import { GenreGallery } from "@/components/genres/GenreGallery";
import { HandsLayer } from "./HandsLayer";
import { hands } from "./hands";
import styles from "./page.module.css";

export default function HennaPage() {
  const meta = getGenreMeta("henna");
  if (!meta) return null;

  return (
    <main className={styles.page}>
      <HandsLayer hands={hands} />
      <div className={styles.center}>
        <h1 className={styles.title}>{meta.title}</h1>
        <GenreGallery genre={meta} />
      </div>
    </main>
  );
}
