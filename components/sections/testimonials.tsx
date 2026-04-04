"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const basePath = process.env.__NEXT_ROUTER_BASEPATH || ""

const testimonials = [
  {
    name: "Marcus T.",
    role: "Lost 35 lbs",
    image: `${basePath}/images/testimonial_1.png`,
    text: "DBell completely changed my life. The trainers pushed me beyond what I thought was possible. I've never felt stronger or more confident."
  },
  {
    name: "Sarah L.",
    role: "Marathon Runner",
    image: `${basePath}/images/testimonial_2.png`,
    text: "The community at DBell is unmatched. From day one, everyone welcomed me and helped me reach goals I never thought achievable."
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

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-start">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], delay: idx * 0.15, duration: 0.8 }}
              className={`bg-black border border-neutral-800 p-10 relative flex-1 ${idx === 1 ? 'md:mt-16' : ''}`}
            >
              <Quote aria-hidden="true" className="absolute top-8 right-8 w-12 h-12 text-neutral-800/50" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 border-2 border-red-600 overflow-hidden shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
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
