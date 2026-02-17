export interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  tags: string[]
  github?: string
  demo?: string
  date: string
  featured?: boolean
  image?: string
}

export interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
}




export interface Education {
  degree: string
  school: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  gpa?: string
  coursework: string[]
  notes?: string
  image?: string
  stats?: Array<{ label: string; value: string }>
}

export interface Publication {
  title: string
  authors: string
  journal: string
  year: string
  doi?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Award {
  title: string
  organization: string
  date: string
  description: string
  category: "hackathon" | "academic" | "competition" | "recognition"
  image?: string
}

export interface Certification {
  title: string
  organization: string
  date: string
  credentialUrl: string
  category: "ml" | "ai" | "cloud" | "programming" | "data" | "other"
}

export interface MediumArticle {
  title: string
  link: string
  pubDate: string
  thumbnail?: string
  description: string
  categories: string[]
  author: string
}

export const allProjects: Project[] = [
    {
    slug: "automl-tabular",
    title: "AutoML Tabular",
    description: "Built a production-style AutoML system for tabular data that performs profile-driven preprocessing, tolerance-based model selection, and performance-optimized hyperparameter search, generating fully explainable HTML reports for classification and regression tasks.",
    tech: ["Python", "Optuna", "scikit-learn", "XGBoost", "LightGBM", "pandas", "NumPy", "Jinja2", "Matplotlib", "Seaborn", "Streamlit"],
    tags: ["AutoML", "Machine Learning", "Tabular Data", "Hyperparameter Optimization", "Explainable AI", "Model Selection", "ML Engineering", "Performance Optimization"],
    github: "https://github.com/Mounusha25/automl-tabular",
    demo: "https://automl-tabular-demo.streamlit.app/",
    date: "2026-01-20",
    featured: true,
    image: "/images/projects/automl_tabular.png"
    },
    {
    slug: "swiggy-sales-analytics",
    title: "Swiggy Sales Analysis – End-to-End Analytics & Forecasting",
    description: "Developed an end-to-end analytics and forecasting pipeline analyzing 197K+ food delivery transactions to uncover revenue drivers, customer behavior patterns, and geographic performance insights. Integrated statistical analysis, Pareto segmentation, and ARIMA time-series forecasting with an interactive Streamlit dashboard to deliver actionable, data-driven business recommendations.",
    tech: ["Python", "Pandas", "NumPy", "SQL", "Statsmodels", "Streamlit", "Plotly", "Matplotlib"],
    tags: ["Data Analytics", "Time Series Forecasting", "Business Intelligence", "ARIMA", "Customer Segmentation", "Pareto Analysis", "SQL Analytics", "Dashboarding"],
    github: "https://github.com/Mounusha25/swiggy_analysis",
    date: "2025-01-01",
    featured: true,
    image: "/images/projects/swiggy-analytics.png"
    },

    {
    slug: "trustmed-ai-multi-agent-rag",
    title: "TrustMed-AI Multi-Agent RAG System",
    description: "Engineered a production-grade multi-agent retrieval-augmented generation (RAG) system for medical query answering with adaptive retrieval thresholds and parallel orchestration. The architecture integrates semantic search, utility-based agent scoring, and controlled LLM generation to deliver grounded, low-latency, and high-precision clinical responses.",
    tech: ["Python", "FastAPI", "ChromaDB", "OpenAI", "AWS", "Docker", "React"],
    tags: ["Multi-Agent Systems", "RAG", "LLMs", "Medical AI", "Vector Search", "Semantic Retrieval", "Distributed Systems", "AI Evaluation"],
    github: "https://github.com/rongeorge74/TrustMed-AI-Chatbot",
    date: "2024-02-01",
    featured: true,
    image: "/images/projects/trustmed-ai.png"
    },

  //   {
  //   slug: "healthcare-nlp-assistant",
  //   title: "Healthcare NLP Assistant",
  //   description: "Developed an NLP-based clinical assistant to analyze and route medical queries using de-identified healthcare text. The system combines transformer-based intent classification with retrieval-augmented generation for evidence-aware responses.",
  //   tech: ["Python", "scikit-learn", "HuggingFace", "Spacy", "Streamlit", "pytest", "Docker", "ClipAI"],
  //   tags: ["Healthcare AI", "NLP", "Transformers", "RAG", "Clinical Text Mining", "Machine Learning", "AI Ethics"],
  //   github: "https://github.com/Mounusha25/AI_Medical_Chatbot",
  //   demo: "https://huggingface.co/spaces/Mounusha/AI-Medical-Assistant",
  //   date: "2025-10-01",
  //   featured: true,
  //   image: "/images/projects/healthcarenlp.png",
  // },
  {
    slug: "churnopt-decision-ml",
    title: "ChurnOpt – Decision-Optimized Churn Prediction",
    description: "Built a decision-optimized customer churn prediction system that converts churn probabilities into profit-maximizing retention actions. The platform uses temporal feature engineering, false-positive cost modeling, and budget-constrained optimization to support realistic production deployment and strategic profit analysis.",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Parquet", "PyYAML", "Matplotlib", "pytest", "Git"],
    tags: ["Churn Prediction", "Customer Retention", "Machine Learning", "Data Engineering", "Profit Optimization", "Temporal Features"],
    github: "https://github.com/Mounusha25/churnopt",
    date: "2026-01-05",
    featured: true,
    image: "/images/projects/churnopt.png",
  },
  {
    slug: "opti-vision-edge-inference-system",
    title: "OptiVision — Edge Inference System",
    description: "Built a real-time object detection inference service optimized for edge deployment, exposing deterministic APIs with temporal activity signals and performance observability. The system converts per-frame detections into structured summaries and short-term context, enabling downstream systems to reason about perception behavior under real-time constraints.",
    tech: ["Python", "FastAPI", "ONNX Runtime", "YOLOv8", "OpenCV (headless)", "Docker", "pytest", "Git"],
    tags: ["Edge AI", "Computer Vision", "Real-Time Inferenc", "ML Systems", "Model Deployment", "Temporal Signals", "API Design"],
    github: "https://github.com/Mounusha25/Optivision",
    demo: "https://optivision-edge-inference-system.onrender.com",
    date: "2025-11-01",
    featured: true,
    image: "/images/projects/optivision.png",
  },
  {
    slug: "rag-knowledge-engine",
    title: "RAG Knowledge Engine",
    description:"Built a retrieval-augmented generation (RAG) system to answer complex queries using external knowledge sources with grounded, context-aware responses. The pipeline combines semantic retrieval, ranking, and controlled generation to improve factual reliability.",
    tech: ["Python","Langchain","ChromaDB","LLAMA2","scikit-learn", "Docker", "AWS"],
    tags: ["RAG","LLMs","NLP","Knowledge Systems", "Semantic Search", "Information Retrieval", "AI Evaluation"],
    github: "https://github.com/Mounusha25/Knowledge_management_system",
    date: "2023-09-01",
    featured: true,
    image: "/images/projects/rag.png",
  },
//   {
//   slug: "resume-rank-audit",
//   title: "ResumeRank Audit",
//   description: "Developed a hybrid ML ranking system for resume–JD matching and conducted counterfactual fairness audits to analyze ranking stability, signal dominance, and bias sensitivity across semantic and structured features.",
//   tech: [ "Python", "Sentence-BERT", "scikit-learn", "TF-IDF", "pandas", "NumPy", "Streamlit", "Matplotlib", "Seaborn"],
//   tags: [ "Machine Learning", "NLP", "Ranking Systems", "Responsible AI", "Fairness Auditing", "Counterfactual Analysis", "Model Evaluation"],
//   github: "https://github.com/Mounusha25/resumerank_audit",
//   demo: "https://resumerankaudit.streamlit.app/",
//   date: "2026-01-01",
//   featured: true,
//   image: "/images/projects/resumerank_audit.png"
// },
  
]

export const experiences: Experience[] = [
  {
    title: "Data Science Researcher",
    company: "SSEBE, Arizona State University",
    location: "Arizona, United States",
    startDate: "2025-02-15",
    current: true,
    description:
      "Supported multidisciplinary research by designing and maintaining scalable data pipelines, analytics services, and interactive dashboards for large geospatial and sensor datasets, enabling data-driven decision-making in applied engineering research.",
    achievements: [
      "Designed and maintained backend analytics workflows, including data validation, transformation, and database-backed querying to support reliable research experimentation.",
      "Collaborated with researchers to translate analytical requirements into scalable dashboards and services, improving accessibility of insights for technical and non-technical stakeholders.",
    ],
  },
  {
    title: "Data Engineering Intern",
    company: "AWL Metaverse Pvt Ltd.",
    location: "Delhi, India",
    startDate: "2024-05-15",
    endDate: "2024-12-15",
    current: false,
    description:
      "Worked on building and maintaining data pipelines and infrastructure to support analytics and machine learning workflows across multiple business use cases.",
    achievements: [
      "Developed and automated ETL workflows for ingesting, cleaning, and transforming large datasets used by analytics and modeling teams.",
      "Assisted in containerizing data services and improving deployment reliability through version control and collaborative engineering practices.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Dharte Inc.,",
    location: "Mumbai, India",
    startDate: "2023-05-01",
    endDate: "2023-08-15",
    current: false,
    description:
      "Supported product and marketing teams by analyzing user behavior data and translating insights into actionable recommendations.",
    achievements: [
      "Conducted exploratory analysis and experimentation to understand user funnels, engagement patterns, and feature performance.",
      "Built dashboards and reports to communicate insights clearly to stakeholders and support data-driven product and campaign decisions.",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "Masters in Data Science (Specialization: Sustainable Engineering)",
    school: "Arizona State University",
    location: "Tempe, AZ",
    startDate: "2025-01-13",
    current: true,
    coursework: ["Statistical Machine Learning", "Data Mining", "Data Visualization", "Artificiala Intelligence for Civil Engineers"],
    stats: [
      { label: "CGPA", value: "4.00 / 4.00" },
      { label: "Projects", value: "7" },
    ],
    image: "/images/education/asu_logo.png",
  },
  {
    degree: "Dual Degree in Civil Engineering (M.Tech: Environmental Engineering)",
    school: "Indian Institute of Technology, Kharagpur",
    location: "West Bengal, India",
    startDate: "2019-07-15",
    endDate: "2024-05-15",
    current: false,
    coursework: ["Programming and Data Structures", "Probability and Statistics", "Calculus", "Sustainable Engineering and Circular Economy"],
    stats: [
      { label: "CGPA", value: "3.25 / 4.00" },
      { label: "Projects", value: "8" },
    ],
    image: "/images/education/iitkgp.jpg",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Data Science & Machine Learning",
    skills: [
      "Python",
      "R",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Hugging Face",
      "Natural Language Processing",
      "Recommendation Systems",
      "Statistical Modeling",
      "Time Series Analysis",
      "Causal Inference",
      "A/B Testing",
    ],
  },
  {
    category: "Data Analytics & Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
      "Excel",
      "Google Analytics",
      "D3.js",
    ],
  },
  {
    category: "Data Engineering & Infrastructure",
    skills: [
      "MySQL",
      "SQLite",
      "Redis",
      "Docker",
      "Apache Spark",
      "Databricks",
      "Apache Airflow",
      "MLflow",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      // "TypeScript",
      "React",
      "Next.js",
      // "Tailwind CSS",
      "Node.js",
      // "Express",
      "MongoDB",
      "Firebase",
      "Vercel",
      "Google Cloud Platform",
    ],
  },
  {
    category: "Development Tools & Automation",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "n8n Workflows",
      "CI/CD pipelines",
    ],
  },
  {
    category: "Sustainability & Environment",
    skills: [
      "ArcGIS Pro",
      "QGIS",
      "Google Earth Engine",
      "LCA",
    ],
  },
]


export const certifications: Certification[] = [
  {
    title: "Deep Learning",
    organization: "DeepLearning.AI",
    date: "2025-07-06",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/KBBW0AHZDCFU",
    category: "ml",
  },
  {
    title: "Data Visualization with Tableau",
    organization: "Tableau",
    date: "2025-12-30",
    credentialUrl: "https://coursera.org/share/1dbf5ec5228f54618e40eeb79bc5ca53",
    category: "data",
  },
  {
    title: "Data Science, AI & Development",
    organization: "IBM",
    date: "2025-06-01",
    credentialUrl: "https://coursera.org/share/1c2350056522546fff7ad899be04880d",
    category: "data",
  },
  {
    title: "Google AI Essentials",
    organization: "Google",
    date: "2026-01-01",
    credentialUrl: "https://coursera.org/share/ddd44c7d4de9c4a34439f512f952b5cc",
    category: "ai",
  },
  {
    title: "The Complete Python Developer by ZTM",
    organization: "Udemy",
    date: "2022-07-04",
    credentialUrl: "https://www.udemy.com/certificate/UC-6fd4acd2-5972-4abc-86fa-f792cddfa890/",
    category: "programming",
  },
  {
    title: "Fundamentals of GIS",
    organization: "UC Davis",
    date: "2025-03-31",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/5X04LTROCT4K",
    category: "other",
  },
]

export const heroStats = [
  { id: "projects",  label: "Projects",       rolling: ["15", "6"] }, 
  { id: "hackathons",label: "Hackathon Wins", value: "2" },
  { id: "linkedin",  label: "Followers",      value: "3k+" },
  { id: "stack",     label: "Tech Stack",     value: "40" },
  { id: "domains",   label: "Domains",        value: "6" },
] as const;
