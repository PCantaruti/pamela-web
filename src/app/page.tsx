"use client";

import { AboutIntro } from "@/components/intro/about-intro";
import styles from "./page.module.css";
import { About } from "@/components/about/about";
import { Skills } from "@/components/skills/skills";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="home">
        <AboutIntro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
