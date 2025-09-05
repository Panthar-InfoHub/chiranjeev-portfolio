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
  rating?: number
  location?: string 
  id?: string
}

// NOTE: replace placeholders with your real data/images when ready.
// Keep photos as /placeholder.svg for now (as requested).
export const doctorsData: DoctorRecord[] = [
  {
    id: "1",
    slug: "sanjay-tripathi",
    name: "Dr. Sanjay Tripathi",
    department: "Orthopaedics – Joint Replacement, Trauma & Arthroscopy",
    experienceYears: 35,
    photo: "/dr-sanjay-tripathi.jpg",
    bio: "Dr. Sanjay Tripathi is a highly experienced orthopaedic surgeon with over three decades of expertise in joint replacement, trauma care, arthroscopy, and sports injuries. He has performed a wide range of complex surgeries, with a special focus on hip and knee replacements, pelvic acetabulum surgeries, and minimally invasive arthroscopic procedures.",
    about : "Dr. Sanjay, an orthopaedic surgeon with over 35 years of experience, specializes in hip and knee joint replacements, trauma care, pelvic acetabulum surgery, and sports injury management. He completed his MS Orthopaedics at GR Medical College, Gwalior, and advanced fellowships in Germany and Switzerland. He has worked with leading institutes like Sancheti Institute, Pune, and Laud Clinic, Mumbai. Recognized for his excellence, he has received multiple awards, including for performing the maximum joint replacement surgeries under the Ayushman Bharat Yojana.",
    role: "Joint Replacement Surgeon, Traumatologist, and Arthroscopic Specialist",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    id: "2",
    slug: "nandita-tripathi",
    name: "Dr. Nandita Tripathi",
    department: "Pathologist",
    experienceYears: 10,
    photo: "/doctor-portrait-2.png",
    bio: "Dr. Allison Katrina is a cosmetic surgeon known for natural results and compassionate care. Her practice emphasizes safety, education, and long-term outcomes.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Pathologist",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/035/925/542/large_2x/ai-generated-a-woman-in-a-doctor-s-coat-and-glasses-photo.jpg",
  },
  {
    id: "3",
    slug: "Jitendra-pal",
    name: "Dr. Jitendra pal",
    department: "Oncology",
    experienceYears: 14,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Belinda Walters provides oncology care with a multidisciplinary mindset. She collaborates closely with patients and families through every stage of treatment.",
    about : "Dr. Gagandeep Singh is a leading oncologist with over 18 years of experience in cancer treatment and research. He is dedicated to providing personalized care and innovative therapies to his patients.",
    role: "Cosmetic Surgeon",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    id: "4",
    slug: "abhay-gupta",
    name: "Dr. Abhay Gupta",
    department: "General Medicine / Consultant Physician",
    experienceYears: 21,
    photo: "/dr-abhay-gupta.jpg",
    bio: "Dr. Abhay Gupta is a senior consultant physician with over two decades of experience in internal medicine. He has worked in leading hospitals in New Delhi and has actively participated as faculty in several prestigious medical conferences. He has also contributed extensively to medical research through numerous publications in IMA journals, including award-winning articles.",
    about : "Dr. Abhay Gupta, MD (Lugansk State Medical University, Ukraine), is a senior consultant physician with over 21 years of experience. He has worked at Sir Ganga Ram Hospital and Safdarjang Hospital in New Delhi and has been a faculty member at several national medical conferences including API, RSSDI, UPRSSDI, and IMA. He has published multiple research articles, received the Best IMA News Bulletin Award (2010), and is an active member of leading associations such as ACP, API, RSSDI, and the Indian Society of Cardiology.",
    role: "Consultant Physician specializing in diabetes, hypertension, and cardiovascular care.",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },

  {
    id: "5",
    slug: "deepak-singh",
    name: "Dr. Deepak Singh",
    department: "Pediatrics & Neonatology",
    experienceYears: 6,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Deepak Singh is a neonatologist and pediatrician with over six years of clinical and academic experience, including serving as Associate Professor of Pediatrics in a medical college. He is extensively trained in pediatric intensive care, neonatal echocardiography, cranial and lung ultrasonography, and advanced life support. As a trainer under the Indian Academy of Pediatrics, he contributes to programs in vaccinology, neonatal resuscitation, and diagnostic stewardship. He has attended numerous conferences and CMEs as a speaker and has published research papers in the fields of neonatology and pediatrics.",
    about : "Dr. Singh completed his MBBS and MD in Pediatrics and has pursued advanced training in critical care, neonatal imaging, and medical education. He is a certified Pediatric Fundamental Critical Care Support Provider and has been actively involved in training and academic programs of the IAP. His memberships include the Indian Academy of Pediatrics, National Neonatology Forum, and several specialty chapters of IAP, along with the Indian Medical Association. His key areas of interest are neonatology and pediatric critical care.",
    role: "Neonatologist & Pediatrician specializing in newborn and pediatric critical care.",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  
  {
    id: "6",
    slug: "jitendra-kumar-pal",
    name: "Dr. Jitendra Kumar Pal",
    department: "Anaesthesiology & Critical Care",
    experienceYears: 12,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Jitendra Kumar Pal is an anaesthesiologist and critical care specialist with over 12 years of experience. He has worked in reputed institutions including RML New Delhi, ESIC New Delhi, RMLIMS Lucknow, and Ramraja Superspeciality Hospital Orchha. He is a member of the Indian Society of Anaesthesiologists (ISA) and the Indian Medical Association (IMA), with expertise in managing intensive care and critical cases.",
    about : "Dr. Pal completed his MBBS and DA (Diploma in Anaesthesiology) and has dedicated his career to anaesthesia and critical care. With significant experience across premier medical institutes, he specializes in intensive care management, perioperative care, and advanced anaesthesia practices.",
    role: "Intensivist & ICU Specialist",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    id: "7",
    slug: "apoorva-tripathi",
    name: "Dr. Apoorva Tripathi",
    department: "Radiodiagnosis",
    experienceYears: 18,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Apoorva Tripathi is a radiologist with expertise in diagnostic imaging. She completed her MBBS from Swami Vivekanand Subharti Medical College, Meerut, and her MD in Radiodiagnosis from Jaipur National University Institute for Medical Sciences and Research Center. She is a member of the Indian Radiological and Imaging Association (IRIA) and is skilled in modern imaging techniques used for accurate diagnosis and patient care.",
    about : "Dr. Tripathi has a strong foundation in radiology, with training in advanced imaging methods. Her focus is on delivering precise diagnostic support through modalities like X-ray, ultrasound, CT, and MRI, assisting in effective treatment planning.",
    role: "Radiologist (Diagnostic Imaging Specialist)",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/035/925/542/large_2x/ai-generated-a-woman-in-a-doctor-s-coat-and-glasses-photo.jpg",
  },
  {
    id: "8",
    slug: "ruby-gupta",
    name: "Dr. Ruby Gupta",
    department: "Pathology",
    experienceYears: 22,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Ruby Gupta is a senior pathologist with over 22 years of experience in diagnostic pathology. She completed her MBBS from Maharshi Dayanand University, Rohtak, and her MD in Pathology from Rajiv Gandhi University of Health Sciences, Karnataka. She has extensive expertise in laboratory medicine, histopathology, and diagnostic reporting, contributing significantly to patient care and medical accuracy.",
    about : "Dr. Ruby Gupta has a strong academic and clinical background in pathology, with decades of experience in laboratory diagnostics and reporting. Her commitment lies in providing accurate and timely pathological insights that aid in effective treatment planning.",
    role: "Pathologist",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/035/925/542/large_2x/ai-generated-a-woman-in-a-doctor-s-coat-and-glasses-photo.jpg",
  },
  {
    id: "9",
    slug: "satendra-rajpoot",
    name: "Dr. Satyendra Rajput",
    department: "Laparoscopic & Laser Surgery",
    experienceYears: 16,
    photo: "/doctor-portrait-3.png",
    bio: "Dr. Satyendra Rajput is a laparoscopic and laser surgeon with over 16 years of surgical experience. He holds advanced fellowships including FMAS and FIAGES, and is an active member of leading surgical associations such as AMASI, IAGES, and SELSI. He specializes in minimally invasive laparoscopic and laser procedures, delivering safe and effective surgical care.",
    about : "Dr. Rajput completed his MBBS and MS in Surgery and went on to gain expertise in advanced laparoscopic and laser techniques. Through continuous training and association with reputed surgical societies, he has established himself as a skilled surgeon focused on minimally invasive solutions with quicker recovery for patients.",
    role: "Laparoscopic & Laser Surgeon",
    imgQuery: "https://static.vecteezy.com/system/resources/previews/035/925/542/large_2x/ai-generated-a-woman-in-a-doctor-s-coat-and-glasses-photo.jpg",
  },
]
