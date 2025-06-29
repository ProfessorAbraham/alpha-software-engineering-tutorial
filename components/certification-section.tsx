"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Shield, Download, Share2, CheckCircle, Star, Building2 } from "lucide-react"

const certificationFeatures = [
  {
    icon: Shield,
    title: "Industry-Recognized",
    description: "Certificates verified by blockchain technology and recognized by top employers",
  },
  {
    icon: Download,
    title: "Digital & Printable",
    description: "Get both digital certificates for LinkedIn and high-quality prints for your office",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "One-click sharing to LinkedIn, portfolio websites, and social media platforms",
  },
  {
    icon: CheckCircle,
    title: "Skill Verification",
    description: "Detailed skill breakdown that employers can verify and trust",
  },
]

const recognizedBy = [
  "Chereka Technology",
  "Ethiopian Airlines",
  "Commercial Bank of Ethiopia",
  "Addis Ababa University",
  "USAID Ethiopia",
  "World Bank Group",
]

export function CertificationSection() {
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Showcase Your Skills
            </span>{" "}
            to Employers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn certificates that employers recognize and value in the competitive tech industry
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
              {/* Certificate Preview */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border-2 border-blue-100">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Completion</h3>
                    <p className="text-gray-600">Alpha Software Engineering Tutorial</p>
                  </div>

                  <div className="border-t border-b border-gray-200 py-6 mb-6">
                    <div className="text-center">
                      <p className="text-gray-600 mb-2">This certifies that</p>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Hanan Mohammed</h4>
                      <p className="text-gray-600 mb-2">has successfully completed</p>
                      <h5 className="text-lg font-semibold text-blue-600">Data Science Professional Program</h5>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div>
                      <p>Completion Date</p>
                      <p className="font-semibold">March 15, 2024</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-2">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs">Verified</p>
                    </div>
                    <div className="text-right">
                      <p>Certificate ID</p>
                      <p className="font-semibold">ASET-DS-2024-001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-3 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {certificationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
                View Sample Certificate
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Recognized by Leading Organizations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certificates are trusted and recognized by top employers across Ethiopia and internationally
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {recognizedBy.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
