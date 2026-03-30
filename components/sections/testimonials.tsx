"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marcus T.",
    role: "Member for 2 years",
    image: "/images/testimonial_1.png",
    text: "The equipment is top tier and the environment pushes you to be your absolute best. I've broken all my PRs since joining DBell."
  },
  {
    name: "Sarah L.",
    role: "Member for 10 months",
    image: "/images/testimonial_2.png",
    text: "The personal trainers are incredibly knowledgeable. They helped me fix my form and build a routine that actually works with my schedule."
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">What Our Members Say</h2>
          <p className="text-neutral-400">
            Don't just take our word for it. Here is what the DBell community has achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-neutral-800" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-600">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white leading-tight uppercase">{t.name}</h4>
                  <p className="text-sm text-red-500 font-medium">{t.role}</p>
                </div>
              </div>
              
              <p className="text-neutral-300 italic text-lg leading-relaxed">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
