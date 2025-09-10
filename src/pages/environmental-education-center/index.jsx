import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LearningPathways from './components/LearningPathways';
import InteractiveTutorials from './components/InteractiveTutorials';
import ImpactCalculators from './components/ImpactCalculators';
import CommunityChallenge from './components/CommunityChallenge';
import ResourceLibrary from './components/ResourceLibrary';

const EnvironmentalEducationCenter = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleStartLearning = () => {
    document.getElementById('learning-pathways')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleSelectPath = (path) => {
    console.log('Selected learning path:', path);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Environmental Education Center - Eco Vision</title>
        <meta name="description" content="Interactive learning hub for environmental education in Kolkata. Master waste management, sustainability practices, and community engagement through hands-on tutorials and challenges." />
        <meta name="keywords" content="environmental education, waste management, sustainability, Kolkata, community challenges, impact calculators" />
        <meta property="og:title" content="Environmental Education Center - Eco Vision" />
        <meta property="og:description" content="Transform your environmental knowledge into actionable impact with interactive tutorials, challenges, and resources tailored for Kolkata." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main className="pt-16">

        <HeroSection onStartLearning={handleStartLearning} />

        <div id="learning-pathways">
          <LearningPathways onSelectPath={handleSelectPath} />
        </div>

        <InteractiveTutorials />

        <ImpactCalculators />

        <CommunityChallenge />

        <ResourceLibrary />

        <section className="py-16 px-4 bg-gradient-to-br from-primary to-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Real Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of Kolkata residents who are already making a difference. 
              Start your environmental journey today and see the immediate impact of your actions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Learning Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Download Mobile App
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Eco Vision</h3>
              <p className="text-gray-400 text-sm">
                Transforming environmental education through technology and community engagement in Kolkata.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Learning</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Waste Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Composting Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Action</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact Calculators</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Challenges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leaderboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local Groups</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Download Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Policy Guides</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} Eco Vision. All rights reserved. Building a sustainable future for Kolkata.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnvironmentalEducationCenter;