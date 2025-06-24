"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "@/components/animated-section"
import AnimatedCounter from "@/components/animated-counter"
import FloatingElements from "@/components/floating-elements"
import TypewriterText from "@/components/typewriter-text"

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  }

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <FloatingElements />

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Shashank Reddy Kallem
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-16 flex items-center justify-center"
            >
              <TypewriterText
                texts={[
                  "Building Intelligent Web Applications",
                  "Full Stack Developer & ML Engineer",
                  "Creating AI-Powered Solutions",
                  "Transforming Ideas into Reality",
                ]}
                className="font-medium"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Full Stack Developer & Machine Learning Engineer with 1.5+ years of experience crafting innovative
              solutions that bridge web development and artificial intelligence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/projects">
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    View My Projects
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedCounter from={0} to={1} suffix="+" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedCounter from={0} to={10} suffix="+" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedCounter from={0} to={5} suffix="+" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">MS</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Science</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={scrollIndicatorVariants}
          animate="animate"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
          <ChevronDown className="w-4 h-4 mx-auto mt-2 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "About Me",
                description: "Learn about my journey, education, and passion for technology.",
                href: "/about",
              },
              {
                title: "Skills",
                description: "Explore my technical expertise across various domains.",
                href: "/skills",
              },
              {
                title: "Experience",
                description: "Discover my professional journey and achievements.",
                href: "/experience",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link href={item.href} className="group block">
                  <motion.div
                    className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group-hover:border-blue-500 h-full"
                    whileHover={{ borderColor: "#3b82f6" }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    <motion.div
                      className="mt-4 text-blue-600 dark:text-blue-400 font-medium"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn more →
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
