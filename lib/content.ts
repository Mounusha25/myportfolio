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
    slug: "healthcare-nlp-assistant",
    title: "Healthcare NLP Assistant",
    description: "Developed an NLP-based clinical assistant to analyze and route medical queries using de-identified healthcare text. The system combines transformer-based intent classification with retrieval-augmented generation for evidence-aware responses.",
    tech: ["Python", "scikit-learn", "HuggingFace", "Spacy", "Streamlit", "pytest", "Docker", "ClipAI"],
    tags: ["Healthcare AI", "NLP", "Transformers", "RAG", "Clinical Text Mining", "Machine Learning", "AI Ethics"],
    github: "https://github.com/Mounusha25/AI_Medical_Chatbot",
    demo: "https://huggingface.co/spaces/Mounusha/AI-Medical-Assistant",
    date: "2025-10-01",
    featured: true,
    image: "/images/projects/healthcarenlp.png",
  },
  {
    slug: "hallucination-detection-engine",
    title: "Hallucination Detection Engine",
    description: "Designed and implemented a system to detect and analyze hallucinated responses in large language models by combining retrieval grounding, natural language inference, and model-level uncertainty signals. The project focuses on improving trustworthiness and interpretability of LLM outputs by identifying unsupported or contradictory claims and surfacing evidence-based explanations for model behavior.",
    tech: ["Python", "Sentence-Transformers", "BM25", "NLI", "XGBoost", "streamlit"],
    tags: ["Python Package", "Machine Learning", "LLMs", "Model Evaluation", "AI Trust & Safety"],
    github: "https://github.com/Mounusha25/Hallucination_Detection_Engine",
    demo: "https://pypi.org/project/tailrisk/",
    date: "2025-11-01",
    featured: true,
    image: "/images/projects/groundedai.png",
  },
  {
    slug: "opti-vision-intelligence-platform",
    title: "OptiVision Intelligence Platform",
    description: "Developed a multimodal AI system that integrates vision and language models to perform real-time scene understanding and visual reasoning. Focused on efficient inference, model optimization, and modular deployment for scalable experimentation.",
    tech: ["Python", "PyTorch", "OpenCV", "llama.cpp", "Docker", "WebGL"],
    tags: ["AI Systems", "Computer Vision", "Deep Learning", "Vision-Language Models", "Model Optimization", "Inference Engineering"],
    github: "https://github.com/VishalLakshmiNarayanan/Career-Pulse",
    demo: "https://pypi.org/project/tailrisk/",
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
    demo: "https://aicelestia.vercel.app/",
    date: "2023-09-01",
    featured: true,
    image: "/images/projects/rag.png",
  },
  {
  slug: "emotisphere",
  title: "EmotiSphere",
  description:
    "Built an adaptive conversational AI system that delivers personalized coaching using large language models, contextual memory, and real-time feedback loops. Emphasized low-latency interaction and user-centric analytics.",
  tech: ["Python", "FastAPI", "React", "Groq", "ElevenLabs", "D3.js"],
  tags: ["Conversational AI", "LLMs", "Personalization", "Human-AI Interaction", "NLP", "AI Systems", "Real-Time Analytics"],
  github: "https://github.com/Mounusha25/EmotiSphere",
  demo: "https://slidesageai.vercel.app/",          // <- your “Visit Website” link
  date: "2025-09-01",
  featured: true,                                   // <- ensures it appears in the carousel
  image: "/images/projects/emotisphere.png",
},
  
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
    credentialUrl: "https://www.skills.google/public_profiles/88828cfd-2add-4cf1-b27c-e7ce77848f50/badges/20527337?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
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
  { id: "projects",  label: "Projects",       rolling: ["15", "5"] }, 
  { id: "hackathons",label: "Hackathon Wins", value: "2" },
  { id: "linkedin",  label: "Followers",      value: "2900+" },
  { id: "stack",     label: "Tech Stack",     value: "40" },
  { id: "domains",   label: "Domains",        value: "6" },
] as const;
