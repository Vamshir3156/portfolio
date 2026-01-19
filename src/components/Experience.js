import React, { useState } from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Alliant Group",
      period: "Oct 2024 - Present",
      summary:
        "Designed Secure, Scalable Fraud Detection Platforms Using Modern Full Stack and Cloud Technologies.",
      details: [
        "Built full-stack fraud detection features using Java, Spring Boot, Angular 15+, React, Node.js, delivering scalable microservices while developing responsive UI dashboards for real-time analytics.",
        "Developed rich frontend components with Angular 15+, React, NgRx/Redux, improving client-side rendering performance by 35% and enabling seamless data visualization.",
        "Designed and integrated REST/GraphQL APIs to support full-stack features, improving frontend–backend communication throughput by 30%.",
        "Deployed and maintained cloud infrastructure on AWS EKS, using Kubernetes, Docker, Terraform to support both backend services and UI builds.",
        "Implemented end-to-end security across the stack using Spring Security, OAuth2, JWT, ensuring compliant, secure data flow between frontend and backend.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Purpose Financial",
      period: "Feb 2024 - Sep 2024",
      summary:
        "Delivered End-to-End Application Modernization with CI/CD Automation, DocuSign Integration, and Cloud Migration.",
      details: [
        "Migrated a legacy platform into Spring Boot + Node.js microservices, enabling modular full-stack architecture and reducing system latency by 40%.",
        "Developed full-stack features using Angular 11+, React, TypeScript, and built reusable UI components with lazy loading to improve page load speed by 35%.",
        "Built real-time fraud alerting interfaces and backend services using Kafka, Elasticsearch, Node.js, improving alert accuracy and responsiveness.",
        "Automated the full CI/CD lifecycle for both frontend and backend using Jenkins, GitHub Actions, Cypress, Jest, achieving 99% pipeline stability.",
      ],
    },

    {
      title: "Software Developer",
      company: "HSBC",
      period: "Feb 2021 - Dec 2022",
      summary:
        "Developed Enterprise Applications with OAuth2 Security, Event Streaming, and High-Performance Data Queries.",
      details: [
        "Developed frontend pages in HTML/CSS/JavaScript and integrated them with backend APIs built in Spring Boot, Struts, Hibernate, improving end-user workflows.",
        "Built and secured backend services with Spring Security and integrated AES + HSM encryption for secure payment processing.",
        "Improved REST API response times by 40% through backend optimization and efficient UI–backend data flow.",
        "Deployed full-stack containers on AWS + Kubernetes, enabling reliable, zero-downtime application updates.",
      ],
    },
  ];

  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className={styles.experienceSection}>
      <h2 id="experience" className={styles.sectionTitle}>
        Work Experience
      </h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className={styles.period}>{exp.period}</span>
              <p>{exp.summary}</p>
              {expandedIndexes.includes(index) && (
                <ul className={styles.detailsList}>
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              <button
                className={styles.readMoreButton}
                onClick={() => toggleReadMore(index)}
              >
                {expandedIndexes.includes(index) ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
