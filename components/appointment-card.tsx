"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

export default function AppointmentCard() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <motion.div
        className="rounded-2xl bg-amber-800 p-6 text-white shadow md:p-10"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
              Appointment Now
            </span>
            <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Appointment for free online consultation.
            </h3>
          </div>

          <form
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            role="form"
            aria-label="Book appointment form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input id="name" placeholder="John Doe" className="bg-white text-zinc-900" />
            </div>
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input id="email" type="email" placeholder="you@example.com" className="bg-white text-zinc-900" />
            </div>
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input id="phone" placeholder="+1 555 555 5555" className="bg-white text-zinc-900" />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Age</Label>
              <Select>
                <SelectTrigger className="bg-white text-zinc-900">
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-25">18-25</SelectItem>
                  <SelectItem value="26-40">26-40</SelectItem>
                  <SelectItem value="41-60">41-60</SelectItem>
                  <SelectItem value="60+">60+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Gender</Label>
              <Select>
                <SelectTrigger className="bg-white text-zinc-900">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-1">
              <Label className="text-white">Choose Department</Label>
              <Select>
                <SelectTrigger className="bg-white text-zinc-900">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="urology">Urology</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="dentistry">Dentistry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-3">
              <Button className="w-full bg-white text-amber-800 hover:bg-white/90">Book Appointment</Button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
