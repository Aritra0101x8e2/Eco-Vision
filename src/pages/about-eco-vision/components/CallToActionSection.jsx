import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const CallToActionSection = () => {
  const actionItems = [
    {
      title: "Explore Our Platform",
      description: "Discover how Eco Vision transforms waste management in your city",
      action: "View Dashboard",
      link: "/homepage-smart-environmental-dashboard",
      icon: "BarChart3",
      color: "primary"
    },
    {
      title: "Find Smart Bins",
      description: "Locate nearby bins and plan optimized routes for waste disposal",
      action: "Open Smart Map",
      link: "/smart-map-interface", 
      icon: "Map",
      color: "secondary"
    },
    {
      title: "Learn & Engage",
      description: "Access environmental education and join community initiatives",
      action: "Education Center",
      link: "/environmental-education-center",
      icon: "BookOpen",
      color: "environmental-good"
    }
  ];

  const contactMethods = [
    {
      method: "Email",
      value: "hello@ecovision.in",
      icon: "Mail",
      action: "Send Email"
    },
    {
      method: "Phone",
      value: "+91 98765 43210",
      icon: "Phone", 
      action: "Call Us"
    },
    {
      method: "Address",
      value: "Eco Vision HQ, Sector V, Salt Lake, Kolkata 700091",
      icon: "MapPin",
      action: "Get Directions"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-environmental-heading text-foreground">
              Ready to Make an{' '}
              <span className="text-primary">Environmental Impact</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground font-environmental-body max-w-3xl mx-auto">
              Join thousands of citizens, municipal partners, and environmental advocates who are transforming India's urban environmental landscape through technology and community action.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/homepage-smart-environmental-dashboard">
              <Button 
                variant="default" 
                size="lg"
                iconName="ArrowRight" 
                iconPosition="right"
                className="interactive-hover"
              >
                Start Your Environmental Journey
              </Button>
            </Link>
            
            <Link to="/smart-map-interface">
              <Button 
                variant="outline" 
                size="lg"
                iconName="Map" 
                iconPosition="left"
                className="interactive-hover"
              >
                Explore Smart Map
              </Button>
            </Link>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {actionItems?.map((item, index) => (
            <div key={index} className="data-card space-y-6 interactive-hover">
              <div className={`w-16 h-16 bg-${item?.color}/10 rounded-2xl flex items-center justify-center`}>
                <Icon name={item?.icon} size={24} className={`text-${item?.color}`} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-environmental-heading text-foreground">
                  {item?.title}
                </h3>
                
                <p className="text-muted-foreground font-environmental-body">
                  {item?.description}
                </p>
              </div>
              
              <Link to={item?.link} className="block">
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="ArrowRight" 
                  iconPosition="right"
                  className="interactive-hover"
                >
                  {item?.action}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Contact & Partnership */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-environmental-heading text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground font-environmental-body">
                Have questions about Eco Vision? Want to partner with us? We'd love to hear from you and explore how we can work together for environmental impact.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods?.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-environmental">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={contact?.icon} size={18} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">
                      {contact?.method}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {contact?.value}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    {contact?.action}
                  </Button>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Linkedin" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-environmental-good/5 rounded-2xl p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Handshake" size={32} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-environmental-heading text-foreground">
                Partner with Eco Vision
              </h3>
              
              <p className="text-muted-foreground font-environmental-body">
                Join our network of municipal governments, environmental organizations, and technology partners creating scalable environmental solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-environmental-good" />
                  <span className="text-muted-foreground">Municipal Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-environmental-good" />
                  <span className="text-muted-foreground">Technology APIs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-environmental-good" />
                  <span className="text-muted-foreground">Community Programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-environmental-good" />
                  <span className="text-muted-foreground">Data Insights</span>
                </div>
              </div>
              
              <Button 
                variant="default" 
                fullWidth
                iconName="Mail" 
                iconPosition="left"
                className="interactive-hover"
              >
                Explore Partnership Opportunities
              </Button>
              
              <Button 
                variant="outline" 
                fullWidth
                iconName="Download" 
                iconPosition="left"
                className="interactive-hover"
              >
                Download Partnership Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 shadow-environmental text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-environmental-good/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Bell" size={24} className="text-environmental-good" />
              </div>
              
              <h3 className="text-2xl font-environmental-heading text-foreground">
                Stay Updated on Environmental Progress
              </h3>
              
              <p className="text-muted-foreground font-environmental-body">
                Get monthly updates on environmental impact, new city partnerships, and community achievements. Join 10,000+ environmental advocates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button 
                variant="default"
                iconName="ArrowRight" 
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              No spam, unsubscribe anytime. Read our{' '}
              <button className="text-primary hover:underline">Privacy Policy</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;