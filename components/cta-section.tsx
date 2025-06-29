"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Calendar, Sparkles, Rocket, Target } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-sm font-medium text-white">Your Future Starts Now</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Tech Career?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of successful graduates who chose ASET to unlock their potential in AI and Data Science. Your
            journey to a rewarding tech career starts with a single click.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Link href="/enroll">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-3 w-6 h-6" />
              Enroll Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full text-lg font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Talk to Support
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Start Learning Today</h3>
            <p className="text-white/80 text-sm">Begin your transformation with immediate access to course materials</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Flexible Schedule</h3>
            <p className="text-white/80 text-sm">Learn at your own pace with 24/7 access to all resources</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
            <p className="text-white/80 text-sm">Get help when you need it from our experienced instructors</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-white/70 text-sm mb-4">
            🔒 Secure enrollment • 💰 Money-back guarantee • 🎓 Lifetime access to materials
          </p>
          <p className="text-white/60 text-xs">
            Join 500+ students who have already transformed their careers with ASET
          </p>
        </motion.div>
      </div>
    </section>
  )
}
