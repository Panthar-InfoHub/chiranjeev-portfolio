import Link from "next/link"
import { TESTS } from "@/lib/data"
import TestAppointmentButton from "@/components/test-appointment-button"

export default function TestsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="mb-6">
        <Link href="/" className="text-amber-700 hover:text-amber-800 transition-colors">
          {"← Back to home"}
        </Link>
      </div>

      <header className="text-center mb-10">
        <p className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800 mb-4">
          Medical Tests & Diagnostics
        </p>
        <h1 className="text-3xl font-bold text-stone-900 md:text-4xl mb-4">Complete Range of Medical Tests</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Professional diagnostic testing with state-of-the-art equipment and accurate results. Choose from our
          comprehensive range of medical tests and book your appointment today.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TESTS.map((test) => (
          <article
            key={test.slug}
            className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:ring-1 hover:ring-amber-200"
          >
            <div className="mx-auto mb-4 overflow-hidden flex h-24 w-24 items-center justify-center rounded-full border border-stone-200 bg-white">
              <img
                src={test.iconQuery}
                alt={`${test.name} icon`}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mb-4 text-center text-xl font-bold text-stone-900">{test.name}</h3>

            <div className="flex flex-col gap-2">
              <Link
                href={`/tests/${test.slug}`}
                className="w-full rounded-lg border border-amber-600 bg-white px-4 py-2 text-center text-sm font-medium text-amber-600 transition hover:bg-amber-50"
              >
                View Details
              </Link>
              <TestAppointmentButton testSlug={test.slug} testTitle={test.name} className="w-full text-sm" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-6">
          <h2 className="text-xl font-semibold text-stone-900 mb-2">Need Help Choosing the Right Test?</h2>
          <p className="text-stone-600 mb-4">
            Our medical experts can help you select the most appropriate tests based on your symptoms and health
            concerns.
          </p>
          <Link
            href="/#footer"
            className="inline-flex items-center rounded-lg bg-amber-600 px-6 py-3 text-white font-medium transition hover:bg-amber-700"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </main>
  )
}