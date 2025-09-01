export type DoctorRecord = {
  slug: string
  name: string
  department: string
  experienceYears: number
  photo: string
  bio: string
}

// NOTE: replace placeholders with your real data/images when ready.
// Keep photos as /placeholder.svg for now (as requested).
export const doctorsData: DoctorRecord[] = [
  {
    slug: "raquel-riley",
    name: "Dr. Raquel Riley",
    department: "Restorative Dentistry",
    experienceYears: 12,
    photo: "/doctor-portrait-1.png",
    bio: "Dr. Raquel Riley specializes in restorative dental care with a patient-centered approach. She focuses on accurate diagnosis and personalized treatment plans.",
  },
  {
    slug: "allison-katrina",
    name: "Dr. Allison Katrina",
    department: "Cosmetic Surgery",
    experienceYears: 10,
    photo: "/doctor-portrait-2.png",
    bio: "Dr. Allison Katrina is a cosmetic surgeon known for natural results and compassionate care. Her practice emphasizes safety, education, and long-term outcomes.",
  },
  {
    slug: "belinda-walters",
    name: "Dr. Belinda Walters",
    department: "Oncology",
    experienceYears: 14,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Belinda Walters provides oncology care with a multidisciplinary mindset. She collaborates closely with patients and families through every stage of treatment.",
  },
]
