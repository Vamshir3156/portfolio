import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 id="about" className={styles.sectionTitle}>
        About Me
      </h2>
      <p className={styles.aboutText}>
        Hi, I'm Vamshi! — a dedicated Full Stack Developer with 3+ years of
        experience crafting scalable, high-performance web applications. I
        specialize in building intuitive frontends with React and robust
        backends using Node.js and Java, often within microservices
        architectures. I’m passionate about creating seamless user experiences,
        writing clean, maintainable code, and collaborating across teams to
        bring ideas to life. Always eager to learn and grow, I thrive in
        fast-paced environments where I can explore new tools and technologies.
      </p>
    </section>
  );
}
