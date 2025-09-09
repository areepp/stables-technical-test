'use client'

import { Reveal } from '@/components/reveal'
import { motion } from 'framer-motion'
import AtomAnimation from './atom-animation'
import { LoginForm } from './login-form'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE */}
      <div className="from-secondary to-primary relative hidden overflow-hidden bg-gradient-to-br lg:flex lg:w-1/2">
        <motion.div
          className="text-primary-foreground relative z-10 flex w-full flex-col justify-between p-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <div className="bg-accent flex h-8 w-8 items-center justify-center rounded-full">
              <span className="text-accent-foreground text-sm font-bold">S</span>
            </div>
            <span className="text-2xl font-bold">Stables</span>
          </motion.div>

          <Reveal delay={0.5}>
            <AtomAnimation />
          </Reveal>

          <div className="space-y-6">
            <div className="space-y-4">
              <motion.h1 variants={itemVariants} className="text-4xl leading-tight font-bold">
                Stable Value,
                <br />
                Unstoppable Growth
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-primary-foreground/80 max-w-md text-lg"
              >
                Your secure gateway to the world of stablecoins. Trade, save, and grow with
                confidence.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* BLURRY CIRCLES */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-white blur-lg"></div>
          <div className="absolute right-16 bottom-32 h-24 w-24 rounded-full bg-white blur-md"></div>
          <div className="absolute top-1/2 left-1/3 h-16 w-16 rounded-full bg-white blur-md"></div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <Reveal
        className="flex w-full items-center justify-center bg-gray-50 p-8 lg:w-1/2"
        delay={0.65}
      >
        <LoginForm />
      </Reveal>
    </div>
  )
}
