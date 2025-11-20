import React from "react";
import styles from "./Skills.module.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaLock,
  FaVuejs,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiSpringboot,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiAwsamplify,
  SiKubernetes,
} from "react-icons/si";

const iconMap = {
  "React.js": <FaReact color="#61DAFB" />,
  "JavaScript (ES6+)": <SiJavascript color="#F7DF1E" />,
  HTML5: <FaHtml5 color="#E44D26" />,
  CSS3: <FaCss3Alt color="#1572B6" />,
  TypeScript: <SiTypescript color="#3178C6" />,
  "Next.js": <SiNextdotjs color="#000000" />,
  Redux: <SiRedux color="#764ABC" />,
  "Vue.js": <FaVuejs color="#42B883" />,
  Java: <FaJava color="#007396" />,
  "Spring Boot": <SiSpringboot color="#6DB33F" />,
  "Node.js": <FaNodeJs color="#339933" />,
  "Express.js": <SiExpress color="#afa8a8" />,
  "REST APIs": <FaCogs color="#FF9800" />,
  "JWT Authentication": <FaLock color="#7B68EE" />,
  GraphQL: <SiGraphql color="#E10098" />,
  PostgreSQL: <SiPostgresql color="#336791" />,
  MongoDB: <SiMongodb color="#47A248" />,
  DynamoDB: <FaDatabase color="#4051B5" />,
  AWS: <SiAwsamplify color="#FF9900" />,
  MySQL: <SiMysql color="#00758F" />,
  "Git & GitHub": <FaGitAlt color="#F1502F" />,
  Postman: <SiPostman color="#FF6C37" />,
  Kubernetes: <SiKubernetes color="#326CE5" />,
  Docker: <FaDocker color="#2496ED" />,
};

export default function Skills() {
  const skillGroups = [
    {
      title: "Front-End",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "TypeScript",
        "Next.js",
        "Redux",
        "Vue.js",
      ],
    },
    {
      title: "Back-End",
      skills: [
        "Java",
        "Spring Boot",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "GraphQL",
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "MySQL",
        "AWS",
        "Git & GitHub",
        "Kubernetes",
        "Docker",
      ],
    },
  ];

  return (
    <section className={styles.skillsContainer}>
      <h2 id="skills" className={styles.sectionTitle}>
        Skills
      </h2>
      <div className={styles.groupsContainer}>
        {skillGroups.map((group, idx) => (
          <div key={idx} className={styles.groupCard}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <div className={styles.skillsGrid}>
              {group.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <span className={styles.icon}>{iconMap[skill]}</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
