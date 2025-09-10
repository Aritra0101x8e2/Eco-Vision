import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CallToActionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const features = [
    {
      icon: "MapPin",
      title: "Real-time Bin Tracking",
      description: "Find nearby bins with live capacity updates"
    },
    {
      icon: "Users",
      title: "Community Engagement",
      description: "Join neighborhood environmental initiatives"
    },
    {
      icon: "BarChart3",
      title: "Impact Analytics",
      description: "Track your environmental contribution"
    },
    {
      icon: "Award",
      title: "Achievement System",
      description: "Earn rewards for sustainable actions"
    }
  ];

  const quickActions = [
    {
      title: "Find Nearest Bin",
      description: "Locate available waste bins in your area",
      icon: "Navigation",
      link: "/smart-map-interface",
      color: "bg-primary text-primary-foreground"
    },
    {
      title: "Report Issue",
      description: "Help improve waste management infrastructure",
      icon: "AlertTriangle",
      link: "/smart-map-interface",
      color: "bg-secondary text-secondary-foreground"
    },
    {
      title: "Join Community",
      description: "Connect with local environmental advocates",
      icon: "Users",
      link: "/environmental-education-center",
      color: "bg-accent text-accent-foreground"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Main CTA */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-environmental-heading text-foreground">
                Ready to Make a
                <span className="block text-primary">Real Impact?</span>
              </h2>
              <p className="text-xl text-muted-foreground font-environmental-body max-w-3xl mx-auto">
                Join thousands of Kolkata residents who are transforming their neighborhoods through smart environmental action. Every small step creates lasting change.
              </p>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/smart-map-interface">
                <Button
                  variant="default"
                  size="xl"
                  iconName="MapPin"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  Start Exploring Now
                </Button>
              </Link>

              <Link to="/environmental-education-center">
                <Button
                  variant="outline"
                  size="xl"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="border-secondary text-secondary hover:bg-secondary/10 shadow-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>1,200+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-secondary" />
                <span>89 Neighborhoods</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Recycle" size={16} className="text-environmental-good" />
                <span>247T Waste Diverted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span>Municipal Partnership</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features?.map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-environmental-heading text-foreground mb-2">
                  {feature?.title}
                </h3>
                <p className="text-sm text-muted-foreground font-environmental-body">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-environmental-heading text-foreground mb-2">
                Quick Actions
              </h3>
              <p className="text-muted-foreground font-environmental-body">
                Get started with these essential features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quickActions?.map((action, index) => (
                <Link key={index} to={action?.link} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`w-14 h-14 ${action?.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={action?.icon} size={28} />
                    </div>
                    <h4 className="text-lg font-environmental-heading text-foreground mb-2">
                      {action?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-environmental-body mb-4">
                      {action?.description}
                    </p>
                    <div className="flex items-center text-primary group-hover:text-primary/80">
                      <span className="text-sm font-medium">Get Started</span>
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-environmental">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-environmental-heading text-foreground">
                  Stay Updated on Environmental Progress
                </h3>
                <p className="text-muted-foreground font-environmental-body">
                  Get weekly insights on your neighborhood's environmental improvements, new features, and community achievements.
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e?.target?.value)}
                      required
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      variant="default"
                      loading={isLoading}
                      iconName="Mail"
                      iconPosition="left"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-environmental-good/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="CheckCircle" size={32} className="text-environmental-good" />
                  </div>
                  <div>
                    <h4 className="text-lg font-environmental-heading text-foreground mb-2">
                      Successfully Subscribed!
                    </h4>
                    <p className="text-muted-foreground">
                      You'll receive your first environmental update within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="BarChart3" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Weekly Impact Reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Bell" size={16} className="text-secondary" />
                  <span className="text-sm text-muted-foreground">Feature Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Community Highlights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-environmental-heading text-foreground">
                Join the Environmental Movement
              </h3>
              <p className="text-muted-foreground">
                Be part of Kolkata's transformation toward a cleaner, smarter future
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/smart-map-interface">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Rocket"
                  iconPosition="left"
                  className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </Button>
              </Link>

              <Link to="/about-eco-vision">
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="Info"
                  iconPosition="left"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Learn About Eco Vision
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">1.2K+</p>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">89</p>
                <p className="text-muted-foreground">Neighborhoods</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-environmental-good">247T</p>
                <p className="text-muted-foreground">Waste Diverted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;