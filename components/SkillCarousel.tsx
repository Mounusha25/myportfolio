"use client"

import { useMemo, useRef } from "react"
import { skillGroups } from "@/lib/content"
import "./skill-carousel.css"

type Cat = "dsml" | "de" | "viz" | "misc"

const catKey: Record<string, Cat> = {
  "Data Science & Machine Learning": "dsml",
  "Data Engineering & Infrastructure": "de",
  "Data Analytics & Visualization": "viz",
  "Additional Proficiencies": "misc",
}

// Iconify first
const iconifyIdMap: Record<string, string> = {
  Python: "logos:python",
  R: "logos:r-lang",
  "Scikit-learn": "simple-icons:scikitlearn",
  TensorFlow: "logos:tensorflow",
  PyTorch: "logos:pytorch-icon",
  NLP: "ph:brain-duotone",
  "Recommendation Systems": "ph:star-duotone",
  "LLM Integration": "lucide:brain-circuit",
  "Time Series Analysis": "mdi:chart-timeline-variant",
  "Causal Inference": "mdi:graph-outline",
  "A/B Testing": "mdi:flask-outline",
  SQL: "vscode-icons:file-type-sql",
  PySpark: "simple-icons:apachespark",
  Databricks: "simple-icons:databricks",
  "Apache Airflow": "simple-icons:apacheairflow",
  MLflow: "simple-icons:mlflow",
  Docker: "logos:docker-icon",
  "REST APIs": "tabler:api",
  MySQL: "logos:mysql-icon",
  PostgreSQL: "logos:postgresql",
  "SQL Server": "simple-icons:microsoftsqlserver",
  SQLite: "simple-icons:sqlite",
  Supabase: "simple-icons:supabase",
  Tableau: "simple-icons:tableau",
  "Power BI": "simple-icons:powerbi",
  Streamlit: "simple-icons:streamlit",
  Matplotlib: "mdi:language-python",
  Seaborn: "mdi:language-python",
  Excel: "vscode-icons:file-type-excel",
  "Statistical Modeling": "mdi:chart-box-outline",
  "Linear Optimization (CPLEX)": "mdi:chart-line-variant",
  "D3.js": "simple-icons:d3dotjs",
  Git: "logos:git-icon",
  "API Integration": "tabler:api",
  "n8n Workflows": "simple-icons:n8n",
  Julia: "simple-icons:julia",
  "CI/CD pipelines": "simple-icons:githubactions",
}

function getDeviconClass(name: string): string | null {
  const n = name.toLowerCase()
  const map: Array<[RegExp, string | null]> = [
    [/^python$/, "devicon-python-plain colored"],
    [/^r$/, "devicon-r-plain colored"],
    [/scikit|sklearn/, "devicon-scikitlearn-plain colored"],
    [/tensorflow/, "devicon-tensorflow-original colored"],
    [/pytorch|torch/, "devicon-pytorch-original colored"],
    [/^sql$/, null],
    [/spark|pyspark/, "devicon-apachespark-original colored"],
    [/airflow/, "devicon-apacheairflow-plain colored"],
    [/docker/, "devicon-docker-plain colored"],
    [/mysql/, "devicon-mysql-original colored"],
    [/postgres/, "devicon-postgresql-plain colored"],
    [/sql server|mssql|microsoft sql/, "devicon-microsoftsqlserver-plain colored"],
    [/sqlite/, "devicon-sqlite-plain colored"],
    [/supabase/, "devicon-supabase-plain colored"],
    [/mongodb/, "devicon-mongodb-plain colored"],
    [/tableau/, "devicon-tableau-plain colored"],
    [/power\s*bi/, "devicon-powerbi-plain colored"],
    [/streamlit/, "devicon-streamlit-plain colored"],
    [/d3\.js|d3js|d3/, "devicon-d3js-plain colored"],
    [/git/, "devicon-git-plain colored"],
    [/julia/, "devicon-julia-plain colored"],
  ]
  for (const [re, cls] of map) if (re.test(n)) return cls
  return null
}

function resolveIcon(skill: string): { type: "iconify" | "devicon" | "text"; value: string } {
  const id = iconifyIdMap[skill]
  if (id) return { type: "iconify", value: id }
  const dev = getDeviconClass(skill)
  if (dev) return { type: "devicon", value: dev }
  return { type: "text", value: skill }
}

export default function SkillCarousel() {
  const items = useMemo(() => {
    const out: Array<{ name: string; cat: Cat }> = []
    for (const g of skillGroups) {
      const k = catKey[g.category]
      if (!k) continue
      for (const s of g.skills) out.push({ name: s, cat: k })
    }
    // duplicate to make long track for smooth scroll
    return [...out, ...out]
  }, [])

  const scroller = useRef<HTMLDivElement>(null)

  const scrollByAmount = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.85)
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  return (
    <section className="skill-box p-3 md:p-4">
      <div className="relative">
        <button aria-label="Previous" className="carousel-btn btn-left" onClick={() => scrollByAmount(-1)}>
          ‹
        </button>
        <button aria-label="Next" className="carousel-btn btn-right" onClick={() => scrollByAmount(1)}>
          ›
        </button>
        <div ref={scroller} className="scroll-container">
          <div className="skill-track">
            {items.map((it, i) => {
              const icon = resolveIcon(it.name)
              const glowClass = `glow-${it.cat}`
              return (
                <div key={`${it.name}-${i}`} className={`skill-item ${glowClass}`}>
                  <div className="skill-icon">
                    {icon.type === "iconify" ? (
                      <img
                        src={`https://api.iconify.design/${encodeURIComponent(icon.value)}.svg${icon.value.startsWith("logos:") ? "" : "?color=%23cfd6ff"}`}
                        alt=""
                        loading="lazy"
                      />
                    ) : icon.type === "devicon" ? (
                      <i className={`${icon.value}`}></i>
                    ) : (
                      <span className="text-xs font-semibold text-white/80">{it.name}</span>
                    )}
                  </div>
                  <div className="skill-label">{it.name}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="scroll-mask" />
      </div>
    </section>
  )
}
