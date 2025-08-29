"use client"

import type React from "react"
import { useCallback } from "react"

const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
]

export function Nav({ onNavigate }: { onNavigate: (id: string) => void }) {
  const handleClick = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      e.preventDefault()
      onNavigate(id)
    },
    [onNavigate],
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 backdrop-blur bg-background/80">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <a
          href="#hero"
          onClick={handleClick("hero")}
          className="font-semibold tracking-tight hover:text-teal-400 transition-colors"
          aria-label="Go to Hero"
        >
          Pranam P Gowda
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-3">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick(link.id)}
              className="text-sm text-gray-300 hover:text-white px-2 py-1 rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex md:hidden">
          <a
            href="#contact"
            onClick={handleClick("contact")}
            className="text-sm px-3 py-1.5 rounded bg-teal-500 text-black hover:bg-teal-400 transition-colors"
            aria-label="Contact Me"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
