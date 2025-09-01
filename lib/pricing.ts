export type ConsultationType = "video" | "physical"

type DoctorPricing = {
  physical: number
  video: number
}

// Keys should match doctor slugs, e.g. from slugify(name)
const PRICING: Record<string, DoctorPricing> = {
  "dr-raquel-riley": { physical: 120, video: 85 },
  "dr-allison-katrina": { physical: 140, video: 95 },
  "dr-belinda-walters": { physical: 160, video: 110 },
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
