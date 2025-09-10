import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipsSection = () => {
  const municipalPartners = [
    {
      name: "Kolkata Municipal Corporation",
      type: "Municipal Government",
      collaboration: "Smart waste management pilot program across 50 wards",
      impact: "30% reduction in collection costs",
      logo: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=100&h=100&fit=crop"
    },
    {
      name: "Pune Smart City Mission",
      type: "Smart City Initiative", 
      collaboration: "IoT sensor deployment and citizen engagement platform",
      impact: "25K+ active users",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop"
    },
    {
      name: "Bengaluru Solid Waste Management",
      type: "Municipal Department",
      collaboration: "Real-time bin monitoring and route optimization",
      impact: "40% improvement in efficiency",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
    }
  ];

  const organizationPartners = [
    {
      name: "Centre for Science and Environment",
      type: "Environmental NGO",
      focus: "Policy research and environmental education",
      icon: "Leaf"
    },
    {
      name: "Swachh Bharat Mission",
      type: "Government Initiative",
      focus: "National cleanliness and waste management",
      icon: "Flag"
    },
    {
      name: "Indian Green Building Council",
      type: "Industry Association",
      focus: "Sustainable building and urban development",
      icon: "Building2"
    },
    {
      name: "Waste Warriors Society",
      type: "Community Organization",
      focus: "Zero waste communities and education",
      icon: "Users"
    }
  ];

  const techPartners = [
    { name: "Mapbox", role: "Mapping Platform", icon: "Map" },
    { name: "AWS", role: "Cloud Infrastructure", icon: "Cloud" },
    { name: "MongoDB", role: "Database Solutions", icon: "Database" },
    { name: "Twilio", role: "Communication APIs", icon: "MessageSquare" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-environmental-good/10 rounded-full">
            <Icon name="Handshake" size={16} className="text-environmental-good" />
            <span className="text-sm font-medium text-environmental-good">Partnerships</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-environmental-heading text-foreground">
            Collaborative Environmental Impact
          </h2>
          
          <p className="text-lg text-muted-foreground font-environmental-body max-w-3xl mx-auto">
            Working together with municipal governments, environmental organizations, and technology partners to create scalable solutions for India's urban environmental challenges.
          </p>
        </div>

        {/* Municipal Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-environmental-heading text-foreground mb-8 text-center">
            Municipal Government Partners
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {municipalPartners?.map((partner, index) => (
              <div key={index} className="data-card space-y-6 interactive-hover">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={partner?.logo}
                      alt={`${partner?.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-environmental-heading text-foreground">
                      {partner?.name}
                    </h4>
                    <p className="text-sm text-primary">
                      {partner?.type}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-1">Collaboration</h5>
                    <p className="text-sm text-muted-foreground">
                      {partner?.collaboration}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-sm text-muted-foreground">Impact</span>
                    <span className="text-sm font-medium text-environmental-good">
                      {partner?.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-environmental-heading text-foreground mb-8 text-center">
            Environmental & Community Organizations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationPartners?.map((partner, index) => (
              <div key={index} className="data-card text-center space-y-4 interactive-hover">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name={partner?.icon} size={24} className="text-secondary" />
                </div>
                
                <div>
                  <h4 className="font-environmental-heading text-foreground mb-1">
                    {partner?.name}
                  </h4>
                  <p className="text-sm text-secondary mb-2">
                    {partner?.type}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {partner?.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-environmental-heading text-foreground">
              Technology Partners
            </h3>
            <p className="text-muted-foreground">
              Powered by industry-leading technology platforms and services
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techPartners?.map((partner, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-environmental"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name={partner?.icon} size={20} className="text-accent" />
                </div>
                
                <div>
                  <div className="font-medium text-foreground">
                    {partner?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {partner?.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-environmental-heading text-foreground">
              Partnership Benefits
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-environmental-good/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-environmental-good" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Scalable Implementation</h4>
                  <p className="text-sm text-muted-foreground">
                    Collaborative approach enables rapid deployment across multiple cities and communities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-environmental-good/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-environmental-good" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Knowledge Sharing</h4>
                  <p className="text-sm text-muted-foreground">
                    Cross-sector expertise accelerates innovation and best practice development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-environmental-good/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-environmental-good" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Sustainable Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Long-term partnerships ensure continued environmental progress and community engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="data-card space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-environmental-heading text-foreground">
                Become a Partner
              </h3>
            </div>
            
            <p className="text-muted-foreground font-environmental-body">
              Join our growing network of organizations committed to environmental innovation and community empowerment. Together, we can create lasting change in India's urban environmental landscape.
            </p>
            
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-environmental">
                <Icon name="Mail" size={16} />
                <span>Contact Partnership Team</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-environmental">
                <Icon name="Download" size={16} />
                <span>Download Partnership Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;