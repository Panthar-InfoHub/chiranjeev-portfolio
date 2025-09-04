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
              src={"https://ca-times.brightspotcdn.com/dims4/default/b437d6a/2147483647/strip/true/crop/5400x3602+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb7%2Fb6%2F7204757c4a53addf3f7f0a3ae90a%2F541874-sd-me-company-test-007.jpg"}
              alt="Nurse portrait placeholder"
              className="h-full w-full rounded-full border border-stone-200 object-cover"
            />
          </div>
          <div className="space-y-4">
            <img
              src={"https://ca-times.brightspotcdn.com/dims4/default/b437d6a/2147483647/strip/true/crop/5400x3602+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb7%2Fb6%2F7204757c4a53addf3f7f0a3ae90a%2F541874-sd-me-company-test-007.jpg"}
              alt="Stethoscope placeholder"
              className="h-40 w-full rounded-[2rem] border border-stone-200 object-cover"
            />
            <img
              src={"https://ca-times.brightspotcdn.com/dims4/default/b437d6a/2147483647/strip/true/crop/5400x3602+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb7%2Fb6%2F7204757c4a53addf3f7f0a3ae90a%2F541874-sd-me-company-test-007.jpg  "}
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
