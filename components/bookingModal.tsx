"use client"

import { X, User, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPortal } from "react-dom"
import { useState, useEffect } from "react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen || !mounted) return null

  const BookingModalContent = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-amber-700">Book an Appointment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close booking modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">Choose the type of appointment you'd like to book</p>

          <div className="space-y-4">
            {/* Book Appointment with Doctor */}
            <Button
              className="w-full h-16 bg-amber-700 hover:bg-amber-800 text-white flex items-center justify-center gap-3 text-lg"
              onClick={() => {
                // Navigate to doctors page or open doctor booking
                window.location.href = "/doctors"
                onClose()
              }}
            >
              <User size={24} />
              Book Appointment with Doctor
            </Button>

            {/* Book a Test */}
            <Button
              variant="outline"
              className="w-full h-16 border-amber-700 text-amber-700 hover:bg-amber-50 flex items-center justify-center gap-3 text-lg bg-transparent"
              onClick={() => {
                // Navigate to tests page or open test booking
                window.location.href = "/tests"
                onClose()
              }}
            >
              <Stethoscope size={24} />
              Book a Test
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need help choosing? Call us at{" "}
              <a href="tel:+911234567890" className="text-amber-700 font-semibold hover:underline">
                +91 123 456 7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(<BookingModalContent />, document.body)
}