'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 }, // Start slightly below and faded out
  enter: { opacity: 1, x: 0, y: 0 }, // Fade in and move up to original position
  exit: { opacity: 0, x: 0, y: -20 }, // Fade out and move slightly up
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname} // Animate when pathname changes
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear', duration: 0.3 }} // Adjust duration/type as needed
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 