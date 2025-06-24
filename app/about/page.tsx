"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about creating intelligent solutions that make a difference
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-700 dark:text-gray-300">SR</span>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hello, I'm Shashank</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a Full Stack Developer and Machine Learning Engineer with 1.5 years of professional experience. I
                hold a Master's degree in Data Science and am passionate about building intelligent web applications
                that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My expertise spans across modern web technologies like React and Node.js, combined with advanced machine
                learning techniques using Python. I enjoy working on projects that bridge the gap between traditional
                web development and artificial intelligence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Master's in Data Science</h4>
                      <p className="text-gray-600 dark:text-gray-400">New Jersey Institute of Technology</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">2022 - 2023</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor's in Computer Science</h4>
                      <p className="text-gray-600 dark:text-gray-400">Jawaharlal Nehru Technological University Hyderabad </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">2017 - 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        ML
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Contributed to AI research on LSTMs at NJIT (NLP & predictive modeling)</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        Open Source
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Active Contributor</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        Academic
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">TA at NJIT, ML & Data Analytics</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        Master's
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Data Science, NJIT</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        NLP
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Deployed Hugging Face models on AWS</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Core Values & Approach
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Always exploring cutting-edge technologies to create innovative solutions
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quality</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Committed to delivering high-quality, scalable, and maintainable code
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Believe in the power of teamwork and knowledge sharing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
