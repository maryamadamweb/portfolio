import { HandsLayer } from "./HandsLayer";
import { hands } from "./hands";
import { sketches } from "./sketches";
import { ProjectCluster } from "./ProjectCluster";
import { projects } from "./projects";
import styles from "./page.module.css";

export default function HennaPage() {
  const sized = projects.map((project, index) => ({
    project,
    size: index < 3 ? ("large" as const) : ("default" as const),
  }));
  const columnA = sized.filter(
    ({ project }, index) =>
      project.column === "left" || (!project.column && index % 2 === 0)
  );
  const columnB = sized.filter(
    ({ project }, index) =>
      project.column === "right" || (!project.column && index % 2 === 1)
  );

  return (
    <main className={styles.page}>
      <HandsLayer hands={hands} />
      <HandsLayer hands={sketches} />
      <div className={styles.center}>
        <div className={styles.wall}>
          <div className={styles.column}>
            {columnA.map(({ project, size }) => (
              <ProjectCluster key={project.slug} project={project} size={size} />
            ))}
          </div>
          <div className={`${styles.column} ${styles.columnOffset}`}>
            {columnB.map(({ project, size }) => (
              <ProjectCluster key={project.slug} project={project} size={size} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
