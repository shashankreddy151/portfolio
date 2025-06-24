"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

interface Skill {
  name: string
  level: number
}

interface SkillCardProps {
  title: string
  icon: string
  skills: Skill[]
  index: number
}

export default function SkillCard({ title, icon, skills, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1],
      }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <motion.div animate={isHovered ? { scale: 1.05 } : { scale: 1 }} transition={{ duration: 0.2 }}>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <motion.span
                className="text-2xl mr-3"
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.span>
              {title}
            </CardTitle>
          </CardHeader>
        </motion.div>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + skillIndex * 0.05,
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + skillIndex * 0.1 + 0.5,
                  }}
                >
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
