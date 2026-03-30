import { Hero } from "@/components/sections/hero"
import { Programs } from "@/components/sections/programs"
import { Transformations } from "@/components/sections/transformations"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <ScrollProgress />
      <Hero />
      <Programs />
      <Transformations />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  )
}
