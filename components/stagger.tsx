"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Stagger({
  children,
  className,
  delayChildren = 0.08,
  stagger = 0.06,
}: {
  children: ReactNode
  className?: string
  delayChildren?: number
  stagger?: number
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { delayChildren, staggerChildren: stagger } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
