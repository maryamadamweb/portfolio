import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.row}>
        <div className={styles.imageWrap}>
          <Image
            src="/genres/about/profile-pic.jpg"
            alt="Maryam Adam"
            width={1400}
            height={2100}
            sizes="(max-width: 900px) 90vw, 400px"
            className={styles.image}
            priority
          />
          <p className={styles.caption}>
            Maryam, photographed by Bea Dero for Huq That
          </p>
        </div>
        <div className={styles.textPane}>
          <h1 className={styles.name}>About</h1>
          <p className={styles.bio}>
            Maryam Adam is an interdisciplinary artist, illustrator, and
            designer with a BA in Graphic Communication Design. Her work
            explores themes of heritage, introspection, and the connection
            between the conscious and unconscious. Community engagement is
            central to her practice, and she values the relationships formed
            with audiences through her concepts. Often incorporating surrealist
            imagery, her work addresses social politics, faith, and existence.
            Her practice visually reflects the Gujarati/interlingual word
            &quot;naram&quot; (soft, gentle), even when addressing more
            subversive themes. Since winning the Jo Brocklehurst Prize in 2021,
            she has gone on to work with the likes of Dazed, V&A East, BFI, NHS,
            and Islamic Relief.
          </p>
        </div>
      </div>
    </main>
  );
}
