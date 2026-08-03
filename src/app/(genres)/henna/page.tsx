import { HandsLayer } from "./HandsLayer";
import { hands } from "./hands";
import { ProjectCluster } from "./ProjectCluster";
import { projects } from "./projects";
import styles from "./page.module.css";

export default function HennaPage() {
  return (
    <main className={styles.page}>
      <HandsLayer hands={hands} />
      <div className={styles.center}>
        <div className={styles.column}>
          {projects.map((project) => (
            <ProjectCluster key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
