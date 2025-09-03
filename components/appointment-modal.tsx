"use client"
import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { getConsultationPrice, type ConsultationType } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { cubicBezier } from "framer-motion";
import { easeOut, easeInOut } from "framer-motion";


type DoctorLite = {
  slug?: string
  name?: string
  department?: string
}

type AppointmentModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  doctor?: DoctorLite | null
}

export function AppointmentModal({ open, onOpenChange,  doctor }: AppointmentModalProps) {
  const [type, setType] = React.useState<ConsultationType>("video")
  console.log("doctor", doctor)
  const [gender, setGender] = React.useState<string>("male")

  React.useEffect(() => {
    // Reset to defaults when switching doctors
    setType("video")
    setGender("male")
  }, [doctor?.slug])

  const price = getConsultationPrice(doctor?.slug, type)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // Replace with real payment integration
    console.log("[v0] Appointment payload:", Object.fromEntries(formData.entries()), {
      doctor: doctor?.slug,
      consultationType: type,
      price,
    })
    onOpenChange(false)
  }

 const container = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: easeOut },
  },
};
  const list = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  }
  const item = {
  hidden: { opacity: 0, y: 6 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.18, ease: cubicBezier(0.16, 1, 0.3, 1) } 
  },
};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 overflow-hidden">
        <motion.div variants={container} initial="hidden" animate="visible">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-pretty">Book Appointment{doctor?.name ? ` — ${doctor.name}` : ""}</DialogTitle>
            <DialogDescription>
              Enter your details and choose a consultation type. Price updates automatically.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="px-6 pb-6">
            <input type="hidden" name="doctor" value={doctor?.slug || ""} />

            <motion.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
              variants={list}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-1.5" variants={item}>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Full name" required />
              </motion.div>

              <motion.div className="space-y-1.5" variants={item}>
                <Label htmlFor="age">Age</Label>
                <Input id="age" name="age" type="number" min={0} max={120} placeholder="Age" required />
              </motion.div>

              <motion.div className="space-y-1.5 md:col-span-2" variants={item}>
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" name="mobile" type="tel" placeholder="e.g.,` +91 8827190251`" required />
              </motion.div>

              <motion.div className="space-y-1.5" variants={item}>
                <Label htmlFor="date">Date</Label>
                <Input id="date" name="date" type="date" required />
              </motion.div>

              <motion.div className="space-y-1.5" variants={item}>
                <Label htmlFor="time">Time</Label>
                <Input id="time" name="time" type="time" required />
              </motion.div>

              <motion.div className="space-y-1.5" variants={item}>
                <Label>Gender</Label>
                <Select defaultValue={gender} onValueChange={setGender} name="gender">
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="gender" value={gender} />
              </motion.div>

              <motion.div className="space-y-1.5" variants={item}>
                <Label>Consultation</Label>
                <Select defaultValue={type} onValueChange={(v) => setType(v as ConsultationType)} name="consultation">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video Consultation</SelectItem>
                    <SelectItem value="physical">Physical Consultation</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="consultation" value={type} />
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-5 flex items-center justify-between"
              variants={item}
              initial="hidden"
              animate="visible"
            >
              <p className="text-sm text-stone-600">
                Department: <span className="font-medium text-stone-900">{doctor?.department || "General"}</span>
              </p>
              <Button type="submit" className={cn("bg-amber-700 hover:bg-amber-800 text-white")}>
                {`Pay Now — Rs.${price}`}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
