"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/data"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useIsMobile()

  if (isMobile) return null

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#" className="flex items-center gap-2" aria-label="Dotus home">
          <span className="text-2xl font-extrabold text-amber-700">Dotus.</span>
        </Link>

        <nav className="flex items-center gap-6" aria-label="primary">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="text-base font-semibold text-zinc-900 hover:text-amber-700">
              {l.label}
            </Link>
          ))}
        </nav>

        <Button className="bg-amber-700 text-white hover:bg-amber-800">Book Now</Button>
      </div>
    </header>
  )
}
