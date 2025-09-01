"use client"
import { TESTIMONIAL } from "@/lib/data"
import { SectionBadge } from "./section-badge"
import { motion } from "framer-motion"

export default function Testimonial() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <SectionBadge>Testimonial</SectionBadge>
          <motion.div
            className="text-5xl font-extrabold leading-tight text-zinc-900"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
          >
            {TESTIMONIAL.stat}
          </motion.div>
          <motion.p
            className="text-lg leading-relaxed text-zinc-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {TESTIMONIAL.caption}
          </motion.p>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow">
            <img
              src={`/abstract-geometric-shapes.png?height=160&width=160&query=${encodeURIComponent(TESTIMONIAL.imgQuery)}`}
              alt="Testimonial portrait placeholder"
              className="h-full w-full object-cover"
            />
          </div>
          <motion.blockquote
            className="rounded-xl border border-stone-200 bg-white p-6 text-zinc-900 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-pretty text-lg leading-relaxed">{TESTIMONIAL.quote}</p>
            <footer className="mt-4">
              <div className="font-extrabold text-zinc-900">{TESTIMONIAL.author}</div>
              <div className="text-sm text-zinc-900/80">{TESTIMONIAL.role}</div>
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
