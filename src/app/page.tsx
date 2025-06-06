"use client";
import { Introduction } from "@/components/introduction";
import styles from "./page.module.css";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="home">
        <Introduction />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
