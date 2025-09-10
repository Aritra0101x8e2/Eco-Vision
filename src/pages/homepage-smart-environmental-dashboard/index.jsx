import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CommunityImpactTicker from './components/CommunityImpactTicker';
import NeighborhoodCards from './components/NeighborhoodCards';
import LiveCityDashboard from './components/LiveCityDashboard';
import CallToActionSection from './components/CallToActionSection';

const SmartEnvironmentalDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Eco Vision - Smart Environmental Intelligence for Kolkata</title>
        <meta name="description" content="Transform your neighborhood through real-time waste management, community engagement, and environmental intelligence. Join thousands making Kolkata cleaner and smarter." />
        <meta name="keywords" content="environmental dashboard, waste management, Kolkata, smart city, community engagement, sustainability" />
        <meta property="og:title" content="Eco Vision - Smart Environmental Intelligence for Kolkata" />
        <meta property="og:description" content="Real-time environmental data, waste management, and community engagement platform for Kolkata residents." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-smart-environmental-dashboard" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          
        
          <CommunityImpactTicker />
          
          <NeighborhoodCards />
          

          <LiveCityDashboard />
          
     
          <CallToActionSection />
        </main>

        <footer className="bg-foreground text-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
  
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
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
                    <h3 className="text-lg font-environmental-heading">Eco Vision</h3>
                    <p className="text-xs text-background/70">Environmental Intelligence</p>
                  </div>
                </div>
                <p className="text-sm text-background/80 font-environmental-body">
                  Transforming Kolkata through smart environmental management and community engagement.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-environmental-heading text-background">Platform</h4>
                <div className="space-y-2">
                  <a href="/smart-map-interface" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Smart Map
                  </a>
                  <a href="/bin-network-management" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Bin Network
                  </a>
                  <a href="/environmental-education-center" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Education Center
                  </a>
                  <a href="/municipal-dashboard" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Municipal Dashboard
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-environmental-heading text-background">Community</h4>
                <div className="space-y-2">
                  <a href="/about-eco-vision" className="block text-sm text-background/80 hover:text-background transition-colors">
                    About Us
                  </a>
                  <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Community Guidelines
                  </a>
                  <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Environmental Blog
                  </a>
                  <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Success Stories
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-environmental-heading text-background">Support</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Help Center
                  </a>
                  <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-background/20 mt-8 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4 text-sm text-background/70">
                  <span>© {new Date()?.getFullYear()} Eco Vision. All rights reserved.</span>
                  <span>•</span>
                  <span>Made for Kolkata</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
                    <span className="text-xs text-background/70">System Status: Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SmartEnvironmentalDashboard;