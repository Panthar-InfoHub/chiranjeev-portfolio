"use client"

import { useEffect, useState } from "react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-700 text-white shadow hover:bg-amber-800"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
