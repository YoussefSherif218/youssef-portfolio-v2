import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Credentials from '@/components/Credentials';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * HOME PAGE
 * Design: Executive AI Command Suite Portfolio
 * 
 * Complete Portfolio Structure:
 * 1. Navigation - Premium fixed header
 * 2. Hero - Main introduction with profile and dashboard
 * 3. About - Professional background
 * 4. Experience - Career timeline
 * 5. Projects - Showcase of work
 * 6. Skills - Technical expertise
 * 7. Contact - Call to action
 * 8. Footer - Links and social
 */

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Galaxy nebula background */}
      <div className="galaxy-bg" />

      {/* Milky Way dust overlay */}
      <div className="galaxy-dust" />

      {/* Global Starfield */}
      <div className="global-stars" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Credentials Section */}
      <Credentials />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
