"use client"
import { SectionBadge } from "./section-badge"
import { SectionTitle } from "./section-title"
import { TESTS } from "@/lib/data"
import { motion } from "framer-motion"
import TestAppointmentButton from "./test-appointment-button"

export default function DepartmentsGrid() {
  return (
    <section id="departments" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <SectionBadge>Tests &amp; Diagnostics</SectionBadge>
        <SectionTitle className="mt-4">Find The Best Test For Your Health.</SectionTitle>
      </div>

      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {TESTS.map((test) => (
          <motion.article
            key={test.slug}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
            className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow hover:ring-1 hover:ring-amber-200"
          >
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-stone-200 bg-white">
              <img
                src={`/abstract-geometric-shapes.png?key=6b1lq&height=96&width=96&query=${encodeURIComponent(test.iconQuery)}`}
                alt={`${test.name} icon placeholder`}
                className="h-16 w-16 object-contain"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-extrabold text-zinc-900">{test.name}</h3>
            <div className="flex justify-center">
              <TestAppointmentButton testSlug={test.slug} testTitle={test.name} className="w-full text-sm" />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
