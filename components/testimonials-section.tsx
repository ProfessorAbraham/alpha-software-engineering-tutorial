"use client"

import { motion } from "framer-motion"
import { Star, Quote, User, MapPin, Briefcase } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Meron Tadesse",
    role: "Data Scientist",
    company: "Ethiopian Airlines",
    location: "Addis Ababa, Ethiopia",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "ASET transformed my career completely. The hands-on projects and mentorship helped me land my dream job at Ethiopian Airlines. The Smart City Dashboard project I built is now part of my daily work!",
    program: "Data Science Package",
  },
  {
    id: 2,
    name: "Daniel Bekele",
    role: "AI Engineer",
    company: "Chereka Technology",
    location: "Remote, USA",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The AI program at ASET is world-class. I went from knowing nothing about machine learning to building production AI systems. The LegalEase project opened doors I never imagined possible.",
    program: "AI Package",
  },
  {
    id: 3,
    name: "Hanan Mohammed",
    role: "Tech Entrepreneur",
    company: "EduTech Startup Founder",
    location: "London, UK",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The Premium Bundle gave me both technical skills and business knowledge. I'm now running my own EdTech startup, and the EduGenie project was the foundation for my company's main product.",
    program: "Premium Bundle",
  },
  {
    id: 4,
    name: "Yonas Girma",
    role: "Machine Learning Engineer",
    company: "World Bank Group",
    location: "Washington DC, USA",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "ASET's mentorship program is unmatched. My mentor guided me through complex ML concepts and helped me secure an internship that led to my current role at the World Bank.",
    program: "AI Package with Mentorship",
  },
  {
    id: 5,
    name: "Rahel Assefa",
    role: "Data Analyst",
    company: "Commercial Bank of Ethiopia",
    location: "Addis Ababa, Ethiopia",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The project-based learning approach made all the difference. Instead of just theory, I built real applications that impressed employers. The certificate opened doors across the banking sector.",
    program: "Data Science Package",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>{" "}
            from Our Alumni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from graduates who transformed their careers and are now working at top companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  {testimonial.location}
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">{testimonial.quote}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-blue-800">{testimonial.program}</span>
                </div>
                <div className="flex items-center text-gray-500 text-xs">
                  <Briefcase className="w-3 h-3 mr-1" />
                  Graduate
                </div>
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
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Successful Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Partner Companies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
