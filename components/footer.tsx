"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  HelpCircle,
} from "lucide-react"

const footerLinks = {
  programs: [
    { name: "Data Science Package", href: "#" },
    { name: "AI Package", href: "#" },
    { name: "Premium Bundle", href: "#" },
    { name: "Mentorship Options", href: "#" },
  ],
  company: [
    { name: "About ASET", href: "#" },
    { name: "Our Instructors", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Partner Companies", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Technical Requirements", href: "#" },
    { name: "Payment Options", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ASET</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new courses, success stories, and exclusive offers delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ASET</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Alpha Software Engineering Tutorial is Ethiopia's premier platform for AI and Data Science education,
                empowering the next generation of tech leaders across Africa and the diaspora.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>info@aset.edu.et</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+251 911 123 456</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Programs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                Programs
              </h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-emerald-400" />
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-orange-400" />
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 Alpha Software Engineering Tutorial (ASET). All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              Made with ❤️ for Africa's tech future
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
