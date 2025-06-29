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
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard, User, MessageCircle, AlertTriangle, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface EnrollmentFormProps {
  packageData: {
    id: string
    title: string
    plan: string
    price: number
  }
  onBack: () => void
}

export function EnrollmentForm({ packageData, onBack }: EnrollmentFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    education: "",
    experience: "",
    motivation: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          package: packageData,
        }),
      })

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description:
            "Please proceed with payment using the bank details provided. Send payment screenshot to our Telegram.",
        })
        // Reset form or redirect
      } else {
        throw new Error("Failed to submit enrollment")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <button onClick={onBack} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Package Selection
          </button>

          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-xl mb-8 text-center">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <span className="font-bold">Limited Seats Available!</span>
            </div>
            <p className="text-sm">Only 10 seats left for this cohort. Secure your spot now!</p>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Your Enrollment</h1>
            <p className="text-lg text-gray-600">
              You're enrolling in <span className="font-semibold">{packageData.title}</span> - {packageData.plan}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Please provide your details to complete the enrollment</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          required
                        />
                      </div>
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select onValueChange={(value) => updateFormData("country", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ethiopia">Ethiopia</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => updateFormData("city", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="education">Education Level *</Label>
                      <Select onValueChange={(value) => updateFormData("education", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="experience">Programming Experience</Label>
                      <Select onValueChange={(value) => updateFormData("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No experience</SelectItem>
                          <SelectItem value="beginner">Beginner (&lt; 1 year)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="motivation">Why do you want to join ASET? *</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => updateFormData("motivation", e.target.value)}
                        placeholder="Tell us about your goals and motivation..."
                        required
                      />
                    </div>

                    {/* Payment Instructions */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Payment Instructions
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Bank Transfer Details:</h5>
                          <div className="bg-white rounded-lg p-4 space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">CBE Account:</span>
                              <span className="font-mono font-semibold">1000376842707</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Abyssinia Bank:</span>
                              <span className="font-mono font-semibold">86957094</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Amount:</span>
                              <span className="font-semibold text-blue-600">
                                {packageData.price.toLocaleString()} ETB
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <h5 className="font-medium text-yellow-800 mb-2">After Payment:</h5>
                          <p className="text-sm text-yellow-700 mb-3">
                            Send your payment screenshot to our Telegram for verification:
                          </p>
                          <a
                            href="https://t.me/Alpha_software_engineering"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contact on Telegram
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => updateFormData("agreeTerms", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <a href="/terms" className="text-blue-600 hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </a>{" "}
                          *
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.agreeMarketing}
                          onCheckedChange={(checked) => updateFormData("agreeMarketing", checked as boolean)}
                        />
                        <Label htmlFor="marketing" className="text-sm">
                          I agree to receive marketing communications from ASET
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={!formData.agreeTerms || isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application & Get Payment Details"}
                      <CreditCard className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{packageData.title}</h4>
                    <p className="text-sm text-gray-600 capitalize">{packageData.plan} Plan</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>Subtotal</span>
                      <span>{packageData.price.toLocaleString()} ETB</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span>{packageData.price.toLocaleString()} ETB</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">What happens next?</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Submit your application form</li>
                      <li>• Transfer payment to provided accounts</li>
                      <li>• Send screenshot to Telegram</li>
                      <li>• Get access within 24 hours</li>
                      <li>• Welcome orientation scheduled</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <div className="flex items-center text-red-800 mb-2">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <span className="font-semibold">Hurry!</span>
                    </div>
                    <p className="text-sm text-red-700">Only 10 seats remaining for this cohort.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
