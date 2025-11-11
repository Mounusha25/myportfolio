"use client"
import { HeroSection } from "@/components/hero-section"
import { ExperienceCard } from "@/components/experience-card"
import { EducationCard } from "@/components/education-card"
import { SkillCard } from "@/components/skill-card"
import { PublicationCard } from "@/components/publication-card"
import { ContactCard } from "@/components/contact-card"
import { AwardCard } from "@/components/award-card"
import { CertificationCard } from "@/components/certification-card"
import { FloatingSkillsBubble } from "@/components/floating-skills-bubble"
import ProjectCarousel from "@/components/ProjectCarousel"
import WavySection from "@/components/WavySection"
import ExperienceTimeline from "@/components/ExperienceTimeline"


import {
  experiences,
  education,
  skillGroups,
  publications,
  allProjects,
  awards,
  certifications,
} from "@/lib/content"

export default function HomePage() {
  const featuredProjects = allProjects.filter((project) => project.featured)

  return (
    <div className="min-h-screen relative" id="top">
      {/* Hero */}
      <WavySection id="home" bottom>
        <HeroSection />
      </WavySection>

      {/* Skills */}
      <WavySection id="skills" top bottom className="crosshatch-bg bg-white text-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skillGroups.map((skillGroup, index) => (
              <SkillCard key={skillGroup.category} skillGroup={skillGroup} index={index} />
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <FloatingSkillsBubble />
          </div>
        </div>
      </WavySection>

      {/* Experience */}
      <WavySection id="experience" top bottom className="bg-emerald-500/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Experience</h2>
          </div>
          <ExperienceTimeline items={experiences} />
        </div>
      </WavySection>

      {/* Featured Projects */}
      <WavySection id="projects" top bottom>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Featured Projects</h2>
          </div>
          <ProjectCarousel projects={featuredProjects} />
        </div>
      </WavySection>

      {/* Education */}
      <WavySection id="education" top bottom className="bg-emerald-500/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Education</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={`${edu.school}-${edu.startDate}`} education={edu} index={index} />
            ))}
          </div>
        </div>
      </WavySection>

      {/* Awards */}
      <WavySection id="awards" top bottom>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <AwardCard key={`${award.title}-${award.date}`} award={award} index={index} />
            ))}
          </div>
        </div>
      </WavySection>

      {/* Publications */}
      <WavySection id="publications" top bottom className="bg-emerald-500/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Publications</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {publications.map((publication, index) => (
              <PublicationCard key={publication.title} publication={publication} index={index} />
            ))}
          </div>
        </div>
      </WavySection>

      {/* Certifications */}
      <WavySection id="certifications" top bottom>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={`${certification.title}-${certification.date}`}
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </div>
      </WavySection>

      {/* Contact */}
      <WavySection id="contact" top className="bg-emerald-500/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Contact</h2>
          </div>
          <ContactCard />
        </div>
      </WavySection>
    </div>
  )
}
