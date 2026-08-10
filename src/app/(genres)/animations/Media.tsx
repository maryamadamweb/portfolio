"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { InstagramEmbed } from "./InstagramEmbed";
import { useHlsSource } from "./useHlsSource";
import type { AnimationClip } from "./videos";

// Videos stream as adaptive-bitrate HLS from Bunny Stream. Only attach the
// manifest once the tile scrolls into view, so a visitor who never reaches
// this section never downloads it.
export function LazyVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!videoEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [videoEl]);

  useHlsSource(videoEl, inView ? src : undefined, inView);

  return (
    <video
      ref={setVideoEl}
      preload="none"
      muted
      loop
      autoPlay={inView}
      playsInline
      className={className}
    />
  );
}

// Renders any clip type (video / Instagram reel) as a thumbnail tile.
export function ClipMedia({
  clip,
  className,
}: {
  clip: AnimationClip;
  className?: string;
}) {
  if (clip.type === "video") {
    return <LazyVideo src={clip.src} className={className} />;
  }
  return <InstagramEmbed permalink={clip.permalink} className={className} />;
}

export function ImageMedia({
  src,
  alt,
  width,
  height,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  );
}
