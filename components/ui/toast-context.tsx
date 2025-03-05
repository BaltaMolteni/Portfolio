"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { Check } from "lucide-react"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastViewport } from "@/components/ui/toast"

type ToastContextType = {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastContextProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  const showToast = (message: string) => {
    setMessage(message)
    setOpen(true)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastProvider>
        {children}
        <Toast open={open} onOpenChange={setOpen} className="flex items-center gap-2">
          <Check className="h-4 w-4" />
          <ToastDescription>{message}</ToastDescription>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastContextProvider")
  }
  return context
}

