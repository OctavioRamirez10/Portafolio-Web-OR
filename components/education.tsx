import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    title: "Técnico Superior en Desarrollo de Software",
    institution: "Instituto ICOP",
    location: "Santa Fe, Argentina",
    period: "02/2023 - Presente",
    address: "San Martin 1540",
    color: "primary",
  },
  {
    title: "Tecnicatura en Informática Aplicada a Sitios Web y Diseño Multimedial",
    institution: "Universidad Nacional del Litoral",
    location: "Santa Fe, Argentina",
    period: "01/2021 - Presente",
    color: "secondary",
  },
  {
    title: "Educación Secundaria",
    institution: "Escuela San Roque 3015",
    location: "Santa Fe, Argentina",
    period: "01/2015 - 12/2020",
    address: "Güemes 5256",
    color: "accent",
  },
]

const courses = [
  { title: "Reparación de PC", institution: "ICOP", period: "04/2023 - 12/2024" },
  { title: "Reparación de Celulares", institution: "Curso", period: "01/2023 - 02/2024" },
  { title: "Diseñador Gráfico", institution: "Glowing", period: "2023" },
  { title: "Desarrollo Web Full Stack", institution: "ACADEMIX", period: "2023" },
]

export function Education() {
  return (
    <section className="relative py-20 px-4" id="education">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Educación</h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, idx) => (
            <div
              key={edu.title}
              className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-${edu.color}/20 flex items-center justify-center mb-6`}>
                <GraduationCap className={`w-8 h-8 text-${edu.color}`} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 text-balance">{edu.title}</h3>

              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold text-lg text-foreground/80">{edu.institution}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                {edu.address && <p className="text-sm text-muted-foreground">{edu.address}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-primary/20">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Cursos y Certificaciones</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, idx) => (
              <div
                key={course.title}
                className="p-6 rounded-2xl bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <h4 className="font-bold text-lg text-foreground mb-2">{course.title}</h4>
                <p className="text-sm text-muted-foreground">{course.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{course.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
