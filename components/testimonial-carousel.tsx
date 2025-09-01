"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { TESTIMONIALS, type Testimonial } from "@/lib/data"
import { TestimonialCard } from "./testimonial-card"

type Props = {
  items?: Testimonial[]
  speedMs?: number // total loop duration
}

export function TestimonialCarousel({ items, speedMs = 28000 }: Props) {
  const data = items && items.length ? items : TESTIMONIALS

  const looped = useMemo(() => [...data, ...data], [data])

  return (
    <div className="relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ duration: speedMs / 1000, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        >
          {looped.map((t, i) => (
            <TestimonialCard item={t} key={`${t.slug}-${i}`} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
