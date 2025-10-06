import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.mainContent}>
          <section id="about" className={styles.section}>
            <About />
          </section>
          <section id="skills" className={styles.section}>
            <Skills />
          </section>
          <section id="projects" className={styles.section}>
            <Projects />
          </section>
          <section id="experience" className={styles.section}>
            <Experience />
          </section>
          <section id="education" className={styles.section}>
            <Education />
          </section>
          <section id="contact" className={styles.section}>
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
