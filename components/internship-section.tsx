"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, Users, Trophy, Briefcase, ArrowRight, Star, Target, Network } from "lucide-react"

const internshipBenefits = [
  {
    icon: Briefcase,
    title: "Real Industry Experience",
    description: "Work on actual projects with experienced developers and data scientists",
  },
  {
    icon: Network,
    title: "Professional Networking",
    description: "Build connections with industry leaders and potential future employers",
  },
  {
    icon: Target,
    title: "Skill Application",
    description: "Apply your newly learned skills in a real-world business environment",
  },
  {
    icon: Trophy,
    title: "Career Advancement",
    description: "High-performing interns often receive full-time job offers",
  },
]

const internshipStats = [
  { number: "85%", label: "Intern to Full-time Rate" },
  { number: "6", label: "Months Average Duration" },
  { number: "15+", label: "Partner Companies" },
  { number: "100+", label: "Successful Placements" },
]

export function InternshipSection() {
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
            Exclusive{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Internship Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Top-performing students earn internships at Chereka Technology and our partner companies, gaining hands-on
            industry experience and potential job offers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Chereka Technology</h3>
                    <p className="text-gray-600">Lead Partner Company</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Software Development Team</div>
                        <div className="text-sm text-gray-600">6-month internship program</div>
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium ml-1">Exclusive</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    "Join our dynamic team working on cutting-edge AI and data science projects. Gain real-world
                    experience while contributing to meaningful solutions."
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Duration:</span> 6 months
                    </div>
                    <div>
                      <span className="font-medium">Stipend:</span> Competitive
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> Addis Ababa
                    </div>
                    <div>
                      <span className="font-medium">Remote:</span> Hybrid
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold">
                  Learn About Internships
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {internshipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {internshipStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Tech Career?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join ASET today and position yourself for exclusive internship opportunities that can transform your career
            trajectory in the tech industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-xl font-semibold bg-transparent"
            >
              Talk to Admissions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
