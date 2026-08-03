import { getGenreMeta } from "@/lib/genres";
import { GenreGallery } from "@/components/genres/GenreGallery";
import { HandFrame } from "./HandFrame";
import { hands } from "./hands";
import styles from "./page.module.css";

export default function HennaPage() {
  const meta = getGenreMeta("henna");
  if (!meta) return null;

  const leftHands = hands.slice(0, 8);
  const rightHands = hands.slice(8);

  return (
    <main className={styles.page}>
      <HandFrame images={leftHands} side="left" />
      <h1 className={styles.title}>{meta.title}</h1>
      <GenreGallery genre={meta} />
      <HandFrame images={rightHands} side="right" />
    </main>
  );
}
