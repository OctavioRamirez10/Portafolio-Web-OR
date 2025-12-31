"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/30 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-accent/30 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-96 sm:h-[700px] bg-secondary/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-20 sm:top-40 right-20 sm:right-40 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-6 sm:space-y-8 text-center max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground animate-slide-in-up font-medium">Hola, soy</h2>
            <h1
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-accent animate-fade-in-scale leading-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Octavio Ramirez
            </h1>
            <h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-shimmer animate-fade-in-scale leading-tight"
              style={{ animationDelay: "0.2s" }}
            >
              Técnico en Desarrollo de Software
            </h3>
          </div>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-slide-in-up max-w-3xl mx-auto px-4"
            style={{ animationDelay: "0.3s" }}
          >
            Especialista en soporte técnico IT y desarrollo web. Transformo problemas complejos en soluciones
            tecnológicas eficientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-in-up px-4" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="gradient" className="gap-2 group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 w-full sm:w-auto">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              Contáctame
            </Button>
            <Button size="lg" variant="outline" className="gap-2 group bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 w-full sm:w-auto" asChild>
              <a href="https://github.com/OctavioRamirez10" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-sm sm:text-base text-muted-foreground animate-slide-in-up px-4"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="tel:3424324206" className="flex items-center gap-2 hover:text-primary transition-colors group">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-lg">3424324206</span>
            </a>
            <a
              href="mailto:octaarami@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-lg">octaarami@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-primary rounded-full p-1 sm:p-1.5 glass-effect">
          <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}
