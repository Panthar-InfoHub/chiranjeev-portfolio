import type React from "react"

export function SectionBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm ${className}`}
    >
      {children}
    </span>
  )
}
