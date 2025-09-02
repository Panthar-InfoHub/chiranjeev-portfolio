"use client"

import { useState, useEffect } from "react"

interface PreloaderProps {
  onComplete?: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            onComplete?.()
          }, 800)
          return 100
        }
        return prev + Math.random() * 4 + 1
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-amber-50 to-orange-100">
      <div className="text-center relative">
        {/* Medical Cross with Pulse Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#8b5e34] to-[#d4a373] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
          </div>
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-24 h-24 mx-auto border-4 border-transparent border-t-[#8b5e34] rounded-full animate-spin"></div>
        </div>

        {/* Hospital Branding */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#8b5e34] mb-2 tracking-tight">
            Chiranjeev Multi-Speciality Hospital
          </h1>
          <p className="text-[#d4a373] text-lg font-medium">Excellence in Healthcare</p>
          <div className="flex items-center justify-center mt-3">
            <div className="h-1 w-16 bg-gradient-to-r from-[#8b5e34] to-[#d4a373] rounded-full"></div>
          </div>
        </div>

        {/* Progress Display */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-[#8b5e34] mb-2 tabular-nums">{Math.round(progress)}%</div>
          <p className="text-[#8b5e34]/70 text-lg">Preparing your healthcare experience...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-96 max-w-sm mx-auto mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#8b5e34] to-[#d4a373] transition-all duration-300 ease-out rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Medical Heartbeat Line */}
        <div className="flex items-center justify-center">
          <div className="w-80 h-12 relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 320 48" fill="none">
              <path
                d="M0 24 L80 24 L88 12 L96 36 L104 24 L120 24 L128 18 L136 30 L144 24 L160 24 L168 20 L176 28 L184 24 L320 24"
                stroke="#8b5e34"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                style={{
                  strokeDasharray: "6 6",
                  animation: "heartbeat 1.5s ease-in-out infinite",
                }}
              />
            </svg>
          </div>
        </div>

        {/* Medical Icons Animation */}
        <div className="absolute -top-20 -left-20 opacity-10">
          <svg className="w-16 h-16 text-[#8b5e34] animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 8h2v8H4V8zm3 0h2v8H7V8zm3 0h2v8h-2V8z" />
          </svg>
        </div>
        <div className="absolute -top-16 -right-16 opacity-10">
          <svg className="w-12 h-12 text-[#d4a373] animate-bounce delay-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { 
            opacity: 0.7; 
            transform: scaleY(1);
          }
          50% { 
            opacity: 1; 
            transform: scaleY(1.1);
          }
        }
      `}</style>
    </div>
  )
}
