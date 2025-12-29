"use client"
import { HeroSection } from "@/components/hero-section"
import { ParallaxEducationCard } from "@/components/parallax-education-card"
import { ContactCard } from "@/components/contact-card"
import { LocationMap } from "@/components/location-map"
import { CertificationBadges } from "@/components/CertificationBadges"
import SkillTree from "@/components/SkillTree"
import StackedProjectCards from "@/components/StackedProjectCards"
import ExperienceTimeline from "@/components/ExperienceTimeline"

import {
  experiences,
  education,
  allProjects,
  certifications,
} from "@/lib/content"

export default function HomePage() {
  const featuredProjects = allProjects.filter((project) => project.featured)

  return (
    <div className="min-h-screen relative" id="top">
      {/* Hero */}
      <section id="home" className="py-12 md:py-20">
        <HeroSection />
      </section>

      {/* Education - NEW PARALLAX VERSION */}
      <section id="education" className="py-8 md:py-12 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Education</h2>
          </div>
          <div className="relative space-y-12">
            {education.map((edu, index) => (
              <ParallaxEducationCard 
                key={`${edu.school}-${edu.startDate}`} 
                education={edu} 
                index={index}
                total={education.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="container relative z-10 max-w-[1600px]">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Skills</h2>
            <p className="text-sm md:text-base text-black/70 max-w-2xl mx-auto px-4">Explore my technical skills as bubbles</p>
          </div>
          {/* Skill Tree - Decision Tree Layout */}
          <SkillTree />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-8 md:py-12">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Experience</h2>
          </div>
          <ExperienceTimeline items={experiences} />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Featured Projects</h2>
            <p className="text-sm md:text-base text-black/70 max-w-2xl mx-auto px-4">Click the arrow or press space to explore each project</p>
          </div>
          <StackedProjectCards projects={featuredProjects} />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-8 md:py-12">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Certifications</h2>
          </div>
          <div className="flex justify-center px-2">
            <CertificationBadges certifications={certifications} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-8 md:py-12">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Contact</h2>
          </div>
          <ContactCard />
          <LocationMap />
        </div>
      </section>
    </div>
  )
}
