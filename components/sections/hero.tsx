"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.05]"
          style={{ backgroundImage: `url("${process.env.__NEXT_ROUTER_BASEPATH || ""}/images/hero_bg.png")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <motion.h1 
              className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: 0.1 }}
            >
              Build Your
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-red-600 leading-[0.85]">
                Best Body
              </h1>
            </motion.div>
          </div>

          <motion.p 
            className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-xl border-l border-red-600/30 pl-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.8 }}
          >
            Join DBell to access state-of-the-art equipment, expert trainers, and a community dedicated to getting stronger every day. Your transformation starts here.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 1.1 }}
          >
            <Button size="lg" className="h-14 px-10 text-lg group relative overflow-hidden" asChild>
              <Link href="#contact">
                <span className="relative z-10">Join Now</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2" asChild>
              <Link href="#programs">Explore Programs</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-neutral-500">Scroll Down</span>
        <div className="relative w-[2px] h-16 bg-neutral-900 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-red-600"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    </section>
  )
}

