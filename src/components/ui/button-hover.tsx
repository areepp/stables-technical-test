import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Button, TButtonProps } from './button'

type THoverButtonProps = TButtonProps & {
  hoverContent: React.ReactNode
}

function HoverButton({
  children,
  hoverContent,
  onMouseEnter,
  onMouseLeave,
  ...props
}: THoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true)
    onMouseEnter?.(e)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(false)
    onMouseLeave?.(e)
  }

  return (
    <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={isHovered ? 'hover' : 'default'}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center justify-center gap-2"
        >
          {isHovered ? hoverContent : children}
        </motion.div>
      </AnimatePresence>
    </Button>
  )
}

export { HoverButton }
