import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
                <span className="text-sm font-medium text-environmental-good">
                  Transforming Urban Environmental Management
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-environmental-heading text-foreground leading-tight">
                About{' '}
                <span className="text-primary">Eco Vision</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-environmental-body max-w-2xl">
                Bridging smart city technology with grassroots environmental action to create visible, measurable impact in Indian urban communities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="ArrowRight" 
                iconPosition="right"
                className="interactive-hover"
              >
                Our Impact Story
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                iconName="Users" 
                iconPosition="left"
                className="interactive-hover"
              >
                Meet Our Team
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-environmental-heading text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Citizens Engaged</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-environmental-heading text-environmental-good">2.5M</div>
                <div className="text-sm text-muted-foreground">Kg Waste Diverted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-environmental-heading text-secondary">15</div>
                <div className="text-sm text-muted-foreground">Cities Connected</div>
              </div>
            </div>
          </div>

      
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-environmental">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
                alt="Smart city environmental monitoring with IoT sensors and community engagement"
                className="w-full h-96 object-cover"
              />
              
            
              <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="text-sm font-medium">Real-time Monitoring</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-environmental-good" />
                  <span className="text-sm font-medium">Community Driven</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Leaf" size={32} className="text-primary" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;