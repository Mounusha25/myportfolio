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
  category: "ai" | "cloud" | "programming" | "data" | "other"
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
    slug: "tailrisk-library",
    title: "TailRisk Python Package",
    description: "Developed and published an open-source Python package for tail risk modeling with specialized loss functions (LaR, CVaR) and hybrid meta-learning ensembles. Improves tail coverage ratio by 76% over baseline models, available on PyPI with comprehensive documentation and scikit-learn compatibility.",
    tech: ["Python", "scikit-learn", "XGBoost", "NumPy", "PyPI"],
    tags: ["Python Package", "Machine Learning", "Risk Analytics", "Open Source"],
    github: "https://github.com/VishalLakshmiNarayanan/TailriskLib",
    demo: "https://pypi.org/project/tailrisk/",
    date: "2025-11-01",
    featured: true,
    image: "/images/projects/tailrisklib.png",
  },
  {
    slug: "career-pulse",
    title: "Career Pulse",
    description: "Built an AI-powered resume-job matching platform using semantic embeddings and transparency scoring to match candidates based on capability rather than keywords. Developed dual portals for job seekers and recruiters, with automated candidate ranking, multi-criteria scoring, and AI-generated job-specific resumes via LaTeX.",
    tech: ["Python", "Streamlit", "Groq LLM", "Sentence-Transformers", "Plotly", "LaTeX"],
    tags: ["AI", "NLP", "Semantic Search", "Career Tech"],
    github: "https://github.com/VishalLakshmiNarayanan/Career-Pulse",
    date: "2025-11-01",
    featured: true,
    image: "/images/projects/cpulse.png",
  },
  {
    slug: "tail-risk-management",
    title: "Tail Risk Management",
    description: "Built a risk-aware ensemble framework for catastrophic insurance loss prediction using Loss-at-Risk (LaR) and CVaR optimization. Developed tail-focused meta-learners and a hybrid model that improved extreme-tail MSE by 3.2% and CVaR residuals by 10.25% over baseline models on 69K+ insurance claims.",
    tech: ["Python", "scikit-learn", "XGBoost", "NumPy", "Pandas", "Jupyter"],
    tags: ["Machine Learning", "Risk Analytics", "Insurance", "Ensemble Methods"],
    github: "https://github.com/VishalLakshmiNarayanan/Tail-Risk-Analysis",
    date: "2025-10-01",
    featured: true,
    image: "/images/projects/tailrisk.png",
  },
  {
    slug: "celestia-ai",
    title: "Celestia AI",
    description:"Celestia AI turns maps into living worlds. Drop a marker anywhere and watch a holographic mascot bring the place to life with cinematic video loops, six fact cards, and real-time narration. Instead of reading static text, users step into a guided storytelling experience where culture, heritage, and history feel tangible.",
    tech: ["Next.js","Three.js","ReAct-globe","TailwindCSS","Typescript"],
    tags: ["AI","Exploration","Visual-UI","Accessibility"],
    github: "https://github.com/VishalLakshmiNarayanan/Celestia-gl",
    demo: "https://aicelestia.vercel.app/",
    date: "2023-09-01",
    featured: true,
    image: "/images/projects/celestia.png",
  },
  {
  slug: "slidesage-ai",
  title: "SlideSage AI",
  description:
    "An AI-powered learning assistant that transforms dense concepts into short, dialogue-based explainer videos with quizzes, streaks, and badges. If a student doesn’t understand a concept the first time, SlideSage instantly regenerates with fresh analogies or examples until it clicks — making learning adaptive, fun, and addictive.",
  tech: ["Next.js", "TailwindCSS", "shadcn/ui", "Groq", "Pexels API", "TypeScript", "Vercel"],
  tags: ["AI", "EdTech", "Video"],
  github: "https://github.com/VishalLakshmiNarayanan/SlideSage-v3",
  demo: "https://slidesageai.vercel.app/",          // <- your “Visit Website” link
  date: "2025-09-01",
  featured: true,                                   // <- ensures it appears in the carousel
  image: "/images/projects/slidesage.png",
},
  {
    slug: "ai-travel-planner",
    title: "AI Travel Itinerary Planner",
    description:
      "Engineered an AI-driven platform that generates optimized multi-day travel itineraries with real-time route refinement. Integrated cost estimation, weather forecasts, and interactive map visualizations, improving planning accuracy by 30%. Won People's choice Award for this project at Hackazona v0.1.",
    tech: ["Streamlit", "Groq LLaMA", "Python"],
    tags: ["AI", "Travel", "Optimization"],
    github: "https://github.com/VishalLakshmiNarayanan/Zoro",
    date: "2025-05-01",
    featured: true,
    image: "/images/projects/ai-travel-planner.jpg",
  },
  {
    slug: "path2pro",
    title: "Path2Pro – AI Job Portal",
    description:
      "Built an AI job-matching portal with semantic similarity scoring and automated resume parsing for 100+ applications. Developed secure recruiter/applicant dashboards with authentication, job posting, and real-time resume uploads.",
    tech: ["Python", "Streamlit", "SentenceTransformers", "SQLite"],
    tags: ["NLP", "Job Matching", "AI"],
    github: "https://github.com/VishalLakshmiNarayanan/AFK-coders",
    date: "2025-03-01",
    featured: true,
    image: "/images/projects/path2pro.png",
  },
  {
    slug: "maily",
    title: "MAILY – AI Mailing & Scheduling Agent",
    description:
      "Developed an n8n AI agent that automates email and scheduling via Gmail, Calendar, and Sheets. Implemented contact verification workflows ensuring email addresses are validated before sending messages.",
    tech: ["n8n", "Groq LLM", "Google APIs"],
    tags: ["Automation", "AI", "Productivity"],
    github: "https://github.com/VishalLakshmiNarayanan/n8n",
    date: "2025-06-01",
    featured: true,
    image: "/images/projects/maily.jpg",
  },
  {
    slug: "phishguard",
    title: "PhishGuard – AI-Based Phishing Detection",
    description:
      "PhishGuard is a Chrome extension that uses AI and VirusTotal to detect phishing websites in real-time. Click the PhishGuard icon in the Chrome toolbar, choose “Analyze This Page,” and view the risk level and detailed recommendation in the popup.",
    tech: [
      "JavaScript",
      "Chrome Extension",
      "Llama (LLM)",
      "VirusTotal API",
      "HTML/CSS"
    ],
    tags: ["Security", "Browser Extension", "AI"],
    github: "https://github.com/VishalLakshmiNarayanan/PhishGuard-",
    date: "2025-05-01",          // use YYYY-MM-DD; adjust if you prefer
    featured: true,             // set true if you want it in any featured sections
    image: "/images/projects/phishguard.png"
  },
  {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection",
    description:
      "Built a Flask-based web application using EfficientNetB0 for medical image classification. Designed for low-cost, smartphone-compatible retina scans to support early diagnosis in rural healthcare settings.",
    tech: ["Flask", "EfficientNetB0", "Python", "OpenCV"],
    tags: ["Healthcare", "Deep Learning", "Medical Imaging"],
    date: "2023-11-01",
    featured: true,
    image: "/images/projects/diabetic-retinopathy.jpg",
  },
  {
    slug: "malware-detection",
    title: "Network-Based Malware Detection",
    description:
      "Extracted network traffic features and trained machine learning models for real-time cybersecurity applications. Built a threat classification pipeline using supervised learning techniques.",
    tech: ["Python", "scikit-learn", "NetworkX", "Pandas"],
    tags: ["Cybersecurity", "Machine Learning", "Network Analysis"],
    date: "2023-09-01",
    featured: true,
    image: "/images/projects/malware-detection.png",
  },
  
]

export const experiences: Experience[] = [
  {
    title: "Technical Officer",
    company: "Devlabs",
    location: "Arizona, United States",
    startDate: "2025-10-01",
    current: true,
    description:
      "Contributing to the AI-driven Builder Intelligence system for resume understanding, skill extraction, and candidate–job ranking using embeddings and vector search.",
    achievements: [
      "Designed and implemented components of the Builder Intelligence pipeline, powering semantic resume parsing, skill extraction, and ranking with vector search.",
      "Assisted backend and AI workflow development across data processing, API integration, and pipeline automation connecting the Builder chatbot, MongoDB, and inference layers.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Amrutanjan HealthCare Ltd.",
    location: "Chennai, India",
    startDate: "2023-05-01",
    endDate: "2023-07-31",
    current: false,
    description:
      "Analyzed 2017–2018 sales datasets using statistical modeling and Machine Learning to identify key trends.",
    achievements: [
      "Built and automated interactive dashboards, accelerating data-driven decisions across teams",
      "Delivered actionable insights that improved forecasting accuracy by 15% and guided strategic planning",
    ],
  },
  {
    title: "Research Intern",
    company: "VIT Chennai & Global Health Research and Innovations Canada",
    location: "Chennai, India",
    startDate: "2022-12-01",
    endDate: "2023-08-31",
    current: false,
    description:
      "Investigated edge computing and AR/VR in Internet of Medical Things to enhance healthcare equity and access.",
    achievements: [
      "Conducted a systematic literature review to evaluate feasibility and barriers present in digital health",
      "Provided evidence-based recommendations that influenced research and promoted healthcare accessibility",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "M.S. in Data Science, Analytics and Engineering",
    school: "Arizona State University",
    location: "Tempe, AZ",
    startDate: "2024-08-01",
    current: true,
    coursework: ["Statistical Machine Learning", "Big Data Analysis", "Data Mining", "Data Processing"],
    stats: [
      { label: "CGPA", value: "3.83 / 4.00" },
      { label: "Credits Earned", value: "18 / 18" },
      { label: "Projects", value: "7" },
      { label: "Hackathons Won", value: "2" },
    ],
    image: "/images/education/asu.jpg",
  },
  {
    degree: "B.Tech in Computer Science (AI/ML Specialization)",
    school: "Vellore Institute of Technology",
    location: "Chennai, India",
    startDate: "2020-08-01",
    endDate: "2024-05-31",
    current: false,
    coursework: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
    stats: [
      { label: "CGPA", value: "3.25 / 4.00" },
      { label: "Credits Earned", value: "160 / 160" },
      { label: "Projects", value: "12" },
      { label: "Hackathons Won", value: "1" },
    ],
    image: "/images/education/vit.webp",
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
      "Julia",
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
      "Linear Optimization (CPLEX)",
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
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
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
]


export const publications: Publication[] = [
  {
    title:
      "Health care equity through intelligent edge computing and augmented reality/virtual reality: A systematic review",
    authors: "Lakshminarayanan, V., et al.",
    journal: "Journal of Multidisciplinary Healthcare",
    year: "2023",
    doi: "https://doi.org/10.2147/JMDH.S419923",
  },
]

export const awards: Award[] = [
  {
  title: "1st Place — DevHacks S2",
  organization: "DevHacks",
  date: "2025-09-22", 
  description:
    "Won 1st place for building SlideSage AI — an AI-powered learning assistant that transforms dense concepts into short, dialogue-based explainer videos with quizzes, streaks, and badges. If a student doesn’t understand a concept the first time, SlideSage instantly regenerates a new video with fresh analogies or examples until it clicks. The goal: make learning adaptive, fun, and addictive.",
  category: "hackathon",
  image: "/images/awards/dev.png",
},

  {
    title: "People's Choice Award",
    organization: "HackAZona v0.1",
    date: "2025-04-01",
    description:
      "Developed PlanWiseAI, an AI-based travel planner utilizing multi-agent systems to generate dynamic, real-time itineraries. Recognized for creativity and user-centered design approach.",
    category: "hackathon",
    image: "/images/awards/hackazona.png",
  },
  {
    title: "Runner-Up",
    organization: "GIBots Hackathon",
    date: "2023-02-01",
    description:
      "Built a machine learning solution for a real-world societal challenge. Demonstrated innovative thinking in AI deployment and impact-driven technology.",
    category: "hackathon",
    image: "/images/awards/gibots.png",
  },
]

export const certifications: Certification[] = [
  {
    title: "Gemini for Data scientists and Analysts",
    organization: "Google",
    date: "2025-11-01",
    credentialUrl: "https://www.skills.google/public_profiles/88828cfd-2add-4cf1-b27c-e7ce77848f50/badges/20406917?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    category: "data",
  },
  {
    title: "Using BigQuery Machine Learning for Inference",
    organization: "Google",
    date: "2025-11-01",
    credentialUrl: "https://www.skills.google/public_profiles/88828cfd-2add-4cf1-b27c-e7ce77848f50/badges/20527337?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    category: "data",
  },
  {
    title: "AI Agent Fundamentals",
    organization: "Databricks",
    date: "2025-09-01",
    credentialUrl: "https://credentials.databricks.com/3c81b547-1237-4332-8e42-4ac99621441f#acc.ROUN6AEo",
    category: "ai",
  },
  {
    title: "n8n Course: No Code AI Agent Builder",
    organization: "Simplilearn",
    date: "2025-06-01",
    credentialUrl: "https://simpli-web.app.link/e/hCfmiza6VUb",
    category: "ai",
  },
  {
    title: "Create Image Captioning Models",
    organization: "Simplilearn",
    date: "2025-01-01",
    credentialUrl: "https://simpli-web.app.link/e/1zEJG5hXqQb",
    category: "ai",
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    organization: "Google",
    date: "2022-03-01",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/3RMDLCTCEZWG",
    category: "programming",
  },
]

export const heroStats = [
  { id: "projects",  label: "Projects",       rolling: ["19", "8"] }, 
  { id: "hackathons",label: "Hackathon Wins", value: "3" },
  { id: "linkedin",  label: "Followers",      value: "1500+" },
  { id: "stack",     label: "Tech Stack",     value: "38" },
  { id: "domains",   label: "Domains",        value: "6" },
] as const;
