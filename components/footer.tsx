"use client"

import Link from "next/link"
import { FOOTER } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-2xl font-extrabold text-amber-700">{FOOTER.brand}.</div>
          <p className="text-pretty text-zinc-900/80">{FOOTER.blurb}</p>
          <div className="flex gap-3" aria-label="social">
            <div className="h-9 w-9 rounded-full border border-stone-200" aria-hidden />
            <div className="h-9 w-9 rounded-full border border-stone-200" aria-hidden />
            <div className="h-9 w-9 rounded-full border border-stone-200" aria-hidden />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-extrabold text-zinc-900">Useful Link</h4>
          <ul className="mt-4 space-y-3">
            {FOOTER.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-zinc-900 hover:text-amber-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-extrabold text-zinc-900">Our Address</h4>
          <ul className="mt-4 space-y-2 text-zinc-900/80">
            {FOOTER.address.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-extrabold text-zinc-900">Newsletter</h4>
          <p className="mt-4 text-zinc-900/80">You will be notified when something new will appear.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Email Address *" className="bg-white text-zinc-900" />
            <Button className="bg-amber-700 text-white hover:bg-amber-800" aria-label="Subscribe">
              →
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-sm text-zinc-900/80">
        © Copyright 2025 | Dotus – Medical Theme | All rights reserved.
      </div>
    </footer>
  )
}
