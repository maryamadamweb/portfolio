import Script from "next/script";
import { AnimationCluster } from "./AnimationCluster";
import { SpiceSeriesCluster } from "./SpiceSeriesCluster";
import {
  animationProjects,
  hyphenOnlineSpiceSeriesEntries,
} from "./videos";
import styles from "./Row.module.css";

// One horizontal row, every project as its own cluster — the client wants
// this scannable left-to-right rather than the masonry "wall" the other
// genres use. Row order (and the hyphen-online-spice-series special case)
// comes straight from src/app/(genres)/animations/videos.ts.
export function Row() {
  return (
    <div className={styles.row}>
      <Script async src="//www.instagram.com/embed.js" strategy="lazyOnload" />
      {animationProjects.map((project) =>
        project.slug === "hyphen-online-spice-series" ? (
          <SpiceSeriesCluster
            key={project.slug}
            meta={project}
            clips={project.clips}
            entries={hyphenOnlineSpiceSeriesEntries}
          />
        ) : (
          <AnimationCluster key={project.slug} project={project} />
        )
      )}
    </div>
  );
}
