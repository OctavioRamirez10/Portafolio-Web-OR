"use client"

import { useEffect, useState } from "react"

export function FloatingRobot() {
  const [scrollY, setScrollY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollProgress = Math.min(scrollY / 300, 1)
  const parallaxY = scrollY * 0.5
  const mouseParallaxX = (mouseX / window.innerWidth - 0.5) * 30
  const mouseParallaxY = (mouseY / window.innerHeight - 0.5) * 30

  return (
    <div
      className="fixed right-8 pointer-events-none z-40 transition-all duration-300 ease-out"
      style={{
        top: `calc(50% + ${parallaxY}px + ${mouseParallaxY}px)`,
        transform: `translateY(-50%) translateX(${mouseParallaxX}px) scale(${1 - scrollProgress * 0.3}) rotate(${scrollProgress * 10}deg)`,
        opacity: 1 - scrollProgress * 0.3,
      }}
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl opacity-40 animate-pulse-glow" />

        <svg viewBox="0 0 300 300" className="relative z-10 w-full h-full drop-shadow-2xl animate-float">
          <g className="animate-star-twinkle">
            <circle cx="50" cy="80" r="2" fill="#06b6d4" />
            <circle cx="250" cy="100" r="3" fill="#ec4899" />
            <circle cx="40" cy="200" r="2" fill="#10b981" />
            <circle cx="260" cy="220" r="2.5" fill="#8b5cf6" />
          </g>

          <rect
            x="90"
            y="60"
            width="120"
            height="100"
            rx="20"
            fill="url(#robot-main-gradient)"
            stroke="#8b5cf6"
            strokeWidth="4"
          >
            <animate attributeName="height" values="100;105;100" dur="4s" repeatCount="indefinite" />
          </rect>

          <line x1="130" y1="30" x2="130" y2="60" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
          <line x1="170" y1="35" x2="170" y2="60" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />

          <circle cx="130" cy="25" r="10" fill="#ec4899">
            <animate attributeName="cy" values="25;20;25" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="170" cy="30" r="10" fill="#06b6d4">
            <animate attributeName="cy" values="30;25;30" dur="2s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>

          <circle cx="120" cy="100" r="15" fill="#06b6d4" opacity="0.8">
            <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="100" r="15" fill="#06b6d4" opacity="0.8">
            <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
          </circle>

          <circle cx="120" cy="100" r="6" fill="#0c4a6e">
            <animate attributeName="cx" values="120;125;120" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="100" r="6" fill="#0c4a6e">
            <animate attributeName="cx" values="180;185;180" dur="4s" repeatCount="indefinite" />
          </circle>

          <path d="M 120 135 Q 150 145 180 135" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round">
            <animate
              attributeName="d"
              values="M 120 135 Q 150 145 180 135;M 120 135 Q 150 140 180 135;M 120 135 Q 150 145 180 135"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          <rect
            x="75"
            y="165"
            width="150"
            height="90"
            rx="25"
            fill="url(#robot-main-gradient)"
            stroke="#8b5cf6"
            strokeWidth="4"
          />

          <rect x="115" y="185" width="70" height="50" rx="10" fill="#1e293b" opacity="0.6" />

          <g stroke="#06b6d4" strokeWidth="3" strokeLinecap="round">
            <line x1="125" y1="195" x2="175" y2="195">
              <animate attributeName="x2" values="175;145;175" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="125" y1="205" x2="175" y2="205" stroke="#10b981">
              <animate attributeName="x2" values="175;150;175" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="125" y1="215" x2="175" y2="215" stroke="#ec4899">
              <animate attributeName="x2" values="175;155;175" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="125" y1="225" x2="175" y2="225" stroke="#8b5cf6">
              <animate attributeName="x2" values="175;140;175" dur="2.2s" repeatCount="indefinite" />
            </line>
          </g>

          <g>
            <rect
              x="35"
              y="175"
              width="30"
              height="70"
              rx="15"
              fill="url(#robot-main-gradient)"
              stroke="#8b5cf6"
              strokeWidth="3"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 210"
                to="-15 50 210"
                dur="2s"
                repeatCount="indefinite"
                direction="alternate"
              />
            </rect>
            <circle cx="50" cy="250" r="12" fill="#ec4899">
              <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          <g>
            <rect
              x="235"
              y="175"
              width="30"
              height="70"
              rx="15"
              fill="url(#robot-main-gradient)"
              stroke="#8b5cf6"
              strokeWidth="3"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 250 210"
                to="15 250 210"
                dur="2s"
                repeatCount="indefinite"
                direction="alternate"
              />
            </rect>
            <circle cx="250" cy="250" r="12" fill="#ec4899">
              <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          <defs>
            <linearGradient id="robot-main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5">
                <animate
                  attributeName="stop-color"
                  values="#4f46e5;#6366f1;#4f46e5"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#8b5cf6">
                <animate
                  attributeName="stop-color"
                  values="#8b5cf6;#a78bfa;#8b5cf6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#ec4899">
                <animate
                  attributeName="stop-color"
                  values="#ec4899;#f472b6;#ec4899"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
