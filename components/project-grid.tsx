"use client"

import { useLanguage } from "@/components/language-provider"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"

export function ProjectGrid() {
  const { language, translations } = useLanguage()

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-12">{translations[language].projectsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title[language]}
              description={project.description[language]}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

