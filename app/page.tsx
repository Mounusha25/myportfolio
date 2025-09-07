"use client"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { EducationCard } from "@/components/education-card"
import { SkillCard } from "@/components/skill-card"
import { PublicationCard } from "@/components/publication-card"
import { ContactCard } from "@/components/contact-card"
import { AwardCard } from "@/components/award-card"
import { CertificationCard } from "@/components/certification-card"
import { FloatingSkillsBubble } from "@/components/floating-skills-bubble"
import { ColorDripBackground } from "@/components/color-drip-background"
import { experiences, education, skillGroups, publications, allProjects, awards, certifications } from "@/lib/content"

export default function HomePage() {
  const featuredProjects = allProjects.filter((project) => project.featured)

  return (
    <div className="min-h-screen relative" id="top">
      {/* Color Drip Background */}
      <ColorDripBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <section id="skills" className="py-16 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skillGroups.map((skillGroup, index) => (
              <SkillCard key={skillGroup.category} skillGroup={skillGroup} index={index} />
            ))}
          </div>
          {/* Add the floating skills visualization */}
          <div className="mt-12 max-w-4xl mx-auto">
            <FloatingSkillsBubble />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/30 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Experience</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.startDate}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-muted/30 relative">
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
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-16 relative">
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
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-muted/30 relative">
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
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 relative">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation">Contact</h2>
          </div>
          <ContactCard />
        </div>
      </section>
    </div>
  )
}
