import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import styles from "./page.module.css";

// Entry point. Each card is a project/genre — click into it to go to that project's page.
export default function MainPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
