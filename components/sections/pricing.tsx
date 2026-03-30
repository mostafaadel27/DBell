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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col p-8 rounded-2xl bg-black border ${plan.highlighted ? 'border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)] ring-1 ring-red-600' : 'border-neutral-800'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white uppercase mb-2">{plan.name}</h3>
                <p className="text-neutral-400 min-h-[48px]">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-end gap-2">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-neutral-400 pb-1">/ month</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
