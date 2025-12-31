export function About() {
  return (
    <section className="relative py-16 sm:py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gradient-accent animate-fade-in-scale">Sobre Mí</h2>

        <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 hover-lift animate-slide-in-up">
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-balance">
            Técnico en desarrollo de software e informática con experiencia en soporte técnico, mantenimiento de
            equipos, redes e instalación de sistemas Windows y Linux, además de formación y práctica en desarrollo web
            con HTML, CSS, JavaScript, PHP y Python.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-balance">
            Me destaco por mi capacidad para resolver incidencias de manera eficiente, mi enfoque analítico,
            responsabilidad y rápida adaptación a nuevos entornos tecnológicos. Busco seguir creciendo profesionalmente,
            aportando valor tanto en infraestructura IT como en desarrollo de soluciones tecnológicas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 hover-lift animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 font-bold-gradient">2+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary/10 border border-secondary/20 hover-lift animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2 font-bold-gradient">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20 hover-lift animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2 font-bold-gradient">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
