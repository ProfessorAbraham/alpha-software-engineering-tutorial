"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Database, Brain, Crown, Clock, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    id: "data-science",
    icon: Database,
    title: "Data Science Package",
    level: "Beginner to Advanced",
    duration: "8 weeks + 1 week certification",
    project: "Smart City Data Dashboard",
    description: "Master data analysis, visualization, and machine learning with Python.",
    features: [
      "Real-world hands-on projects",
      "Python, Pandas, NumPy mastery",
      "Data visualization with Matplotlib & Seaborn",
      "Machine learning fundamentals",
      "Capstone: Smart City Dashboard",
      "Industry-recognized certificate",
    ],
    pricing: {
      standard: "1,499.99 ETB",
      mentorship: "2,499.99 ETB",
    },
    color: "from-blue-500 to-blue-600",
    popular: false,
    href: "/programs/data-science",
  },
  {
    id: "artificial-intelligence",
    icon: Brain,
    title: "Artificial Intelligence Package",
    level: "Beginner to Advanced",
    duration: "8 weeks + 1 week certification",
    project: "LegalEase AI – AI Legal Assistant",
    description: "Build intelligent systems and AI applications that solve real problems.",
    features: [
      "Deep learning with TensorFlow/PyTorch",
      "Natural Language Processing",
      "Computer Vision fundamentals",
      "AI model deployment",
      "Capstone: LegalEase AI Assistant",
      "Industry-recognized certificate",
    ],
    pricing: {
      standard: "1,799.99 ETB",
      mentorship: "2,799.99 ETB",
    },
    color: "from-purple-500 to-purple-600",
    popular: true,
    href: "/programs/artificial-intelligence",
  },
  {
    id: "premium-bundle",
    icon: Crown,
    title: "Alpha Premium Bundle",
    subtitle: "DS + AI + Business Track",
    level: "Beginner to Advanced",
    duration: "10 weeks + 1 week certification",
    project: "EduGenie – AI-Powered Academic Tutor",
    description: "Complete transformation package with business skills to monetize your expertise.",
    features: [
      "Complete Data Science curriculum",
      "Full Artificial Intelligence track",
      'Business course: "How to Monetize Your Skills"',
      "Advanced project portfolio",
      "Capstone: EduGenie AI Tutor",
      "Premium certificate bundle",
      "Priority job placement support",
    ],
    pricing: {
      standard: "2,199.99 ETB",
      mentorship: "3,199.99 ETB",
    },
    color: "from-emerald-500 to-emerald-600",
    popular: false,
    premium: true,
    href: "/programs/premium-bundle",
  },
]

export function PackagesSection() {
  return (
    <section id="packages-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured programs designed to take you from beginner to job-ready professional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular ? "border-purple-200 ring-4 ring-purple-100" : "border-gray-100"
              } ${pkg.premium ? "bg-gradient-to-br from-white to-emerald-50" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6`}
                >
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                {pkg.subtitle && <p className="text-sm font-medium text-gray-600 mb-4">{pkg.subtitle}</p>}

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {pkg.level}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What you'll learn:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Standard</span>
                      <span className="text-2xl font-bold text-gray-900">{pkg.pricing.standard}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">1-on-1 Mentorship</span>
                      <span className="text-2xl font-bold text-gray-900">{pkg.pricing.mentorship}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href={pkg.href}>
                      <Button
                        className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/enroll?package=${pkg.id}`}>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold bg-transparent"
                      >
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
