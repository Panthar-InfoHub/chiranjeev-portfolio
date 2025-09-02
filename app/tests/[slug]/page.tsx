import Link from "next/link"
import { TESTS } from "@/lib/data"

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  try {
    return TESTS.map((test) => ({ slug: test.slug }))
  } catch {
    return []
  }
}

// Test specifications data
const TEST_SPECIFICATIONS = {
  "blood-work": {
    description:
      "Comprehensive blood analysis to check various health parameters including blood count, glucose levels, cholesterol, and organ function markers.",
    duration: "15-30 minutes",
    preparation: "Fasting for 8-12 hours may be required for certain tests",
    results: "Available within 24-48 hours",
    price: "₹800 - ₹2,500",
    includes: [
      "Complete Blood Count (CBC)",
      "Blood Sugar Levels",
      "Cholesterol Profile",
      "Liver Function Tests",
      "Kidney Function Tests",
    ],
  },
  "x-ray": {
    description:
      "Digital X-ray imaging to diagnose bone fractures, chest conditions, and internal abnormalities using low-dose radiation.",
    duration: "10-15 minutes",
    preparation: "Remove jewelry and metal objects from the area being examined",
    results: "Available immediately",
    price: "₹300 - ₹800",
    includes: ["Digital X-ray Images", "Radiologist Report", "CD/Digital Copy", "Consultation with Radiologist"],
  },
  "ct-scan": {
    description:
      "Advanced CT scanning technology providing detailed cross-sectional images of internal organs, bones, and tissues.",
    duration: "30-60 minutes",
    preparation: "May require contrast dye injection. Fasting for 4 hours if contrast is used",
    results: "Available within 24 hours",
    price: "₹3,000 - ₹8,000",
    includes: ["High-resolution CT Images", "3D Reconstruction", "Radiologist Analysis", "Digital Report"],
  },
  "mri-scan": {
    description:
      "Magnetic Resonance Imaging using powerful magnets and radio waves to create detailed images of organs and tissues.",
    duration: "45-90 minutes",
    preparation: "Remove all metal objects. Inform about implants or pacemakers",
    results: "Available within 24-48 hours",
    price: "₹5,000 - ₹15,000",
    includes: [
      "High-resolution MRI Images",
      "Multiple Sequence Imaging",
      "Specialist Radiologist Report",
      "Digital Archive",
    ],
  },
  ultrasound: {
    description:
      "Non-invasive ultrasound imaging using sound waves to examine internal organs, pregnancy monitoring, and soft tissue evaluation.",
    duration: "20-45 minutes",
    preparation: "May require full bladder for pelvic scans. Fasting for abdominal scans",
    results: "Available immediately",
    price: "₹800 - ₹2,000",
    includes: ["Real-time Imaging", "Printed Images", "Sonographer Report", "Digital Copy"],
  },
  "pet-scan": {
    description:
      "Positron Emission Tomography scan to detect cancer, heart disease, and brain disorders using radioactive tracers.",
    duration: "2-4 hours (including preparation)",
    preparation: "Fasting for 6 hours. Avoid strenuous exercise 24 hours before",
    results: "Available within 48-72 hours",
    price: "₹25,000 - ₹40,000",
    includes: ["PET-CT Fusion Images", "Metabolic Analysis", "Oncologist Consultation", "Detailed Medical Report"],
  },
  "urine-test": {
    description:
      "Comprehensive urine analysis to detect infections, kidney problems, diabetes, and other health conditions.",
    duration: "5-10 minutes",
    preparation: "Collect first morning urine sample in sterile container",
    results: "Available within 24 hours",
    price: "₹200 - ₹600",
    includes: ["Microscopic Examination", "Chemical Analysis", "Bacterial Culture (if needed)", "Lab Report"],
  },
  ecg: {
    description:
      "Electrocardiogram to record electrical activity of the heart and detect heart rhythm abnormalities and cardiac conditions.",
    duration: "10-15 minutes",
    preparation: "Wear loose clothing. Avoid lotions on chest area",
    results: "Available immediately",
    price: "₹300 - ₹800",
    includes: ["12-lead ECG Recording", "Cardiologist Interpretation", "Printed Report", "Digital Archive"],
  },
}

export default function TestDetailPage({ params }: PageProps) {
  const { slug } = params

  const test = TESTS.find((t) => t.slug === slug) || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    slug: slug,
    iconQuery: "medical test equipment icon",
  }

  const specs = TEST_SPECIFICATIONS[slug as keyof typeof TEST_SPECIFICATIONS] || {
    description: "Comprehensive medical test with detailed analysis and professional reporting.",
    duration: "30-60 minutes",
    preparation: "Follow pre-test instructions provided by our medical team",
    results: "Available within 24-48 hours",
    price: "₹500 - ₹2,000",
    includes: ["Professional Analysis", "Detailed Report", "Consultation Available"],
  }

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
            Medical Test
          </p>
          <h1 className="mt-3 text-pretty text-3xl font-semibold text-stone-900 md:text-4xl">{test.name}</h1>
          <p className="mt-2 text-stone-600">Professional diagnostic testing with accurate results</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <img
            src={`/abstract-geometric-shapes.png?height=280&width=280&query=${encodeURIComponent(test.iconQuery)}`}
            alt={`${test.name} medical test`}
            className="h-56 w-56 object-cover sm:h-60 sm:w-60"
          />
        </div>
      </header>

      <section className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-3 text-xl font-semibold text-stone-900">About This Test</h2>
          <p className="text-stone-700 leading-relaxed mb-6">{specs.description}</p>

          <h3 className="mb-3 text-lg font-semibold text-stone-900">What's Included</h3>
          <ul className="space-y-2 text-stone-700">
            {specs.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-xl border border-stone-200 bg-white p-4">
          <h3 className="text-lg font-medium text-stone-900">Test Details</h3>
          <ul className="mt-3 space-y-3 text-stone-700">
            <li>
              <span className="font-medium text-stone-900">Duration:</span>
              <br />
              <span className="text-sm">{specs.duration}</span>
            </li>
            <li>
              <span className="font-medium text-stone-900">Preparation:</span>
              <br />
              <span className="text-sm">{specs.preparation}</span>
            </li>
            <li>
              <span className="font-medium text-stone-900">Results:</span>
              <br />
              <span className="text-sm">{specs.results}</span>
            </li>
            <li>
              <span className="font-medium text-stone-900">Price Range:</span>
              <br />
              <span className="text-sm font-semibold text-amber-700">{specs.price}</span>
            </li>
          </ul>

          <div className="mt-5 flex flex-col gap-2">
            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-4 py-2 text-white transition-colors hover:bg-amber-800"
            >
              {"Book Test"}
            </Link>
            <Link
              href="/#departments"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 px-4 py-2 text-stone-800 transition-colors hover:bg-stone-50"
            >
              {"View All Tests"}
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}
