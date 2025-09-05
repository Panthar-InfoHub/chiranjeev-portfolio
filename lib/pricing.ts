export type ConsultationType = "video" | "physical"

const BASE_CONSULTATION_FEE = 500
const EMERGENCY_CONSULTATION_FEE = 800

// Keys should match doctor slugs, e.g. from slugify(name)
const PRICING: Record<string, { physical: number; video: number }> = {
    "jitendra-kumar-pal": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "ruby-gupta": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "abhay-gupta": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "Stayendra-rajpoot": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "deepak-singh": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "sanjay-tripathi": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "apoorva-tripathi": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "vashika-saxsena": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  "rashi-rai": { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE },
  
}
const DEFAULT_PRICING = { physical: BASE_CONSULTATION_FEE, video: BASE_CONSULTATION_FEE }

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

export function getConsultationPrice(
  doctorSlug: string | undefined,
  type: ConsultationType,
  isEmergency = false,
  selectedDate?: string,
) {
  // Check if selected date is Sunday
  const isSunday = selectedDate ? new Date(selectedDate).getDay() === 0 : false

  // Return emergency fee if it's emergency or Sunday
  if (isEmergency || isSunday) {
    return EMERGENCY_CONSULTATION_FEE
  }

  // Return base fee for all consultations (video and physical are same price)
  return BASE_CONSULTATION_FEE
}

