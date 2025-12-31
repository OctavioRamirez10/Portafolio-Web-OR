"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { StarField } from "@/components/star-field"
import { LoadingScreen } from "@/components/loading-screen"
import { FloatingRobot } from "@/components/floating-robot"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="relative min-h-screen overflow-hidden bg-background">
          <ParticleBackground />
          <StarField />
          <FloatingRobot />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      )}
    </>
  )
}
