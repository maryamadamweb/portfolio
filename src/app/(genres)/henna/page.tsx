import { HandsLayer } from "./HandsLayer";
import { hands } from "./hands";
import { ProjectCluster } from "./ProjectCluster";
import { projects } from "./projects";
import styles from "./page.module.css";

export default function HennaPage() {
  const featured = projects.slice(0, 3);
  const rest = projects.slice(3);

  return (
    <main className={styles.page}>
      <HandsLayer hands={hands} />
      <div className={styles.center}>
        <div className={styles.projects}>
          <div className={styles.featuredGroup}>
            {featured.map((project) => (
              <ProjectCluster key={project.slug} project={project} size="large" />
            ))}
          </div>
          {rest.map((project) => (
            <ProjectCluster key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
