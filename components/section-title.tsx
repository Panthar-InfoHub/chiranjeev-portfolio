import type React from "react"

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-balance text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl ${className}`}>
      {children}
    </h2>
  )
}
