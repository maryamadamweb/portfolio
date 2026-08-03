import Image from "next/image";
import { paintings } from "./paintings";
import styles from "./page.module.css";

// Fully custom layout for this genre — no shared template, no MDX.
// Only 4 paintings: shown large, no dialog/click interaction, just the work.
export default function PaintingsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.list}>
        {paintings.map((painting) => (
          <div key={painting.src} className={styles.row}>
            <div className={styles.imageWrap}>
              <Image
                src={painting.src}
                alt={painting.name}
                width={painting.width}
                height={painting.height}
                sizes="(max-width: 900px) 90vw, 60vw"
                className={styles.image}
              />
            </div>
            <div className={styles.textPane}>
              <h2 className={styles.name}>{painting.name}</h2>
              <p className={styles.subtitle}>{painting.subtitle}</p>
              <p className={styles.about}>{painting.about}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
