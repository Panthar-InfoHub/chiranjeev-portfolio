"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, TESTS } from "@/lib/data"
import { useIsMobile } from "@/hooks/use-mobile"
import { Search, X, User, Stethoscope } from "lucide-react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import BookingModal from "./bookingModal"

export default function Header() {
  const isMobile = useIsMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (isMobile) return null

  const doctors = [
    { name: "Dr. Rajesh Kumar", specialty: "Cardiologist" },
    { name: "Dr. Priya Sharma", specialty: "Neurologist" },
    { name: "Dr. Amit Patel", specialty: "Orthopedic Surgeon" },
    { name: "Dr. Sunita Verma", specialty: "Pediatrician" },
    { name: "Dr. Vikram Singh", specialty: "Dermatologist" },
    { name: "Dr. Kavita Rao", specialty: "Gynecologist" },
    { name: "Dr. Ravi Gupta", specialty: "ENT Specialist" },
    { name: "Dr. Meera Joshi", specialty: "Ophthalmologist" },
  ]

  const popularTests = [
    ...TESTS,
    { name: "Thyroid Function Test", slug: "thyroid-function-test" },
    { name: "Diabetes Panel", slug: "diabetes-panel" },
    { name: "Lipid Profile", slug: "lipid-profile" },
    { name: "Liver Function Test", slug: "liver-function-test" },
  ]

  const SearchModal = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-amber-700">Search Tests & Doctors</h2>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for tests, doctors, or specialties..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="grid md:grid-cols-2 gap-8">
             {/* Our Doctors */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="text-amber-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">Our Doctors</h3>
              </div>
              <div className="space-y-2">
                {doctors.map((doctor, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors border border-gray-100"
                  >
                    <div className="font-medium">{doctor.name}</div>
                    <div className="text-sm text-gray-600">{doctor.specialty}</div>
                  </button>
                ))}
              </div>
            </div>  
            {/* Popular Tests */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="text-amber-600" size={20} />
                <h3 className="text-lg font-semibold text-gray-800">Popular Tests</h3>
              </div>
              <div className="space-y-2">
                {popularTests.map((test, index) => (
                  <Link
                    key={index}
                    href={`/tests/${test.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="block w-full text-left p-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors border border-gray-100"
                  >
                    {test.name}
                  </Link>
                ))}
              </div>
            </div>        
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="#" className="flex items-center gap-2" aria-label="Dotus home">
            <span className="text-2xl font-extrabold text-amber-700">Chiranjeev Hospital</span>
          </Link>

          <nav className="flex items-center gap-6" aria-label="primary">
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="text-base font-semibold text-zinc-900 hover:text-amber-700">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-zinc-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Button className="bg-amber-700 text-white hover:bg-amber-800" onClick={() => setIsBookingModalOpen(true)}>
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {isSearchOpen && mounted && createPortal(<SearchModal />, document.body)}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
