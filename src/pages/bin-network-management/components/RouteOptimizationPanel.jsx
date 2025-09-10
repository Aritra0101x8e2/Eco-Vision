import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RouteOptimizationPanel = ({ routes }) => {
  const [selectedRoute, setSelectedRoute] = useState(routes?.[0]);
  const [optimizationMode, setOptimizationMode] = useState('efficiency');

  const getRouteStatusColor = (status) => {
    switch (status) {
      case 'optimal': return 'text-environmental-excellent bg-green-50 border-green-200';
      case 'good': return 'text-environmental-good bg-green-50 border-green-100';
      case 'needs-optimization': return 'text-environmental-moderate bg-orange-50 border-orange-200';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const optimizationModes = [
    { id: 'efficiency', label: 'Fuel Efficiency', icon: 'Fuel' },
    { id: 'time', label: 'Time Optimization', icon: 'Clock' },
    { id: 'capacity', label: 'Capacity Based', icon: 'BarChart3' },
    { id: 'environmental', label: 'Environmental Impact', icon: 'Leaf' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-environmental-heading text-foreground mb-2">
            Route Optimization
          </h3>
          <p className="text-sm text-muted-foreground">
            Optimize collection routes for maximum efficiency
          </p>
        </div>
        <Button variant="outline" iconName="RefreshCw" iconPosition="left">
          Recalculate
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Optimization Modes */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Optimization Mode</h4>
          <div className="grid grid-cols-2 gap-2">
            {optimizationModes?.map((mode) => (
              <button
                key={mode?.id}
                onClick={() => setOptimizationMode(mode?.id)}
                className={`flex items-center space-x-2 p-3 rounded-lg border transition-environmental ${
                  optimizationMode === mode?.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border hover:bg-muted'
                }`}
              >
                <Icon name={mode?.icon} size={16} />
                <span className="text-sm font-medium">{mode?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-3">Select Route</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {routes?.map((route) => (
              <button
                key={route?.id}
                onClick={() => setSelectedRoute(route)}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-environmental ${
                  selectedRoute?.id === route?.id
                    ? 'bg-primary/10 border-primary text-primary' :'bg-background border-border hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name="Route" size={16} />
                  <div className="text-left">
                    <div className="font-medium">{route?.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {route?.binCount} bins • {route?.distance}km
                    </div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getRouteStatusColor(route?.status)}`}>
                  {route?.status?.replace('-', ' ')}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedRoute && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-medium text-foreground mb-4">Route Details: {selectedRoute?.name}</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-lg font-bold text-foreground">{selectedRoute?.distance}km</div>
              <div className="text-xs text-muted-foreground">Total Distance</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-lg font-bold text-foreground">{selectedRoute?.estimatedTime}</div>
              <div className="text-xs text-muted-foreground">Est. Time</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-lg font-bold text-foreground">{selectedRoute?.fuelCost}</div>
              <div className="text-xs text-muted-foreground">Fuel Cost</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-lg font-bold text-environmental-excellent">{selectedRoute?.efficiency}%</div>
              <div className="text-xs text-muted-foreground">Efficiency</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="default" iconName="Play" iconPosition="left">
              Start Route
            </Button>
            <Button variant="outline" iconName="Download" iconPosition="left">
              Export Route
            </Button>
            <Button variant="outline" iconName="Share2" iconPosition="left">
              Share Route
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteOptimizationPanel;