import Link from "next/link"
import { DOCTORS } from "@/lib/data"
import { slugify } from "@/lib/slug"
import { doctorsData } from "@/lib/doctors"

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  try {
    return DOCTORS.map((d) => ({ slug: slugify(d.name) }))
  } catch {
    return []
  }
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { slug } = await params 
  console .log(slug)
  const doc =
    doctorsData.find((d) => d.slug === slug) ||
    ({
      name: `Dr. ${slug.replace(/-/g, " ")}`,
      role: "General Medicine",
      imgQuery: "doctor portrait on neutral background",
      experience: 10,
      about : "Experienced medical professional dedicated to patient care and well-being.",
    } as any)

  const name = doc.name || `Dr. ${slug.replace(/-/g, " ")}`
  const department = doc.role || "General Medicine"
  const experienceYears = typeof doc.experienceYears === "number" ? doc.experienceYears : 8
  const imgQuery = doc.imgQuery || "doctor portrait on neutral background"
  const about = doc.about || "Experienced medical professional dedicated to patient care and well-being."

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <div className="mb-6">
        <Link href="/" className="text-amber-700 hover:text-amber-800 transition-colors">
          {"← Back to home"}
        </Link>
      </div>

      <header className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
            Department: {department}
          </p>
          <h1 className="mt-3 text-pretty text-3xl font-semibold text-stone-900 md:text-4xl">{name}</h1>
          <p className="mt-2 text-stone-600">{experienceYears}+ years of experience</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
          {/* Placeholder image as requested */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/abstract-geometric-shapes.png?height=280&width=280&query=${encodeURIComponent(imgQuery)}`}
            alt={`Photo of ${name}`}
            className="h-56 w-56 object-cover sm:h-60 sm:w-60"
          />
        </div>
      </header>

      <section className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-3 text-xl font-semibold text-stone-900">About the Doctor</h2>
          <p className="text-stone-700 leading-relaxed">
            {
              doc.about
            }
            {"patient care philosophy details. Replace this placeholder text with real content later."}
          </p>
        </div>

        <aside className="rounded-xl border border-stone-200 bg-white p-4">
          <h3 className="text-lg font-medium text-stone-900">Quick Details</h3>
          <ul className="mt-3 space-y-2 text-stone-700">
            <li>
              <span className="font-medium text-stone-900">Name:</span> {name}
            </li>
            <li>
              <span className="font-medium text-stone-900">Department:</span> {department}
            </li>
            <li>
              <span className="font-medium text-stone-900">Experience:</span> {experienceYears}+ years
            </li>
          </ul>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-4 py-2 text-white transition-colors hover:bg-amber-800"
            >
              {"Book Appointment"}
            </Link>
            <Link
              href="/#doctors"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 px-4 py-2 text-stone-800 transition-colors hover:bg-stone-50"
            >
              {"View All Doctors"}
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}
