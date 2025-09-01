"use client"

import Image from "next/image"
import type { Testimonial } from "@/lib/data"

type Props = { item: Testimonial }

export function TestimonialCard({ item }: Props) {
  const placeholder = "/patient-story-banner-with-doctors.png"
  return (
    <article className="w-72 sm:w-80 lg:w-96 shrink-0 rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
      <div className="relative h-44 w-full">
        <Image
          src={item.image || placeholder}
          alt={`${item.title} thumbnail`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
        />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-stone-900 text-pretty">{item.title}</h3>
        <p className="mt-2 text-sm text-stone-600">
          Treated by {item.author}, {item.hospital}
          <br />
          {item.location}
        </p>
        <p className="mt-1 text-xs text-stone-500">{item.date}</p>
        <p className="mt-3 text-sm text-stone-700 line-clamp-3">{item.summary}</p>
      </div>
    </article>
  )
}
