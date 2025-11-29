"use client"

import { useState, type CSSProperties } from "react"
import { skillGroups } from "@/lib/content"
import "./skill-tree.css"

const categoryMeta: Record<string, { accent: string }> = {
  "Data Science & Machine Learning": { accent: "#c084fc" },
  "Data Analytics & Visualization": { accent: "#fcd34d" },
  "Data Engineering & Infrastructure": { accent: "#fb7185" },
  "Web Development": { accent: "#38bdf8" },
  "Development Tools & Automation": { accent: "#34d399" },
}

const skillIconData: Record<string, string> = {
  Python: "https://skillicons.dev/icons?i=python",
  R: "https://skillicons.dev/icons?i=r",
  TensorFlow: "https://skillicons.dev/icons?i=tensorflow",
  PyTorch: "https://skillicons.dev/icons?i=pytorch",
  "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  "Hugging Face": "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg",
  Julia: "https://cdn.worldvectorlogo.com/logos/julia-1.svg",
  Tableau: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  Streamlit: "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg",
  Matplotlib: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  Seaborn: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  Excel: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg",
  "D3.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
  MySQL: "https://skillicons.dev/icons?i=mysql",
  SQLite: "https://skillicons.dev/icons?i=sqlite",
  Redis: "https://skillicons.dev/icons?i=redis",
  Docker: "https://skillicons.dev/icons?i=docker",
  "Apache Spark": "https://cdn.worldvectorlogo.com/logos/apache-spark-5.svg",
  Databricks: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
  "Apache Airflow": "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png",
  Supabase: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  HTML: "https://skillicons.dev/icons?i=html",
  CSS: "https://skillicons.dev/icons?i=css",
  JavaScript: "https://skillicons.dev/icons?i=javascript",
  TypeScript: "https://skillicons.dev/icons?i=typescript",
  React: "https://skillicons.dev/icons?i=react",
  "Next.js": "https://skillicons.dev/icons?i=nextjs",
  "Tailwind CSS": "https://skillicons.dev/icons?i=tailwind",
  "Node.js": "https://skillicons.dev/icons?i=nodejs",
  Express: "https://skillicons.dev/icons?i=express",
  MongoDB: "https://skillicons.dev/icons?i=mongodb",
  Firebase: "https://skillicons.dev/icons?i=firebase",
  Vercel: "https://skillicons.dev/icons?i=vercel",
  "Google Cloud Platform": "https://skillicons.dev/icons?i=gcp",
  Git: "https://skillicons.dev/icons?i=git",
  GitHub: "https://skillicons.dev/icons?i=github",
  Linux: "https://skillicons.dev/icons?i=linux",
}

// Define larger bubble skills
const largeSkills = ["Python", "PyTorch", "TensorFlow", "MySQL", "Supabase", "MongoDB", "Vercel", "Google Cloud Platform", "GitHub"]

// Skills to exclude
const excludedSkills = [
  "Recommendation Systems",
  "Statistical Modeling",
  "Time Series Analysis",
  "Causal Inference",
  "A/B Testing",
  "Natural Language Processing",
  "Linear Optimization (CPLEX)",
  "MLflow",
  "REST APIs",
  "n8n Workflows",
  "CI/CD pipelines"
]

interface BubbleData {
  skill: string
  category: string
  color: string
  size: number
  x: number
  y: number
  icon: string
}

export default function SkillTree() {
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null)

  // Flatten all skills with their categories
  const bubbles: BubbleData[] = []
  let bubbleIndex = 0

  skillGroups.forEach((group) => {
    const categoryColor = categoryMeta[group.category]?.accent || "#8b5cf6"
    group.skills.forEach((skill) => {
      // Skip excluded skills
      if (excludedSkills.includes(skill)) return

      const isLarge = largeSkills.includes(skill)
      const size = isLarge ? 100 : 60 + Math.random() * 30

      // Arrange in a grid-like pattern with some randomness
      const cols = 8
      const row = Math.floor(bubbleIndex / cols)
      const col = bubbleIndex % cols
      const x = 10 + col * 12 + (Math.random() * 3)
      const y = 10 + row * 15 + (Math.random() * 3)

      bubbles.push({
        skill,
        category: group.category,
        color: categoryColor,
        size,
        x,
        y,
        icon: skillIconData[skill] || "https://via.placeholder.com/50",
      })
      bubbleIndex++
    })
  })

  return (
    <section className="skill-bubble-container">
      <div className="bubble-plot">
        {bubbles.map((bubble) => {
          const bubbleStyle = {
            "--bubble-color": bubble.color,
            "--bubble-size": `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          } as CSSProperties

          return (
            <div
              key={`${bubble.category}-${bubble.skill}`}
              className="skill-bubble"
              style={bubbleStyle}
              onMouseEnter={() => setHoveredBubble(`${bubble.category}-${bubble.skill}`)}
              onMouseLeave={() => setHoveredBubble(null)}
            >
              <div className="bubble-circle">
                <img src={bubble.icon} alt={bubble.skill} className="bubble-icon" />
              </div>

              {hoveredBubble === `${bubble.category}-${bubble.skill}` && (
                <div className="bubble-tooltip">
                  <div className="tooltip-skill">{bubble.skill}</div>
                  <div className="tooltip-category">{bubble.category}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
