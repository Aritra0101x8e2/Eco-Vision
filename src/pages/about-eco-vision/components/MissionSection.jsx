import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const missionPoints = [
    {
      icon: "Eye",
      title: "Visible Impact",
      description: "Making environmental progress tangible and immediate rather than abstract and distant through real-time data visualization."
    },
    {
      icon: "Users",
      title: "Community Empowerment", 
      description: "Transforming citizens from passive observers to active participants in environmental stewardship and urban sustainability."
    },
    {
      icon: "BarChart3",
      title: "Measurable Progress",
      description: "Providing transparent, data-driven insights that demonstrate collective environmental achievements and individual contributions."
    },
    {
      icon: "Zap",
      title: "Technology for Purpose",
      description: "Ensuring innovation serves environmental goals by simplifying rather than complicating sustainable actions."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Mission</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-environmental-heading text-foreground">
            Transforming Urban Environmental Management
          </h2>
          
          <p className="text-lg text-muted-foreground font-environmental-body max-w-3xl mx-auto">
            We believe technology should serve sustainability, not complicate it. Our mission is to bridge the gap between smart city infrastructure and citizen empowerment, creating an ecosystem where environmental progress is visible, measurable, and community-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints?.map((point, index) => (
            <div 
              key={index}
              className="data-card text-center space-y-4 interactive-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name={point?.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-environmental-heading text-foreground">
                {point?.title}
              </h3>
              
              <p className="text-muted-foreground font-environmental-body">
                {point?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Lightbulb" size={32} className="text-primary" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-environmental-heading text-foreground">
              Our Vision for India's Environmental Future
            </h3>
            
            <p className="text-lg text-muted-foreground font-environmental-body max-w-4xl mx-auto">
              "We envision Indian cities where every citizen is an environmental steward, where technology makes sustainability accessible, and where collective action creates visible, lasting change. Through Eco Vision, we're not just managing waste—we're cultivating environmental consciousness and community pride that transforms urban living."
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-primary font-medium">
              <Icon name="Quote" size={16} />
              <span>Eco Vision Leadership Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;