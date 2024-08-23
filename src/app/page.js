'use client'
import AboutMe from "@/components/AboutMe";
import Hero  from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import MyProjects from "@/components/MyProjects";
import Contact from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import { useRef } from "react";

export default function Home() {
  const HomeRef = useRef(null)
  const AboutRef = useRef(null)
  const ServicesRef = useRef(null)
  const ProjectsRef = useRef(null)
  const TestimonialsRef = useRef(null)
  const ContactRef = useRef(null)

  function handleScroll(refs) {
    refs.current.scrollIntoView();
  }

  return (
    <div>
      <Navbar 
        scroll={handleScroll}
        refs={{
          HomeRef,
          AboutRef,
          ServicesRef,
          ProjectsRef,
          TestimonialsRef,
          ContactRef
        }}
        />
      <div ref={HomeRef}>
        <Hero />
      </div>
      <div ref={AboutRef}>
        <AboutMe />
      </div>
      <div ref={ServicesRef}>
        <Services />
      </div>
      <div ref={ProjectsRef}>
        <MyProjects />
      </div>
      <div ref={TestimonialsRef}>
        <Testimonials />
      </div>
      <div ref={ContactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
