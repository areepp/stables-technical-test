'use client'

import { motion, type Variants } from 'framer-motion'
import React from 'react'

type RevealProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

const revealVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export function Reveal({ children, delay = 0, duration = 0.7, className }: Readonly<RevealProps>) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      animate="show"
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
