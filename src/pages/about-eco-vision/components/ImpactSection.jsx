import React from 'react';
import Icon from '../../../components/AppIcon';
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const ImpactSection = () => {
  const impactMetrics = [
    {
      title: "Waste Diverted",
      value: "2.5M",
      unit: "Kg",
      change: "+35%",
      trend: "up",
      icon: "Recycle",
      color: "environmental-good"
    },
    {
      title: "Citizens Engaged",
      value: "50K+",
      unit: "Active Users",
      change: "+120%",
      trend: "up", 
      icon: "Users",
      color: "primary"
    },
    {
      title: "Cities Connected",
      value: "15",
      unit: "Urban Centers",
      change: "+8",
      trend: "up",
      icon: "MapPin",
      color: "secondary"
    },
    {
      title: "CO₂ Reduced",
      value: "850",
      unit: "Tonnes",
      change: "+42%",
      trend: "up",
      icon: "Leaf",
      color: "environmental-excellent"
    }
  ];

  const monthlyData = [
    { month: 'Jan', waste: 180, users: 3200, bins: 450 },
    { month: 'Feb', waste: 220, users: 4100, bins: 520 },
    { month: 'Mar', waste: 280, users: 5800, bins: 680 },
    { month: 'Apr', waste: 350, users: 7200, bins: 820 },
    { month: 'May', waste: 420, users: 9100, bins: 950 },
    { month: 'Jun', waste: 480, users: 11500, bins: 1100 }
  ];

  const cityData = [
    { name: 'Kolkata', value: 35, color: '#2E7D32' },
    { name: 'Pune', value: 25, color: '#1976D2' },
    { name: 'Bengaluru', value: 20, color: '#F57C00' },
    { name: 'Chennai', value: 12, color: '#4CAF50' },
    { name: 'Others', value: 8, color: '#757575' }
  ];

  const achievements = [
    {
      title: "First Smart Waste Platform in India",
      date: "March 2023",
      description: "Launched comprehensive IoT-enabled waste management platform",
      icon: "Award"
    },
    {
      title: "Municipal Partnership Milestone",
      date: "August 2023", 
      description: "Signed agreements with 10+ municipal corporations across India",
      icon: "Handshake"
    },
    {
      title: "Community Impact Recognition",
      date: "December 2023",
      description: "Received National Environmental Excellence Award for community engagement",
      icon: "Trophy"
    },
    {
      title: "Technology Innovation Award",
      date: "February 2024",
      description: "Recognized for IoT innovation in urban environmental management",
      icon: "Zap"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-environmental-excellent/10 rounded-full">
            <Icon name="TrendingUp" size={16} className="text-environmental-excellent" />
            <span className="text-sm font-medium text-environmental-excellent">Impact Metrics</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-environmental-heading text-foreground">
            Measurable Environmental Progress
          </h2>
          
          <p className="text-lg text-muted-foreground font-environmental-body max-w-3xl mx-auto">
            Real achievements demonstrating how technology and community engagement create lasting environmental impact across Indian cities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics?.map((metric, index) => (
            <div key={index} className="data-card text-center space-y-4 interactive-hover">
              <div className={`w-16 h-16 bg-${metric?.color}/10 rounded-2xl flex items-center justify-center mx-auto`}>
                <Icon name={metric?.icon} size={24} className={`text-${metric?.color}`} />
              </div>
              
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="text-3xl font-environmental-heading text-foreground">
                    {metric?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric?.unit}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-1">
                  <Icon 
                    name={metric?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                    size={14} 
                    className="text-environmental-good" 
                  />
                  <span className="text-sm font-medium text-environmental-good">
                    {metric?.change}
                  </span>
                </div>
                
                <div className="text-sm font-medium text-foreground">
                  {metric?.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
         
          <div className="data-card space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-environmental-heading text-foreground">
                Monthly Growth Trends
              </h3>
              <div className="flex items-center space-x-2 text-sm text-environmental-good">
                <Icon name="TrendingUp" size={16} />
                <span>+120% Growth</span>
              </div>
            </div>
            
            <div className="w-full h-64" aria-label="Monthly Growth Trends Chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                  <YAxis stroke="#6B7280" fontSize={12} />
                  <Line 
                    type="monotone" 
                    dataKey="waste" 
                    stroke="#2E7D32" 
                    strokeWidth={2}
                    dot={{ fill: '#2E7D32', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#1976D2" 
                    strokeWidth={2}
                    dot={{ fill: '#1976D2', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Waste Diverted (Tonnes)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-muted-foreground">Active Users</span>
              </div>
            </div>
          </div>

          <div className="data-card space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-environmental-heading text-foreground">
                City-wise Impact Distribution
              </h3>
              <div className="flex items-center space-x-2 text-sm text-secondary">
                <Icon name="MapPin" size={16} />
                <span>15 Cities</span>
              </div>
            </div>
            
            <div className="w-full h-64" aria-label="City Distribution Pie Chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {cityData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              {cityData?.map((city, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: city?.color }}
                  ></div>
                  <span className="text-muted-foreground">{city?.name}</span>
                  <span className="text-foreground font-medium">{city?.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-environmental">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl font-environmental-heading text-foreground">
              Key Achievements & Milestones
            </h3>
            <p className="text-muted-foreground">
              Major milestones in our journey toward environmental transformation
            </p>
          </div>

          <div className="space-y-8">
            {achievements?.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={achievement?.icon} size={20} className="text-primary" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-environmental-heading text-foreground">
                      {achievement?.title}
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      {achievement?.date}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-environmental-body">
                    {achievement?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-environmental-good/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-environmental-heading text-foreground">
                Our 2025 Environmental Goals
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ambitious targets for expanding environmental impact across India's urban landscape
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-3xl font-environmental-heading text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Active Citizens</div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl font-environmental-heading text-environmental-good">50</div>
                <div className="text-sm text-muted-foreground">Connected Cities</div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-environmental-good h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl font-environmental-heading text-secondary">10M</div>
                <div className="text-sm text-muted-foreground">Kg Waste Diverted</div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;