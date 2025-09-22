"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github,ExternalLink } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/content"

interface ProjectCardProps {
  project: Project
  index?: number           // only used if animated entrance is enabled
  active?: boolean         // carousel will pass this to pop the centered card
  animated?: boolean       // set true if you render in a list outside the carousel
}

export function ProjectCard({ project, index = 0, active = false, animated = false }: ProjectCardProps) {
  const content = (
    <Card className={`glass glass-hover h-full overflow-hidden ${active ? "ring-1 ring-emerald-400/40" : ""}`}>
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={active}
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {project.description && (
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        )}

        {(project.tech?.length || project.tags?.length) && (
          <div className="space-y-3">
            {project.tech?.length ? (
              <div>
                <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}

            {project.tags?.length ? (
              <div>
                <h4 className="text-sm font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}

        {project.github && (
          <Button asChild size="sm" className="w-full">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        )}
        
{project.demo && (
  <Button asChild size="sm" variant="secondary" className="w-full">
    <a href={project.demo} target="_blank" rel="noopener noreferrer">
      <ExternalLink className="mr-2 h-4 w-4" />
      Visit Website
    </a>
  </Button>
)}
      </CardContent>
    </Card>
  )

  if (!animated) return content

  // Keep your entrance animation only for non-carousel lists
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {content}
    </motion.div>
  )
}
