import React from "react";
import styles from "./Projects.module.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaStripe,
  FaCss3Alt,
  FaGithub,
  FaServer,
  FaBrain,
  FaDocker,
  FaCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiNodemon,
  SiRedux,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiMongoose,
  SiVercel,
  SiRender,
  SiAxios,
  SiJsonwebtokens,
  SiPython,
  SiLangchain,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiPlotly,
  SiPytest,
} from "react-icons/si";

const iconMap = {
  React: <FaReact className={styles.icon} color="#61DAFB" />, // React blue
  "Redux Toolkit": <SiRedux className={styles.icon} color="#764ABC" />, // Redux purple
  "Tailwind CSS": <SiTailwindcss className={styles.icon} color="#38BDF8" />, // Tailwind cyan
  Node: <FaNodeJs className={styles.icon} color="#68A063" />,
  "Node.js": <FaNodeJs className={styles.icon} color="#68A063" />,
  Express: <SiExpress className={styles.icon} color="#808080" />, // Gray
  MongoDB: <SiMongodb className={styles.icon} color="#47A248" />,
  Mongoose: <SiMongoose className={styles.icon} color="#880000" />,
  SQLite: <FaDatabase className={styles.icon} color="#003B57" />,
  Stripe: <FaStripe className={styles.icon} color="#635BFF" />,
  JWT: <SiJsonwebtokens className={styles.icon} color="#000000" />,
  Axios: <SiAxios className={styles.icon} color="#671DDf" />,
  Postman: <SiPostman className={styles.icon} color="#FF6C37" />,
  Nodemon: <SiNodemon className={styles.icon} color="#76D04B" />,
  Vercel: <SiVercel className={styles.icon} color="#000000" />,
  Render: <SiRender className={styles.icon} color="#46E3B7" />,
  Python: <SiPython className={styles.icon} color="#3776AB" />,
  LangChain: <SiLangchain className={styles.icon} color="#2E8B57" />, // Custom green tone
  TensorFlow: <SiTensorflow className={styles.icon} color="#FF6F00" />,
  "Scikit-learn": <SiScikitlearn className={styles.icon} color="#F7931E" />,
  Pandas: <SiPandas className={styles.icon} color="#150458" />,
  NumPy: <SiNumpy className={styles.icon} color="#013243" />,
  Streamlit: <SiStreamlit className={styles.icon} color="#FF4B4B" />,
  Plotly: <SiPlotly className={styles.icon} color="#3F4F75" />,
  PyTest: <SiPytest className={styles.icon} color="#0A9EDC" />,
  GitHub: <FaGithub className={styles.icon} color="#181717" />,
  Docker: <FaDocker className={styles.icon} color="#2496ED" />,
  "VS Code": <FaCode className={styles.icon} color="#007ACC" />, // Official VS Code blue
  "OpenAI API": <FaBrain className={styles.icon} color="#00A67E" />,
  NLP: <FaBrain className={styles.icon} color="#FF7F50" />,
  "CSS Modules": <FaCss3Alt className={styles.icon} color="#2965F1" />,
  Vite: <SiVite className={styles.icon} color="#646CFF" />,
  Git: <FaGithub className={styles.icon} color="#F05032" />,
  Server: <FaServer className={styles.icon} color="#808080" />,
};

const projects = [
  {
    title: "E-Commerce (ShopX)",
    description:
      "A full-stack online store with role-based authentication, advanced filtering, and Stripe payment integration for a complete shopping flow.",
    features: [
      "Full-Stack Architecture : Built with React, Node.js, and Express, featuring modular APIs for authentication, product, and order management.",
      "Role-Based Access Control : Separate privileges for admins and customers with secure JWT-based login and protected routes.",
      "Smart Product Catalog : Category filters, sorting (price, popularity, newest), and dynamic URL search for seamless user experience.",
      "Stripe-Powered Payments : Integrated checkout flow with real-time total calculation and backend payment intent handling.",
      "Server APIs : Express REST endpoints for products, auth, orders, and payments with validation.",
    ],
    tools: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "SQLite",
      "Stripe",
      "Vercel",
      "Render",
    ],
    live: "https://ecommerce-shop-x.vercel.app",
    source: "https://github.com/Vamshir3156/ecommerce-ShopX.git",
  },
  {
    title: "Taskify API",
    description:
      "A secure REST API for managing tasks, featuring JWT-based authentication and a robust MongoDB backend.",
    features: [
      "Secure RESTful API : Developed with Node.js and Express, providing structured endpoints for task and user management.",
      "JWT Authentication & Authorization : Implements token-based login with protected routes for secure API interaction.",
      "MongoDB Data Modeling : Designed scalable schemas with Mongoose, ensuring robust validation and efficient query performance.",
      "Comprehensive CRUD Operations : Supports full task lifecycle management create, update, delete, and fetch with error-safe responses.",
      "Postman-Verified Endpoints : Each API thoroughly tested and documented with Postman for reliability and developer collaboration.",
    ],
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Postman",
      "Nodemon",
    ],
    live: "https://taskify-api-zeta.vercel.app",
    source: "https://github.com/Vamshir3156/taskify-API.git",
  },
  {
    title: "AI in Commodities Trading",
    description:
      "Developed AI models to predict commodity price trends using TensorFlow, Scikit-learn, and NLP. Created interactive dashboards to visualize market trends and support data-driven trading decisions.",
    features: [
      "Implemented predictive models using historical and sentiment data from financial sources.",
      "Utilized NLP techniques to extract trading signals from news and social media data",
      "Built TensorFlow and Scikit-learn pipelines for time-series forecasting to accurately predict commodity market trends.",
      "Designed real-time dashboards displaying live price movements and predictions.",
      "Enabled traders to identify profitable opportunities with improved forecast accuracy.",
    ],
    tools: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NLP",
      "Streamlit",
    ],
  },

  {
    title: "Automated COBOL Modernization",
    description:
      "Modernized legacy COBOL systems into modern programming languages using LangChain, Python, and OpenAI API. Implemented intelligent pipelines for automated code translation and deployment via Docker.",
    features: [
      "Automated COBOL code conversion to Python/Java using AI and LangChain prompts.",
      "Integrated OpenAI API for semantic understanding and logic preservation during translation.",
      "Built modular pipelines to support large-scale batch processing of COBOL files.",
      "Used Docker for containerized deployment ensuring scalability across environments.",
      "Reduced modernization time and manual intervention by over 70% through automation.",
    ],
    tools: [
      "Python",
      "LangChain",
      "OpenAI API",
      "Docker",
      "PyTest",
      "Git",
      "VS Code",
    ],
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 id="projects" className={styles.sectionTitle}>
        Projects
      </h2>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{p.title}</h3>
            <p className={styles.projectDesc}>{p.description}</p>

            <div className={styles.divider}></div>

            <div className={styles.infoBlock}>
              <h4>Key Features</h4>
              <ul>
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            <div className={styles.infoBlock}>
              <h4>Tools Used</h4>
              <div className={styles.toolList}>
                {p.tools.map((t, idx) => (
                  <span key={idx}>
                    {iconMap[t] || null}
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.btnRow}>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoBtn}
                >
                  🔗 Live Demo
                </a>
              )}
              {p.source && (
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceBtn}
                >
                  💻 Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
