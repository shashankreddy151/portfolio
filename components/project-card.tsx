"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
  featured?: boolean
  index: number
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
  featured = false,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1],
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1 + i * 0.05 + 0.3,
        duration: 0.3,
      },
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            variants={imageVariants}
            whileHover="hover"
          />
          {featured && (
            <motion.div
              className="absolute top-4 left-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            >
              <Badge className="bg-blue-600 text-white">Featured</Badge>
            </motion.div>
          )}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0"
            animate={isHovered ? { backgroundColor: "rgba(0,0,0,0.3)", opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link href={githubUrl} target="_blank">
                <Button variant="secondary" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={liveUrl} target="_blank">
                <Button size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 dark:text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
          >
            {description}
          </motion.p>
          <div className="flex flex-wrap gap-1 mb-4">
            {techStack.slice(0, 3).map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={techIndex}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {techStack.length > 3 && (
              <motion.div variants={badgeVariants} initial="hidden" animate="visible" custom={3}>
                <Badge variant="secondary" className="text-xs">
                  +{techStack.length - 3}
                </Badge>
              </motion.div>
            )}
          </div>
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
          >
            <Link href={githubUrl} target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            </Link>
            <Link href={liveUrl} target="_blank">
              <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
