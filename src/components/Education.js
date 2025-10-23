import React from "react";
import styles from "./Experience.module.css";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationList = [
    {
      degree: "Master's in Computer Science",
      institute: "SUNY Polytechnic Institute",
      period: "Jan 2023 - Dec 2024",
      description:
        "Focus on software engineering, AI, and distributed systems.",
    },
    {
      degree: "Bachelor's in Computer Science",
      institute: "Sreenidhi Institute of Science and Technology",
      period: "Jun 2018 - Jul 2022",
      description:
        "Strong foundation in algorithms, OOP concepts, and full-stack development.",
    },
  ];

  return (
    <section id="education" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.timeline}>
        {educationList.map((edu, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.degree}>
                <FaGraduationCap className={styles.icon} />
                {edu.degree}
              </h3>

              <h4>{edu.institute}</h4>
              <span className={styles.period}>{edu.period}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
