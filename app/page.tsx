import { HeroSection } from "@/components/hero-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { PackagesSection } from "@/components/packages-section"
import { CapstoneSection } from "@/components/capstone-section"
import { MentorshipSection } from "@/components/mentorship-section"
import { CertificationSection } from "@/components/certification-section"
import { PricingSection } from "@/components/pricing-section"
import { InternshipSection } from "@/components/internship-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseSection />
      <PackagesSection />
      <CapstoneSection />
      <MentorshipSection />
      <CertificationSection />
      <PricingSection />
      <InternshipSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
