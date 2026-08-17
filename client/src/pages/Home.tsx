import { useState } from 'react';
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
import ThemeToggle from '@/components/ThemeToggle';
import { Smartphone, X } from 'lucide-react';

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
  const [phonePreview, setPhonePreview] = useState(false);

  return (
    <div className="min-h-screen text-foreground">
      {/* Galaxy nebula background */}
      <div className="galaxy-bg" />

      {/* Milky Way dust overlay */}
      <div className="galaxy-dust" />

      {/* Global Starfield */}
      <div className="global-stars" />

      {/* Light Mode Stars */}
      <div className="light-stars" />

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

      {/* Phone Preview Button */}
      <div className="phone-preview-btn">
        <button
          onClick={() => setPhonePreview(true)}
          className="phone-preview-circle"
          title="Preview on Mobile"
        >
          <Smartphone size={22} />
        </button>
      </div>

      {/* Phone Preview Modal */}
      {phonePreview && (
        <div className="phone-preview-overlay" onClick={() => setPhonePreview(false)}>
          <div className="phone-preview-modal" onClick={(e) => e.stopPropagation()}>
            <button className="phone-preview-close" onClick={() => setPhonePreview(false)}>
              <X size={20} />
            </button>
            <div className="phone-preview-frame">
              <div className="phone-preview-notch" />
              <iframe
                src={window.location.href}
                className="phone-preview-iframe"
                title="Mobile Preview"
              />
            </div>
          </div>
        </div>
      )}

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}
