import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <LogoBanner />
      <Services />
      <Stats />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
