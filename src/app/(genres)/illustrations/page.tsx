import Image from "next/image";
import { getGenreMeta } from "@/lib/genres";
// import Content from "./content.mdx";
import styles from "./page.module.css";

export default function IllustrationsPage() {
  const meta = getGenreMeta("illustrations");

  return (
    <main className={styles.page}>
      <div className={styles.imageWrap}>
        <Image
          src="/genres/illustrations/islamic-relief.jpeg"
          alt="Islamic Relief Artwork"
          width={960}
          height={1165}
          sizes="(max-width: 800px) 100vw, 800px"
          className={styles.cover}
        />
        {meta && (
          <Image
            src={meta.cover}
            alt=""
            width={meta.coverWidth}
            height={meta.coverHeight}
            className={styles.badge}
          />
        )}
      </div>
      {/* <article className={styles.content}>
        <Content />
      </article> */}
    </main>
  );
}
