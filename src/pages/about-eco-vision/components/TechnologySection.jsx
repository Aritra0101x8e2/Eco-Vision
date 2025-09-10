import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechnologySection = () => {
  const techFeatures = [
    {
      icon: "Cpu",
      title: "IoT Integration",
      description: "Smart sensors in waste bins provide real-time capacity monitoring, optimizing collection routes and reducing operational costs.",
      benefits: ["Real-time monitoring", "Route optimization", "Predictive maintenance"]
    },
    {
      icon: "Map",
      title: "Mapbox Implementation", 
      description: "Interactive mapping platform enabling citizens to locate bins, track environmental data, and visualize community impact.",
      benefits: ["Location services", "Route planning", "Data visualization"]
    },
    {
      icon: "BarChart3",
      title: "Data Analytics",
      description: "Advanced analytics transform waste management data into actionable insights for citizens and municipal authorities.",
      benefits: ["Impact tracking", "Trend analysis", "Performance metrics"]
    },
    {
      icon: "Smartphone",
      title: "Mobile-First Design",
      description: "Progressive web app ensuring seamless functionality across devices with offline capabilities and push notifications.",
      benefits: ["Cross-platform access", "Offline functionality", "Real-time alerts"]
    }
  ];

  const techStack = [
    { name: "React 18", category: "Frontend", icon: "Code" },
    { name: "Mapbox GL JS", category: "Mapping", icon: "Map" },
    { name: "IoT Sensors", category: "Hardware", icon: "Cpu" },
    { name: "Node.js", category: "Backend", icon: "Server" },
    { name: "MongoDB", category: "Database", icon: "Database" },
    { name: "WebSocket", category: "Real-time", icon: "Zap" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
            <Icon name="Zap" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Technology</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-environmental-heading text-foreground">
            Innovation Serving Environmental Goals
          </h2>
          
          <p className="text-lg text-muted-foreground font-environmental-body max-w-3xl mx-auto">
            Our technology stack is designed to make environmental action accessible, not complicated. Every feature serves the goal of creating visible, measurable environmental impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {techFeatures?.map((feature, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={feature?.icon} size={20} className="text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-environmental-heading text-foreground">
                    {feature?.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-environmental-body">
                    {feature?.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {feature?.benefits?.map((benefit, benefitIndex) => (
                      <span 
                        key={benefitIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-environmental">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
                alt="Smart city IoT sensors and environmental monitoring technology"
                className="w-full h-96 object-cover"
              />
              
              {/* Tech Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
                      <span className="text-sm font-medium text-foreground">Live Data Stream</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Real-time environmental monitoring across 15 cities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-environmental">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-environmental-heading text-foreground">
              Our Technology Stack
            </h3>
            <p className="text-muted-foreground">
              Built with modern, scalable technologies for reliable environmental monitoring
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack?.map((tech, index) => (
              <div 
                key={index}
                className="text-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-environmental"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name={tech?.icon} size={20} className="text-secondary" />
                </div>
                
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {tech?.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tech?.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="data-card space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-environmental-good/10 rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={20} className="text-environmental-good" />
              </div>
              <h3 className="text-xl font-environmental-heading text-foreground">
                Open API Access
              </h3>
            </div>
            
            <p className="text-muted-foreground font-environmental-body">
              Developers can integrate Eco Vision data into their applications, fostering innovation in environmental technology and community solutions.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-environmental-good">
              <Icon name="ExternalLink" size={16} />
              <span>Explore API Documentation</span>
            </div>
          </div>

          <div className="data-card space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-environmental-heading text-foreground">
                Privacy & Security
              </h3>
            </div>
            
            <p className="text-muted-foreground font-environmental-body">
              End-to-end encryption, GDPR compliance, and transparent data practices ensure user privacy while enabling environmental impact tracking.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-accent">
              <Icon name="Lock" size={16} />
              <span>Security Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;