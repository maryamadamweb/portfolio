import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/types/project";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <Image
        src={project.cover}
        alt=""
        width={1427}
        height={1606}
        sizes="(max-width: 900px) 320px, 480px"
        className={styles.cover}
      />
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.summary}>{project.summary}</p>
    </Link>
  );
}
