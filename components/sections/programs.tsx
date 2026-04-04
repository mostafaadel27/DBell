"use client"

import { motion, Variants } from "framer-motion"
import { Dumbbell, Activity, HeartPulse } from "lucide-react"

const programs = [
  {
    title: "Weight Loss",
    description: "High-intensity cardio and functional training designed to burn fat and improve cardiovascular health.",
    icon: <HeartPulse aria-hidden="true" className="w-12 h-12 text-red-600 mb-4" strokeWidth={1.5} />,
  },
  {
    title: "Muscle Gain",
    description: "Progressive overload weightlifting programs focused on hypertrophy and strength building.",
    icon: <Dumbbell aria-hidden="true" className="w-12 h-12 text-red-600 mb-4" strokeWidth={1.5} />,
  },
  {
    title: "Personal Training",
    description: "1-on-1 expert guidance tailored to your specific fitness goals, nutrition, and lifestyle.",
    icon: <Activity aria-hidden="true" className="w-12 h-12 text-red-600 mb-4" strokeWidth={1.5} />,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 }
  },
}

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">Our Programs</h2>
          <p className="text-neutral-400">
            Whether you want to lose weight, build muscle, or need dedicated 1-on-1 coaching, we have a program designed for you.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program, index) => (
            <motion.button 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="text-left bg-black border border-neutral-800 p-10 hover:border-red-600 hover:bg-neutral-950 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 flex flex-col items-start justify-start"
            >
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mb-8">
                {program.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 uppercase tracking-tight">{program.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{program.description}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
