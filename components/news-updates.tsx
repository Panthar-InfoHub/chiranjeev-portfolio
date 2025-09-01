"use client"

import { SectionBadge } from "./section-badge"
import { SectionTitle } from "./section-title"
import { NEWS_UPDATES } from "@/lib/data"
import { motion } from "framer-motion"
import { Calendar, Tag } from "lucide-react"

export default function NewsUpdates() {
  return (
    <section id="news" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <SectionBadge>Latest Updates</SectionBadge>
        <SectionTitle className="mt-4">Updates and News</SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
          Stay informed about the latest developments, new services, and achievements at our hospital.
        </p>
      </div>

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {NEWS_UPDATES.map((news) => (
          <motion.article
            key={news.id}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={`/abstract-geometric-shapes.png?height=240&width=400&query=${news.image}`}
                alt={news.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center gap-4 text-sm text-zinc-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                    {news.category}
                  </span>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold text-zinc-900 leading-tight">{news.title}</h3>

              <p className="text-zinc-600 leading-relaxed">{news.summary}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
