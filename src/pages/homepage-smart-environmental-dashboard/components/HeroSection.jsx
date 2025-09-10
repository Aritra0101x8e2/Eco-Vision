import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [locationPermission, setLocationPermission] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleLocationRequest = async () => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          setLocationPermission('granted');
          window.location.href = '/smart-map-interface';
        },
        (error) => {
          setLocationPermission('denied');
          console.log('Location access denied');
        }
      );
    }
  };

  const realTimeData = {
    airQuality: {
      aqi: 87,
      status: "Moderate",
      color: "text-environmental-moderate"
    },
    wasteStats: {
      todayDiverted: 24.7,
      weeklyIncrease: 12
    },
    temperature: 28,
    humidity: 72
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-16 overflow-hidden">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
       
          <div className="space-y-8">
           
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200">
              <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
              <span className="text-sm font-medium text-environmental-good">
                Live Environmental Data
              </span>
              <span className="text-xs text-muted-foreground">
                {currentTime?.toLocaleTimeString('en-IN', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZone: 'Asia/Kolkata'
                })}
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-environmental-heading text-foreground leading-tight">
                Smart Environmental
                <span className="block text-primary">Intelligence</span>
                <span className="block text-secondary text-3xl md:text-4xl lg:text-5xl">
                  for Kolkata
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-environmental-body max-w-2xl">
                Transform your neighborhood through real-time waste management, community engagement, and environmental intelligence. Every action counts toward a cleaner, smarter city.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100">
                <div className="flex items-center space-x-2">
                  <Icon name="Wind" size={20} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Air Quality</p>
                    <p className={`text-sm font-semibold ${realTimeData?.airQuality?.color}`}>
                      AQI {realTimeData?.airQuality?.aqi}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100">
                <div className="flex items-center space-x-2">
                  <Icon name="Recycle" size={20} className="text-environmental-good" />
                  <div>
                    <p className="text-xs text-muted-foreground">Diverted Today</p>
                    <p className="text-sm font-semibold text-environmental-good">
                      {realTimeData?.wasteStats?.todayDiverted}T
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                <div className="flex items-center space-x-2">
                  <Icon name="Thermometer" size={20} className="text-secondary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Temperature</p>
                    <p className="text-sm font-semibold text-secondary">
                      {realTimeData?.temperature}°C
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                <div className="flex items-center space-x-2">
                  <Icon name="Droplets" size={20} className="text-secondary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Humidity</p>
                    <p className="text-sm font-semibold text-secondary">
                      {realTimeData?.humidity}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleLocationRequest}
                iconName="MapPin"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Explore Your Neighborhood
              </Button>

              <Link to="/smart-map-interface">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="w-full sm:w-auto border-secondary text-secondary "
                >
                  See Community Impact
                </Button>
              </Link>
            </div>
            {locationPermission === 'denied' && (
              <div className="flex items-center space-x-2 text-sm text-warning bg-warning/10 rounded-lg p-3">
                <Icon name="AlertTriangle" size={16} />
                <span>Location access helps us show nearby bins and environmental data</span>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-environmental">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-environmental-heading text-foreground">
                    Live City Dashboard
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
                    <span className="text-xs text-environmental-good font-medium">LIVE</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Today's Waste Diversion</span>
                    <span className="text-sm font-semibold text-environmental-good">
                      {realTimeData?.wasteStats?.todayDiverted}T / 30T
                    </span>
                  </div>
                  <div className="progress-environmental h-3">
                    <div 
                      className="progress-fill bg-environmental-good rounded-full transition-all duration-1000"
                      style={{ width: `${(realTimeData?.wasteStats?.todayDiverted / 30) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    ↗ {realTimeData?.wasteStats?.weeklyIncrease}% increase from last week
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-environmental-good/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="CheckCircle" size={20} className="text-environmental-good" />
                    </div>
                    <p className="text-xs text-muted-foreground">Available</p>
                    <p className="text-sm font-semibold text-environmental-good">847</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-environmental-moderate/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="AlertCircle" size={20} className="text-environmental-moderate" />
                    </div>
                    <p className="text-xs text-muted-foreground">Filling</p>
                    <p className="text-sm font-semibold text-environmental-moderate">156</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-environmental-poor/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="XCircle" size={20} className="text-environmental-poor" />
                    </div>
                    <p className="text-xs text-muted-foreground">Full</p>
                    <p className="text-sm font-semibold text-environmental-poor">23</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Recent Community Actions</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="w-2 h-2 bg-environmental-good rounded-full"></div>
                      <span className="text-muted-foreground">Salt Lake reported bin maintenance</span>
                      <span className="text-muted-foreground">2m ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">Park Street achieved weekly goal</span>
                      <span className="text-muted-foreground">5m ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">New World organized cleanup</span>
                      <span className="text-muted-foreground">12m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-achievement-unlock">
              <Icon name="Award" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;