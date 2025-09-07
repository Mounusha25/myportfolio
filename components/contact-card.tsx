"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="holographic-card-enhanced">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Tempe, AZ</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">lvishal1607@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+1-480-304-1340</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/VishalLakshmiNarayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github w-10 h-10 flex items-center justify-center"
            >
              <Github className="icon w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/vishal-lakshmi-narayanan-687619324"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin w-10 h-10 flex items-center justify-center"
            >
              <Linkedin className="icon w-4 h-4" />
            </a>
            <a
              href="https://medium.com/@lvishal1607"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon medium w-10 h-10 flex items-center justify-center"
            >
              <span className="icon text-sm font-bold">M</span>
            </a>
            <a
              href="https://leetcode.com/u/lvleetcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon leetcode w-10 h-10 flex items-center justify-center"
            >
              <span className="icon text-xs font-bold">LC</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
