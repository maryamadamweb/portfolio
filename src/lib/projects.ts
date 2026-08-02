import type { ProjectMeta } from "@/types/project";

// Each entry links to a static route at app/projects/<slug>/page.tsx.
// Add a project by adding an entry here AND creating that folder.
export const projects: ProjectMeta[] = [
  {
    slug: "project-one",
    title: "Illustrations",
    summary: "A short one-line description of this project.",
    cover: "/illustrations-sticker.png",
    tags: ["Design", "Web"],
  },
  {
    slug: "project-two",
    title: "Graphic Design",
    summary: "A short one-line description of this project.",
    cover: "/globe.svg",
    tags: ["Illustration"],
  },
];

export function getProjectMeta(slug: string): ProjectMeta | undefined {
  return projects.find((project) => project.slug === slug);
}
