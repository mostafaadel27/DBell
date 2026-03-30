"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { MapPin, Phone, Mail, Dumbbell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/ui/logo"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Valid phone number required."),
  goal: z.string().min(5, "Please specify your fitness goal clearly.")
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  })

  async function onSubmit(data: ContactFormValues) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    toast.success("Application Received", {
      description: `Thanks ${data.name}. A trainer will reach out to schedule your visit.`,
    })
    reset()
  }

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-6">Start Your Journey</h2>
            <p className="text-neutral-400 mb-8 max-w-md">
              Fill out the form below to claim your free day pass and schedule a quick consultation with our expert team.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-neutral-900 border border-neutral-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-red-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm">Location</h4>
                  <p className="text-neutral-400">123 Iron Avenue, Fitness City, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-neutral-900 border border-neutral-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-red-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm">Phone</h4>
                  <p className="text-neutral-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-neutral-900 border border-neutral-800 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-red-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm">Email</h4>
                  <p className="text-neutral-400">train@dbell.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black border border-neutral-800 p-8 rounded-2xl relative"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-red-600 px-4 py-1 rounded shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center gap-2 text-white font-bold text-sm uppercase">
              <Dumbbell className="w-4 h-4" /> Try Us Free
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
              <div>
                <label className="text-neutral-300 font-medium text-sm mb-2 block uppercase">Full Name</label>
                <Input {...register("name")} placeholder="John Doe" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-neutral-300 font-medium text-sm mb-2 block uppercase">Phone Number</label>
                <Input {...register("phone")} placeholder="(555) 000-0000" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="text-neutral-300 font-medium text-sm mb-2 block uppercase">Primary Fitness Goal</label>
                <Input {...register("goal")} placeholder="e.g. Build muscle, lose weight" />
                {errors.goal && <p className="text-red-500 text-sm mt-1">{errors.goal.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Claim Your Free Pass"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
