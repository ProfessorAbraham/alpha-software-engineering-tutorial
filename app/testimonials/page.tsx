"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, User, MapPin, Briefcase, ArrowRight, Play } from "lucide-react"
import Link from "next/link"

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
      "ASET transformed my career completely. The hands-on projects and mentorship helped me land my dream job at Ethiopian Airlines. The Smart City Dashboard project I built is now part of my daily work! The instructors are world-class and the curriculum is perfectly designed for the African context.",
    program: "Data Science Package",
    beforeAfter: {
      before: "Unemployed Graduate",
      after: "Senior Data Scientist",
      salaryIncrease: "300%",
    },
    videoTestimonial: true,
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
      "The AI program at ASET is world-class. I went from knowing nothing about machine learning to building production AI systems. The LegalEase project opened doors I never imagined possible. Now I'm working remotely for a US company while living in Ethiopia.",
    program: "AI Package",
    beforeAfter: {
      before: "Junior Developer",
      after: "Senior AI Engineer",
      salaryIncrease: "400%",
    },
    videoTestimonial: false,
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
      "The Premium Bundle gave me both technical skills and business knowledge. I'm now running my own EdTech startup, and the EduGenie project was the foundation for my company's main product. ASET doesn't just teach you to code - they teach you to think like an entrepreneur.",
    program: "Premium Bundle",
    beforeAfter: {
      before: "Marketing Manager",
      after: "Tech Startup CEO",
      salaryIncrease: "500%",
    },
    videoTestimonial: true,
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
      "ASET's mentorship program is unmatched. My mentor guided me through complex ML concepts and helped me secure an internship that led to my current role at the World Bank. The personalized attention and career guidance made all the difference.",
    program: "AI Package with Mentorship",
    beforeAfter: {
      before: "Computer Science Student",
      after: "ML Engineer at World Bank",
      salaryIncrease: "600%",
    },
    videoTestimonial: false,
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
      "The project-based learning approach made all the difference. Instead of just theory, I built real applications that impressed employers. The certificate opened doors across the banking sector. ASET's curriculum is perfectly aligned with industry needs.",
    program: "Data Science Package",
    beforeAfter: {
      before: "Bank Teller",
      after: "Senior Data Analyst",
      salaryIncrease: "250%",
    },
    videoTestimonial: false,
  },
  {
    id: 6,
    name: "Samuel Tesfaye",
    role: "Full Stack Developer",
    company: "Safaricom Ethiopia",
    location: "Addis Ababa, Ethiopia",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "ASET gave me the confidence to transition from accounting to tech. The supportive community and practical projects helped me build a portfolio that got me hired at Safaricom. The mentors are incredibly knowledgeable and always available to help.",
    program: "Premium Bundle",
    beforeAfter: {
      before: "Accountant",
      after: "Full Stack Developer",
      salaryIncrease: "180%",
    },
    videoTestimonial: true,
  },
]

const successStats = [
  { number: "500+", label: "Successful Graduates" },
  { number: "95%", label: "Job Placement Rate" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "350%", label: "Average Salary Increase" },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from ASET graduates who transformed their careers and are now working at top companies
              worldwide
            </p>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {successStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                          <p className="text-gray-500 text-xs">{testimonial.company}</p>
                        </div>
                      </div>
                      {testimonial.videoTestimonial && (
                        <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                          <Play className="w-3 h-3 mr-1" />
                          Video
                        </Button>
                      )}
                    </div>

                    {/* Rating and Location */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                      <p className="text-gray-700 leading-relaxed pl-6 italic">"{testimonial.quote}"</p>
                    </div>

                    {/* Before/After */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Career Transformation</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Before:</span>
                          <div className="font-medium text-gray-900">{testimonial.beforeAfter.before}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">After:</span>
                          <div className="font-medium text-gray-900">{testimonial.beforeAfter.after}</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <span className="text-gray-600 text-sm">Salary Increase: </span>
                        <span className="font-bold text-green-600">{testimonial.beforeAfter.salaryIncrease}</span>
                      </div>
                    </div>

                    {/* Program Badge */}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.program}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Briefcase className="w-3 h-3 mr-1" />
                        Graduate
                      </div>
                    </div>
                  </CardContent>
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
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join our community of successful graduates and transform your career with ASET's proven programs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/enroll">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                      Start Your Journey
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/programs">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold bg-transparent"
                    >
                      View Programs
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
