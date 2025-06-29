"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages-section")
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 pt-16">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Africa's Premier AI & Data Science Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock Your Future in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              AI & Data Science
            </span>{" "}
            with ASET
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join our expert-guided, hands-on programs tailored for Africa's next tech leaders. Transform your career
            with project-based learning and real-world experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={scrollToPackages}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Packages
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Link href="/demo">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Job Placement Rate</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-gray-600">Industry Partners</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
