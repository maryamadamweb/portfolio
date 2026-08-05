import { ProjectCluster } from "./ProjectCluster";
import { projects } from "./projects";
import styles from "./page.module.css";

// Three columns, mixing residencies/workshops/exhibitions rather than
// grouping by category — order follows the sequence in projects.ts, split
// round-robin across columns so reading order stays roughly preserved.
export default function ResidenciesWorkshopsExhibitionsPage() {
  const columns: (typeof projects)[] = [[], [], []];
  projects.forEach((project, index) => {
    columns[index % 3].push(project);
  });

  return (
    <main className={styles.page}>
      <div className={styles.wall}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column} data-offset={index}>
            {column.map((project) => (
              <ProjectCluster key={project.slug} project={project} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
