import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NeighborhoodCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const neighborhoods = [
    {
      id: 1,
      name: "Salt Lake City",
      zone: "Sector V",
      distance: "2.3 km",
      airQuality: {
        aqi: 78,
        status: "Good",
        color: "text-environmental-good"
      },
      wasteStats: {
        binsAvailable: 24,
        binsTotal: 28,
        efficiency: 89
      },
      communityScore: 92,
      recentActivity: "Cleanup drive completed",
      coordinates: { lat: 22.5726, lng: 88.3639 },
      image: ""
    },
    {
      id: 2,
      name: "Park Street",
      zone: "Central Kolkata",
      distance: "1.8 km",
      airQuality: {
        aqi: 95,
        status: "Moderate",
        color: "text-environmental-moderate"
      },
      wasteStats: {
        binsAvailable: 18,
        binsTotal: 22,
        efficiency: 82
      },
      communityScore: 87,
      recentActivity: "New recycling bins installed",
      coordinates: { lat: 22.5448, lng: 88.3426 },
      image: ""
    },
    {
      id: 3,
      name: "New Market",
      zone: "Commercial District",
      distance: "3.1 km",
      airQuality: {
        aqi: 102,
        status: "Moderate",
        color: "text-environmental-moderate"
      },
      wasteStats: {
        binsAvailable: 31,
        binsTotal: 35,
        efficiency: 94
      },
      communityScore: 78,
      recentActivity: "Waste sorting workshop held",
      coordinates: { lat: 22.5675, lng: 88.3654 },
      image: ""
    },
    {
      id: 4,
      name: "Howrah Bridge",
      zone: "Riverside",
      distance: "4.2 km",
      airQuality: {
        aqi: 87,
        status: "Good",
        color: "text-environmental-good"
      },
      wasteStats: {
        binsAvailable: 15,
        binsTotal: 18,
        efficiency: 91
      },
      communityScore: 85,
      recentActivity: "River cleanup initiative",
      coordinates: { lat: 22.5958, lng: 88.3468 },
      image: ""
    },
    {
      id: 5,
      name: "Gariahat",
      zone: "South Kolkata",
      distance: "2.7 km",
      airQuality: {
        aqi: 91,
        status: "Good",
        color: "text-environmental-good"
      },
      wasteStats: {
        binsAvailable: 22,
        binsTotal: 26,
        efficiency: 88
      },
      communityScore: 90,
      recentActivity: "Community garden project",
      coordinates: { lat: 22.5186, lng: 88.3639 },
      image: ""
    },
    {
      id: 6,
      name: "Esplanade",
      zone: "Heritage District",
      distance: "3.5 km",
      airQuality: {
        aqi: 84,
        status: "Good",
        color: "text-environmental-good"
      },
      wasteStats: {
        binsAvailable: 19,
        binsTotal: 21,
        efficiency: 93
      },
      communityScore: 86,
      recentActivity: "Heritage preservation drive",
      coordinates: { lat: 22.5697, lng: 88.3467 },
      image: ""
    }
  ];

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 90) return "text-environmental-excellent";
    if (efficiency >= 80) return "text-environmental-good";
    if (efficiency >= 70) return "text-environmental-moderate";
    return "text-environmental-poor";
  };

  const getCommunityScoreColor = (score) => {
    if (score >= 90) return "text-community-active";
    if (score >= 80) return "text-community-engaged";
    return "text-community-neutral";
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
  
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-environmental-heading text-foreground">
              Explore Your Neighborhoods
            </h2>
            <p className="text-lg text-muted-foreground font-environmental-body max-w-3xl mx-auto">
              Discover hyperlocal environmental data, community achievements, and real-time waste management insights for areas around you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods?.map((neighborhood) => (
              <div
                key={neighborhood?.id}
                className={`data-card interactive-hover cursor-pointer transition-all duration-300 ${
                  hoveredCard === neighborhood?.id ? 'shadow-lg scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(neighborhood?.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={neighborhood?.image}
                    alt={neighborhood?.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
           
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-foreground">{neighborhood?.distance}</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${
                        neighborhood?.airQuality?.status === 'Good' ? 'bg-environmental-good' : 'bg-environmental-moderate'
                      }`}></div>
                      <span className="text-xs font-medium text-foreground">
                        AQI {neighborhood?.airQuality?.aqi}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">

                  <div>
                    <h3 className="text-lg font-environmental-heading text-foreground">
                      {neighborhood?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{neighborhood?.zone}</p>
                  </div>

                  <div className="space-y-3">
                
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Wind" size={16} className={neighborhood?.airQuality?.color} />
                        <span className="text-sm text-foreground">Air Quality</span>
                      </div>
                      <span className={`text-sm font-medium ${neighborhood?.airQuality?.color}`}>
                        {neighborhood?.airQuality?.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Recycle" size={16} className={getEfficiencyColor(neighborhood?.wasteStats?.efficiency)} />
                        <span className="text-sm text-foreground">Efficiency</span>
                      </div>
                      <span className={`text-sm font-medium ${getEfficiencyColor(neighborhood?.wasteStats?.efficiency)}`}>
                        {neighborhood?.wasteStats?.efficiency}%
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Users" size={16} className={getCommunityScoreColor(neighborhood?.communityScore)} />
                        <span className="text-sm text-foreground">Community</span>
                      </div>
                      <span className={`text-sm font-medium ${getCommunityScoreColor(neighborhood?.communityScore)}`}>
                        {neighborhood?.communityScore}/100
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Available Bins</span>
                      <span className="text-sm font-medium text-foreground">
                        {neighborhood?.wasteStats?.binsAvailable}/{neighborhood?.wasteStats?.binsTotal}
                      </span>
                    </div>
                    <div className="progress-environmental h-2">
                      <div 
                        className="progress-fill bg-environmental-good"
                        style={{ 
                          width: `${(neighborhood?.wasteStats?.binsAvailable / neighborhood?.wasteStats?.binsTotal) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-2">
                    <Icon name="Activity" size={12} />
                    <span>{neighborhood?.recentActivity}</span>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Link to="/smart-map-interface" className="flex-1">
                      <Button
                        variant="default"
                        size="sm"
                        iconName="Map"
                        iconPosition="left"
                        className="w-full"
                      >
                        View Map
                      </Button>
                    </Link>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="BarChart3"
                      className="px-3"
                    >
                    </Button>
                  </div>
                </div>

                {hoveredCard === neighborhood?.id && (
                  <div className="absolute inset-0 bg-primary/5 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link to="/smart-map-interface">
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore All Neighborhoods
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodCards;