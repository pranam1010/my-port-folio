"use client"

import type React from "react"

import { SectionTitle } from "./section-title"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"

export function Contact() {
  const EMAIL = "poorneshms32@gmail.com"
  const SUBJECT = "Hello from your portfolio"
  const BODY = "Hi Pranam, I saw your portfolio and would like to connect."
  const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`
  const LINKEDIN = "https://www.linkedin.com/in/pranam-gowda-b3b980249"
  const GITHUB = "https://github.com/pranam1010"
  // wa.me uses country code without plus. Given number: +91-6362173734
  const phoneWhatsApp = "916362173734"
  const waLink = `https://wa.me/${phoneWhatsApp}?text=${encodeURIComponent("Hello Pranam, I'd like to connect.")}`

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      // 1) Try opening in a new tab (often allowed even in sandboxes)
      const win = window.open(MAILTO, "_blank")

      // 2) If popup blocked or not opened, try same-tab navigation
      if (!win) {
        window.location.href = MAILTO
      }

      // 3) As an additional fallback, try forcing top-level navigation out of the preview frame
      setTimeout(() => {
        try {
          if (typeof window !== "undefined" && !document.hasFocus()) return
          if (window.top && window.top !== window) {
            window.top.location.href = MAILTO
          }
        } catch {
          // ignore cross-origin top access errors
        }
      }, 100)
    } catch {
      // 4) Final fallback: copy to clipboard and show a message
      if (navigator && "clipboard" in navigator) {
        navigator.clipboard
          .writeText(EMAIL)
          .then(() => alert("Email copied. Please paste it into your mail app."))
          .catch(() => alert(`Please email me at: ${EMAIL}`))
      } else {
        alert(`Please email me at: ${EMAIL}`)
      }
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 text-center">
      <SectionTitle title="GET CONNECT WITH ME" />
      <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2 text-gray-300">
            <p>
              Email:{" "}
              <a
                className="text-teal-400 hover:underline"
                href={MAILTO}
                target="_top"
                onClick={handleEmailClick}
                aria-label={`Email ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a className="text-teal-400 hover:underline" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/pranam-gowda-b3b980249
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a className="text-teal-400 hover:underline" href={GITHUB} target="_blank" rel="noopener noreferrer">
                github.com/pranam1010
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a className="text-teal-400 hover:underline" href={waLink} target="_blank" rel="noopener noreferrer">
                +91-6362173734
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <a
              href={MAILTO}
              target="_top"
              onClick={handleEmailClick}
              aria-label="Email"
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/15 hover:border-teal-500/40 hover:bg-white/5 transition"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/15 hover:border-teal-500/40 hover:bg-white/5 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/15 hover:border-teal-500/40 hover:bg-white/5 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-teal-500 text-black hover:bg-teal-400 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
