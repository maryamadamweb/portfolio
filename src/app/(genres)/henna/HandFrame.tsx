import Image from "next/image";
import type { HandImage } from "./hands";
import styles from "./HandFrame.module.css";

export function HandFrame({
  images,
  side,
}: {
  images: HandImage[];
  side: "left" | "right";
}) {
  return (
    <div className={side === "left" ? styles.left : styles.right}>
      {images.map((hand, index) => (
        <div
          key={hand.src}
          className={styles.item}
          style={{ transform: `rotate(${index % 2 === 0 ? -4 : 4}deg)` }}
        >
          <Image
            src={hand.src}
            alt=""
            width={hand.width}
            height={hand.height}
            sizes="220px"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
