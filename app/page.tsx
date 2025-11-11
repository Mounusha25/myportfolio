"use client"
import { HeroSection } from "@/components/hero-section"
import { ExperienceCard } from "@/components/experience-card"
import { FlipEducationCard } from "@/components/flip-education-card"
import { SkillCard } from "@/components/skill-card"
import { PublicationCard } from "@/components/publication-card"
import { ContactCard } from "@/components/contact-card"
import JourneyTimeline from "@/components/JourneyTimeline"
import { CertificationBadges } from "@/components/CertificationBadges"
import { FloatingSkillsBubble } from "@/components/floating-skills-bubble"
import SkillGalaxy from "@/components/SkillGalaxy"
import SkillCarousel from "@/components/SkillCarousel"
import SkillLoop from "@/components/SkillLoop"
import SkillReference from "@/components/SkillReference"
import StackedProjectCards from "@/components/StackedProjectCards"
import ExperienceTimeline from "@/components/ExperienceTimeline"


import {
  experiences,
  education,
  skillGroups,
  publications,
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

      {/* Skills */}
      <section id="skills" className="py-12 md:py-20 relative overflow-hidden min-h-[700px]">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Skills</h2>
          </div>
          {/* Category-wise skill reference */}
          <SkillReference />
        </div>
        {/* Background skill marquee - fills entire section */}
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none opacity-30 z-0 flex items-center justify-center">
          <SkillLoop />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Experience</h2>
          </div>
          <ExperienceTimeline items={experiences} />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Featured Projects</h2>
            <p className="text-black/70 max-w-2xl mx-auto">Click the arrow or press space to explore each project</p>
          </div>
          <StackedProjectCards projects={featuredProjects} />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Education</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <FlipEducationCard key={`${edu.school}-${edu.startDate}`} education={edu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <JourneyTimeline />

      {/* Publications */}
      <section id="publications" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Publications</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {publications.map((publication, index) => (
              <PublicationCard key={publication.title} publication={publication} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Certifications</h2>
          </div>
          <div className="flex justify-center">
            <CertificationBadges certifications={certifications} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Contact</h2>
          </div>
          <ContactCard />
        </div>
      </section>
    </div>
  )
}
