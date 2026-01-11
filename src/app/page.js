import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          aria-hidden
          src="/secondary_lockup_cl_ruby.svg"
          alt="zeimoto Brandmark"
          width={142}
          height={115}
          priority
        />
      </main>
    </div>
  );
}
