"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"
import { motion } from "framer-motion"
import { Code, Wrench, Puzzle } from "lucide-react"

export function SkillsSection() {
  const { language, translations } = useLanguage()

  const categoryIcons = {
    tools: <Wrench className="h-5 w-5" />,
    libraries: <Puzzle className="h-5 w-5" />,
    other: <Code className="h-5 w-5" />,
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-12">{translations[language].skillsTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                {categoryIcons[category as keyof typeof categoryIcons]}
                <h3 className="text-xl font-bold">
                  {
                    translations[language].skillCategories[
                      category as keyof (typeof translations)[typeof language]["skillCategories"]
                    ]
                  }
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

