"use client"

import { Home, Users, Building2, UserCheck, BookOpen, Phone } from "lucide-react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import { NAV_LINKS } from "@/lib/data"

const NAV_ITEMS = [
  { icon: Home, href: NAV_LINKS[0].href, label: NAV_LINKS[0].label }, // Home
  { icon: Users, href: NAV_LINKS[1].href, label: NAV_LINKS[1].label }, // About
  { icon: Building2, href: NAV_LINKS[2].href, label: NAV_LINKS[2].label }, // Department
  { icon: UserCheck, href: NAV_LINKS[3].href, label: NAV_LINKS[3].label }, // Doctors
  { icon: BookOpen, href: NAV_LINKS[4].href, label: NAV_LINKS[4].label }, // Blog
  { icon: Phone, href: NAV_LINKS[5].href, label: NAV_LINKS[5].label }, // Contact
]

interface MobileBottomNavProps {
  showContent?: boolean
}

export default function MobileBottomNav({ showContent = true }: MobileBottomNavProps) {
  const isMobile = useIsMobile()

  if (!isMobile || !showContent) return null

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 flex justify-center">
      <nav className="flex items-center gap-3 sm:gap-6 rounded-full bg-[#8b5e34]/95 px-4 sm:px-6 py-3 backdrop-blur-sm border border-[#d4a373]/20 shadow-lg max-w-fit">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="relative group">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-white text-[#8b5e34] text-xs font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </div>
              <Link
                href={item.href}
                className="flex items-center justify-center p-1.5 sm:p-2 text-white/80 transition-all duration-200 hover:text-white hover:bg-white/10 rounded-full"
                aria-label={item.label}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          )
        })}
      </nav>
    </div>
  )
}
