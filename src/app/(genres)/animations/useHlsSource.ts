"use client";

import { useEffect } from "react";

// Safari plays HLS natively; every other browser needs hls.js to feed the
// .m3u8 manifest into a MediaSource. Loaded lazily so browsers that don't
// need it (Safari) never pay for the bundle.
//
// Takes the video element itself (not a ref object) so the effect reruns
// the moment the node actually mounts — Radix's Dialog.Portal mounts its
// children a tick after `open` flips true, so a ref-object dependency (whose
// identity never changes) would miss that and never attach the source.
export function useHlsSource(
  video: HTMLVideoElement | null,
  src: string | undefined,
  autoPlay = false
) {
  useEffect(() => {
    if (!video || !src) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    let hls: import("hls.js").default | undefined;
    let cancelled = false;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return;
      if (!Hls.isSupported()) {
        video.src = src;
        return;
      }
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      if (autoPlay) {
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [video, src, autoPlay]);
}
