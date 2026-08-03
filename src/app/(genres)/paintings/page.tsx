import Image from "next/image";
import { paintings } from "./paintings";
import styles from "./page.module.css";

// Fully custom layout for this genre — no shared template, no MDX.
// Only 4 paintings: shown large, no dialog/click interaction, just the work.
export default function PaintingsPage() {
  const [tall, square, third, fourth] = paintings;

  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.tallItem}>
          <Image
            src={tall.src}
            alt={tall.name}
            width={tall.width}
            height={tall.height}
            sizes="(max-width: 900px) 90vw, 30vw"
            className={styles.image}
          />
          <span className={styles.verticalName}>{tall.name}</span>
        </div>

        <div className={styles.about1}>
          <p className={styles.subtitle}>{tall.subtitle}</p>
          <p>{tall.about}</p>
        </div>

        <div className={styles.squareItem}>
          <h2 className={styles.name}>{square.name}</h2>
          <p className={styles.subtitle}>{square.subtitle}</p>
          <Image
            src={square.src}
            alt={square.name}
            width={square.width}
            height={square.height}
            sizes="(max-width: 900px) 90vw, 30vw"
            className={styles.image}
          />
        </div>

        <div className={styles.about2}>
          <h2 className={styles.aboutHeading}>About</h2>
          <p>{square.about}</p>
        </div>

        <div className={`${styles.simpleItem} ${styles.item3}`}>
          <Image
            src={third.src}
            alt={third.name}
            width={third.width}
            height={third.height}
            sizes="(max-width: 900px) 90vw, 30vw"
            className={styles.image}
          />
          <h2 className={styles.name}>{third.name}</h2>
          <p className={styles.subtitle}>{third.subtitle}</p>
          <p className={styles.caption}>{third.about}</p>
        </div>

        <div className={`${styles.simpleItem} ${styles.item4}`}>
          <Image
            src={fourth.src}
            alt={fourth.name}
            width={fourth.width}
            height={fourth.height}
            sizes="(max-width: 900px) 90vw, 30vw"
            className={styles.image}
          />
          <h2 className={styles.name}>{fourth.name}</h2>
          <p className={styles.subtitle}>{fourth.subtitle}</p>
          <p className={styles.caption}>{fourth.about}</p>
        </div>
      </div>
    </main>
  );
}
