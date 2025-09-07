"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, Brain, Code, Database, Cloud } from "lucide-react"
import type { Certification } from "@/lib/content"

interface CertificationCardProps {
  certification: Certification
  index: number
}

const categoryIcons = {
  ai: Brain,
  cloud: Cloud,
  programming: Code,
  data: Database,
  other: Award,
}

const categoryColors = {
  ai: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  cloud: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  programming: "bg-green-500/10 text-green-600 border-green-500/20",
  data: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  other: "bg-gray-500/10 text-gray-600 border-gray-500/20",
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
  const IconComponent = categoryIcons[certification.category]
  const colorClass = categoryColors[certification.category]

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
      <Card className="h-full holographic-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${colorClass}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg leading-tight">{certification.title}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium mt-1">{certification.organization}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              {formatDate(certification.date)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Button asChild size="sm" className="w-full">
            <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Credentials
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
