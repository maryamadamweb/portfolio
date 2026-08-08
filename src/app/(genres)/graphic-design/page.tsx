import { getGenreMeta } from "@/lib/genres";
import { Wall } from "./Wall";
import { projects } from "./projects";
import styles from "./page.module.css";

export default function GraphicDesignPage() {
  const meta = getGenreMeta("graphic-design");
  if (!meta) return null;

  return (
    <main className={styles.page}>
      <Wall projects={projects} />
    </main>
  );
}
