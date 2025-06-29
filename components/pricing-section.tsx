"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Users, Video, MessageSquare, Calendar, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    id: "data-science",
    name: "Data Science Package",
    description: "Perfect for beginners entering the data science field",
    standardPrice: "1,499.99",
    mentorshipPrice: "2,499.99",
    duration: "8 weeks + certification",
    features: {
      standard: [
        "Complete Data Science curriculum",
        "Smart City Dashboard project",
        "Python, Pandas, NumPy mastery",
        "Data visualization training",
        "Machine learning fundamentals",
        "Industry certificate",
        "Community access",
        "Email support",
      ],
      mentorship: [
        "Everything in Standard",
        "Weekly 1-on-1 video sessions",
        "Personalized learning path",
        "Direct mentor messaging",
        "Priority support",
        "Career guidance",
        "Interview preparation",
        "Job placement assistance",
      ],
    },
    color: "from-blue-500 to-blue-600",
    popular: false,
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence Package",
    description: "Build intelligent systems and AI applications",
    standardPrice: "1,799.99",
    mentorshipPrice: "2,799.99",
    duration: "8 weeks + certification",
    features: {
      standard: [
        "Complete AI curriculum",
        "LegalEase AI project",
        "Deep learning with TensorFlow",
        "Natural Language Processing",
        "Computer Vision basics",
        "AI model deployment",
        "Industry certificate",
        "Community access",
      ],
      mentorship: [
        "Everything in Standard",
        "Weekly 1-on-1 AI expert sessions",
        "Advanced project guidance",
        "Research paper discussions",
        "Industry connections",
        "Startup mentorship",
        "Technical interview prep",
        "AI career roadmap",
      ],
    },
    color: "from-purple-500 to-purple-600",
    popular: true,
  },
  {
    id: "premium-bundle",
    name: "Alpha Premium Bundle",
    description: "Complete transformation with business skills",
    standardPrice: "2,199.99",
    mentorshipPrice: "3,199.99",
    duration: "10 weeks + certification",
    features: {
      standard: [
        "Data Science + AI curricula",
        "EduGenie AI Tutor project",
        "Business monetization course",
        "Advanced portfolio projects",
        "Premium certificates",
        "Priority job placement",
        "Lifetime community access",
        "Alumni network",
      ],
      mentorship: [
        "Everything in Standard",
        "Bi-weekly expert sessions",
        "Business strategy guidance",
        "Entrepreneurship mentoring",
        "Investor pitch preparation",
        "Network introductions",
        "Lifetime career support",
        "Executive coaching",
      ],
    },
    color: "from-emerald-500 to-emerald-600",
    popular: false,
    premium: true,
  },
]

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "mentorship">("standard")

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Investment
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Choose the level of support that fits your learning style.
          </p>

          {/* Plan Toggle */}
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setSelectedPlan("standard")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedPlan === "standard"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Standard Learning
            </button>
            <button
              onClick={() => setSelectedPlan("mentorship")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedPlan === "mentorship"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Video className="w-4 h-4 inline mr-2" />
              1-on-1 Mentorship
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? "border-purple-200 ring-4 ring-purple-100" : "border-gray-100"
              } ${plan.premium ? "bg-gradient-to-br from-white to-emerald-50" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {selectedPlan === "standard" ? plan.standardPrice : plan.mentorshipPrice}
                      <span className="text-lg font-normal text-gray-600"> ETB</span>
                    </div>
                    <p className="text-sm text-gray-600">{plan.duration}</p>
                  </div>

                  {selectedPlan === "mentorship" && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6">
                      <div className="flex items-center justify-center mb-2">
                        <Video className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-800">Mentorship Included</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          Weekly
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          24/7 Chat
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          1-on-1
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features[selectedPlan].map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Need a custom plan for your organization?</p>
          <Button
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
          >
            Contact Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
