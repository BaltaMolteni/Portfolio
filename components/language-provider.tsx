"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface Translations {
  en: {
    name: string
    introduction: string
    projectsTitle: string
    skillsTitle: string
    skillCategories: {
      tools: string
      libraries: string
      other: string
    }
    footerText: string
    emailCopied: string
  }
  es: {
    name: string
    introduction: string
    projectsTitle: string
    skillsTitle: string
    skillCategories: {
      tools: string
      libraries: string
      other: string
    }
    footerText: string
    emailCopied: string
  }
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  translations: Translations
}

const translations: Translations = {
  en: {
    name: "Baltazar Molteni",
    introduction:
    "I am a 20-year-old systems analyst with strong knowledge in software development and designing technological solutions. I specialize in analyzing, modeling, and optimizing systems to solve real-world problems. I am passionate about learning new technologies and improving my skills in creating efficient and functional solutions.",
    projectsTitle: "My Projects",
    skillsTitle: "My Skills",
    skillCategories: {
      tools: "Development Tools",
      libraries: "Libraries & Frameworks",
      other: "Languages & Technologies",
    },
    footerText: "Baltazar Molteni",
    emailCopied: "Email copied to clipboard!",
  },
  es: {
    name: "Baltazar Molteni",
    introduction:
    "Soy un analista de sistemas de 20 años con sólidos conocimientos en desarrollo de software y diseño de soluciones tecnológicas. Me especializo en analizar, modelar y optimizar sistemas para resolver problemas del mundo real. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades en la creación de soluciones eficientes y funcionales.", 
    projectsTitle: "Mis Proyectos",
    skillsTitle: "Mis Habilidades",
    skillCategories: {
      tools: "Herramientas de Desarrollo",
      libraries: "Librerías y Frameworks",
      other: "Lenguajes y Tecnologías",
    },
    footerText: "Baltazar Molteni",
    emailCopied: "¡Correo copiado al portapapeles!", // added emailCopied
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
