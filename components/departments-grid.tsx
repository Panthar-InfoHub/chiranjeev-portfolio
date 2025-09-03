"use client"
import { SectionBadge } from "./section-badge"
import { SectionTitle } from "./section-title"
import { TESTS } from "@/lib/data"
import { motion } from "framer-motion"
import TestAppointmentButton from "./test-appointment-button"
import Link from "next/link"

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
        {TESTS.slice(0, 4).map((test) => (
          <motion.article
            key={test.slug}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
            className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow hover:ring-1 hover:ring-amber-200"
          >
            <div className="mx-auto mb-4 overflow-hidden flex h-24 w-24 items-center justify-center rounded-full border border-stone-200 bg-white">
              <img
                src={test.iconQuery}
                alt={`${test.name} icon placeholder`}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-4 text-center text-xl font-extrabold text-zinc-900">{test.name}</h3>
            <div className="flex flex-col gap-2">
              <Link
                href={`/tests/${test.slug}`}
                className="w-full rounded-lg border border-amber-600 bg-white px-4 py-2 text-center text-sm font-medium text-amber-600 transition hover:bg-amber-50"
              >
                View More
              </Link>
              <TestAppointmentButton testSlug={test.slug} testTitle={test.name} className="w-full text-sm" />
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <Link
          href="/tests"
          className="inline-flex items-center rounded-lg bg-amber-600 px-6 py-3 text-white font-medium transition hover:bg-amber-700"
        >
          View More Tests
        </Link>
      </div>
    </section>
  )
}
