"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Video, Calendar, MessageSquare, Users, Star, Clock, CheckCircle } from "lucide-react"

const mentorshipFeatures = [
  {
    icon: Video,
    title: "One-on-One Video Sessions",
    description: "Weekly personalized sessions via Zoom or Google Meet with industry experts",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work for your schedule, including evenings and weekends",
  },
  {
    icon: MessageSquare,
    title: "24/7 Chat Support",
    description: "Get quick answers to your questions through our dedicated mentorship chat",
  },
  {
    icon: CheckCircle,
    title: "Personalized Learning Path",
    description: "Customized curriculum based on your goals, background, and learning pace",
  },
]

const mentorStats = [
  { number: "15+", label: "Years Average Experience" },
  { number: "200+", label: "Students Mentored" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Support Available" },
]

export function MentorshipSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn from{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experts Who Care
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized guidance from industry professionals who are invested in your success
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
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Live Mentorship Session</h3>
                    <p className="text-gray-600">Every Tuesday, 7:00 PM EAT</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">AM</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Abebe Mengistu</div>
                        <div className="text-sm text-gray-600">Senior Data Scientist</div>
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium ml-1">4.9</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    "Today we'll review your machine learning project and discuss optimization strategies for better
                    performance."
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      60 minutes
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      1-on-1 Session
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold">
                  Schedule Your Session
                </Button>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {mentorshipFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {mentorStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
