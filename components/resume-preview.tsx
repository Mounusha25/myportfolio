"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Linkedin, Github, Globe } from "lucide-react"

export function ResumePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold">Vishal Lakshmi Narayanan</CardTitle>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+1-480-304-1340</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>lvishal1607@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Tempe, AZ, USA</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <div className="flex items-center gap-1 text-sm text-primary">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-primary">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-primary">
                  <span className="w-4 h-4 flex items-center justify-center text-xs font-bold">M</span>
                  <span>Medium</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-primary">
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">EDUCATION</h3>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="font-medium">M.S. in Data Science, Analytics and Engineering</h4>
                  <span className="text-sm text-muted-foreground">Aug 2024 – Present</span>
                </div>
                <p className="text-sm text-muted-foreground">Arizona State University, Tempe, AZ</p>
                <p className="text-sm mt-1">
                  • Relevant Coursework: Statistical Machine Learning, Big Data Analysis, Data Mining, Data Processing
                </p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="font-medium">B.Tech in Computer Science (AI/ML Specialization)</h4>
                  <span className="text-sm text-muted-foreground">Aug 2020 – May 2024</span>
                </div>
                <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Chennai, India</p>
                <p className="text-sm mt-1">
                  • Graduated with Distinction; developed a strong foundation in Artificial Intelligence and Machine
                  Learning.
                </p>
                <p className="text-sm">
                  • Relevant Coursework: Machine Learning, Deep Learning, Natural Language Processing
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">TECHNICAL SKILLS</h3>
            <div className="space-y-1">
              <p>
                • <span className="font-medium">Programming & Query Languages:</span> Python, R, Java, SQL
              </p>
              <p>
                • <span className="font-medium">Databases:</span> MySQL, PostgreSQL, SQL Server, SQLite
              </p>
              <p>
                • <span className="font-medium">Analytics & Visualization:</span> Pandas, NumPy, Matplotlib, Seaborn,
                Power BI, Excel
              </p>
              <p>
                • <span className="font-medium">Applied Statistics:</span> Hypothesis Testing, Regression Analysis,
                Causal Inference, Time Series Forecasting
              </p>
              <p>
                • <span className="font-medium">Machine Learning:</span> Predictive Modeling, Deep Learning, NLP,
                Anomaly Detection, Classification Modeling
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">EXPERIENCE</h3>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="font-medium">DATA ANALYST INTERN</h4>
                  <span className="text-sm text-muted-foreground">May 2023 – Jul 2023</span>
                </div>
                <p className="text-sm text-muted-foreground">Amrutanjan HealthCare Ltd., Chennai, India</p>
                <div className="text-sm mt-1 space-y-1">
                  <p>
                    • Analyzed 2017–2018 sales datasets using statistical modeling and Machine Learning to identify key
                    trends.
                  </p>
                  <p>• Built and automated interactive dashboards, accelerating data-driven decisions across teams.</p>
                  <p>
                    • Delivered actionable insights that improved forecasting accuracy by 15% and guided strategic
                    planning.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="font-medium">RESEARCH INTERN</h4>
                  <span className="text-sm text-muted-foreground">Dec 2022 – Aug 2023</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  VIT Chennai & Global Health Research and Innovations Canada
                </p>
                <div className="text-sm mt-1 space-y-1">
                  <p>
                    • Investigated edge computing and AR/VR in Internet of Medical Things to enhance healthcare equity
                    and access.
                  </p>
                  <p>
                    • Conducted a systematic literature review to evaluate feasibility and barriers present in digital
                    health.
                  </p>
                  <p>
                    • Provided evidence-based recommendations that influenced research and promoted healthcare
                    accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">PROJECTS</h3>
            <div className="space-y-3">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="font-medium">MAILY – AI Mailing and Schedule Agent</h4>
                  <span className="text-sm text-muted-foreground">Jun 2025</span>
                </div>
                <p className="text-sm text-muted-foreground italic">n8n agents, Groq LLM, Gmail API</p>
                <div className="text-sm mt-1 space-y-1">
                  <p>
                    • Developed an n8n AI agent that automates email and scheduling via Gmail, Calendar, and Sheets.
                  </p>
                  <p>
                    • Implemented contact verification workflows ensuring email addresses are validated before sending
                    messages.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="font-medium">AI Travel Itinerary Planner</h4>
                  <span className="text-sm text-muted-foreground">Apr 2025</span>
                </div>
                <p className="text-sm text-muted-foreground italic">Streamlit, Groq LLaMA, Python</p>
                <div className="text-sm mt-1 space-y-1">
                  <p>
                    • Engineered an AI-driven platform that generates optimized multi-day travel itineraries with
                    real-time route refinement.
                  </p>
                  <p>
                    • Integrated cost estimation, weather forecasts, and interactive map visualizations, improving
                    planning accuracy by 30%.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h4 className="font-medium">Path2Pro – AI-Powered Job Portal</h4>
                  <span className="text-sm text-muted-foreground">Mar 2025</span>
                </div>
                <p className="text-sm text-muted-foreground italic">Python, Streamlit, SentenceTransformers, SQLite</p>
                <div className="text-sm mt-1 space-y-1">
                  <p>
                    • Built an AI job-matching portal with semantic similarity scoring and automated resume parsing for
                    100+ applications.
                  </p>
                  <p>• Won the People's Choice Award at HackAZona v0.1 for innovation and impact.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">PUBLICATIONS</h3>
            <div className="text-sm">
              <p>
                <span className="font-medium">Lakshminarayanan, V., et al. (2023).</span> Health care equity through
                intelligent edge computing and augmented reality/virtual reality: A systematic review.
                <span className="italic"> Journal of Multidisciplinary Healthcare</span>, 16, 2839–2859.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
