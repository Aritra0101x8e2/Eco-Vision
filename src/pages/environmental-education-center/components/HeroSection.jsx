import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onStartLearning }) => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-green-100 py-16 px-4 overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-500 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary rounded-full p-4 mr-4">
              <Icon name="BookOpen" size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Environmental Education Center
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your environmental knowledge into actionable impact. Learn waste management, 
            sustainability practices, and community engagement tailored for Kolkata's urban environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              iconName="Play" 
              iconPosition="left"
              onClick={onStartLearning}
              className="px-8"
            >
              Start Learning Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              iconName="Download" 
              iconPosition="left"
              className="px-8"
            >
              Download Resources
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Interactive Lessons</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
            <div className="text-sm text-gray-600">Students Educated</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
            <div className="text-sm text-gray-600">Achievement Badges</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;