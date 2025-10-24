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
  FaCubes,
  FaUserShield,
  FaLock,
  FaTasks,
  FaChartLine,
  FaExchangeAlt,
  FaCogs,
  FaCloudUploadAlt,
  FaProjectDiagram,
  FaCreditCard,
} from "react-icons/fa";
import { MdCategory, MdDashboard } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
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
  React: <FaReact className={styles.icon} color="#61DAFB" />,
  "Redux Toolkit": <SiRedux className={styles.icon} color="#764ABC" />,
  "Tailwind CSS": <SiTailwindcss className={styles.icon} color="#38BDF8" />,
  Node: <FaNodeJs className={styles.icon} color="#68A063" />,
  "Node.js": <FaNodeJs className={styles.icon} color="#68A063" />,
  Express: <SiExpress className={styles.icon} color="#808080" />,
  MongoDB: <SiMongodb className={styles.icon} color="#47A248" />,
  Mongoose: <SiMongoose className={styles.icon} color="#880000" />,
  SQLite: <FaDatabase className={styles.icon} color="#003B57" />,
  Stripe: <FaStripe className={styles.icon} color="#635BFF" />,
  JWT: <SiJsonwebtokens className={styles.icon} color="#776e6eff" />,
  Axios: <SiAxios className={styles.icon} color="#671DDf" />,
  Postman: <SiPostman className={styles.icon} color="#FF6C37" />,
  Nodemon: <SiNodemon className={styles.icon} color="#76D04B" />,
  Vercel: <SiVercel className={styles.icon} color="#948d8dff" />,
  Render: <SiRender className={styles.icon} color="#46E3B7" />,
  Python: <SiPython className={styles.icon} color="#3776AB" />,
  LangChain: <SiLangchain className={styles.icon} color="#2E8B57" />,
  TensorFlow: <SiTensorflow className={styles.icon} color="#FF6F00" />,
  "Scikit-learn": <SiScikitlearn className={styles.icon} color="#F7931E" />,
  Pandas: <SiPandas className={styles.icon} color="#150458" />,
  NumPy: <SiNumpy className={styles.icon} color="#013243" />,
  Streamlit: <SiStreamlit className={styles.icon} color="#FF4B4B" />,
  Plotly: <SiPlotly className={styles.icon} color="#3F4F75" />,
  PyTest: <SiPytest className={styles.icon} color="#0A9EDC" />,
  GitHub: <FaGithub className={styles.icon} color="#181717" />,
  Docker: <FaDocker className={styles.icon} color="#2496ED" />,
  "VS Code": <FaCode className={styles.icon} color="#007ACC" />,
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
      "Smart Product Catalog : Category filters, sorting (price, popularity, newest), and dynamic URL search.",
      "Stripe-Powered Payments : Integrated checkout with real-time totals and backend payment intents.",
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
      "Secure RESTful API : Structured endpoints for task and user management.",
      "JWT Authentication & Authorization : Token-based login with protected routes.",
      "MongoDB Data Modeling : Scalable schemas with Mongoose and validation.",
      "Comprehensive CRUD Operations : Create, update, delete, fetch with safe responses.",
      "Postman-Verified Endpoints : Tests and docs for reliability and collaboration.",
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
      "Built ML/NLP pipelines to forecast commodity price trends and visualize signals via interactive dashboards.",
    features: [
      "Time-Series Forecasting : TensorFlow/Scikit-learn models on historical data.",
      "NLP Signal Extraction : News/social sentiment to augment features.",
      "Model Pipelines : Reproducible training & evaluation workflows.",
      "Interactive Dashboards : Real-time views of prices & predictions.",
      "Data Engineering : Clean/merge feeds for dependable inputs.",
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
      "Automated translation of COBOL to modern languages with LangChain + OpenAI, packaged for scalable deployment.",
    features: [
      "Automated Conversion : Rule/LLM-driven translation at scale.",
      "Semantic Preservation : LLM prompts to retain business logic.",
      "Batch Pipelines : Process large codebases with modules.",
      "Containerized Deploy : Dockerized stages for parity.",
      "Throughput Gains : Cut manual effort and cycle time.",
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

const featuresByProject = {
  "E-Commerce (ShopX)": [
    {
      icon: <FaCubes className={styles.featureIcon} />,
      title: "Full-Stack Architecture",
      sub: "React · Node.js · Express",
    },
    {
      icon: <FaUserShield className={styles.featureIcon} />,
      title: "Role-Based Access",
      sub: "Admin · Customer · Guarded routes",
    },
    {
      icon: <MdCategory className={styles.featureIcon} />,
      title: "Smart Catalog",
      sub: "Filters · Sorting · Search",
    },
    {
      icon: <FaCreditCard className={styles.featureIcon} />,
      title: "Stripe Checkout",
      sub: "Intents · Real-time totals",
    },
    {
      icon: <SiExpress className={styles.featureIcon} />,
      title: "REST APIs",
      sub: "Auth · Products · Orders",
    },
    {
      icon: <FaDatabase className={styles.featureIcon} />,
      title: "SQLite Store",
      sub: "Lightweight & fast",
    },
  ],
  "Taskify API": [
    {
      icon: <FaLock className={styles.featureIcon} />,
      title: "Secure REST API",
      sub: "Versioned, consistent endpoints",
    },
    {
      icon: <SiJsonwebtokens className={styles.featureIcon} />,
      title: "JWT Auth",
      sub: "Stateless tokens & guards",
    },
    {
      icon: <SiMongoose className={styles.featureIcon} />,
      title: "Data Modeling",
      sub: "MongoDB schemas & validation",
    },
    {
      icon: <FaTasks className={styles.featureIcon} />,
      title: "Full CRUD",
      sub: "Tasks · Users · Status",
    },
    {
      icon: <SiPostman className={styles.featureIcon} />,
      title: "Postman Tests",
      sub: "Docs · Collections · CI-ready",
    },
    {
      icon: <FaCloudUploadAlt className={styles.featureIcon} />,
      title: "Deploy-Ready",
      sub: "Logs · Health · Nodemon",
    },
  ],
  "AI in Commodities Trading": [
    {
      icon: <FaChartLine className={styles.featureIcon} />,
      title: "Time Series Forecasting",
      sub: "TF · sklearn time-series",
    },
    {
      icon: <FaBrain className={styles.featureIcon} />,
      title: "NLP Signals",
      sub: "News · Social sentiment",
    },
    {
      icon: <FaProjectDiagram className={styles.featureIcon} />,
      title: "Pipelines",
      sub: "Train · Evaluate · Iterate",
    },
    {
      icon: <MdDashboard className={styles.featureIcon} />,
      title: "Interactive Dashboards",
      sub: "Realtime charts & KPIs",
    },
    {
      icon: <FaDatabase className={styles.featureIcon} />,
      title: "Data Ops",
      sub: "Clean · Merge · Validate",
    },
    {
      icon: <SiPlotly className={styles.featureIcon} />,
      title: "Visual Analytics",
      sub: "Plotly · Streamlit",
    },
  ],
  "Automated COBOL Modernization": [
    {
      icon: <FaExchangeAlt className={styles.featureIcon} />,
      title: "Code Conversion",
      sub: "COBOL → Python/Java",
    },
    {
      icon: <FaBrain className={styles.featureIcon} />,
      title: "LLM Semantics",
      sub: "Logic-aware prompts",
    },
    {
      icon: <FaCogs className={styles.featureIcon} />,
      title: "Batch Pipelines",
      sub: "Chunk · Queue · Monitor",
    },
    {
      icon: <FaDocker className={styles.featureIcon} />,
      title: "Containerized",
      sub: "Parity across envs",
    },
    {
      icon: <SiPytest className={styles.featureIcon} />,
      title: "Quality Gates",
      sub: "Unit & smoke tests",
    },
    {
      icon: <FaChartLine className={styles.featureIcon} />,
      title: "Throughput Gains",
      sub: "Faster modernization",
    },
  ],
};

function FeatureGrid({ title, fallback = [] }) {
  const items =
    featuresByProject[title] ||
    fallback.map((line) => ({
      icon: <FaCogs className={styles.featureIcon} />,
      title: line.split(":")[0].trim(),
      sub: (line.split(":")[1] || "").trim(),
    }));

  return (
    <div className={styles.featuresGrid}>
      {items.map((it, idx) => (
        <div key={idx} className={styles.featureCard}>
          {it.icon}
          <div>
            <div className={styles.featureTitle}>{it.title}</div>
            {it.sub && <div className={styles.featureSub}>{it.sub}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

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

              <FeatureGrid title={p.title} fallback={p.features} />
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
