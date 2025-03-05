"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { ProjectGrid } from "@/components/project-grid"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { ToastContextProvider } from "@/components/ui/toast-context"

export function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <LanguageProvider>
      <ToastContextProvider>
        <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}`}>
          <div className="flex-1 bg-background text-foreground">
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <main className="container mx-auto px-4 py-8">
              <Header />
              <ProjectGrid />
              <SkillsSection />
            </main>
            <Footer />
          </div>
        </div>
      </ToastContextProvider>
    </LanguageProvider>
  )
}

