"use client"

import { useEffect, useState } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState("INICIANDO")

  useEffect(() => {
    const textSequence = ["INICIANDO", "CARGANDO DATOS", "PREPARANDO EXPERIENCIA", "CASI LISTO"]
    let textIndex = 0

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % textSequence.length
      setText(textSequence[textIndex])
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="relative">
        <div className="absolute inset-0 -m-32">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 text-center space-y-8">
          <div className="relative mx-auto w-48 h-48 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse-glow" />
            <svg
              viewBox="0 0 200 200"
              className="relative z-10 w-full h-full drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))" }}
            >
              <rect
                x="60"
                y="40"
                width="80"
                height="70"
                rx="10"
                fill="url(#robot-gradient)"
                stroke="#8b5cf6"
                strokeWidth="3"
              />

              <line x1="100" y1="20" x2="100" y2="40" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
              <circle cx="100" cy="15" r="8" fill="#ec4899">
                <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
              </circle>

              <circle cx="80" cy="70" r="10" fill="#06b6d4">
                <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="120" cy="70" r="10" fill="#06b6d4">
                <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
              </circle>

              <rect x="75" y="90" width="50" height="10" rx="5" fill="#10b981" opacity="0.8">
                <animate attributeName="width" values="50;40;50" dur="1.5s" repeatCount="indefinite" />
              </rect>

              <rect
                x="50"
                y="115"
                width="100"
                height="60"
                rx="15"
                fill="url(#robot-gradient)"
                stroke="#8b5cf6"
                strokeWidth="3"
              />

              <rect x="80" y="130" width="40" height="30" rx="5" fill="#1e293b" opacity="0.5" />
              <line x1="85" y1="140" x2="115" y2="140" stroke="#06b6d4" strokeWidth="2">
                <animate attributeName="x2" values="115;95;115" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="85" y1="150" x2="115" y2="150" stroke="#10b981" strokeWidth="2">
                <animate attributeName="x2" values="115;90;115" dur="2.5s" repeatCount="indefinite" />
              </line>

              <rect
                x="25"
                y="120"
                width="20"
                height="50"
                rx="10"
                fill="url(#robot-gradient)"
                stroke="#8b5cf6"
                strokeWidth="2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 35 145"
                  to="-20 35 145"
                  dur="1s"
                  repeatCount="indefinite"
                  direction="alternate"
                />
              </rect>
              <rect
                x="155"
                y="120"
                width="20"
                height="50"
                rx="10"
                fill="url(#robot-gradient)"
                stroke="#8b5cf6"
                strokeWidth="2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 165 145"
                  to="20 165 145"
                  dur="1s"
                  repeatCount="indefinite"
                  direction="alternate"
                />
              </rect>

              <defs>
                <linearGradient id="robot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gradient animate-pulse">{text}</h2>

            <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
              <div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-xl font-mono text-muted-foreground">{progress}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
