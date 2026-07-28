import Link from "next/link";
import styles from "./page.module.css";

// Entry point. Click the illustration to go to /home.
export default function MainPage() {
  return (
    <main className={styles.page}>
      <Link href="/home" aria-label="Enter site">
        {/* TODO: replace with the real illustration */}
        <div className={styles.illustrationPlaceholder}>Illustration</div>
      </Link>
    </main>
  );
}
