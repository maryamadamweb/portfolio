import { ProjectCluster } from "./ProjectCluster";
import { projects, type Project } from "./projects";
import styles from "./page.module.css";

// Round-robin by index ignores actual content size — a 9-image project and
// a 1-image project both just count as "one turn," so whichever column
// happens to draw the big ones ends up far taller. Instead, greedily assign
// each project (in listed order, so the mixed category order is preserved)
// to whichever column currently has the least estimated height.
const REFERENCE_WIDTH = 260;
const HEADER_HEIGHT = 90;
const IMAGE_GAP = 16;

function estimateHeight(project: Project) {
  const imagesHeight = project.images.reduce(
    (sum, image) =>
      sum + (REFERENCE_WIDTH / image.width) * image.height + IMAGE_GAP,
    0
  );
  return HEADER_HEIGHT + imagesHeight;
}

function splitIntoBalancedColumns(count: number) {
  const columns: Project[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);

  for (const project of projects) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(project);
    heights[shortest] += estimateHeight(project);
  }

  return columns;
}

export default function ResidenciesWorkshopsExhibitionsPage() {
  const columns = splitIntoBalancedColumns(3);

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
