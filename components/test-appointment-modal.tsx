"use client"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  open: boolean
  onClose: () => void
  testSlug: string
  testTitle: string
}

export default function TestAppointmentModal({ open, onClose, testSlug, testTitle }: Props) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onEsc)
    return () => document.removeEventListener("keydown", onEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
          {/* Panel */}
          <motion.div
            className="absolute inset-x-0 top-12 mx-auto w-[92%] max-w-xl rounded-xl bg-white p-6 shadow-xl"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-stone-900 text-balance">Book {testTitle}</h2>
              <p className="text-sm text-stone-600">Please fill the form to book your test.</p>
            </div>

            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-stone-700">Name</span>
                  <input
                    className="h-10 rounded-md border border-stone-300 px-3 outline-none focus:border-amber-700"
                    placeholder="Full name"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-stone-700">Age</span>
                  <input
                    type="number"
                    className="h-10 rounded-md border border-stone-300 px-3 outline-none focus:border-amber-700"
                    placeholder="Age"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-stone-700">Mobile Number</span>
                  <input
                    inputMode="tel"
                    className="h-10 rounded-md border border-stone-300 px-3 outline-none focus:border-amber-700"
                    placeholder="e.g. +1 555 123 4567"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-stone-700">Gender</span>
                  <select className="h-10 rounded-md border border-stone-300 px-3 outline-none focus:border-amber-700">
                    <option value="">Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-stone-700">Date</span>
                  <input
                    type="date"
                    className="h-10 rounded-md border border-stone-300 px-3 outline-none focus:border-amber-700"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-stone-700">Time</span>
                  <input
                    type="time"
                    className="h-10 rounded-md border border-stone-300 px-3 outline-none focus:border-amber-700"
                  />
                </label>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-amber-700 px-6 text-white hover:bg-amber-800"
                >
                  Book Appointment
                </button>
              </div>
            </form>

            <button
              onClick={onClose}
              className="mt-4 w-full rounded-md border border-stone-300 py-2 text-sm text-stone-700 hover:bg-stone-50"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}