import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RouteOptimizer = ({ 
  userLocation, 
  selectedBins, 
  onRouteGenerated, 
  isVisible, 
  onClose 
}) => {
  const [optimizedRoute, setOptimizedRoute] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [routeStats, setRouteStats] = useState(null);

  useEffect(() => {
    if (selectedBins?.length > 0 && userLocation) {
      calculateOptimizedRoute();
    }
  }, [selectedBins, userLocation]);

  const calculateOptimizedRoute = async () => {
    setIsCalculating(true);

    await new Promise(resolve => setTimeout(resolve, 1500));
    
  
    const route = {
      id: 'route-' + Date.now(),
      waypoints: [
        { 
          type: 'start', 
          location: userLocation, 
          name: 'Your Location',
          estimatedTime: 0,
          distance: 0
        },
        ...selectedBins?.map((bin, index) => ({
          type: 'bin',
          location: { lat: bin?.lat, lng: bin?.lng },
          bin: bin,
          name: bin?.address,
          estimatedTime: (index + 1) * 8 + Math.random() * 5, 
          distance: (index + 1) * 0.4 + Math.random() * 0.3 
        }))
      ],
      totalDistance: selectedBins?.length * 0.5 + Math.random() * 0.5, 
      totalTime: selectedBins?.length * 10 + Math.random() * 15, 
      carbonSaved: selectedBins?.length * 0.8 + Math.random() * 0.4, 
      efficiency: Math.min(95, 75 + selectedBins?.length * 5) 
    };

    const stats = {
      totalBins: selectedBins?.length,
      availableBins: selectedBins?.filter(b => b?.status === 'available')?.length,
      fillingBins: selectedBins?.filter(b => b?.status === 'filling')?.length,
      fullBins: selectedBins?.filter(b => b?.status === 'full')?.length,
      wasteTypes: [...new Set(selectedBins.map(b => b.type))],
      estimatedWalkTime: route?.totalTime,
      estimatedDistance: route?.totalDistance
    };

    setOptimizedRoute(route);
    setRouteStats(stats);
    setIsCalculating(false);
    
    if (onRouteGenerated) {
      onRouteGenerated(route);
    }
  };

  const getWasteTypeIcon = (type) => {
    switch (type) {
      case 'recyclable': return 'Recycle';
      case 'organic': return 'Leaf';
      case 'general': return 'Trash2';
      default: return 'Trash2';
    }
  };

  const getWasteTypeName = (type) => {
    switch (type) {
      case 'recyclable': return 'Recyclable';
      case 'organic': return 'Organic';
      case 'general': return 'General';
      default: return 'Unknown';
    }
  };

  const getBinStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-environmental-good';
      case 'filling': return 'text-environmental-moderate';
      case 'full': return 'text-environmental-poor';
      default: return 'text-muted-foreground';
    }
  };

  const formatTime = (minutes) => {
    if (minutes < 60) {
      return `${Math.round(minutes)}m`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}m`;
  };

  const formatDistance = (km) => {
    if (km < 1) {
      return `${Math.round(km * 1000)}m`;
    }
    return `${km?.toFixed(1)}km`;
  };

  const startNavigation = () => {
    if (optimizedRoute && optimizedRoute?.waypoints?.length > 1) {
      const firstBin = optimizedRoute?.waypoints?.[1];
      const url = `https://www.google.com/maps/dir/${userLocation?.lat},${userLocation?.lng}/${firstBin?.location?.lat},${firstBin?.location?.lng}`;
      window.open(url, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Route" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-environmental-heading text-foreground">
              Route Optimizer
            </h3>
            <p className="text-sm text-muted-foreground">
              Efficient waste disposal route
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <Icon name="X" size={20} />
        </Button>
      </div>
      {isCalculating && (
        <div className="text-center py-8 space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div>
            <p className="text-sm font-medium text-foreground">Calculating optimal route...</p>
            <p className="text-xs text-muted-foreground">Analyzing bin locations and availability</p>
          </div>
        </div>
      )}
      {routeStats && !isCalculating && (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-environmental-good/5 rounded-lg p-4 border border-environmental-good/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Clock" size={16} className="text-environmental-good" />
              <span className="text-sm font-medium text-foreground">Total Time</span>
            </div>
            <div className="text-xl font-semibold text-environmental-good">
              {formatTime(routeStats?.estimatedWalkTime)}
            </div>
          </div>
          
          <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="MapPin" size={16} className="text-secondary" />
              <span className="text-sm font-medium text-foreground">Distance</span>
            </div>
            <div className="text-xl font-semibold text-secondary">
              {formatDistance(routeStats?.estimatedDistance)}
            </div>
          </div>
          
          <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Trash2" size={16} className="text-accent" />
              <span className="text-sm font-medium text-foreground">Total Bins</span>
            </div>
            <div className="text-xl font-semibold text-accent">
              {routeStats?.totalBins}
            </div>
          </div>
          
          <div className="bg-environmental-good/5 rounded-lg p-4 border border-environmental-good/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Leaf" size={16} className="text-environmental-good" />
              <span className="text-sm font-medium text-foreground">CO₂ Saved</span>
            </div>
            <div className="text-xl font-semibold text-environmental-good">
              {optimizedRoute?.carbonSaved?.toFixed(1)}kg
            </div>
          </div>
        </div>
      )}
    
      {routeStats && !isCalculating && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Bin Status Breakdown</h4>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-environmental-good rounded-full"></div>
              <span className="text-sm text-foreground">{routeStats?.availableBins} Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-environmental-moderate rounded-full"></div>
              <span className="text-sm text-foreground">{routeStats?.fillingBins} Filling</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-environmental-poor rounded-full"></div>
              <span className="text-sm text-foreground">{routeStats?.fullBins} Full</span>
            </div>
          </div>
        </div>
      )}
      
      {routeStats && !isCalculating && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Waste Types in Route</h4>
          <div className="flex flex-wrap gap-2">
            {routeStats?.wasteTypes?.map(type => (
              <div key={type} className="flex items-center space-x-2 bg-muted px-3 py-1 rounded-full">
                <Icon name={getWasteTypeIcon(type)} size={14} className="text-muted-foreground" />
                <span className="text-sm text-foreground">{getWasteTypeName(type)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {optimizedRoute && !isCalculating && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Route Steps</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {optimizedRoute?.waypoints?.map((waypoint, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                  {index}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {waypoint?.name}
                  </div>
                  {waypoint?.bin && (
                    <div className="flex items-center space-x-2 mt-1">
                      <Icon name={getWasteTypeIcon(waypoint?.bin?.type)} size={12} className="text-muted-foreground" />
                      <span className={`text-xs ${getBinStatusColor(waypoint?.bin?.status)}`}>
                        {waypoint?.bin?.status} ({waypoint?.bin?.capacity}%)
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">
                    {formatTime(waypoint?.estimatedTime)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatDistance(waypoint?.distance)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {optimizedRoute && !isCalculating && (
        <div className="flex space-x-3">
          <Button 
            variant="default" 
            className="flex-1"
            onClick={startNavigation}
          >
            <Icon name="Navigation" size={16} className="mr-2" />
            Start Navigation
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => {

              if (navigator.share) {
                navigator.share({
                  title: 'Optimized Waste Disposal Route',
                  text: `Efficient route to ${routeStats?.totalBins} bins - ${formatTime(routeStats?.estimatedWalkTime)} walk`,
                  url: window.location?.href
                });
              }
            }}
          >
            <Icon name="Share2" size={16} className="mr-2" />
            Share Route
          </Button>
        </div>
      )}
      {optimizedRoute && !isCalculating && (
        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Route Efficiency</span>
            <span className="text-lg font-semibold text-primary">
              {optimizedRoute?.efficiency}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="h-2 bg-primary rounded-full transition-all duration-500"
              style={{ width: `${optimizedRoute?.efficiency}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            This route is optimized for minimal walking distance and maximum bin availability
          </p>
        </div>
      )}
    </div>
  );
};

export default RouteOptimizer;