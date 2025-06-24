import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import AnimatedSection from "@/components/animated-section"

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description:
        "Intelligent conversational AI system built with React and Node.js, integrated with Dialogflow for natural language processing. Features real-time messaging, context awareness, and seamless user experience.",
      image: "https://assets.everspringpartners.com/dims4/default/769df7a/2147483647/strip/true/crop/1588x500+0+0/resize/800x252!/format/jpg/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fd6%2Fe4%2Faea7ceab448ab6ccfe774e7d5e47%2Fscu-msba-blog-2023-whatisachatbot-headerimage-v1.jpg",
      techStack: ["React", "Node.js", "Dialogflow", "MongoDB", "AWS Lambda", "Socket.io"],
      githubUrl: "https://github.com/shashank/ai-chatbot",
      liveUrl: "https://ai-chatbot-demo.vercel.app",
      featured: true,
    },
    {
      title: "Patient Data Management System",
      description:
        "Comprehensive healthcare management platform for Mayo Clinic. Streamlines patient data handling, appointment scheduling, and medical record management with robust security and HIPAA compliance.",
      image: "https://kms-healthcare.com/wp-content/uploads/2024/06/Healthcare-Data-Management-KMS-3.webp",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis"],
      githubUrl: "https://github.com/shashank/patient-management",
      liveUrl: "https://patient-system.mayoclinic.org",
      featured: true,
    },
    {
      title: "Twitter Sentiment Analysis",
      description:
        "Advanced NLP project analyzing Twitter sentiment using machine learning. Implements scikit-learn algorithms for real-time sentiment classification with interactive data visualizations.",
      image: "https://t3.ftcdn.net/jpg/08/74/66/96/360_F_874669696_xLXhO9r540XUwlcrrD9irYkbBBsVUqUH.jpg",
      techStack: ["Python", "scikit-learn", "NLTK", "Pandas", "Flask", "D3.js"],
      githubUrl: "https://github.com/shashankreddy151/Sentiment-Analysis-on-Twitter-Airline-Sentiment-Dataset",
      liveUrl: "https://sentiment-analyzer.herokuapp.com",
      featured: true,
    },
    {
      title: "Feelody 🎵",
      description:
        "Feelody is a mood-based music player that curates songs to match your emotions. Select a mood, feel the vibe, and let the music flow! Personalized musical journeys, Audius streaming, Last.fm metadata, favorites, responsive UI, and more.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      techStack: ["React", "Audius API", "Last.fm API", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com/shashank/feelody",
      liveUrl: "https://feelody.netlify.app/",
      featured: false,
    },
    {
      title: "Weather Prediction ML Model",
      description:
        "Machine learning model for weather forecasting using historical data and multiple algorithms. Features model comparison, accuracy metrics, and interactive predictions.",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
      techStack: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
      githubUrl: "https://github.com/shashank/weather-prediction",
      liveUrl: "https://weather-ml.streamlit.app",
      featured: false,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface for project organization.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      techStack: ["React", "Firebase", "Material-UI", "Node.js", "Express", "Socket.io"],
      githubUrl: "https://github.com/shashank/task-manager",
      liveUrl: "https://taskmanager-app.netlify.app",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my best work in full-stack development and machine learning
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">🌟 Featured Work</h2>
            <AnimatedSection>
              <div className="grid lg:grid-cols-1 gap-12">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    techStack={project.techStack}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">🚀 Other Projects</h2>
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    techStack={project.techStack}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in collaborating?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get In Touch
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
