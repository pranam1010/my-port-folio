"use client"

import Image from "next/image"

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-8 md:pb-12">
      <div className="flex flex-col md:flex-row-reverse items-center md:items-center gap-8 md:gap-10">
        <div className="shrink-0">
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full ring-2 ring-teal-500/60 overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo of Pranam P Gowda"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-balance text-3xl md:text-5xl font-semibold tracking-tight">
            Hi, I’m Pranam P Gowda — Aspiring Software Engineer | Full-Stack &amp; AI Enthusiast
          </h1>
          <p className="mt-4 text-pretty text-gray-300 leading-relaxed">
            Passionate about building scalable applications and intelligent solutions with expertise in full-stack
            development, artificial intelligence, databases, and problem-solving. With hands-on project and internship
            experience, I aim to create impactful technologies for real-world challenges.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href="https://drive.google.com/file/d/1W0-P4wAhaepFPqgIuEtIE6lCpsuaC9Ab/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-teal-500 text-black hover:bg-teal-400 transition-colors"
            >
              View Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1W0-P4wAhaepFPqgIuEtIE6lCpsuaC9Ab/view"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-teal-500 text-teal-400 hover:bg-white/5 transition-colors"
            >
              Download Resume
            </a>
            <button
              onClick={onContact}
              className="px-4 py-2 rounded text-white hover:text-teal-400 hover:bg-white/5 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* <SectionTitle title="About Me" subtitle="A quick introduction" /> */}
    </div>
  )
}
