"use client"

import { motion } from "framer-motion"
import { BookOpen, DollarSign, Users, Award, Briefcase, MessageCircle, Building2 } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "100% Project-Based Learning",
    description: "Learn by building real-world applications that solve actual problems in your community.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: DollarSign,
    title: "Affordable, Transparent Pricing",
    description: "Quality education shouldn't break the bank. Clear pricing with no hidden fees.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "1-on-1 Mentorship Option",
    description: "Get personalized guidance from industry experts who care about your success.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Award,
    title: "Job-Ready Certification",
    description: "Earn certificates that employers recognize and value in the tech industry.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Briefcase,
    title: "Capstone Projects That Impress",
    description: "Build portfolio projects that showcase your skills to potential employers.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: MessageCircle,
    title: "Real-time Student Community",
    description: "Connect with peers, share knowledge, and grow together in our active community.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "Exclusive Internship Opportunities",
    description: "Top students get internship offers at Chereka Technology and partner companies.",
    color: "from-teal-500 to-teal-600",
  },
]

export function WhyChooseSection() {
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
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ASET</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another online course. We're your partner in building a successful tech career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>

                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
