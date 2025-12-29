"use client"

import { motion } from "framer-motion"

export function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl mx-auto mt-8"
    >
      <div className="holographic-card-enhanced overflow-hidden">
        <div className="p-4">
          <h3 className="text-xl font-bold text-center text-black mb-4">Find Me Here</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-purple-200/50">
            <iframe
              src="https://maps.google.com/maps?q=Tempe,AZ&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tempe, AZ Location"
            />
          </div>
          <p className="text-center text-sm text-black/70 mt-3">
            Tempe, Arizona - Home to Arizona State University
          </p>
        </div>
      </div>
    </motion.div>
  )
}