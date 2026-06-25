import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}