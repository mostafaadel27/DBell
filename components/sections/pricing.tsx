"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "49",
    description: "Perfect for getting started on your fitness journey.",
    features: [
      "Access to gym facilities 24/7",
      "Basic equipment usage",
      "Locker room access",
      "1 group class per week"
    ]
  },
  {
    name: "Pro",
    price: "99",
    description: "The complete DBell experience with enhanced benefits.",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Free nutritional consultation",
      "Guest pass (2x/month)",
      "Premium recovery area access"
    ],
    highlighted: true
  },
  {
    name: "Elite",
    price: "199",
    description: "For serious athletes wanting professional guidance.",
    features: [
      "Everything in Pro",
      "4x Personal training sessions",
      "Customized meal plans",
      "Unlimited guest passes",
      "Private locker & laundry service"
    ]
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">Membership Plans</h2>
          <p className="text-neutral-400">
            Choose the membership that aligns with your goals. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-12 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], delay: index * 0.15, duration: 0.8 }}
              className={`relative flex flex-col p-10 transition-transform ${plan.highlighted ? 'bg-red-600 border-2 border-red-600 md:scale-110 z-10' : 'bg-black border border-neutral-800'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold uppercase tracking-widest py-2 px-6 border border-neutral-800">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 mt-2">
                <h3 className={`text-2xl font-bold font-display uppercase mb-2 ${plan.highlighted ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                <p className={`min-h-[48px] ${plan.highlighted ? 'text-black/80 font-medium' : 'text-neutral-400'}`}>{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-end gap-2">
                <span className={`text-6xl font-display font-black tracking-tighter tabular-nums ${plan.highlighted ? 'text-black' : 'text-white'}`}>${plan.price}</span>
                <span className={`pb-2 uppercase tracking-widest text-xs font-bold font-display ${plan.highlighted ? 'text-black/70' : 'text-neutral-400'}`}>/ month</span>
              </div>
              
              <ul className="space-y-5 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check aria-hidden="true" className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-black' : 'text-red-500'}`} strokeWidth={3} />
                    <span className={plan.highlighted ? 'text-black font-semibold' : 'text-neutral-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className={plan.highlighted ? "w-full bg-black text-white hover:bg-neutral-900 font-bold" : "w-full"} variant={plan.highlighted ? "default" : "outline"}>
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
