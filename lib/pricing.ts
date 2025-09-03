export type ConsultationType = "video" | "physical"

type DoctorPricing = {
  physical: number
  video: number
}

// Keys should match doctor slugs, e.g. from slugify(name)
const PRICING: Record<string, DoctorPricing> = {
  "jitendra-kumar-pal": { physical: 1, video: 2 },
  "ruby-gupta": { physical: 3, video: 4 },
  "abhay-gupta": { physical: 5, video: 6 },
  "Stayendra-rajpoot": { physical: 7, video: 8 },
  "deepak-singh": { physical: 9, video: 10 },
  "sanjay-tripathi": { physical: 11, video: 12 },
  "apoorva-tripathi": { physical: 13, video: 14 },
  "vashika-saxsena": { physical: 15, video: 16 },
  "rashi-rai": { physical: 17, video: 18 },
  
}

const DEFAULT_PRICING: DoctorPricing = { physical: 130, video: 90 }

export const TEST_BASE_PRICES: Record<string, number> = {
  "blood-work": 45,
  "x-ray": 120,
  "ct-scan": 350,
  "mri-scan": 800,
  ultrasound: 180,
  "pet-scan": 1200,
  "urine-test": 25,
  ecg: 85,
}

export function getConsultationPrice(doctorSlug: string | undefined, type: ConsultationType) {
  const p = (doctorSlug && PRICING[doctorSlug]) || DEFAULT_PRICING
  return type === "physical" ? p.physical : p.video
}
