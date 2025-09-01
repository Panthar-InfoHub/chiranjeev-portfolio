"use client"
import { SectionBadge } from "./section-badge"
import { SectionTitle } from "./section-title"
import Link from "next/link" // add Link for button anchors
import { POSTS } from "@/lib/data"
import { motion } from "framer-motion"
import { slugify } from "@/lib/slug" // import slugify so we can link each card to its dynamic page

export default function BlogList() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <SectionBadge>Our Post From Blog</SectionBadge>
        <SectionTitle className="mt-4">Latest News &amp; Article</SectionTitle>
      </div>

      <motion.div
        className="mt-10 grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {POSTS.map((p) => {
          const slug = slugify(p.title) // compute slug from title
          return (
            <motion.article
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
              className="rounded-xl border border-stone-200 bg-white p-3 shadow-sm"
            >
              {/* ... existing card content ... */}
              <div className="mb-3">
                <span className="inline-flex rounded-md border border-stone-200 bg-white px-3 py-1 text-sm font-semibold text-zinc-900">
                  {p.tag}
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-stone-200">
                <img
                  src={`/abstract-geometric-shapes.png?key=aclpc&height=640&width=860&query=${encodeURIComponent(p.imgQuery)}`}
                  alt={`${p.tag} article image placeholder`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-lg font-extrabold text-zinc-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-900/80">{p.excerpt}</p>
                <p className="pt-2 text-sm font-semibold text-amber-700">{p.date}</p>
              </div>

              <div className="border-t border-stone-200 p-4 pt-3">
                <div className="flex">
                  <Link
                    href={`/blog/${slug}`} // route to dynamic blog page
                    className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/40"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
