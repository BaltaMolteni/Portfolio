"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"


export function Header() {
  const { language, translations } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          {translations[language].name}
        </h1>
        <p className="text-xl text-muted-foreground">{translations[language].introduction}</p>
          <div className="flex items-center gap-4 mt-5">
            <a href="https://github.com/BaltaMolteni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/baltazar-molteni-975087250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
      </motion.div>
    </section>
  )
}

