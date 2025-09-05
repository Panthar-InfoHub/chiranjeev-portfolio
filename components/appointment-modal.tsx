"use client"
import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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

export function AppointmentModal({ open, onOpenChange, doctor }: AppointmentModalProps) {
  const [type, setType] = React.useState<ConsultationType>("video")
  const [gender, setGender] = React.useState<string>("male")
  const [isEmergency, setIsEmergency] = React.useState<boolean>(false)
  const [selectedDate, setSelectedDate] = React.useState<string>("")

  React.useEffect(() => {
    setType("video")
    setGender("male")
    setIsEmergency(false)
    setSelectedDate("")
  }, [doctor?.slug])

  const price = getConsultationPrice(doctor?.slug, type, isEmergency, selectedDate)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
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
                <Input id="mobile" name="mobile" type="tel" placeholder="e.g., +1 555 000 0000" required />
              </motion.div>

              <motion.div className="space-y-1.5" variants={item}>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
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
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="gender" value={gender} />
              </motion.div>

              <motion.div className="space-y-1.5" variants={item}>
                <Label>Consultation Type</Label>
                <Select defaultValue={type} onValueChange={(v) => setType(v as ConsultationType)} name="consultation">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video Consultation</SelectItem>
                    <SelectItem value="physical">Physical Visit</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="consultation" value={type} />
              </motion.div>

              <motion.div className="space-y-1.5 md:col-span-2" variants={item}>
                <Label>Emergency Consultation</Label>
                <RadioGroup
                  value={isEmergency ? "yes" : "no"}
                  onValueChange={(value) => setIsEmergency(value === "yes")}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="emergency-no" />
                    <Label htmlFor="emergency-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="emergency-yes" />
                    <Label htmlFor="emergency-yes">Yes (+Rs. 300 emergency fee)</Label>
                  </div>
                </RadioGroup>
                <input type="hidden" name="isEmergency" value={isEmergency.toString()} />
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-5 flex items-center justify-between"
              variants={item}
              initial="hidden"
              animate="visible"
            >
              <div className="text-sm text-stone-600">
                <p>
                  Department: <span className="font-medium text-stone-900">{doctor?.department || "General"}</span>
                </p>
                {(isEmergency || (selectedDate && new Date(selectedDate).getDay() === 0)) && (
                  <p className="text-amber-600 font-medium mt-1">
                    {isEmergency && selectedDate && new Date(selectedDate).getDay() === 0
                      ? "Emergency + Sunday consultation"
                      : isEmergency
                        ? "Emergency consultation"
                        : "Sunday consultation"}{" "}
                    - Rs. 800
                  </p>
                )}
              </div>
              <Button type="submit" className={cn("bg-amber-700 hover:bg-amber-800 text-white")}>
                {`Pay Now — Rs. ${price}`}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
