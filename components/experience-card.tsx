"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/lib/content"

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const duration = experience.current
    ? `${formatDate(experience.startDate)} – Present`
    : `${formatDate(experience.startDate)} – ${formatDate(experience.endDate!)}`

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="holographic-card">
        <CardHeader>
          <div className="flex flex-col space-y-2">
            <CardTitle className="text-xl">{experience.title}</CardTitle>
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-medium text-muted-foreground">{experience.company}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span>{experience.location}</span>
                <Badge variant="outline">{duration}</Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{experience.description}</p>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
