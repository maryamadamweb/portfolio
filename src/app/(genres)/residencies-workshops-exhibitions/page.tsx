import { Wall } from "./Wall";
import { projects } from "./projects";
import styles from "./page.module.css";

export default function ResidenciesWorkshopsExhibitionsPage() {
  return (
    <main className={styles.page}>
      <Wall projects={projects} />
    </main>
  );
}
