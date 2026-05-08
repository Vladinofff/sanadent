import Hero from '../components/Hero'
import StatsBanner from '../components/StatsBanner'
import DoctorsSection from '../components/DoctorsSection'
import ServicesSection from '../components/ServicesSection'
import GBTSection from '../components/GBTSection'
import PartnersCarousel from '../components/PartnersCarousel'
import CTABanner from '../components/CTABanner'
import ReviewsSection from '../components/ReviewsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <ServicesSection />
      <DoctorsSection />
      <GBTSection />
      <ReviewsSection />
      <PartnersCarousel />
      <CTABanner />
    </>
  )
}
