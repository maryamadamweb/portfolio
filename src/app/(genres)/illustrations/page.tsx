import { getGenreMeta } from "@/lib/genres";
import { GenreGallery } from "@/components/genres/GenreGallery";
// import Content from "./content.mdx";
import styles from "./page.module.css";

export default function IllustrationsPage() {
  const meta = getGenreMeta("illustrations");
  if (!meta) return null;

  return (
    <main className={styles.page}>
      <GenreGallery genre={meta} />
      {/* <article className={styles.content}>
        <Content />
      </article> */}
    </main>
  );
}
