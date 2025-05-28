"use client";

import { AboutIntro } from "@/components/AboutIntro/AboutIntro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutIntro />
    </main>
  );
}
