"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { Publication } from "@/lib/content"

interface PublicationCardProps {
  publication: Publication
  index: number
}

export function PublicationCard({ publication, index }: PublicationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="holographic-card">
        <CardHeader>
          <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <strong>Authors:</strong> {publication.authors}
            </p>
            <p>
              <strong>Journal:</strong> {publication.journal} ({publication.year})
            </p>
          </div>
          {publication.doi && (
            <Button asChild size="sm">
              <a href={publication.doi} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Publication
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
