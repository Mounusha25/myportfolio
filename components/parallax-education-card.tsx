"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import type { Education } from "@/lib/content"

interface ParallaxEducationCardProps {
  education: Education
  index: number
  total: number
}

export function ParallaxEducationCard({ education, index, total }: ParallaxEducationCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Parallax effect - image moves slower than content
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity: opacity,
        scale: scale
      }}
      className="relative w-full max-w-5xl mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Floating gradient orb that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(168, 85, 247, 0.15), transparent 70%)`,
        }}
      />
      
      <motion.div 
        className="holographic-card relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-lg border border-purple-200/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-purple-300/70"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-[400px_1fr] gap-0">
          {/* Image Section with Parallax */}
          <motion.div 
            className="relative h-80 md:h-auto overflow-hidden group/image"
            style={{ y: imageY }}
          >
            {education.image ? (
              <div className="relative w-full h-full scale-110">
                <Image
                  src={education.image}
                  alt={education.school}
                  fill
                  className="object-cover object-[40%_center] group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
            
            {/* Animated shine effect on hover */}
            {isHovered && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )}
            
            {/* School Logo/Icon Overlay */}
            <motion.div 
              className="absolute bottom-6 left-6 right-6 z-10"
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-white font-bold text-2xl drop-shadow-lg transition-all duration-500 group-hover:text-3xl">
                {education.school}
              </h3>
              <p className="text-white/90 text-base drop-shadow-md mt-1">
                {education.location}
              </p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="p-8 md:p-10"
            style={{ y: contentY }}
          >
            {/* Degree & Timeline */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-black transition-colors">
                  {education.degree}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  education.current 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {education.current ? 'In Progress' : 'Completed'}
                </span>
              </div>
              
              <p className="text-black/60 text-sm">
                {new Date(education.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                {' - '}
                {education.current 
                  ? 'Present' 
                  : new Date(education.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                }
              </p>
            </div>

            {/* Stats Grid */}
            {education.stats && education.stats.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                {education.stats
                  .filter(stat => stat.label !== 'Hackathons Won' && stat.label !== 'Credits Earned')
                  .map((stat, idx) => (
                  <motion.div 
                    key={stat.label} 
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-100 hover:border-purple-300 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-purple-600"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-black/60 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Coursework */}
            {education.coursework && education.coursework.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-black/70 mb-2">Key Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.slice(0, 4).map((course, idx) => (
                    <motion.span
                      key={course}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                  {education.coursework.length > 4 && (
                    <motion.span 
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    >
                      +{education.coursework.length - 4} more
                    </motion.span>
                  )}
                </div>
              </div>
            )}

            {/* Notes */}
            {education.notes && (
              <p className="text-sm text-black/70 italic border-l-2 border-purple-300 pl-3">
                {education.notes}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
