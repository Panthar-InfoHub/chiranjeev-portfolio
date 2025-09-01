"use client"
import { useState } from "react"
import TestAppointmentModal from "./test-appointment-modal"

type Props = {
  testSlug: string
  testTitle: string
  className?: string
}

export default function TestAppointmentButton({ testSlug, testTitle, className }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex h-10 items-center justify-center rounded-md bg-amber-700 px-4 text-white hover:bg-amber-800 ${className ?? ""}`}
      >
        Book Appointment
      </button>
      <TestAppointmentModal open={open} onClose={() => setOpen(false)} testSlug={testSlug} testTitle={testTitle} />
    </>
  )
}
