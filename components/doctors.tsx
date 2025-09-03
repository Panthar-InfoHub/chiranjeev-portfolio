"use client"

import { SectionBadge } from "./section-badge"
import { SectionTitle } from "./section-title"
import Link from "next/link"
import { DOCTORS } from "@/lib/data"
import { slugify } from "@/lib/slug"
import BookAppointmentButton from "./book-appointment-button"
import { motion } from "framer-motion"
import { cubicBezier } from "framer-motion"
import { doctorsData } from "@/lib/doctors"

export default function Doctors() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  }
  const item = {
  hidden: { opacity: 0, y: 6 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.18, ease: cubicBezier(0.16, 1, 0.3, 1) } 
  },
};

  return (
    <section id="doctors" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <SectionBadge>Meet Great Doctor's</SectionBadge>
        <SectionTitle className="mt-4">High Qualified Doctor's</SectionTitle>
      </div>

      <motion.div
        className="mt-10 grid gap-6 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {doctorsData.slice(0, 3).map((d) => (
          <motion.article
            key={d.name}
            variants={item}
            className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm hover:ring-1 hover:ring-amber-200"
          >
            <div className="aspect-[4/3]">
              <img
                src={(d.imgQuery)}
                alt={`${d.name} placeholder`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1 p-6">
              <h3 className="text-center text-xl font-extrabold text-zinc-900">{d.name}</h3>
              <p className="text-center text-sm text-zinc-900/80">{d.role}</p>
            </div>

            <div className="p-6 pt-0">
              <div className="flex flex-col gap-2 sm:flex-row">
                <BookAppointmentButton
                  doctor={{ slug: slugify(d.name), name: d.name, department: d.role }}
                  className="sm:w-auto"
                />
                <Link
                   href={`/doctors/${d.slug}`}
                   className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                  >
                  View Profile
                  </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <Link
          href="/doctors"
          className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/40"
        >
          View More Doctors
        </Link>
      </div>
    </section>
  )
}
