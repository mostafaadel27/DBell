"use client"

import { motion, Variants } from "framer-motion"
import { Dumbbell, Activity, HeartPulse } from "lucide-react"

const programs = [
  {
    title: "Weight Loss",
    description: "High-intensity cardio and functional training designed to burn fat and improve cardiovascular health.",
    icon: HeartPulse,
  },
  {
    title: "Muscle Gain",
    description: "Progressive overload weightlifting programs focused on hypertrophy and strength building.",
    icon: Dumbbell,
  },
  {
    title: "Personal Training",
    description: "1-on-1 expert guidance tailored to your specific fitness goals, nutrition, and lifestyle.",
    icon: Activity,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 }
  },
}

export function Programs() {
  return (
    <section id="programs" className="py-32 bg-black relative border-y border-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black uppercase text-white mb-6 tracking-tighter"
            >
              Master Your <span className="text-red-600">Discipline</span>
            </motion.h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We don't do 'easy'. Our specialized training protocols are built for those who prioritize results over comfort. Choose your path to transformation.
            </p>
          </div>
          <div className="hidden md:block h-[2px] flex-grow bg-neutral-900 ml-12 mb-4 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-red-600"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-black border border-neutral-900 p-12 hover:bg-neutral-900/40 transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Industrial background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-900/50 -translate-y-12 translate-x-12 rotate-45 group-hover:bg-red-600/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-10 relative">
                  <div className="absolute inset-0 bg-red-600/10 border border-red-600/20 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500 ease-[0.16,1,0.3,1]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <program.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm mb-8 group-hover:text-neutral-300 transition-colors">
                  {program.description}
                </p>
                
                <div className="h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

