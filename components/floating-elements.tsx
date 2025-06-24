"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const floatingVariants2 = {
    animate: {
      y: [20, -20, 20],
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 1,
      },
    },
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-20"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20"
        style={{ animationDelay: "3s" }}
      />
    </div>
  )
}
