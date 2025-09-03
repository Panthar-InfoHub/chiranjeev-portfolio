import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { POSTS } from "@/lib/data"
import { slugify } from "@/lib/slug"
import { GetBlogByTitle } from "@/actions/PostActions"

type Params = { slug: string }

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: slugify(p.title) }))
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await GetBlogByTitle((await params).slug)

  console.log("POSTSSS ==> ", post)
  if (!post) return notFound()

  const { title, author, imgQuery, date,bannerImage,description,content } = post as any

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
          <li className="text-stone-900">{post.title}</li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 text-pretty">{post.title}</h1>

      {/* Byline */}
      <p className="mt-3 text-stone-600">
        Published on{" "}
        <span className="font-medium text-stone-800">
          {post.createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </p>

      <div className="mt-6 overflow-hidden rounded-lg border border-stone-200 bg-white">
        <Image
          src={post.bannerImage || "/placeholder.svg"}
          alt={`${post.title} banner image`}
          width={1120}
          height={560}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <article className="prose prose-stone max-w-none mt-8">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}
