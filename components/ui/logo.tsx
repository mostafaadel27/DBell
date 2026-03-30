import * as React from "react"
import { Dumbbell } from "lucide-react"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <Dumbbell className="text-red-500 w-8 h-8 md:w-10 md:h-10 -rotate-45" strokeWidth={2.5} />
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase">
        DBell
      </span>
    </div>
  )
}
