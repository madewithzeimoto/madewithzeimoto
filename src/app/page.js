import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          aria-hidden
          src="/icon.svg"
          alt="Zeitmoto Brandmark"
          width={96}
          height={96}
          priority
        />
      </main>
    </div>
  );
}
