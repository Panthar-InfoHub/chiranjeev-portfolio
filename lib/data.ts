export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#why" },
  { label: "Department", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#footer" },
]

export const HERO = {
  badge: "24/7 Emergency Service",
  title: "Doctor always ready for service.",
  bullets: [
    "Prescriptions & treatment plans.",
    "Always available for emergency service.",
    "Low visit and even less with insurance.",
  ],
  cta: "Explore More",
  // placeholder image description to swap later
  imgAlt: "Doctor portrait placeholder",
  imgQuery: "smiling woman doctor in clinic portrait",
}

export const FEATURES = [
  "Emergency Cases",
  "Modern Clinic",
  "24/7 Support",
  "Easy Online Appointment",
  "Expert Doctor’s",
  "100% Secure",
]

export const TESTS = [
  { name: "Blood Work", slug: "blood-work", iconQuery: "blood test vial medical icon" },
  { name: "X-Ray", slug: "x-ray", iconQuery: "x-ray chest scan medical icon" },
  { name: "CT Scan", slug: "ct-scan", iconQuery: "ct scan machine medical icon" },
  { name: "MRI Scan", slug: "mri-scan", iconQuery: "mri scanner medical equipment icon" },
  { name: "Ultrasound", slug: "ultrasound", iconQuery: "ultrasound probe medical icon" },
  { name: "PET Scan", slug: "pet-scan", iconQuery: "pet scan medical imaging icon" },
  { name: "Urine Test", slug: "urine-test", iconQuery: "urine sample test medical icon" },
  { name: "ECG", slug: "ecg", iconQuery: "ecg heart monitor medical icon" },
]

export const DOCTORS = [
  {
    name: "Dr. Raquel Riley",
    role: "Restorative Dentist",
    imgQuery: "portrait dentist headshot neutral background",
  },
  {
    name: "Dr. Allison Katrina",
    role: "Cosmetic Surgeon",
    imgQuery: "portrait surgeon headshot neutral background",
  },
  {
    name: "Dr. Belinda Walters",
    role: "Cancer Specialist",
    imgQuery: "portrait oncologist headshot neutral background",
  },
]

export type Testimonial = {
  slug: string
  title: string
  author: string
  hospital: string
  location: string
  date: string
  summary: string
  image?: string // optional; we default to a placeholder if missing
}

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "recovery-from-stroke",
    title: "Recovery From Stroke",
    author: "Dr. Manish Gupta",
    hospital: "Max Super Speciality Hospital",
    location: "Sector-128, Noida",
    date: "Aug 22, 2025",
    summary:
      "Patient made steady neurological improvements after timely thrombolysis and rehabilitation. Early intervention and consistent follow-up were key.",
    // image is optional; component will use a placeholder if missing
  },
  {
    slug: "knee-replacement-success",
    title: "Back on Feet After Knee Replacement",
    author: "Dr. Priya Sethi",
    hospital: "City Ortho Institute",
    location: "Mumbai",
    date: "Jun 10, 2025",
    summary:
      "Minimally invasive procedure with rapid post-op mobilization. The patient resumed daily walks within three weeks.",
  },
  {
    slug: "cardiac-bypass-recovery",
    title: "Cardiac Bypass Recovery Journey",
    author: "Dr. Arvind Nanda",
    hospital: "Heart Care Centre",
    location: "Delhi",
    date: "May 02, 2025",
    summary:
      "Successful CABG with excellent graft flow. Lifestyle counseling and monitored cardio rehab supported a strong recovery.",
  },
  {
    slug: "spine-surgery-rehab",
    title: "Pain-Free After Spine Surgery",
    author: "Dr. Kavya Rao",
    hospital: "Spine & Neuro Clinic",
    location: "Bengaluru",
    date: "Apr 18, 2025",
    summary:
      "Decompression and stabilization eliminated radicular pain. Physiotherapy improved core strength and posture.",
  },
  {
    slug: "oncology-remission",
    title: "Oncology: Path to Remission",
    author: "Dr. Meera Khanna",
    hospital: "OncoCare Hospital",
    location: "Chennai",
    date: "Mar 05, 2025",
    summary:
      "Personalized chemo protocol with supportive care minimized side effects. PET-CT confirmed remission at 6 months.",
  },
  {
    slug: "hip-replacement-comeback",
    title: "Hip Replacement Comeback",
    author: "Dr. Rahul Menon",
    hospital: "Advanced Joint Centre",
    location: "Pune",
    date: "Jan 22, 2025",
    summary:
      "Uncemented implant with precise alignment. Gradual strengthening program returned full mobility for daily life.",
  },
]

export const TESTIMONIAL = {
  stat: "6,000+",
  caption: "Patient’s all around the world.",
  quote:
    "The staff was attentive and professional, ensuring a comfortable experience. The doctor's expertise and compassion were evident. The facility was clean and well-equipped.",
  author: "Allan Roberson",
  role: "Medicine Doctor",
  imgQuery: "patient portrait clean background circular crop",
}

export const POSTS = [
  {
    tag: "Covid-19",
    title: "What Mutations of SARS-CoV-2 are Causing Concern?",
    author: "Dr. Samantha Cole", // add author for blog byline
    excerpt: "The idea that your mental state is interconnected with your physical state is a fundamental concept",
    date: "20 Jul 2023",
    imgQuery: "medical team discussing covid in hospital",
  },
  {
    tag: "Dental",
    title: "How Do Your Emotions Affect Your Physical Health?",
    author: "Dr. Mark Denton", // add author for blog byline
    excerpt: "The idea that your mental state is interconnected with your physical state is a fundamental concept",
    date: "20 Jul 2023",
    imgQuery: "dentist examining patient friendly atmosphere",
  },
  {
    tag: "Dermatologist",
    title: "Using Flow Cytometry in Protein Engineering Detection",
    author: "Team Dermatology", // add author for blog byline
    excerpt: "The idea that your mental state is interconnected with your physical state is a fundamental concept",
    date: "20 Jul 2023",
    imgQuery: "group of doctors discussing lab results",
  },
]

export const FOOTER = {
  brand: "Dotus",
  blurb:
    "If you're looking for a medical theme there are several popular and important medical themes that you could consider. Dotus is number #1 theme.",
  links: [
    { label: "About Us", href: "#" },
    { label: "Services", href: "#why" },
    { label: "Department", href: "#departments" },
    { label: "Contact", href: "#footer" },
    { label: "Latest News", href: "#blog" },
  ],
  address: ["7 Green Lake Street", "Crawfordsville, IN 47933", "+1 800 123 456 789", "contact@dotus.com"],
}

export const NEWS_UPDATES = [
  {
    id: 1,
    title: "New Cardiac Surgery Wing Opens",
    date: "Dec 15, 2024",
    category: "Infrastructure",
    summary: "State-of-the-art cardiac surgery facilities now available with advanced robotic surgery capabilities.",
    image: "modern hospital cardiac wing exterior",
  },
  {
    id: 2,
    title: "24/7 Emergency Services Expanded",
    date: "Dec 10, 2024",
    category: "Services",
    summary: "Enhanced emergency response team with additional ambulances and specialized trauma care units.",
    image: "emergency ambulance hospital entrance",
  },
  {
    id: 3,
    title: "Telemedicine Platform Launch",
    date: "Dec 5, 2024",
    category: "Technology",
    summary:
      "New digital consultation platform allows patients to connect with doctors remotely for non-emergency care.",
    image: "doctor video call telemedicine consultation",
  },
  {
    id: 4,
    title: "Cancer Treatment Center Accreditation",
    date: "Nov 28, 2024",
    category: "Achievement",
    summary: "Our oncology department receives national accreditation for excellence in cancer care and research.",
    image: "medical team cancer treatment facility",
  },
]
