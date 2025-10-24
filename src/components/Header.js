import React from "react";
import styles from "./Header.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

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
            <h1 className={styles.title}>
              Vamshi <span className={styles.blueR}>R</span>
            </h1>
            <p className={styles.subtitle}>
              Full Stack Developer | Java, Spring Boot & React.js Specialist
            </p>

            <div className={styles.socialIcons}>
              <a
                href="https://github.com/Vamshir3156"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vamshi-r-623418208/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:rvamshi3156@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>

            <a
              href="/Vamshi_Resume.pdf"
              className={styles.resumeButton}
              download
            >
              <FaDownload className={styles.icon} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
