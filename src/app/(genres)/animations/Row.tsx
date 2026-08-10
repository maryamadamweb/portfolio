import Script from "next/script";
import { AnimationCluster } from "./AnimationCluster";
import { SpiceSeriesCluster } from "./SpiceSeriesCluster";
import {
  animationProjects,
  hyphenOnlineSpiceSeriesEntries,
} from "./videos";
import styles from "./Row.module.css";

// One cluster per row, stacked in a single column — the client wants this
// scannable top-to-bottom rather than the masonry multi-column "wall" the
// other genres use. Row order (and the hyphen-online-spice-series special
// case) comes straight from src/app/(genres)/animations/videos.ts.
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
