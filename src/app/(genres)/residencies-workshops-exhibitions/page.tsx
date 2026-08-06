import { ProjectCluster } from "./ProjectCluster";
import { projects } from "./projects";
import styles from "./page.module.css";

export default function ResidenciesWorkshopsExhibitionsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wall}>
        {projects.map((project) => (
          <ProjectCluster key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
