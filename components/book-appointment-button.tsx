"use client"
import * as React from "react"
import { AppointmentModal } from "./appointment-modal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
  doctor: {
    slug: string
    name: string
    department?: string
  }
  className?: string
}

export default function BookAppointmentButton({ doctor, className }: Props) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/50",
          className,
        )}
      >
        Book Appointment
      </Button>
      <AppointmentModal open={open} onOpenChange={setOpen} doctor={doctor} />
    </>
  )
}
