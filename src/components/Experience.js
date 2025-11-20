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
        "Developed a financial fraud detection platform using Java, Spring Boot, and microservices to analyze large-scale transactional data.",
        "Built responsive dashboards using Angular 15+, React.js, and Vue.js with Redux and NgRx for complex state management.",
        "Deployed services on AWS using Kubernetes, Docker, Terraform, and managed serverless execution using AWS Lambda.",
        "Integrated security using OAuth2, JWT, and RBAC with Spring Security to protect sensitive data.",
        "Monitored application health using Prometheus, Grafana, Dynatrace, and Splunk to optimize performance and system reliability.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Purpose Financial",
      period: "Feb 2024 - Sep 2024",
      summary:
        "Delivered End-to-End Application Modernization with CI/CD Automation, DocuSign Integration, and Cloud Migration.",
      details: [
        "Migrated legacy applications to a microservices architecture using Spring Boot, Kafka, and RESTful APIs for modular scalability.",
        "Rebuilt frontend in Angular 11+ and React.js with dynamic routing, lazy loading, and reusable components.",
        "Integrated DocuSign API for secure digital signatures and enhanced compliance with electronic document handling.",
        "Automated test and build pipelines with Cypress, Jest, Jenkins, and GitHub Actions for faster feedback and deployment cycles.",
        "Deployed solutions to AWS (EC2, S3, Lambda) with Kubernetes for scalable and cost-efficient cloud infrastructure.",
      ],
    },
    {
      title: "Software Developer",
      company: "Cigniti",
      period: "May 2022 - Dec 2022",
      summary:
        "Delivered Full Stack Web Solutions with Secure APIs, Real-Time Integration, and Responsive UIs.",
      details: [
        "Designed backend APIs using Spring Boot and JAX-RS to serve high-traffic government web applications.",
        "Created dynamic user interfaces using React, SCSS, and Bootstrap to improve accessibility and usability.",
        "Ensured secure API access through OAuth2 and JWT while applying role-based access for sensitive user actions.",
        "ntegrated Kafka and RabbitMQ for real-time event streaming and distributed processing.",
        "Tuned queries and indexing strategies using MongoDB, Elasticsearch, and PostgreSQL to improve response times.",
      ],
    },
    {
      title: "Software Developer",
      company: "HSBC",
      period: "Feb 2021 - May 2021",
      summary:
        "Developed Enterprise Applications with OAuth2 Security, Event Streaming, and High-Performance Data Queries.",
      details: [
        "Engineered enterprise payment modules using Java, Struts, and Hibernate, conforming to PCI DSS and financial compliance standards.",
        "Secured payment flows with AES encryption and HSM integration for sensitive transaction data.",
        "Developed RESTful APIs for customer onboarding, transactions, and account services with 40% performance gains.",
        "Implemented Redis caching for performance optimization and faster data retrieval under load.",
        "Orchestrated deployments via Docker and Kubernetes on AWS, achieving fault tolerance and zero-downtime updates.",
      ],
    },
  ];

  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
