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

export const allProjects: Project[] = [
  {
    slug: "ai-travel-planner",
    title: "AI Travel Itinerary Planner",
    description:
      "Engineered an AI-driven platform that generates optimized multi-day travel itineraries with real-time route refinement. Integrated cost estimation, weather forecasts, and interactive map visualizations, improving planning accuracy by 30%.",
    tech: ["Streamlit", "Groq LLaMA", "Python"],
    tags: ["AI", "Travel", "Optimization"],
    github: "https://github.com/VishalLakshmiNarayanan/Zoro",
    date: "2025-04-01",
    featured: true,
    image: "/images/projects/ai-travel-planner.jpg",
  },
  {
    slug: "path2pro",
    title: "Path2Pro – AI Job Portal",
    description:
      "Built an AI job-matching portal with semantic similarity scoring and automated resume parsing for 100+ applications. Developed secure recruiter/applicant dashboards with authentication, job posting, and real-time resume uploads. Won the People's Choice Award at HackAZona v0.1.",
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
  },
  {
    degree: "B.Tech in Computer Science (AI/ML Specialization)",
    school: "Vellore Institute of Technology",
    location: "Chennai, India",
    startDate: "2020-08-01",
    endDate: "2024-05-31",
    current: false,
    notes: "Graduated with 8.13/10.00 CGPA",
    coursework: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Query Languages",
    skills: ["Python", "R", "Java", "SQL"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "SQLite"],
  },
  {
    category: "Analytics & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel"],
  },
  {
    category: "Applied Statistics",
    skills: ["Hypothesis Testing", "Regression Analysis", "Causal Inference", "Time Series Forecasting"],
  },
  {
    category: "Machine Learning",
    skills: ["Predictive Modeling", "Deep Learning", "NLP", "Anomaly Detection", "Classification Modeling"],
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
