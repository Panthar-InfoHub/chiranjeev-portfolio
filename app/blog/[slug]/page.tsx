import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { POSTS } from "@/lib/data"
import { slugify } from "@/lib/slug"

type Params = { slug: string }

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: slugify(p.title) }))
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = POSTS.find((p) => slugify(p.title) === params.slug)
  if (!post) return notFound()

  const { title, author, imgQuery, date } = post as {
    title: string
    author?: string
    imgQuery?: string
    date?: string
  }

  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-stone-600">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/#blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-stone-900">{title}</li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 text-pretty">{title}</h1>

      {/* Byline */}
      <p className="mt-3 text-stone-600">
        By <span className="font-medium text-stone-800">{author || "Anonymous"}</span>
        {date ? <span className="ml-2">• {date}</span> : null}
      </p>

      {/* Header Image placeholder */}
      <div className="mt-6 overflow-hidden rounded-lg border border-stone-200 bg-white">
        <Image
          src={`/abstract-geometric-shapes.png?height=560&width=1120&query=${encodeURIComponent(
            imgQuery || "medical blog header image",
          )}`}
          alt="Blog header image placeholder"
          width={1120}
          height={560}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Content placeholder */}
      <article className="prose prose-stone max-w-none mt-8">
        <p>
          This is a simple placeholder for the blog article. You can extend your static data with a content field later
          and render it here, or switch to Markdown when you’re ready.
        </p>
      </article>
    </main>
  )
}
