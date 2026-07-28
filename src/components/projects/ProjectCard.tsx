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
        width={480}
        height={320}
        className={styles.cover}
      />
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.summary}>{project.summary}</p>
    </Link>
  );
}
