"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function ExperiencePage() {
  const experiences = [
  {
    title: "Full Stack Software Developer with AI/ML",
    company: "Mayo Clinic",
    location: "Remote (Rochester, MN)",
    duration: "Feb 2024 - Present",
    type: "Full-time",
    description:
      "Driving development of healthcare apps and intelligent systems using AI/ML and cloud architecture, while ensuring data security and performance at scale.",
    achievements: [
      "Engineered patient data systems serving 10,000+ users using React and Node.js",
      "Integrated NLP models with AWS SageMaker for automated feedback classification with 92% accuracy",
      "Reduced manual triage time by 40% with deployed AI pipelines",
      "Improved API reliability to 99.9% uptime with Postman, Swagger, and Splunk"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis", "Hugging Face", "SageMaker"]
  },
  {
    title: "Teaching Assistant – Machine Learning & Data Science",
    company: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    duration: "May 2023 – Dec 2023",
    type: "Part-time",
    description:
      "Guided graduate students in core AI/ML concepts, hands-on assignments, and real-world datasets as part of course support and mentorship.",
    achievements: [
      "Led lab sessions and tutorials for courses like Machine Learning and Big Data Technologies",
      "Mentored 60+ students in data preprocessing, model training, and result evaluation"
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "Jupyter", "Google Colab"]
  },
  ]

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in software development and machine learning
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div
              className="absolute left-8 top-0 w-0.5 bg-blue-200 dark:bg-blue-800"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            <motion.div className="space-y-12" variants={timelineVariants} initial="hidden" animate="visible">
              {experiences.map((experience, index) => (
                <motion.div key={index} className="relative" variants={itemVariants}>
                  {/* Animated Timeline dot */}
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                  />

                  <motion.div className="ml-20" whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">
                              {experience.title}
                            </CardTitle>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                <span className="font-medium">{experience.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2">
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                              <Calendar className="w-4 h-4" />
                              <span>{experience.duration}</span>
                            </div>
                            <Badge variant={experience.type === "Full-time" ? "default" : "secondary"}>
                              {experience.type}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                              >
                                <span className="text-blue-600 mt-1.5 text-xs">●</span>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Summary Stats */}
          <div className="mt-20">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Career Highlights</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1.5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Companies Worked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Research Publication</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
