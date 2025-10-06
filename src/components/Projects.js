import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "WeatherCast",
    description:
      "A clean React weather app using OpenWeatherMap API to show live weather.",
    details:
      "• React + Axios\n• Search by city\n• Responsive UI\n• API error handling",
    link: "https://github.com/Vamshir3156/weather-app",
  },
  {
    title: "Taskify API",
    description: "A secure REST API built with Node.js, Express, and MongoDB.",
    details:
      "• JWT authentication\n• CRUD operations\n• MongoDB schema\n• Postman tested",
    link: "https://github.com/vamshiratna/taskify-api",
  },
  {
    title: "E-Commerce",
    description:
      "An online store built with React featuring cart and Stripe integration.",
    details:
      "• Product catalog\n• Redux for cart\n• Stripe integration\n• Firebase auth",
    link: "https://github.com/Vamshir3156/ecommerce-store.git",
  },
  {
    title: "Portfolio",
    description:
      "Modern responsive portfolio built using React and CSS Modules.",
    details:
      "• Sectioned layout\n• Resume download\n• Smooth scroll\n• Mobile friendly",
    link: "https://github.com/vamshiratna/portfolio-site",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 id="projects" className={styles.sectionTitle}>
        Projects
      </h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={`${styles.projectCard} ${styles.flipCardFront}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  🔗 View Project
                </a> */}
              </div>
              <div className={`${styles.projectCard} ${styles.flipCardBack}`}>
                {/* <h3>{project.title}</h3> */}
                <pre className={styles.projectDetails}>{project.details}</pre>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
