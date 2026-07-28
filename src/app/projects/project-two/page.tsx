import { getProjectMeta } from "@/lib/projects";
import styles from "./page.module.css";

// Fully custom layout for this project — no shared template, no MDX.
// Mostly visual: swap this placeholder grid for the real gallery/gifs.
export default function ProjectTwoPage() {
  const meta = getProjectMeta("project-two");

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{meta?.title}</h1>
      <div className={styles.gallery}>
        <div className={styles.tile} />
        <div className={styles.tile} />
        <div className={styles.tile} />
      </div>
    </main>
  );
}
