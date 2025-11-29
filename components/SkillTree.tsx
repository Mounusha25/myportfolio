"use client"

import { useState, useMemo, type CSSProperties } from "react"
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

// Fixed scatter positions with collision detection (deterministic, not random)
const getFixedPosition = (index: number, total: number) => {
  // Use golden angle for natural-looking scatter
  const goldenAngle = 137.5
  const angle = (index * goldenAngle) * (Math.PI / 180)
  const radius = Math.sqrt(index / total) * 42 // Spread from center

  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)

  return { x, y }
}

// Check if two bubbles overlap (converts px size to % for comparison)
const checkCollision = (x1: number, y1: number, size1: number, x2: number, y2: number, size2: number) => {
  const dx = x1 - x2
  const dy = y1 - y2
  const distance = Math.sqrt(dx * dx + dy * dy)

  // Convert pixel sizes to percentage (assuming 1400px max container width from CSS)
  const size1Pct = (size1 / 1400) * 100
  const size2Pct = (size2 / 1400) * 100
  const minDistance = (size1Pct + size2Pct) / 2 + 1.5 // Add 1.5% padding

  return distance < minDistance
}

// Adjust position to avoid collisions
const resolveCollisions = (
  bubbles: Array<{ x: number; y: number; size: number }>,
  newX: number,
  newY: number,
  newSize: number,
  maxIterations = 100
) => {
  let x = newX
  let y = newY
  let attempts = 0

  while (attempts < maxIterations) {
    let hasCollision = false

    for (const bubble of bubbles) {
      if (checkCollision(x, y, newSize, bubble.x, bubble.y, bubble.size)) {
        hasCollision = true
        // Move away from collision
        const dx = x - bubble.x
        const dy = y - bubble.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > 0) {
          // Convert sizes to percentage for movement calculation
          const size1Pct = (newSize / 1400) * 100
          const size2Pct = (bubble.size / 1400) * 100
          const minDistance = (size1Pct + size2Pct) / 2 + 1.5
          const moveDistance = (minDistance - distance) * 1.2 // Move a bit more than needed

          x += (dx / distance) * moveDistance
          y += (dy / distance) * moveDistance
        } else {
          // If exactly on top, move in a deterministic direction
          x += (attempts % 2 === 0 ? 3 : -3)
          y += (Math.floor(attempts / 2) % 2 === 0 ? 3 : -3)
        }

        // Keep within bounds (more padding from edges)
        x = Math.max(8, Math.min(92, x))
        y = Math.max(8, Math.min(92, y))
        break
      }
    }

    if (!hasCollision) break
    attempts++
  }

  return { x, y }
}

export default function SkillTree() {
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null)

  // Memoize bubble calculations to ensure consistent server/client rendering
  const bubbles = useMemo(() => {
    const result: BubbleData[] = []
    let bubbleIndex = 0

    // First, count total skills to exclude
    let totalSkills = 0
    skillGroups.forEach((group) => {
      group.skills.forEach((skill) => {
        if (!excludedSkills.includes(skill)) totalSkills++
      })
    })

    skillGroups.forEach((group) => {
      const categoryColor = categoryMeta[group.category]?.accent || "#8b5cf6"
      group.skills.forEach((skill) => {
        // Skip excluded skills
        if (excludedSkills.includes(skill)) return

        const size = 60 // Uniform smaller size for all bubbles

        // Get initial position using golden angle
        const initialPos = getFixedPosition(bubbleIndex, totalSkills)

        // Resolve any collisions with existing bubbles
        const position = resolveCollisions(result, initialPos.x, initialPos.y, size)

        result.push({
          skill,
          category: group.category,
          color: categoryColor,
          size,
          x: Number(position.x.toFixed(4)), // Round to 4 decimal places for consistency
          y: Number(position.y.toFixed(4)),
          icon: skillIconData[skill] || "https://via.placeholder.com/50",
        })
        bubbleIndex++
      })
    })

    return result
  }, [])

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
