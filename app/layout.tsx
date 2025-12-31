import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Octavio Ramirez | Desarrollador de Software & Soporte IT",
  description:
    "Portafolio profesional de Octavio Ramirez - Técnico en Desarrollo de Software especializado en soporte IT, desarrollo web y diseño gráfico en Santa Fe, Argentina",
  keywords: ["desarrollo software", "soporte IT", "desarrollo web", "Santa Fe", "Argentina", "programador"],
  authors: [{ name: "Octavio Ramirez" }],
  generator: "Octavio Ramirez",
  icons: {
    icon: "/placeholder-logo.png",
    apple: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
