import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const CommunityImpactTicker = () => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);

  const impactMetrics = [
    {
      id: 1,
      icon: "Recycle",
      value: "247.8",
      unit: "tons",
      label: "diverted today",
      color: "text-environmental-good",
      bgColor: "bg-environmental-good/10"
    },
    {
      id: 2,
      icon: "Users",
      value: "1,247",
      unit: "citizens",
      label: "participating today",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: 3,
      icon: "MapPin",
      value: "89",
      unit: "neighborhoods",
      label: "actively engaged",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 4,
      icon: "TrendingUp",
      value: "23%",
      unit: "improvement",
      label: "in waste sorting",
      color: "text-environmental-excellent",
      bgColor: "bg-environmental-excellent/10"
    },
    {
      id: 5,
      icon: "Award",
      value: "156",
      unit: "achievements",
      label: "unlocked this week",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % impactMetrics?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [impactMetrics?.length]);

  return (
    <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 py-8 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-environmental-heading text-foreground">
              Real-Time Community Impact
            </h2>
            <p className="text-muted-foreground font-environmental-body">
              See how Kolkata is transforming through collective environmental action
            </p>
          </div>

          {/* Animated Metric Display */}
          <div className="relative">
            <div className="flex justify-center">
              <div className={`${impactMetrics?.[currentMetricIndex]?.bgColor} rounded-2xl p-8 border border-border/50 shadow-sm transition-all duration-500 transform`}>
                <div className="flex items-center justify-center space-x-4">
                  <div className={`w-16 h-16 ${impactMetrics?.[currentMetricIndex]?.bgColor} rounded-full flex items-center justify-center`}>
                    <Icon 
                      name={impactMetrics?.[currentMetricIndex]?.icon} 
                      size={28} 
                      className={impactMetrics?.[currentMetricIndex]?.color}
                    />
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-4xl md:text-5xl font-bold ${impactMetrics?.[currentMetricIndex]?.color}`}>
                        {impactMetrics?.[currentMetricIndex]?.value}
                      </span>
                      <span className={`text-lg font-medium ${impactMetrics?.[currentMetricIndex]?.color}`}>
                        {impactMetrics?.[currentMetricIndex]?.unit}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {impactMetrics?.[currentMetricIndex]?.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {impactMetrics?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMetricIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMetricIndex 
                      ? 'bg-primary scale-125' :'bg-muted hover:bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Response Time</p>
                  <p className="text-sm font-semibold text-primary">12 min</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
              <div className="flex items-center space-x-2">
                <Icon name="Target" size={16} className="text-secondary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Weekly Goal</p>
                  <p className="text-sm font-semibold text-secondary">87%</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-orange-100">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} className="text-accent" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Energy Saved</p>
                  <p className="text-sm font-semibold text-accent">2.4 MWh</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100">
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={16} className="text-environmental-good" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">CO₂ Reduced</p>
                  <p className="text-sm font-semibold text-environmental-good">1.8T</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
            <span>Updates every 30 seconds</span>
            <span>•</span>
            <span>Last updated: {new Date()?.toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit',
              timeZone: 'Asia/Kolkata'
            })}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactTicker;