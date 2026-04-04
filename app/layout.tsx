import type { Metadata } from "next"
import { Oswald, Manrope } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "sonner"

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export const metadata: Metadata = {
  title: "DBell | Premium Fitness & Gym",
  description: "Build your best body with DBell. State-of-the-art equipment, expert trainers, and a supportive community.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${manrope.className} ${oswald.variable} ${manrope.variable} bg-black text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster theme="dark" position="top-right" richColors />
      </body>
    </html>
  )
}
