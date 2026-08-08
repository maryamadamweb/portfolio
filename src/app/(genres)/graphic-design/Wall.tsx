"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ProjectCluster } from "./ProjectCluster";
import type { Project } from "./projects";
import styles from "./page.module.css";

// 3 columns is reserved for very wide windows — 2 columns is the preferred
// look (less leftover whitespace at the bottom of the shorter column) and
// covers most normal desktop widths.
const BREAKPOINTS: { minWidth: number; columns: number }[] = [
  { minWidth: 1800, columns: 3 },
  { minWidth: 900, columns: 2 },
  { minWidth: 0, columns: 1 },
];

// Deliberately uneven per-column offset, not an ascending staircase, so
// clusters land at different heights rather than in tidy aligned rows —
// this is the actual "pinned to a wall" misalignment the layout is after.
const COLUMN_OFFSETS = ["0rem", "4rem", "1.75rem"];

// Extra jitter between clusters stacked in the same column, layered on top
// of the column's base gap, so the spacing itself feels a bit uneven too
// instead of a uniform gap. Skipped on the first item in a column.
const CLUSTER_JITTER = ["1.5rem", "-1rem", "2.25rem", "-0.5rem", "0.75rem"];

function jitterStyle(indexInColumn: number): CSSProperties {
  if (indexInColumn === 0) return {};
  return {
    marginTop: CLUSTER_JITTER[(indexInColumn - 1) % CLUSTER_JITTER.length],
  };
}

// Rough per-project weight used only to balance column heights while
// distributing — doesn't need to be exact, just enough that one column
// doesn't end up far taller than the others.
function estimatedWeight(project: Project) {
  return project.media.reduce(
    (sum, item) => sum + item.height / item.width,
    0.5
  );
}

function distributeIntoColumns(projects: Project[], columnCount: number) {
  const columns: Project[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);

  for (const project of projects) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(project);
    heights[shortest] += estimatedWeight(project);
  }

  return columns;
}

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      const match = BREAKPOINTS.find((bp) => width >= bp.minWidth);
      setColumnCount(match?.columns ?? 1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columnCount;
}

export function Wall({ projects }: { projects: Project[] }) {
  const columnCount = useColumnCount();
  const columns = distributeIntoColumns(projects, columnCount);

  return (
    <div className={styles.wall}>
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={styles.column}
          style={{
            marginTop: COLUMN_OFFSETS[columnIndex % COLUMN_OFFSETS.length],
          }}
        >
          {column.map((project, index) => (
            <div key={project.slug} style={jitterStyle(index)}>
              <ProjectCluster project={project} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
