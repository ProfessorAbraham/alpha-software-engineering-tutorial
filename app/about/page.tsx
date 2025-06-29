"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe, Heart, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const stats = [
  { number: "500+", label: "Students Trained", icon: Users },
  { number: "95%", label: "Job Placement Rate", icon: Target },
  { number: "50+", label: "Industry Partners", icon: Globe },
  { number: "4.9/5", label: "Student Rating", icon: Award },
]

const values = [
  {
    icon: Heart,
    title: "Student-Centered",
    description:
      "Every decision we make puts our students' success first. We're committed to your growth and career transformation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description:
      "We stay ahead of industry trends, ensuring our curriculum reflects the latest technologies and best practices.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description: "Building a supportive community where students learn from each other and grow together.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Empowering African talent to compete globally while solving local challenges through technology.",
  },
]

const team = [
  {
    name: "Dr. Abebe Mengistu",
    role: "Founder & Lead Instructor",
    bio: "Former Google AI researcher with 10+ years in machine learning. PhD in Computer Science from Stanford.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Hanan Mohammed",
    role: "Data Science Lead",
    bio: "Senior Data Scientist at Microsoft with expertise in big data analytics and business intelligence.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Daniel Bekele",
    role: "AI Engineering Lead",
    bio: "Former Tesla AI engineer specializing in computer vision and autonomous systems development.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ASET</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Alpha Software Engineering Tutorial is Ethiopia's premier platform for AI and Data Science education,
              empowering the next generation of tech leaders across Africa and the diaspora.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To democratize access to world-class AI and Data Science education in Africa, bridging the skills
                    gap and creating opportunities for economic empowerment through technology.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that with the right education and support, African talent can compete globally while
                    solving local challenges through innovative technology solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To become Africa's leading technology education platform, producing thousands of skilled
                    professionals who drive innovation and economic growth across the continent.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We envision a future where African tech talent is recognized globally, and our graduates lead
                    transformative projects that improve lives and create sustainable prosperity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at ASET
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Industry experts passionate about education and African tech development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <Badge variant="secondary" className="mb-4">
                        {member.role}
                      </Badge>
                      <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Be part of the movement transforming Africa's tech landscape. Start your journey with ASET today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/enroll">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold bg-transparent"
                    >
                      Get in Touch
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
