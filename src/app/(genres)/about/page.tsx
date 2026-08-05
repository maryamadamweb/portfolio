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
        <div className={styles.articlesPane}>
          <h2 className={styles.articlesHeading}>Articles</h2>
          <ul className={styles.articlesList}>
            <li className={styles.article}>
              <a
                href="https://www.dazeddigital.com/beauty/article/66042/1/huq-that-the-south-asian-collective-turning-henna-into-high-art"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleLink}
              >
                Huq That: The South Asian collective turning henna into high art
              </a>
              <span className={styles.articlePublication}>Dazed</span>
            </li>
            <li className={styles.article}>
              <a
                href="https://www.theguardian.com/fashion/2025/nov/07/a-sign-of-who-i-am-right-here-on-my-hands-meet-the-artists-behind-the-new-school-henna-boom"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleLink}
              >
                &apos;A sign of who I am, right here on my hands&apos;: meet the
                artists behind the new-school henna boom
              </a>
              <span className={styles.articlePublication}>The Guardian</span>
            </li>
            <li className={styles.article}>
              <a
                href="https://envimedia.co/a-new-henna-art-era-the-south-asian-gen-z-artists-leading-the-movement/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleLink}
              >
                A New Henna Art Era: The South Asian Gen Z Artists Leading the
                Movement
              </a>
              <span className={styles.articlePublication}>EnVi Media</span>
            </li>
            <li className={styles.article}>
              <a
                href="https://www.newhamheritagemonth.org/records/drawing-on-heritage-maryam-adam/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleLink}
              >
                Drawing on Heritage: Maryam Adam
              </a>
              <span className={styles.articlePublication}>
                Newham Heritage Month
              </span>
            </li>
          </ul>
        </div>
      </div>
      <section className={styles.contact}>
        <h2 className={styles.contactHeading}>Contact</h2>
        <div className={styles.contactDetails}>
          <a
            href="mailto:maryam.arts@outlook.com"
            className={styles.contactItem}
          >
            maryam.arts@outlook.com
          </a>
          <a
            href="https://instagram.com/paintingonmars"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            @paintingonmars
          </a>
          <a
            href="https://instagram.com/naramhands"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            @naramhands
          </a>
        </div>
      </section>
    </main>
  );
}
