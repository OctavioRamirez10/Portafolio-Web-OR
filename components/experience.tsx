import { Briefcase, MapPin, Calendar } from "lucide-react"

export function Experience() {
  return (
    <section className="relative py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Experiencia Laboral</h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="glass-effect rounded-3xl p-8 md:p-12 relative">
            <div className="absolute -left-4 top-12 w-8 h-8 rounded-full bg-primary border-4 border-background hidden md:block" />

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>01/2023 - Presente</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Santa Fe, Argentina</span>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Soporte Técnico - Área Informática</h3>
                <div className="flex items-center gap-2 text-xl text-primary mb-6">
                  <Briefcase className="w-6 h-6" />
                  <span>Casa de Gobierno</span>
                </div>
              </div>

              <ul className="space-y-3 text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>Atención y soporte a usuarios en entornos de alta demanda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">●</span>
                  <span>Instalación y configuración de Windows y Linux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span>Mantenimiento y reparación de PC e impresoras</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>Implementación de cableado estructurado y redes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">●</span>
                  <span>Diagnóstico y resolución eficiente de incidencias técnicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span>Manejo de software institucional y herramientas de trabajo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
