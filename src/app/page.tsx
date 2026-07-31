import Image from "next/image";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import styles from "./page.module.css";

// Entry point. Each card is a project/genre — click into it to go to that project's page.
// Cards are split evenly to flank the centered title image.
export default function MainPage() {
  const mid = Math.ceil(projects.length / 2);
  const leftProjects = projects.slice(0, mid);
  const rightProjects = projects.slice(mid);

  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.column}>
          {leftProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Image
          src="/maryam-adam-title.png"
          alt="Maryam Adam"
          width={700}
          height={496}
          className={styles.centerImage}
          priority
        />
        <div className={styles.column}>
          {rightProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
