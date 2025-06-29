"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BarChart3, Scale, GraduationCap, ExternalLink, Code, Database, Brain } from "lucide-react"

const projects = [
  {
    id: "smart-city",
    icon: BarChart3,
    title: "Smart City Data Dashboard",
    package: "Data Science",
    description:
      "Build an interactive dashboard that visualizes city data including traffic patterns, energy consumption, and population demographics. Perfect for showcasing data analysis and visualization skills.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "SQL"],
    features: [
      "Real-time data visualization",
      "Interactive filtering and sorting",
      "Predictive analytics for city planning",
      "Mobile-responsive design",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    id: "legalease-ai",
    icon: Scale,
    title: "LegalEase AI",
    subtitle: "AI Legal Assistant",
    package: "Artificial Intelligence",
    description:
      "Develop an AI-powered legal assistant that can answer legal questions, draft documents, and provide legal guidance. Demonstrates advanced NLP and AI capabilities.",
    technologies: ["Python", "OpenAI API", "LangChain", "FastAPI", "React"],
    features: [
      "Natural language legal queries",
      "Document generation and analysis",
      "Legal precedent search",
      "Multi-language support",
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
  },
  {
    id: "edugenie",
    icon: GraduationCap,
    title: "EduGenie",
    subtitle: "AI-Powered Academic Tutor",
    package: "Premium Bundle",
    description:
      "Create an intelligent tutoring system for high school curriculum Q&A. Combines AI, education, and business strategy for a complete learning solution.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
    features: [
      "Personalized learning paths",
      "Interactive problem solving",
      "Progress tracking and analytics",
      "Gamified learning experience",
    ],
    color: "from-emerald-500 to-emerald-600",
    bgColor: "from-emerald-50 to-emerald-100",
    premium: true,
  },
]

export function CapstoneSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio Projects
            </span>{" "}
            That Impress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each program culminates in a capstone project that demonstrates your skills and becomes a centerpiece of
            your portfolio
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              <div className="flex-1">
                <div className={`bg-gradient-to-br ${project.bgColor} rounded-3xl p-8 relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-600 mb-2">{project.package} Package</div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    {project.subtitle && <p className="text-lg text-gray-700 font-medium">{project.subtitle}</p>}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                        <span className="text-sm font-medium text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Code className="w-5 h-5 text-gray-600" />
                      <Database className="w-5 h-5 text-gray-600" />
                      <Brain className="w-5 h-5 text-gray-600" />
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="max-w-lg">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300`}
                  >
                    Learn More About This Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
