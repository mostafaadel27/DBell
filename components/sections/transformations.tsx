"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const transformations = [
  {
    name: "Marcus T.",
    before: "/images/transform_before_male.png",
    after: "/images/transform_after_male.png",
    story: "Lost 30 lbs and built lean muscle over 6 months of dedicated training.",
    duration: "6 Months"
  }
]

export function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="transformations" className="py-24 bg-black overflow-hidden relative">
      {/* Decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-neutral-900/30 whitespace-nowrap pointer-events-none select-none -z-0">
        RESULTS
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">Real Results</h2>
          <p className="text-neutral-400">
            See what happens when dedication meets expert programming. Our members completely transform their lives.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {transformations.map((item, idx) => (
            <motion.div 
              key={idx}
              className={`flex flex-col md:flex-row gap-8 items-center ${idx === currentIndex ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="relative group overflow-hidden rounded-xl aspect-[3/4]">
                  <Image src={item.before} alt="Before" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs font-bold uppercase py-1 px-3 rounded">Before</div>
                </div>
                <div className="relative group overflow-hidden rounded-xl aspect-[3/4]">
                  <Image src={item.after} alt="After" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold uppercase py-1 px-3 rounded shadow-[0_0_10px_rgba(220,38,38,0.5)]">After</div>
                </div>
              </div>
              
              <div className="flex-1 space-y-6 md:pl-12">
                <div className="inline-block bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 text-sm font-medium text-red-500 mb-2">
                  {item.duration} Journey
                </div>
                <h3 className="text-4xl font-bold text-white uppercase">{item.name}</h3>
                <p className="text-xl text-neutral-300 leading-relaxed italic">
                  "{item.story}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
