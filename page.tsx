"use client"

import { useCallback } from "react"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Nav onNavigate={handleScroll} />
      <section id="hero" className="pt-24">
        <Hero onContact={() => handleScroll("contact")} />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="education" className="scroll-mt-24">
        <Education />
      </section>

      <section id="certifications" className="scroll-mt-24">
        <Certifications />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
