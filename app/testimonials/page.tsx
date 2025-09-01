import { TESTIMONIALS } from "@/lib/data"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function TestimonialsPage() {
  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <p className="inline-block rounded-full border border-stone-200 bg-amber-100/60 px-3 py-1 text-xs font-medium text-stone-700">
          Patient Stories
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 text-balance">
          Real Experiences, Real Recoveries
        </h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Auto-scrolling testimonials with placeholder images and demo text, formatted like the reference card.
        </p>
      </header>

      <TestimonialCarousel items={TESTIMONIALS} />
    </main>
  )
}
