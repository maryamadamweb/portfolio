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
// case) comes straight from src/app/(genres)/animations/videos.ts, except
// unappealing and miscellaneous-animations (LOVE), which share a single
// paired row — one column each — instead of each getting a full row.
export function Row() {
  const misc = animationProjects.find(
    (project) => project.slug === "miscellaneous-animations"
  );

  return (
    <div className={styles.row}>
      <Script async src="//www.instagram.com/embed.js" strategy="lazyOnload" />
      {animationProjects.map((project) => {
        if (project.slug === "miscellaneous-animations") return null; // rendered paired with unappealing below
        if (project.slug === "hyphen-online-spice-series") {
          return (
            <SpiceSeriesCluster
              key={project.slug}
              meta={project}
              clips={project.clips}
              entries={hyphenOnlineSpiceSeriesEntries}
            />
          );
        }
        if (project.slug === "unappealing" && misc) {
          return (
            <div key="unappealing-love-pair" className={styles.pairRow}>
              {/* summaryMaxWidth override: the default 66vw is sized for a
                  full-width row — in this half-width paired row it would
                  force the row to wrap onto two lines instead of sitting
                  side by side with LOVE. heroTileOverride bumps it bigger
                  still, since a lone hero looked small next to LOVE's
                  2x2 quadrant. */}
              <AnimationCluster
                project={project}
                large
                summaryMaxWidth="420px"
                heroTileOverride={480}
                showSoundIcon
              />
              <AnimationCluster project={misc} large heroCols={2} />
            </div>
          );
        }
        // khichdi-film: its 4 clips are wide/landscape, so the default
        // 3-column hero grid (1 tile alone on row 2) reads both oddly
        // shaped and — combined with both side scatter columns — wider
        // than a typical viewport, pushing the right column onto its own
        // wrapped line below everything. 2 columns gives a clean 2x2 grid
        // that's narrower overall and fits both side columns beside it.
        const heroCols = project.slug === "khichdi-film" ? 2 : undefined;
        // converse: asked to be bigger than the standard "large" scale.
        const sizeOverride =
          project.slug === "converse"
            ? { heroTileOverride: 440, restWidthOverride: 300 }
            : undefined;
        // cervical-cancer-screening's summary is long enough that the
        // default 60ch max-width wraps it across 4 lines on desktop —
        // widen it so it settles onto 2. khichdi-film's summary was asked
        // to wrap across 3 lines — a ch value (not vw) keeps that line
        // count stable across desktop viewport widths.
        const summaryMaxWidth =
          project.slug === "cervical-cancer-screening"
            ? "100ch"
            : project.slug === "khichdi-film"
            ? "120ch"
            : undefined;
        return (
          <AnimationCluster
            key={project.slug}
            project={project}
            large={project.slug !== "cervical-cancer-screening"}
            heroCols={heroCols}
            summaryMaxWidth={summaryMaxWidth}
            {...sizeOverride}
          />
        );
      })}
    </div>
  );
}
