export type ConsultationType = "video" | "physical"

type DoctorPricing = {
  physical: number
  video: number
}

// Keys should match doctor slugs, e.g. from slugify(name)
const PRICING: Record<string, DoctorPricing> = {
  "jitendra-kumar-pal": { physical: 500, video: 500 },
  "ruby-gupta": { physical: 500, video: 500 },
  "abhay-gupta": { physical: 500, video: 500 },
  "Stayendra-rajpoot": { physical: 500, video: 500 },
  "deepak-singh": { physical: 500, video: 500 },
  "sanjay-tripathi": { physical: 500, video: 500 },
  "apoorva-tripathi": { physical: 500, video: 500 },
  "vashika-saxsena": { physical: 500, video: 500 },
  "rashi-rai": { physical: 500, video: 500 },
  
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
