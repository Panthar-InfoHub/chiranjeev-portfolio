export type DoctorRecord = {
  slug: string
  name: string
  department: string
  experienceYears: number
  photo: string
  bio: string
  about : string
  role : string
  imgQuery : string
}

// NOTE: replace placeholders with your real data/images when ready.
// Keep photos as /placeholder.svg for now (as requested).
export const doctorsData: DoctorRecord[] = [
  {
    slug: "jitendra-kumar-pal",
    name: "Dr. Jitendra kumar pal",
    department: "Restorative Dentistry",
    experienceYears: 12,
    photo: "/doctor-portrait-1.png",
    bio: "Dr. Raquel Riley specializes in restorative dental care with a patient-centered approach. She focuses on accurate diagnosis and personalized treatment plans.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Anaesthesiology and Critical Care",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    slug: "ruby-gupta",
    name: "Dr. Ruby Gupta",
    department: "Pathologist",
    experienceYears: 10,
    photo: "/doctor-portrait-2.png",
    bio: "Dr. Allison Katrina is a cosmetic surgeon known for natural results and compassionate care. Her practice emphasizes safety, education, and long-term outcomes.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Pathologist",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/035/925/542/large_2x/ai-generated-a-woman-in-a-doctor-s-coat-and-glasses-photo.jpg",
  },
  {
    slug: "abhay-gupta",
    name: "Dr. Abhay Gupta",
    department: "Oncology",
    experienceYears: 14,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Belinda Walters provides oncology care with a multidisciplinary mindset. She collaborates closely with patients and families through every stage of treatment.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Cosmetic Surgeon",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    slug: "Stayendra-rajpoot",
    name: "Dr. Satyendra Rajpoot",
    department: "Laparoscopic & Laser Surgery",
    experienceYears: 18,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Belinda Walters provides oncology care with a multidisciplinary mindset. She collaborates closely with patients and families through every stage of treatment.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Laparoscopic & Laser Surgery",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },

  {
    slug: "deepak-singh",
    name: "Dr. Deepak Singh",
    department: "Neonatologist & Pediatrician",
    experienceYears: 18,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Belinda Walters provides oncology care with a multidisciplinary mindset. She collaborates closely with patients and families through every stage of treatment.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Neonatologist & Pediatrician",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  
  {
    slug: "sanjay-tripathi",
    name: "Dr. Sanjay Tripathi",
    department: "joint replacement surgeon , Traumatologist & arthoscopic surgeon",
    experienceYears: 18,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Belinda Walters provides oncology care with a multidisciplinary mindset. She collaborates closely with patients and families through every stage of treatment.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "joint replacement surgeon , Traumatologist & arthoscopic surgeon",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    slug: "apoorva-tripathi",
    name: "Dr. Apoorva Tripathi",
    department: "joint replacement surgeon , Traumatologist & arthoscopic surgeon",
    experienceYears: 18,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Belinda Walters provides oncology care with a multidisciplinary mindset. She collaborates closely with patients and families through every stage of treatment.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Radio Diagnosis",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/035/925/542/large_2x/ai-generated-a-woman-in-a-doctor-s-coat-and-glasses-photo.jpg",
  },
]
