import { DOCTORS } from "@/lib/data"
import { SectionBadge } from "@/components/section-badge"
import { SectionTitle } from "@/components/section-title"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Star } from "lucide-react"
import { slugify } from "@/lib/slug"
import BookAppointmentButton from "@/components/book-appointment-button"
import { doctorsData } from "@/lib/doctors"


export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Header Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionBadge>Our Medical Team</SectionBadge>
            <SectionTitle className="mt-4">Meet Our Expert Doctors</SectionTitle>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our team of experienced medical professionals is dedicated to providing exceptional healthcare services
              with compassion and expertise.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorsData.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={d.photo || "/placeholder.svg"}
                    alt={d.name}
                    className="w-full h-130 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{d.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{d.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{d.role}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{d.bio}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{d.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{d.experienceYears} experience</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/doctors/${d.slug}`}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                    >
                      View Profile
                    </Link>
                        <BookAppointmentButton
                  doctor={{ slug: d.slug, name: d.name, department: d.role }}
                  className="sm:w-auto"
                />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
