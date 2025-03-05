"use client"

import { useLanguage } from "@/components/language-provider"
import { useToast } from "@/components/ui/toast-context"
import { Github, Linkedin, Mail, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { language, translations } = useLanguage()
  const { showToast } = useToast()
  const email = "baltazarmolteni04@gmail.com"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      showToast(translations[language].emailCopied)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <footer className="border-t py-8 bg-muted/40">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {translations[language].footerText} &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={copyToClipboard}
            >
              <Mail className="h-4 w-4" />
              {email}
              <Copy className="h-3 w-3" />
            </Button>
            <div className="flex items-center gap-4 mr-3">
              <a href="https://github.com/BaltaMolteni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/baltazar-molteni-975087250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

