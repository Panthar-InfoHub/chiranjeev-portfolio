"use client"
import { SectionBadge } from "./section-badge"
import { SectionTitle } from "./section-title"
import { FEATURES } from "@/lib/data"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <SectionBadge>Why Choose Us?</SectionBadge>
          <SectionTitle className="mt-4">Best Service And Expert Doctor Is Here.</SectionTitle>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            {FEATURES.map((f) => (
              <motion.span
                key={f}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
                className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-900"
              >
                {f}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Stacked portrait placeholders */}
        <motion.div
          className="relative mx-auto grid w-full max-w-lg grid-cols-3 items-end gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <div className="col-span-2">
            <img
              src={"/placeholder.svg?height=560&width=560&query=nurse%20portrait%20in%20hospital"}
              alt="Nurse portrait placeholder"
              className="h-full w-full rounded-full border border-stone-200 object-cover"
            />
          </div>
          <div className="space-y-4">
            <img
              src={"/placeholder.svg?height=160&width=320&query=stethoscope%20closeup"}
              alt="Stethoscope placeholder"
              className="h-40 w-full rounded-[2rem] border border-stone-200 object-cover"
            />
            <img
              src={"/placeholder.svg?height=320&width=320&query=doctor%20portrait%20smiling"}
              alt="Doctor portrait placeholder"
              className="h-72 w-full rounded-[2rem] border border-stone-200 object-cover"
            />
          </div>
          {/* Rating badge */}
          <motion.div
            className="pointer-events-none absolute -bottom-4 left-6 rounded-full bg-amber-700 px-6 py-6 text-center text-white shadow md:-bottom-8 md:left-8"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-extrabold">99%</div>
            <div className="text-sm opacity-90">Positive Rating</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
