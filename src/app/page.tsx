"use client";

import { AboutIntro } from "@/components/about-intro/about-intro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutIntro />
    </main>
  );
}
