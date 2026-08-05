import type { CSSProperties } from "react";
import Image from "next/image";
import type { HandImage } from "./hands";
import styles from "./HandsLayer.module.css";

export function HandsLayer({ hands }: { hands: HandImage[] }) {
  return (
    <div className={styles.layer}>
      {hands.map((hand) => {
        const style = {
          top: hand.bottom === undefined ? `${hand.top}%` : undefined,
          bottom: hand.bottom === undefined ? undefined : `${hand.bottom}%`,
          left: `${hand.left}%`,
          "--rotate": `${hand.rotate ?? 0}deg`,
          "--scale": hand.scale ?? 1,
        } as CSSProperties;

        return (
          <div key={hand.src} className={styles.item} style={style}>
            <Image
              src={hand.src}
              alt=""
              width={hand.width}
              height={hand.height}
              sizes="220px"
              className={styles.image}
            />
          </div>
        );
      })}
    </div>
  );
}
