import { getGenreMeta } from "@/lib/genres";
import { GenreGallery } from "@/components/genres/GenreGallery";
import styles from "./page.module.css";

export default function GraphicDesignPage() {
  const meta = getGenreMeta("graphic-design");
  if (!meta) return null;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{meta.title}</h1>
      <GenreGallery genre={meta} />
    </main>
  );
}
