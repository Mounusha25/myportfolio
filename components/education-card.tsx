"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Education } from "@/lib/content"

interface EducationCardProps {
  education: Education
  index: number
}

export function EducationCard({ education, index }: EducationCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const duration = education.current
    ? `${formatDate(education.startDate)} – Present`
    : `${formatDate(education.startDate)} – ${formatDate(education.endDate!)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="holographic-card">
        <CardHeader>
          <div className="space-y-2">
            <CardTitle className="text-xl text-black">{education.degree}</CardTitle>
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-medium text-black/80">{education.school}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-black/70">
                <span>{education.location}</span>
                <Badge variant="outline" className="border-purple-200 text-black">{duration}</Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {education.notes && <p className="text-sm text-purple-600 font-medium">{education.notes}</p>}
          <div>
            <h4 className="text-sm font-medium mb-2 text-black">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-1">
              {education.coursework.map((course) => (
                <Badge key={course} variant="secondary" className="text-xs bg-white/60 text-black border border-purple-200/30">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
          {education.stats?.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {education.stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-purple-200/30 bg-white/40 backdrop-blur p-3 text-center shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-black/70">
                  {s.label}
                </p>
                <p className="text-base font-semibold text-black">{s.value}</p>
              </motion.div>
            ))}
          </div>
        ) : null}
        </CardContent>
      </Card>
    </motion.div>
  )
}
