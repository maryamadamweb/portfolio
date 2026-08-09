"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { IllustrationCluster } from "./IllustrationCluster";
import type { Illustration } from "./illustrations";
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
// clusters land at different heights rather than in tidy aligned rows.
const COLUMN_OFFSETS = ["0rem", "5rem", "2rem"];

// Extra jitter between clusters stacked in the same column, layered on top
// of the column's base gap, so the spacing itself feels a bit uneven too.
// Skipped on the first item in a column.
const CLUSTER_JITTER = ["2rem", "-1.5rem", "3rem", "-0.75rem", "1.25rem"];

function jitterStyle(indexInColumn: number): CSSProperties {
  if (indexInColumn === 0) return {};
  return {
    marginTop: CLUSTER_JITTER[(indexInColumn - 1) % CLUSTER_JITTER.length],
  };
}

// Rough per-illustration weight used only to balance column heights while
// distributing — doesn't need to be exact, just enough that one column
// doesn't end up far taller than the others.
function estimatedWeight(illustration: Illustration) {
  return illustration.images.reduce(
    (sum, image) => sum + image.height / image.width,
    0.5
  );
}

function distributeIntoColumns(
  illustrations: Illustration[],
  columnCount: number
) {
  const columns: Illustration[][] = Array.from(
    { length: columnCount },
    () => []
  );
  const heights = new Array(columnCount).fill(0);

  for (const illustration of illustrations) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(illustration);
    heights[shortest] += estimatedWeight(illustration);
  }

  // Client feedback: Dates should sit directly under Newham Heritage Month.
  // Moved after the auto-balanced placement above (rather than folded into
  // it) so every other piece's column is unaffected.
  const datesColumn = columns.findIndex((col) =>
    col.some((illustration) => illustration.slug === "dates")
  );
  const newhamColumn = columns.findIndex((col) =>
    col.some((illustration) => illustration.slug === "newham-heritage-month")
  );
  if (
    datesColumn !== -1 &&
    newhamColumn !== -1 &&
    datesColumn !== newhamColumn
  ) {
    const [dates] = columns[datesColumn].splice(
      columns[datesColumn].findIndex((i) => i.slug === "dates"),
      1
    );
    const newhamIndex = columns[newhamColumn].findIndex(
      (i) => i.slug === "newham-heritage-month"
    );
    columns[newhamColumn].splice(newhamIndex + 1, 0, dates);
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

export function Wall({ illustrations }: { illustrations: Illustration[] }) {
  const columnCount = useColumnCount();
  const columns = distributeIntoColumns(illustrations, columnCount);

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
          {column.map((illustration, index) => (
            <div key={illustration.slug} style={jitterStyle(index)}>
              <IllustrationCluster illustration={illustration} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
