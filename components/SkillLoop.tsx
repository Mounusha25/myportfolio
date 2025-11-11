"use client"

import React, { useMemo } from "react"
import { skillGroups } from "@/lib/content"
import "./skill-loop.css"

type Cat = "dsml" | "de" | "viz" | "misc"
const catKey: Record<string, Cat> = {
  "Data Science & Machine Learning": "dsml",
  "Data Engineering & Infrastructure": "de",
  "Data Analytics & Visualization": "viz",
  "Additional Proficiencies": "misc",
}

// Iconify mapping
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
  // Prefer Devicon (Python) or generic chart for these; no official devicon
  // Matplotlib/Seaborn will be resolved via getDeviconClass or fallback
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
    [/matplotlib|seaborn/, "devicon-python-plain colored"],
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

function Row({
  items,
  duration,
  reverse,
}: {
  items: Array<{ name: string; cat: Cat }>
  duration: string
  reverse?: boolean
}) {
  const dup = [...items, ...items]
  return (
    <div className="loop-slider" style={{ ['--duration' as any]: duration, ['--direction' as any]: reverse ? 'reverse' : 'normal' }}>
      <div className="inner">
        {dup.map((it, idx) => {
          const icon = resolveIcon(it.name)
          const accent = `accent-${it.cat}`
          const delay = ((idx * 137) % 110) / 10 // 0..11s stagger
          const brandColorMap: Record<string, string> = {
            Python: '3776AB',
            R: '276DC3',
            'Scikit-learn': 'F7931E',
            TensorFlow: 'FF6F00',
            PyTorch: 'EE4C2C',
            NLP: 'A855F7',
            'Recommendation Systems': '3B82F6',
            'LLM Integration': '00C3FF',
            'Time Series Analysis': '14B8A6',
            'Causal Inference': '6366F1',
            'A/B Testing': 'E11D48',
            SQL: '00758F',
            PySpark: 'E25A1C',
            Databricks: 'FF3621',
            'Apache Airflow': '00A699',
            MLflow: '0194E2',
            Docker: '2496ED',
            'REST APIs': '0EA5E9',
            MySQL: '4479A1',
            PostgreSQL: '336791',
            'SQL Server': 'CC2927',
            SQLite: '003B57',
            Supabase: '3ECF8E',
            Tableau: '00AEEF',
            'Power BI': 'F2C811',
            Streamlit: 'FF4B4B',
            Matplotlib: '11557C',
            Seaborn: '4BC0C0',
            Excel: '217346',
            'Statistical Modeling': '1E3A8A',
            'Linear Optimization (CPLEX)': '052FAD',
            'D3.js': 'F9A03C',
            Git: 'F05032',
            'API Integration': '6366F1',
            'n8n Workflows': 'E36E5D',
            Julia: '9558B2',
            'CI/CD pipelines': '2088FF',
          }
          const themeColor = brandColorMap[it.name] ?? (it.cat === 'dsml' ? 'af6dff' : it.cat === 'de' ? 'ff64b4' : it.cat === 'viz' ? 'ffd966' : '78beff')
          return (
            <div key={`${it.name}-${idx}`} className={`tile ${accent}`} style={{ ['--pulseDelay' as any]: `${delay}s` }}>
              <div className="icon-wrap">
                {icon.type === 'iconify' ? (
                  <img src={`https://api.iconify.design/${encodeURIComponent(icon.value)}.svg${icon.value.startsWith('logos:') ? '' : `?color=%23${themeColor}`}`} alt="" />
                ) : icon.type === 'devicon' ? (
                  <i className={`${icon.value}`}></i>
                ) : (
                  <img src={`https://api.iconify.design/tabler:chart-bar.svg?color=%23${themeColor}`} alt="" />
                )}
              </div>
              <div className="label">{it.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function SkillLoop() {
  const rows = useMemo(() => {
    const all: Array<{ name: string; cat: Cat }> = []
    for (const g of skillGroups) {
      const cat = catKey[g.category]
      if (!cat) continue
      for (const s of g.skills) all.push({ name: s, cat })
    }
    // split into 4 equal rows
    const quarter = Math.ceil(all.length / 4)
    return [
      all.slice(0, quarter),
      all.slice(quarter, quarter * 2),
      all.slice(quarter * 2, quarter * 3),
      all.slice(quarter * 3)
    ]
  }, [])

  return (
    <div className="skills-loop w-full">
      <div className="content">
        <div className="tag-list">
          <Row items={rows[0]} duration="45s" />
          <Row items={rows[1]} duration="55s" reverse />
          <Row items={rows[2]} duration="65s" />
          <Row items={rows[3]} duration="75s" reverse />
          <div className="fade-overlay" />
        </div>
      </div>
    </div>
  )
}
