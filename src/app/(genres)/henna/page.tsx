import { getGenreMeta } from "@/lib/genres";
import { GenreGallery } from "@/components/genres/GenreGallery";
import { HandsLayer } from "./HandsLayer";
import { hands } from "./hands";
import styles from "./page.module.css";

const videos = [
  "/genres/henna/dazed/dazed-clip.mp4",
  "/genres/henna/hue/hue-clip.mp4",
  "/genres/henna/levis/levis-clip.mp4",
];

export default function HennaPage() {
  const meta = getGenreMeta("henna");
  if (!meta) return null;

  return (
    <main className={styles.page}>
      <HandsLayer hands={hands} />
      <div className={styles.center}>
        <GenreGallery genre={meta} />
        <div className={styles.videos}>
          {videos.map((src) => (
            <video key={src} src={src} controls className={styles.video} />
          ))}
        </div>
      </div>
    </main>
  );
}
