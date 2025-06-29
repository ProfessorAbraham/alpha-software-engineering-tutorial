"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, HelpCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "info@aset.edu.et",
    availability: "24/7 response within 4 hours",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team",
    contact: "+251 911 123 456",
    availability: "Mon-Fri, 9 AM - 6 PM EAT",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant messaging support",
    contact: "Available on website",
    availability: "Mon-Fri, 9 AM - 6 PM EAT",
  },
]

const faqItems = [
  {
    question: "What are the prerequisites for the programs?",
    answer:
      "No prior programming experience is required. Our programs are designed for beginners to advanced learners.",
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "You get lifetime access to all course materials, including updates and new content.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the program.",
  },
  {
    question: "Can I switch between packages after enrollment?",
    answer: "Yes, you can upgrade your package at any time by paying the difference.",
  },
]

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our programs? Need help choosing the right package? Our team is here to help you
              start your tech journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="text-blue-600 font-semibold mb-2">{method.contact}</div>
                    <div className="text-sm text-gray-500">{method.availability}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select onValueChange={(value) => updateFormData("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="enrollment">Enrollment Questions</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => updateFormData("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        placeholder="Tell us how we can help you..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ Section */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Frequently Asked Questions
                  </CardTitle>
                  <CardDescription>Quick answers to common questions about ASET programs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
                      <p className="text-gray-600 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">ASET Headquarters</h4>
                      <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                      <p className="text-gray-600">Bole Sub City, Woreda 03</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Walk-ins welcome (appointment recommended)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
