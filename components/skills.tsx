"use client"

import { Code, Server, Palette, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Desarrollo Web",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Python", "Diseño Responsivo", "GIT", "Bases de Datos"],
    color: "primary",
  },
  {
    title: "Soporte IT",
    icon: Server,
    skills: [
      "Windows",
      "Linux",
      "Redes",
      "Cableado Estructurado",
      "Diagnóstico",
      "Office",
      "LibreOffice",
      "Soporte a Usuarios",
    ],
    color: "secondary",
  },
  {
    title: "Diseño Gráfico",
    icon: Palette,
    skills: ["Adobe Photoshop", "Adobe Illustrator", "After Effects", "Diseño Digital", "UX/UI", "Diseño Móvil"],
    color: "accent",
  },
  {
    title: "Mantenimiento",
    icon: Wrench,
    skills: [
      "Reparación PC",
      "Reparación Celulares",
      "Impresoras",
      "Periféricos",
      "Mantenimiento Preventivo",
      "Mantenimiento Correctivo",
    ],
    color: "chart-4",
  },
]

export function Skills() {
  return (
    <section className="relative py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient-accent animate-fade-in-scale">Habilidades Técnicas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 group hover-lift animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-${category.color}/20 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-${category.color}/10 text-${category.color} font-medium border border-${category.color}/20 hover:bg-${category.color}/20 transition-colors hover:scale-105 transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
