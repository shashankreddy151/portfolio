import { Card } from "@/components/ui/card"
import SkillCard from "@/components/skill-card"
import AnimatedSection from "@/components/animated-section"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 90 },
        { name: "Django", level: 75 },
        { name: "FastAPI", level: 80 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "AI/ML & Data Science",
      icon: "🤖",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "NLP", level: 85 },
        { name: "scikit-learn", level: 90 },
        { name: "TensorFlow", level: 75 },
        { name: "Pandas", level: 90 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Lambda", level: 80 },
        { name: "EC2", level: 75 },
        { name: "S3", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Jupyter", level: 85 },
        { name: "Linux", level: 75 },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <SkillCard
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                  index={index}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certifications & Learning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AWS Certified</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Solutions Architect</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ML Specialization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Stanford Online</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">React Developer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Meta Certification</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐍</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Python Expert</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Advanced Certification</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
