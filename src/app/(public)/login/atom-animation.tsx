'use client'

import atomAnimation from '@/assets/lottie/atom-2.json'
import Lottie from 'lottie-react'

const AtomAnimation = () => {
  return <Lottie className="mx-auto w-2/3" animationData={atomAnimation} loop={true} />
}

export default AtomAnimation
