"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Check, CreditCard, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"
import { EnrollmentForm } from "@/components/enrollment-form"

const packages = {
  "data-science": {
    title: "Data Science Package",
    description: "Master data analysis, visualization, and machine learning",
    duration: "8 weeks + certification",
    standardPrice: 1499.99,
    mentorshipPrice: 2499.99,
    color: "from-blue-500 to-blue-600",
    features: [
      "Python, Pandas, NumPy mastery",
      "Data visualization with Matplotlib & Seaborn",
      "Machine learning fundamentals",
      "Smart City Dashboard project",
      "Industry-recognized certificate",
    ],
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence Package",
    description: "Build intelligent systems and AI applications",
    duration: "8 weeks + certification",
    standardPrice: 1799.99,
    mentorshipPrice: 2799.99,
    color: "from-purple-500 to-purple-600",
    features: [
      "Deep learning with TensorFlow/PyTorch",
      "Natural Language Processing",
      "Computer Vision fundamentals",
      "LegalEase AI project",
      "Industry-recognized certificate",
    ],
  },
  "premium-bundle": {
    title: "Alpha Premium Bundle",
    description: "Complete DS + AI + Business transformation",
    duration: "10 weeks + certification",
    standardPrice: 2199.99,
    mentorshipPrice: 3199.99,
    color: "from-emerald-500 to-emerald-600",
    features: [
      "Complete Data Science curriculum",
      "Full Artificial Intelligence track",
      "Business monetization course",
      "EduGenie AI Tutor project",
      "Premium certificate bundle",
      "Priority job placement support",
    ],
  },
}

export default function EnrollPage() {
  const searchParams = useSearchParams()
  const [selectedPackage, setSelectedPackage] = useState("data-science")
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "mentorship">("standard")
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const packageParam = searchParams.get("package")
    if (packageParam && packages[packageParam as keyof typeof packages]) {
      setSelectedPackage(packageParam)
    }
  }, [searchParams])

  const currentPackage = packages[selectedPackage as keyof typeof packages]
  const currentPrice = selectedPlan === "standard" ? currentPackage.standardPrice : currentPackage.mentorshipPrice

  if (showForm) {
    return (
      <EnrollmentForm
        packageData={{
          id: selectedPackage,
          ...currentPackage,
          plan: selectedPlan,
          price: currentPrice,
        }}
        onBack={() => setShowForm(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Enroll in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ASET</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your package and start your journey to becoming a tech professional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {Object.entries(packages).map(([key, pkg]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedPackage === key
                    ? "ring-4 ring-blue-200 shadow-xl scale-105"
                    : "hover:shadow-lg hover:scale-102"
                }`}
                onClick={() => setSelectedPackage(key)}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{pkg.standardPrice.toLocaleString()} ETB</div>
                  <div className="text-sm text-gray-600">Starting price</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Selected: {currentPackage.title}</CardTitle>
                <CardDescription>Choose your learning plan and complete your enrollment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Plan Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Choose Your Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedPlan === "standard" ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedPlan("standard")}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold">Standard Learning</h4>
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {currentPackage.standardPrice.toLocaleString()} ETB
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Self-paced learning
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Community support
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Email support
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedPlan === "mentorship" ? "ring-2 ring-purple-500 bg-purple-50" : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedPlan("mentorship")}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold">1-on-1 Mentorship</h4>
                          <Badge className="bg-purple-100 text-purple-800">Popular</Badge>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {currentPackage.mentorshipPrice.toLocaleString()} ETB
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Weekly 1-on-1 sessions
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Personalized guidance
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Priority support
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Package Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Features */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold">Secure Enrollment</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>🔒 SSL Encrypted Payment</div>
                    <div>💰 30-day Money Back Guarantee</div>
                    <div>🎓 Lifetime Certificate Access</div>
                  </div>
                </div>

                {/* Total and CTA */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600">Total Amount</div>
                      <div className="text-3xl font-bold text-gray-900">{currentPrice.toLocaleString()} ETB</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Payment Plan</div>
                      <div className="font-semibold">Full Payment</div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Enrollment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
