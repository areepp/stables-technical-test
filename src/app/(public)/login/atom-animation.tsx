'use client'

import atomAnimation from '@/assets/lottie/atom-2.json'
import Lottie from 'lottie-react'

const AtomAnimation = () => {
  return (
    <Lottie
      className="3xl:max-w-none mx-auto w-2/3 max-w-[350px]"
      animationData={atomAnimation}
      loop={true}
    />
  )
}

export default AtomAnimation
