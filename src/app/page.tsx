"use client";

import { AboutIntro } from "@/components/intro/about-intro";
import styles from "./page.module.css";
import { About } from "@/components/about/about";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutIntro />
      <About />
    </main>
  );
}
