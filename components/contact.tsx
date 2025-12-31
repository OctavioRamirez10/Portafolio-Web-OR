import { Mail, Phone, MapPin, Github, Globe, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="relative py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient-accent animate-fade-in-scale">Contacto</h2>

        <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover-lift animate-slide-in-up">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-gradient-accent">¿Tienes un proyecto en mente?</h3>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Estoy disponible para colaborar en proyectos de desarrollo y soporte técnico
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a
              href="mailto:octaarami@gmail.com"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 group hover-lift hover:scale-[1.02]"
            >
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/20 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground text-sm sm:text-base">Email</div>
                <div className="text-xs sm:text-sm text-muted-foreground break-all">octaarami@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:3424324206"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 group hover-lift hover:scale-[1.02]"
            >
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/20 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground text-sm sm:text-base">Teléfono</div>
                <div className="text-xs sm:text-sm text-muted-foreground">3424324206</div>
              </div>
            </a>

            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20 hover-lift animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-accent/20">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground text-sm sm:text-base">Ubicación</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Santa Fe, Argentina</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 hover-lift animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-primary/20">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground text-sm sm:text-base">Idiomas</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Español (Nativo), Inglés (Intermedio)</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" variant="gradient" className="gap-2 group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6" asChild>
              <a href="mailto:octaarami@gmail.com">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Enviar Email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 group bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6" asChild>
              <a href="https://github.com/OctavioRamirez10" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-16 sm:mt-20 text-center animate-fade-in-scale">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Sígueme en redes sociales</h4>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/OctavioRamirez10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 group hover-lift"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/octavioramirez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all duration-300 group hover-lift"
              >
                <Instagram className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/5493424324206" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 group hover-lift"
              >
                <MessageCircle className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Octavio Ramirez | Santa Fe, Argentina
          </p>
        </footer>
      </div>
    </section>
  )
}
