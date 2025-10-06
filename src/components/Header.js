import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav}>
          {[
            "About",
            "Skills",
            "Projects",
            "Experience",
            "Education",
            "Contact",
          ].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={styles.navLink}
            >
              {section}
            </a>
          ))}
        </div>
      </nav>

      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.rightContent}>
            <img
              src="/profile.jpg"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.leftContent}>
            <h1 className={styles.title}>Vamshi R</h1>
            <p className={styles.subtitle}>
              Full Stack Developer | Java, Spring Boot & React.js Specialist
            </p>

            <a
              href="/Vamshi_Resume.pdf"
              className={styles.resumeButton}
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
