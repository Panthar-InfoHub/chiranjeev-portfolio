"use client"

import { useState, useEffect } from "react"

interface PreloaderProps {
  onComplete?: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsExiting(true)
          setTimeout(() => {
            setIsVisible(false)
            onComplete?.()
          }, 1000) // Increased time for smoother exit animation
          return 100
        }

        let increment
        if (prev < 80) {
          increment = Math.random() * 3 + 1 // Normal speed
        } else if (prev < 95) {
          increment = Math.random() * 1.5 + 0.5 // Slower
        } else {
          increment = Math.random() * 0.8 + 0.2 // Very slow near end
        }

        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#8b5e34] transition-all duration-1000 ease-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={`mb-16 transition-all duration-500 ${isExiting ? "-translate-y-4" : ""}`}>
        <p className="text-white text-sm font-medium tracking-[0.2em] uppercase">LOADING...</p>
      </div>

      <div
        className={`text-white text-[12rem] sm:text-[16rem] font-black leading-none tracking-tight transition-all duration-700 delay-100 ${
          isExiting ? "-translate-y-12" : ""
        }`}
      >
        {String(Math.round(progress)).padStart(3, "0")}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
