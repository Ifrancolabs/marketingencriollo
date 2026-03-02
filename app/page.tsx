import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <About />
      <CtaSection />
      <Footer />
      <WhatsappFab />
    </main>
  )
}
