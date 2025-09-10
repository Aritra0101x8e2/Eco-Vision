import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EnvironmentalLayers = ({ 
  activeLayer, 
  onLayerChange, 
  layerData, 
  isVisible, 
  onToggleVisibility 
}) => {
  const layers = [
    {
      id: 'airQuality',
      name: 'Air Quality',
      icon: 'Wind',
      description: 'Real-time air quality measurements',
      unit: 'AQI',
      color: '#4CAF50'
    },
    {
      id: 'noiseLevel',
      name: 'Noise Level',
      icon: 'Volume2',
      description: 'Ambient noise monitoring',
      unit: 'dB',
      color: '#FF9800'
    },
    {
      id: 'wasteGeneration',
      name: 'Waste Generation',
      icon: 'BarChart3',
      description: 'Waste generation patterns',
      unit: 'kg/day',
      color: '#2196F3'
    }
  ];

  const getQualityLevel = (value, type) => {
    switch (type) {
      case 'airQuality':
        if (value <= 50) return { level: 'excellent', color: '#2E7D32', label: 'Excellent' };
        if (value <= 100) return { level: 'good', color: '#4CAF50', label: 'Good' };
        if (value <= 150) return { level: 'moderate', color: '#FF9800', label: 'Moderate' };
        if (value <= 200) return { level: 'poor', color: '#F44336', label: 'Poor' };
        return { level: 'hazardous', color: '#D32F2F', label: 'Hazardous' };
      
      case 'noiseLevel':
        if (value <= 45) return { level: 'low', color: '#4CAF50', label: 'Quiet' };
        if (value <= 65) return { level: 'moderate', color: '#FF9800', label: 'Moderate' };
        if (value <= 85) return { level: 'high', color: '#F44336', label: 'Loud' };
        return { level: 'very-high', color: '#D32F2F', label: 'Very Loud' };
      
      case 'wasteGeneration':
        if (value <= 75) return { level: 'low', color: '#4CAF50', label: 'Low' };
        if (value <= 125) return { level: 'moderate', color: '#FF9800', label: 'Moderate' };
        if (value <= 175) return { level: 'high', color: '#F44336', label: 'High' };
        return { level: 'very-high', color: '#D32F2F', label: 'Very High' };
      
      default:
        return { level: 'unknown', color: '#757575', label: 'Unknown' };
    }
  };

  const getLayerStats = (layerId) => {
    if (!layerData?.[layerId]) return null;
    
    const data = layerData?.[layerId];
    const values = data?.map(point => point?.value);
    const avg = values?.reduce((sum, val) => sum + val, 0) / values?.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    
    return { avg: avg?.toFixed(1), min, max, count: data?.length };
  };

  if (!isVisible) return null;

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-environmental-good/10 rounded-lg flex items-center justify-center">
            <Icon name="Layers" size={20} className="text-environmental-good" />
          </div>
          <div>
            <h3 className="text-lg font-environmental-heading text-foreground">
              Environmental Layers
            </h3>
            <p className="text-sm text-muted-foreground">
              Real-time environmental data
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onToggleVisibility}>
          <Icon name="X" size={20} />
        </Button>
      </div>
   
      <div className="space-y-4">
        {layers?.map(layer => {
          const stats = getLayerStats(layer?.id);
          const isActive = activeLayer === layer?.id;
          
          return (
            <div key={layer?.id} className="space-y-3">
              <div 
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? 'border-primary bg-primary/5' :'border-border bg-muted/30 hover:bg-muted/50'
                }`}
                onClick={() => onLayerChange(isActive ? null : layer?.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={layer?.icon} size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{layer?.name}</h4>
                      <p className="text-xs text-muted-foreground">{layer?.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {stats && (
                      <div className="text-sm font-medium text-foreground">
                        {stats?.avg} {layer?.unit}
                      </div>
                    )}
                    <div className={`text-xs ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      {isActive ? 'Active' : 'Click to activate'}
                    </div>
                  </div>
                </div>
              </div>
          
              {isActive && stats && layerData?.[layer?.id] && (
                <div className="ml-4 space-y-4">
             
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-environmental-good/5 rounded-lg">
                      <div className="text-lg font-semibold text-environmental-good">{stats?.min}</div>
                      <div className="text-xs text-muted-foreground">Minimum</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/5 rounded-lg">
                      <div className="text-lg font-semibold text-secondary">{stats?.avg}</div>
                      <div className="text-xs text-muted-foreground">Average</div>
                    </div>
                    <div className="text-center p-3 bg-environmental-poor/5 rounded-lg">
                      <div className="text-lg font-semibold text-environmental-poor">{stats?.max}</div>
                      <div className="text-xs text-muted-foreground">Maximum</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-foreground">Monitoring Points ({stats?.count})</h5>
                    <div className="max-h-32 overflow-y-auto space-y-2">
                      {layerData?.[layer?.id]?.map((point, index) => {
                        const quality = getQualityLevel(point?.value, layer?.id);
                        return (
                          <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                            <div className="flex items-center space-x-2">
                              <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: quality?.color }}
                              />
                              <span className="text-sm text-foreground">
                                Point {index + 1}
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-foreground">
                                {point?.value} {layer?.unit}
                              </div>
                              <div className="text-xs" style={{ color: quality?.color }}>
                                {quality?.label}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-foreground">Quality Scale</h5>
                    <div className="flex flex-wrap gap-2">
                      {layer?.id === 'airQuality' && [
                        { range: '0-50', level: 'Excellent', color: '#2E7D32' },
                        { range: '51-100', level: 'Good', color: '#4CAF50' },
                        { range: '101-150', level: 'Moderate', color: '#FF9800' },
                        { range: '151-200', level: 'Poor', color: '#F44336' },
                        { range: '200+', level: 'Hazardous', color: '#D32F2F' }
                      ]?.map(item => (
                        <div key={item?.range} className="flex items-center space-x-1">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item?.color }}
                          />
                          <span className="text-xs text-muted-foreground">
                            {item?.range}: {item?.level}
                          </span>
                        </div>
                      ))}
                      
                      {layer?.id === 'noiseLevel' && [
                        { range: '0-45', level: 'Quiet', color: '#4CAF50' },
                        { range: '46-65', level: 'Moderate', color: '#FF9800' },
                        { range: '66-85', level: 'Loud', color: '#F44336' },
                        { range: '85+', level: 'Very Loud', color: '#D32F2F' }
                      ]?.map(item => (
                        <div key={item?.range} className="flex items-center space-x-1">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item?.color }}
                          />
                          <span className="text-xs text-muted-foreground">
                            {item?.range}dB: {item?.level}
                          </span>
                        </div>
                      ))}
                      
                      {layer?.id === 'wasteGeneration' && [
                        { range: '0-75', level: 'Low', color: '#4CAF50' },
                        { range: '76-125', level: 'Moderate', color: '#FF9800' },
                        { range: '126-175', level: 'High', color: '#F44336' },
                        { range: '175+', level: 'Very High', color: '#D32F2F' }
                      ]?.map(item => (
                        <div key={item?.range} className="flex items-center space-x-1">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item?.color }}
                          />
                          <span className="text-xs text-muted-foreground">
                            {item?.range}kg: {item?.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex space-x-2 pt-4 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onLayerChange(null)}
          className="flex-1"
        >
          <Icon name="EyeOff" size={14} className="mr-1" />
          Hide All
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            window.location?.reload();
          }}
          className="flex-1"
        >
          <Icon name="RefreshCw" size={14} className="mr-1" />
          Refresh Data
        </Button>
      </div>
  
      <div className="text-center p-3 bg-muted/30 rounded-lg">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={14} />
          <span>Last updated: {new Date()?.toLocaleTimeString('en-IN')}</span>
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Data refreshes every 15 minutes
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalLayers;