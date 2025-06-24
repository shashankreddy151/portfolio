import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ExternalLink, Eye } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Resume</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download or view my complete professional resume
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Download PDF</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a copy of my resume in PDF format for offline viewing or printing.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">View Online</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                View my resume directly in your browser with interactive elements.
              </p>
              <Button
                variant="outline"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Online
              </Button>
            </Card>
          </div>

{/* Resume Preview */}
<Card className="overflow-hidden">
  <CardContent className="p-0">
    <div className="bg-white dark:bg-gray-800 p-8 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Shashank Reddy Kallem</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            AI-Focused Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>📧 kallemshashank1223@gmail.com</span>
            <span>📱 (201) 626-8995</span>
            <span>📍 Leawood, KS (Remote)</span>
            <span>💼 LinkedIn: /in/shashank-reddy-kallem/</span>
            <span>🌐 Portfolio: shashankreddy151.github.io/personal-portfolio</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Full Stack Developer and AI/ML Engineer with 1.5+ years of experience building scalable web apps and intelligent systems. Master’s in Data Science with strong proficiency in React, Node.js, Python, and AWS. Proven ability to integrate AI into full-stack projects, lead cross-functional teams, and deliver impactful healthcare and enterprise solutions.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="space-y-6">
            {/* Mayo Clinic */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    AI-Focused Software Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Mayo Clinic, Remote (Rochester, MN)</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Feb 2024 – Present</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Deployed NLP models on AWS SageMaker for clinical feedback classification with 92% accuracy</li>
                <li>Led full-stack development of HIPAA-compliant healthcare system serving 10K+ patients</li>
                <li>Enhanced system uptime to 99.9% through monitoring and caching optimizations</li>
              </ul>
            </div>

            {/* TA */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Teaching Assistant – Machine Learning & Data Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">New Jersey Institute of Technology</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">May 2023 – Dec 2023</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Assisted in teaching graduate-level ML courses, including labs and office hours</li>
                <li>Mentored 60+ students on Python, data preprocessing, and model building</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Master of Science in Data Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">New Jersey Institute of Technology</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">2022 – 2023</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                React, Next.js, TypeScript, JavaScript, HTML/CSS, Tailwind CSS
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Express.js, Django, FastAPI, Python, RESTful APIs
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI/ML:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Machine Learning, NLP, scikit-learn, TensorFlow, Hugging Face, Pandas
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud & DevOps:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                AWS (S3, EC2, Lambda), Docker, CI/CD, GitHub Actions
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Development:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Android Studio, Flutter, Swift (iOS)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>


          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Last updated: December 2024</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Full Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
