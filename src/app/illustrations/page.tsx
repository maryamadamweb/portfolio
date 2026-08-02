import { getGenreMeta } from "@/lib/genres";
import { GenreNav } from "@/components/genres/GenreNav";
import Content from "./content.mdx";
import styles from "./page.module.css";

// Custom layout for this genre. Narrative sections come from content.mdx;
// the surrounding hero/structure is hand-built and unique to this page.
export default function IllustrationsPage() {
  const meta = getGenreMeta("illustrations");

  return (
    <main className={styles.page}>
      <GenreNav currentSlug="illustrations" />
      <header className={styles.hero}>
        <h1>{meta?.title}</h1>
        <p>{meta?.summary}</p>
      </header>
      <article className={styles.content}>
        <Content />
      </article>
    </main>
  );
}
