"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { SkillGroup } from "@/lib/content"
import {
  Brain,
  Server,
  BarChart3,
  Sparkles,
  Database,
  GitBranch,
  Table,
  LineChart,
  FunctionSquare,
  FlaskConical,
  Workflow,
  Rocket,
  Sigma,
  Network,
  Cloud,
  MessageSquareText,
  Zap,
  Wind,
  Flame,
  Plug,
  Leaf,
  Code2,
} from "lucide-react"

type IconComp = (props: { className?: string }) => JSX.Element

const categoryIconMap: Record<string, IconComp> = {
  "Data Science & Machine Learning": Brain,
  "Data Engineering & Infrastructure": Server,
  "Data Analytics & Visualization": BarChart3,
  "Additional Proficiencies": Sparkles,
}

const skillIconMap: { match: RegExp; Icon: IconComp }[] = [
  { match: /python/i, Icon: Code2 },
  { match: /^r$/i, Icon: FunctionSquare },
  { match: /scikit|sklearn/i, Icon: FlaskConical },
  { match: /tensor|torch|pytorch/i, Icon: Brain },
  { match: /nlp|language/i, Icon: MessageSquareText },
  { match: /recommend/i, Icon: Sparkles },
  { match: /llm/i, Icon: Brain },
  { match: /time series|timeseries/i, Icon: LineChart },
  { match: /causal|inference/i, Icon: Sigma },
  { match: /a\/?b|ab testing/i, Icon: Workflow },

  { match: /sql\b/i, Icon: Table },
  { match: /pyspark/i, Icon: Zap },
  { match: /databricks/i, Icon: Workflow },
  { match: /airflow/i, Icon: Wind },
  { match: /mlflow/i, Icon: Workflow },
  { match: /docker/i, Icon: Server },
  { match: /rest|api/i, Icon: Network },
  { match: /mysql|postgres|sql server|sqlite|database/i, Icon: Database },
  { match: /supabase/i, Icon: Cloud },
  { match: /mongodb/i, Icon: Leaf },

  { match: /tableau|power ?bi/i, Icon: BarChart3 },
  { match: /streamlit/i, Icon: Flame },
  { match: /matplotlib|seaborn|d3/i, Icon: LineChart },
  { match: /excel/i, Icon: Table },
  { match: /statistical modeling|statistics/i, Icon: Sigma },
  { match: /optimization|cplex/i, Icon: Sigma },

  { match: /git/i, Icon: GitBranch },
  { match: /api integration/i, Icon: Plug },
  { match: /n8n|workflow/i, Icon: Workflow },
  { match: /julia/i, Icon: FunctionSquare },
  { match: /ci\/?cd|pipeline/i, Icon: Workflow },
  { match: /astro/i, Icon: Rocket },
]

function getSkillIcon(name: string): IconComp | null {
  const found = skillIconMap.find((e) => e.match.test(name))
  return found?.Icon ?? null
}

// Map known skills/tools to Devicon classes
function getDeviconClass(name: string): string | null {
  const n = name.toLowerCase()
  const map: Array<[RegExp, string]> = [
    [/^python$/, "devicon-python-plain colored"],
    [/^r$/, "devicon-r-plain colored"],
    [/scikit|sklearn/, "devicon-scikitlearn-plain colored"],
    [/tensorflow/, "devicon-tensorflow-original colored"],
    [/pytorch|torch/, "devicon-pytorch-original colored"],
    [/^sql$/, null as unknown as string],
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
    // Approximations for items without exact Devicon glyphs
    [/matplotlib/, "devicon-anaconda-original colored"],
    [/seaborn/, "devicon-anaconda-original colored"],
    [/excel/, "devicon-microsoft-plain colored"],
    [/api integration|rest api|rest apis|rest\b/i, "devicon-postman-plain colored"],
    [/postman/, "devicon-postman-plain colored"],
    [/ci\/?cd|pipeline/, "devicon-githubactions-plain colored"],
    [/mlflow/, "devicon-python-plain colored"],
    [/databricks/, "devicon-apachespark-original colored"],
  ]

  for (const [re, cls] of map) {
    if (re.test(n)) return cls
  }
  return null
}

interface SkillCardProps {
  skillGroup: SkillGroup
  index: number
}

export function SkillCard({ skillGroup, index }: SkillCardProps) {
  const CategoryIcon = categoryIconMap[skillGroup.category] ?? Sparkles
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full holographic-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100/50 text-black border border-purple-300/30">
              <CategoryIcon className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg leading-tight text-black">{skillGroup.category}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skillGroup.skills.map((skill) => {
              const devicon = getDeviconClass(skill)
              const Icon = getSkillIcon(skill)
              return (
                <Badge key={skill} className="bg-white/60 text-black hover:bg-white/80 border border-purple-200/50 flex items-center gap-1.5 font-medium">
                  {devicon ? (
                    <i className={`${devicon} text-[18px] leading-none`}></i>
                  ) : Icon ? (
                    <Icon className="w-3.5 h-3.5" />
                  ) : null}
                  {skill}
                </Badge>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
