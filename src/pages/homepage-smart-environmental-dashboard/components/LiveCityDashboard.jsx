import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveCityDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [liveData, setLiveData] = useState({
    timestamp: new Date(),
    totalBins: 1026,
    activeBins: 847,
    fullBins: 23,
    maintenanceBins: 156,
    wasteCollected: 247.8,
    recyclingRate: 68.5,
    energySaved: 2.4,
    co2Reduced: 1.8
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        timestamp: new Date(),
        wasteCollected: prev?.wasteCollected + (Math.random() - 0.5) * 0.1,
        recyclingRate: Math.max(60, Math.min(75, prev?.recyclingRate + (Math.random() - 0.5) * 0.2)),
        activeBins: Math.max(800, Math.min(900, prev?.activeBins + Math.floor((Math.random() - 0.5) * 4))),
        fullBins: Math.max(15, Math.min(35, prev?.fullBins + Math.floor((Math.random() - 0.5) * 2)))
      }));
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'bins', label: 'Bin Network', icon: 'Trash2' },
    { id: 'environment', label: 'Environmental', icon: 'Leaf' },
    { id: 'community', label: 'Community', icon: 'Users' }
  ];

  const binStatusData = [
    {
      status: 'Available',
      count: liveData?.activeBins,
      percentage: Math.round((liveData?.activeBins / liveData?.totalBins) * 100),
      color: 'text-environmental-good',
      bgColor: 'bg-environmental-good',
      icon: 'CheckCircle'
    },
    {
      status: 'Filling',
      count: liveData?.maintenanceBins,
      percentage: Math.round((liveData?.maintenanceBins / liveData?.totalBins) * 100),
      color: 'text-environmental-moderate',
      bgColor: 'bg-environmental-moderate',
      icon: 'AlertCircle'
    },
    {
      status: 'Full',
      count: liveData?.fullBins,
      percentage: Math.round((liveData?.fullBins / liveData?.totalBins) * 100),
      color: 'text-environmental-poor',
      bgColor: 'bg-environmental-poor',
      icon: 'XCircle'
    }
  ];

  const environmentalMetrics = [
    {
      label: 'Waste Collected Today',
      value: liveData?.wasteCollected?.toFixed(1),
      unit: 'tons',
      change: '+12%',
      changeType: 'positive',
      icon: 'Recycle',
      color: 'text-environmental-good'
    },
    {
      label: 'Recycling Rate',
      value: liveData?.recyclingRate?.toFixed(1),
      unit: '%',
      change: '+5.2%',
      changeType: 'positive',
      icon: 'RotateCcw',
      color: 'text-secondary'
    },
    {
      label: 'Energy Saved',
      value: liveData?.energySaved?.toFixed(1),
      unit: 'MWh',
      change: '+8.7%',
      changeType: 'positive',
      icon: 'Zap',
      color: 'text-accent'
    },
    {
      label: 'CO₂ Reduced',
      value: liveData?.co2Reduced?.toFixed(1),
      unit: 'tons',
      change: '+15.3%',
      changeType: 'positive',
      icon: 'Leaf',
      color: 'text-environmental-excellent'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'maintenance',
      message: 'Bin #KOL-847 requires maintenance',
      location: 'Salt Lake Sector V',
      time: '5 min ago',
      priority: 'medium',
      icon: 'AlertTriangle'
    },
    {
      id: 2,
      type: 'full',
      message: 'Bin cluster near Park Street is full',
      location: 'Park Street Metro',
      time: '12 min ago',
      priority: 'high',
      icon: 'AlertCircle'
    },
    {
      id: 3,
      type: 'success',
      message: 'New recycling milestone achieved',
      location: 'Gariahat Market',
      time: '18 min ago',
      priority: 'low',
      icon: 'CheckCircle'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
         
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {environmentalMetrics?.map((metric, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name={metric?.icon} size={16} className={metric?.color} />
                    <span className="text-xs text-muted-foreground">{metric?.label}</span>
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-lg font-bold ${metric?.color}`}>
                      {metric?.value}
                    </span>
                    <span className={`text-sm ${metric?.color}`}>
                      {metric?.unit}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Icon 
                      name={metric?.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
                      size={12} 
                      className="text-environmental-good" 
                    />
                    <span className="text-xs text-environmental-good">{metric?.change}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Recent Alerts */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Recent Alerts</h4>
              <div className="space-y-2">
                {recentAlerts?.map((alert) => (
                  <div key={alert?.id} className="flex items-center space-x-3 p-3 bg-white/40 rounded-lg border border-border/50">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      alert?.priority === 'high' ? 'bg-environmental-poor/20' :
                      alert?.priority === 'medium'? 'bg-environmental-moderate/20' : 'bg-environmental-good/20'
                    }`}>
                      <Icon 
                        name={alert?.icon} 
                        size={14} 
                        className={
                          alert?.priority === 'high' ? 'text-environmental-poor' :
                          alert?.priority === 'medium'? 'text-environmental-moderate' : 'text-environmental-good'
                        }
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{alert?.message}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{alert?.location}</span>
                        <span>•</span>
                        <span>{alert?.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bins':
        return (
          <div className="space-y-6">
            {/* Bin Status Overview */}
            <div className="grid grid-cols-3 gap-4">
              {binStatusData?.map((status, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${status?.bgColor}/20 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={status?.icon} size={24} className={status?.color} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{status?.status}</p>
                  <p className={`text-xl font-bold ${status?.color}`}>{status?.count}</p>
                  <p className="text-xs text-muted-foreground">{status?.percentage}% of total</p>
                </div>
              ))}
            </div>
            {/* Bin Network Map Preview */}
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-3" />
              <h4 className="text-lg font-medium text-foreground mb-2">Interactive Bin Network</h4>
              <p className="text-sm text-muted-foreground mb-4">
                View real-time bin locations, capacity, and route optimization
              </p>
              <Link to="/bin-network-management">
                <Button variant="default" iconName="ExternalLink" iconPosition="right">
                  Open Full Network View
                </Button>
              </Link>
            </div>
          </div>
        );

      case 'environment':
        return (
          <div className="space-y-6">
            {/* Environmental Progress */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Daily Waste Diversion Goal</span>
                  <span className="text-sm text-environmental-good">
                    {liveData?.wasteCollected?.toFixed(1)}T / 300T
                  </span>
                </div>
                <div className="progress-environmental h-3">
                  <div 
                    className="progress-fill bg-environmental-good"
                    style={{ width: `${(liveData?.wasteCollected / 300) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Recycling Rate Target</span>
                  <span className="text-sm text-secondary">
                    {liveData?.recyclingRate?.toFixed(1)}% / 75%
                  </span>
                </div>
                <div className="progress-environmental h-3">
                  <div 
                    className="progress-fill bg-secondary"
                    style={{ width: `${(liveData?.recyclingRate / 75) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            {/* Environmental Impact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-environmental-good/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="TreePine" size={20} className="text-environmental-good" />
                  <span className="text-sm font-medium text-environmental-good">Trees Saved</span>
                </div>
                <p className="text-2xl font-bold text-environmental-good">1,247</p>
                <p className="text-xs text-muted-foreground">Equivalent trees saved this month</p>
              </div>

              <div className="bg-secondary/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Droplets" size={20} className="text-secondary" />
                  <span className="text-sm font-medium text-secondary">Water Saved</span>
                </div>
                <p className="text-2xl font-bold text-secondary">89.2K</p>
                <p className="text-xs text-muted-foreground">Liters saved through recycling</p>
              </div>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-community-active/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Users" size={20} className="text-community-active" />
                  <span className="text-sm font-medium text-community-active">Active Users</span>
                </div>
                <p className="text-2xl font-bold text-community-active">1,247</p>
                <p className="text-xs text-muted-foreground">Participated today</p>
              </div>

              <div className="bg-accent/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Award" size={20} className="text-accent" />
                  <span className="text-sm font-medium text-accent">Achievements</span>
                </div>
                <p className="text-2xl font-bold text-accent">156</p>
                <p className="text-xs text-muted-foreground">Unlocked this week</p>
              </div>
            </div>
            {/* Top Neighborhoods */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Top Performing Neighborhoods</h4>
              <div className="space-y-2">
                {['Salt Lake City', 'Gariahat', 'Esplanade']?.map((neighborhood, index) => (
                  <div key={neighborhood} className="flex items-center justify-between p-2 bg-white/40 rounded">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-accent text-accent-foreground' :
                        index === 1 ? 'bg-muted text-muted-foreground': 'bg-primary/20 text-primary'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground">{neighborhood}</span>
                    </div>
                    <span className="text-sm text-community-active font-medium">
                      {95 - index * 3}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-environmental-heading text-foreground">
              Live City Dashboard
            </h2>
            <p className="text-lg text-muted-foreground font-environmental-body max-w-3xl mx-auto">
              Real-time insights into Kolkata's environmental performance, waste management efficiency, and community engagement.
            </p>
          </div>

          {/* Dashboard Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-environmental overflow-hidden">
            {/* Dashboard Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-environmental-good rounded-full animate-environmental-pulse"></div>
                  <h3 className="text-xl font-environmental-heading text-foreground">
                    Kolkata Environmental Intelligence
                  </h3>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Last Updated</p>
                    <p className="text-sm font-medium text-foreground">
                      {liveData?.timestamp?.toLocaleTimeString('en-IN', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        timeZone: 'Asia/Kolkata'
                      })}
                    </p>
                  </div>
                  
                  <Link to="/municipal-dashboard">
                    <Button variant="outline" size="sm" iconName="ExternalLink">
                      Full Dashboard
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 mt-6 bg-muted/50 rounded-lg p-1">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === tab?.id
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/smart-map-interface" className="group">
              <div className="bg-primary/5 hover:bg-primary/10 rounded-xl p-6 border border-primary/20 transition-all duration-300 group-hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Map" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-environmental-heading text-foreground">Smart Map</h4>
                    <p className="text-sm text-muted-foreground">Interactive city view</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore real-time bin locations, routes, and environmental data layers.
                </p>
              </div>
            </Link>

            <Link to="/bin-network-management" className="group">
              <div className="bg-secondary/5 hover:bg-secondary/10 rounded-xl p-6 border border-secondary/20 transition-all duration-300 group-hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Trash2" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-environmental-heading text-foreground">Bin Network</h4>
                    <p className="text-sm text-muted-foreground">Management system</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Monitor bin capacity, schedule maintenance, and optimize collection routes.
                </p>
              </div>
            </Link>

            <Link to="/environmental-education-center" className="group">
              <div className="bg-accent/5 hover:bg-accent/10 rounded-xl p-6 border border-accent/20 transition-all duration-300 group-hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name="BookOpen" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-environmental-heading text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">Learning resources</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Learn about waste sorting, sustainability practices, and environmental impact.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCityDashboard;