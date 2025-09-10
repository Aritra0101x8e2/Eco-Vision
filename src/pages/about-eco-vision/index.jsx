import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import TechnologySection from './components/TechnologySection';
import PartnershipsSection from './components/PartnershipsSection';
import ImpactSection from './components/ImpactSection';
import CallToActionSection from './components/CallToActionSection';

const AboutEcoVision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Eco Vision </title>
        <meta 
          name="description" 
          content="Learn about Eco Vision's mission to bridge smart city technology with grassroots environmental action. Discover our team, partnerships, and measurable impact across 15+ Indian cities." 
        />
        <meta name="keywords" content="eco vision, about us, environmental management, smart city, IoT waste management, urban sustainability, India" />
        <meta property="og:title" content="About Eco Vision - Environmental Technology for Smart Cities" />
        <meta property="og:description" content="Transforming urban waste management through IoT integration, community engagement, and intelligent mapping across Indian cities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-eco-vision" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <TechnologySection />
        <PartnershipsSection />
        <ImpactSection />
        <CallToActionSection />
      </main>
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  <circle cx="12" cy="19" r="3" fillOpacity="0.7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-environmental-heading text-foreground">
                  Eco Vision
                </h3>
                <p className="text-sm text-muted-foreground">
                  Environmental Intelligence Platform
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground font-environmental-body max-w-2xl mx-auto">
              Transforming urban environmental management through technology, community engagement, and measurable impact. Building sustainable cities for future generations.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>© {new Date()?.getFullYear()} Eco Vision</span>
              <span>•</span>
              <button className="hover:text-primary transition-environmental">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-primary transition-environmental">Terms of Service</button>
              <span>•</span>
              <button className="hover:text-primary transition-environmental">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutEcoVision;