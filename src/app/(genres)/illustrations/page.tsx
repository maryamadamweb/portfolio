import { Wall } from "./Wall";
import { illustrations } from "./illustrations";
import styles from "./page.module.css";

export default function IllustrationsPage() {
  return (
    <main className={styles.page}>
      <Wall illustrations={illustrations} />
    </main>
  );
}
