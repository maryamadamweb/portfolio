import { GenreNav } from "@/components/genres/GenreNav";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <GenreNav currentSlug="about" />
      <h1>About</h1>
      <p>TODO: bio, background, contact.</p>
    </main>
  );
}
