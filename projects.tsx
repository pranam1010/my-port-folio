"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SectionTitle } from "./section-title"

type Project = {
  title: string
  status: string
  description: string[]
  tech: string[]
  source?: string
  showInProgress?: boolean
}

const PROJECTS: Project[] = [
  {
    title: "AI-Based Food Scanner for Allergen and Health Risks",
    status: "Ongoing",
    description: [
      "AI-powered scanning via barcode or image recognition.",
      "Detects allergens, harmful ingredients, and health interactions.",
      "Manual ingredient entry, nutritional analysis, personalized alerts.",
    ],
    tech: ["Python", "TensorFlow/Keras", "OpenCV", "Flask/Django", "Nutrition/Barcode APIs"],
    showInProgress: true,
  },
  {
    title: "Agriculture Management System",
    status: "Dec 2024",
    description: [
      "Centralized platform for farmers, vendors, and administrators.",
      "Features: crop registration, vendor services, weather, yield tracking, admin dashboards.",
      "Role-based access with secure authentication and activity logs.",
    ],
    tech: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
    source: "https://github.com/pranam1010/agriculture-management-system",
  },
  {
    title: "Deepfake Video Detection System",
    status: "Jul 2024",
    description: [
      "Deep learning system for detecting manipulated videos.",
      "Tools: MTCNN for face detection, OpenCV preprocessing, CNN classification.",
      "Dataset: FaceForensics++",
    ],
    tech: ["Python", "OpenCV", "MTCNN", "CNN"],
    source: "https://github.com/pranam1010/deepfake-video-detection",
  },
  {
    title: "Peer-to-Peer Video Streaming",
    status: "Jun 2025",
    description: [
      "Full-duplex video streaming over TCP with synchronized threads.",
      "Custom protocol with JPEG compression and framing headers.",
      "OpenCV integration for capture, processing, and mock testing.",
    ],
    tech: ["C++", "OpenCV", "Poco Libraries", "Multithreading"],
    source: "https://github.com/pranam1010/p2p-streaming",
  },
]

export function Projects() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-5xl px-4 pb-6">
      <SectionTitle title="PROJECT" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {PROJECTS.map((p) => {
          const isOngoing = p.status.toLowerCase() === "ongoing"
          return (
            <Card
              key={p.title}
              className="bg-white/5 border-white/10 hover:border-teal-500/40 transition-colors hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <Badge className={isOngoing ? "bg-amber-400 text-black" : "bg-teal-500 text-black"}>{p.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="list-disc pl-5 space-y-1">
                  {p.description.map((d) => (
                    <li key={d} className="leading-relaxed">
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded px-2 py-1 bg-white/10 border border-white/10 hover:bg-white/15 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  {p.showInProgress ? (
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-teal-500 text-black hover:bg-teal-400">View Source Code</Button>
                      </DialogTrigger>
                      <DialogContent className="bg-background border-white/10 text-foreground">
                        <DialogHeader>
                          <DialogTitle>Currently in progress</DialogTitle>
                          <DialogDescription className="text-gray-300">
                            The repository for this project is in progress and will be shared soon.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end">
                          <Button
                            variant="outline"
                            className="border-teal-500 text-teal-400 hover:bg-white/5 bg-transparent"
                            onClick={() => setOpen(false)}
                          >
                            Close
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <a href={p.source} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-teal-500 text-black hover:bg-teal-400">View Source Code</Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
