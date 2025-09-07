"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, AwardIcon, Medal, Star } from "lucide-react"
import Image from "next/image"
import type { Award } from "@/lib/content"

interface AwardCardProps {
  award: Award
  index: number
}

const categoryIcons = {
  hackathon: Trophy,
  academic: AwardIcon,
  competition: Medal,
  recognition: Star,
}

const categoryColors = {
  hackathon: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  academic: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  competition: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  recognition: "bg-green-500/10 text-green-600 border-green-500/20",
}

export function AwardCard({ award, index }: AwardCardProps) {
  const IconComponent = categoryIcons[award.category]
  const colorClass = categoryColors[award.category]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden holographic-card">
        {award.image && (
          <div className="relative h-32 w-full overflow-hidden">
            <Image
              src={award.image || "/placeholder.svg"}
              alt={`${award.title} - ${award.organization}`}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${colorClass}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-lg">{award.title}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{award.organization}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              {formatDate(award.date)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{award.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
