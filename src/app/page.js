import AboutMe from "@/components/AboutMe";
import Hero  from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import MyProjects from "@/components/MyProjects";
import Contact from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <MyProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
