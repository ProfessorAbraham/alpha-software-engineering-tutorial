"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Brain, Crown, Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "data-science",
    icon: Database,
    title: "Data Science Package",
    subtitle: "From Beginner to Professional",
    duration: "8 weeks + certification",
    level: "Beginner to Advanced",
    students: "150+ enrolled",
    rating: 4.9,
    price: {
      standard: 1499.99,
      mentorship: 2499.99,
    },
    description:
      "Master data analysis, visualization, and machine learning with Python. Build real-world projects that showcase your skills to employers.",
    highlights: [
      "Python programming mastery",
      "Data analysis with Pandas & NumPy",
      "Machine learning fundamentals",
      "Data visualization techniques",
      "Smart City Dashboard project",
      "Industry-recognized certificate",
    ],
    curriculum: [
      {
        week: "Week 1-2",
        title: "Python Fundamentals",
        topics: ["Python basics", "Data structures", "Control flow", "Functions and modules"],
      },
      {
        week: "Week 3-4",
        title: "Data Analysis",
        topics: ["Pandas library", "NumPy arrays", "Data cleaning", "Exploratory data analysis"],
      },
      {
        week: "Week 5-6",
        title: "Data Visualization",
        topics: ["Matplotlib", "Seaborn", "Plotly", "Interactive dashboards"],
      },
      {
        week: "Week 7-8",
        title: "Machine Learning",
        topics: ["Scikit-learn", "Supervised learning", "Model evaluation", "Capstone project"],
      },
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    id: "artificial-intelligence",
    icon: Brain,
    title: "Artificial Intelligence Package",
    subtitle: "Build Intelligent Systems",
    duration: "8 weeks + certification",
    level: "Beginner to Advanced",
    students: "120+ enrolled",
    rating: 4.8,
    price: {
      standard: 1799.99,
      mentorship: 2799.99,
    },
    description:
      "Create AI applications that solve real-world problems. Learn deep learning, NLP, and computer vision with hands-on projects.",
    highlights: [
      "Deep learning with TensorFlow",
      "Natural Language Processing",
      "Computer Vision fundamentals",
      "AI model deployment",
      "LegalEase AI project",
      "Industry-recognized certificate",
    ],
    curriculum: [
      {
        week: "Week 1-2",
        title: "AI Fundamentals",
        topics: ["Introduction to AI", "Python for AI", "Neural networks basics", "TensorFlow setup"],
      },
      {
        week: "Week 3-4",
        title: "Deep Learning",
        topics: ["Neural networks", "CNNs", "RNNs", "Model training"],
      },
      {
        week: "Week 5-6",
        title: "NLP & Computer Vision",
        topics: ["Text processing", "Sentiment analysis", "Image recognition", "Object detection"],
      },
      {
        week: "Week 7-8",
        title: "AI Applications",
        topics: ["Model deployment", "API development", "LegalEase AI project", "Production systems"],
      },
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    popular: true,
  },
  {
    id: "premium-bundle",
    icon: Crown,
    title: "Alpha Premium Bundle",
    subtitle: "Complete Career Transformation",
    duration: "10 weeks + certification",
    level: "Beginner to Advanced",
    students: "80+ enrolled",
    rating: 5.0,
    price: {
      standard: 2199.99,
      mentorship: 3199.99,
    },
    description:
      "The ultimate package combining Data Science, AI, and business skills. Learn how to monetize your technical expertise.",
    highlights: [
      "Complete DS + AI curriculum",
      "Business monetization course",
      "Advanced project portfolio",
      "EduGenie AI Tutor project",
      "Premium certificate bundle",
      "Priority job placement support",
    ],
    curriculum: [
      {
        week: "Week 1-3",
        title: "Data Science Mastery",
        topics: ["Python", "Data analysis", "Machine learning", "Visualization"],
      },
      {
        week: "Week 4-6",
        title: "AI Development",
        topics: ["Deep learning", "NLP", "Computer vision", "Model deployment"],
      },
      {
        week: "Week 7-8",
        title: "Business Skills",
        topics: ["Freelancing", "Client acquisition", "Pricing strategies", "Portfolio building"],
      },
      {
        week: "Week 9-10",
        title: "Capstone Project",
        topics: ["EduGenie development", "Full-stack implementation", "Business plan", "Presentation"],
      },
    ],
    color: "from-emerald-500 to-emerald-600",
    bgColor: "from-emerald-50 to-emerald-100",
    premium: true,
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, project-based programs designed to transform you into a job-ready tech professional
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <Card className="overflow-hidden shadow-2xl border-0">
                  <div className={`bg-gradient-to-r ${program.bgColor} p-8`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Program Info */}
                      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                        <div className="flex items-center mb-4">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center mr-4`}
                          >
                            <program.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            {program.popular && (
                              <Badge className="bg-purple-100 text-purple-800 mb-2">
                                <Star className="w-3 h-3 mr-1" />
                                Most Popular
                              </Badge>
                            )}
                            {program.premium && (
                              <Badge className="bg-emerald-100 text-emerald-800 mb-2">
                                <Crown className="w-3 h-3 mr-1" />
                                Premium
                              </Badge>
                            )}
                            <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                            <p className="text-lg text-gray-600">{program.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {program.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {program.students}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 mr-2 text-yellow-500" />
                            {program.rating}/5 rating
                          </div>
                          <div className="text-sm text-gray-600">{program.level}</div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Program Highlights:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {program.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href={`/programs/${program.id}`} className="flex-1">
                            <Button
                              className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white py-3 font-semibold`}
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                          <Link href={`/enroll?package=${program.id}`} className="flex-1">
                            <Button
                              variant="outline"
                              className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 font-semibold bg-transparent"
                            >
                              Enroll Now
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {/* Curriculum */}
                      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                        <Card className="bg-white/80 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-xl">Curriculum Overview</CardTitle>
                            <CardDescription>What you'll learn week by week</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {program.curriculum.map((week, idx) => (
                                <div key={idx} className="border-l-4 border-gray-200 pl-4">
                                  <div className="flex items-center mb-2">
                                    <div
                                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${program.color} mr-3`}
                                    ></div>
                                    <h5 className="font-semibold text-gray-900">{week.week}</h5>
                                  </div>
                                  <h6 className="font-medium text-gray-800 mb-1">{week.title}</h6>
                                  <div className="flex flex-wrap gap-1">
                                    {week.topics.map((topic, topicIdx) => (
                                      <Badge key={topicIdx} variant="secondary" className="text-xs">
                                        {topic}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Footer */}
                  <div className="bg-white p-6 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">Starting from</div>
                        <div className="text-2xl font-bold text-gray-900">
                          {program.price.standard.toLocaleString()} ETB
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">With mentorship</div>
                        <div className="text-xl font-semibold text-gray-700">
                          {program.price.mentorship.toLocaleString()} ETB
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of students who have transformed their careers with ASET
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/enroll">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold bg-transparent"
                    >
                      Ask Questions
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
