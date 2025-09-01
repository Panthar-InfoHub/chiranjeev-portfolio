"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HERO } from "@/lib/data"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-10">
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-amber-600" aria-hidden />
          {HERO.badge}
        </span>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Copy */}
        <div>
          <motion.h1
            className="text-balance text-4xl font-extrabold leading-tight text-zinc-900 md:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO.title}
          </motion.h1>

          <motion.ul
            className="mt-6 space-y-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {HERO.bullets.map((b) => (
              <motion.li
                key={b}
                className="flex items-start gap-3"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-amber-600" aria-hidden />
                <span className="text-lg leading-relaxed text-zinc-900">{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-8">
            <Button
              className="bg-amber-700 text-white hover:bg-amber-800"
              onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
            >
              {HERO.cta}
            </Button>
          </div>
        </div>

        {/* Hero image placeholder */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <div className="aspect-square overflow-hidden rounded-full border border-stone-200 shadow-sm">
            <img
              src={"/placeholder.svg?height=800&width=800&query=smiling%20doctor%20portrait%20in%20clinic"}
              alt={HERO.imgAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
