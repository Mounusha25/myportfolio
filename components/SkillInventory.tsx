"use client"

import { useMemo, useState } from "react"
import { skillGroups, allProjects } from "@/lib/content"
import "./skill-inventory.css"

// Iconify mapping provided earlier
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
  // Use Python glyphs for these (high contrast), per request
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

// Devicon fallback
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
    [/astro/, "devicon-astro-plain colored"],
    // Approximations
    [/matplotlib/, "devicon-anaconda-original colored"],
    [/seaborn/, "devicon-anaconda-original colored"],
    [/excel/, "devicon-microsoft-plain colored"],
    [/api integration|rest api|rest apis|rest\b/i, "devicon-postman-plain colored"],
    [/postman/, "devicon-postman-plain colored"],
    [/ci\/?cd|pipeline/, "devicon-githubactions-plain colored"],
    [/mlflow/, "devicon-python-plain colored"],
    [/databricks/, "devicon-apachespark-original colored"],
  ]
  for (const [re, cls] of map) { if (re.test(n)) return cls }
  return null
}

function resolveIcon(skill: string): { type: "iconify" | "devicon" | "text"; value: string } {
  const iconify = iconifyIdMap[skill]
  if (iconify) return { type: "iconify", value: iconify }
  const dev = getDeviconClass(skill)
  if (dev) return { type: "devicon", value: dev }
  return { type: "text", value: skill }
}

type CategoryKey = "Data Science & Machine Learning" | "Data Engineering & Infrastructure" | "Data Analytics & Visualization" | "Additional Proficiencies"

export default function SkillInventory() {
  const flatSkills = useMemo(() => {
    const list: Array<{ name: string; category: CategoryKey }> = []
    for (const g of skillGroups) {
      for (const s of g.skills) list.push({ name: s, category: g.category as CategoryKey })
    }
    return list
  }, [])

  const [selected, setSelected] = useState<{ name: string; category: CategoryKey } | null>(flatSkills[0] ?? null)

  // No project matching per request

  return (
    <section className="inv-root">
      {/* Inventory grid */}
      <div className="inv-grid">
        {flatSkills.map((item) => {
          const icon = resolveIcon(item.name)
          const active = selected?.name === item.name
          return (
            <button
              key={`${item.category}-${item.name}`}
              className={`inv-cell ${active ? "active" : ""}`}
              onClick={() => setSelected(item)}
              aria-pressed={active}
            >
              <div className="inv-icon" aria-hidden>
                {icon.type === "iconify" ? (
                  <img
                    src={`https://api.iconify.design/${encodeURIComponent(icon.value)}.svg${icon.value.startsWith('logos:') ? '' : '?color=%23cfd6ff'}`}
                    alt=""
                  />
                ) : icon.type === "devicon" ? (
                  <i className={`${icon.value}`}></i>
                ) : (
                  <span className="text-xs font-semibold text-white/80">{item.name}</span>
                )}
              </div>
              <div className="inv-label">{item.name}</div>
            </button>
          )
        })}
      </div>

      {/* Preview panel */}
      <div className="inv-preview">
        <div className="inv-preview-header">{selected?.name ?? "Select a skill"}</div>
        <div className="inv-preview-body">
          {selected && (
            <>
              <div className="inv-row">
                <span className="inv-k">Category</span>
                <span className="inv-v">{selected.category}</span>
              </div>
              <div className="inv-row">
                <span className="inv-k">Logo</span>
                <span className="inv-v inv-preview-icon">
                  {(() => {
                    const icon = resolveIcon(selected.name)
                    if (icon.type === "iconify") return (
                      <img src={`https://api.iconify.design/${encodeURIComponent(icon.value)}.svg${icon.value.startsWith('logos:') ? '' : '?color=%23e5e7eb'}`} alt="" />
                    )
                    if (icon.type === "devicon") return <i className={`${icon.value}`}></i>
                    return <span className="text-xs">{selected.name}</span>
                  })()}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
