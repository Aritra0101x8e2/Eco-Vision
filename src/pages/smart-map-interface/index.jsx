import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MapContainer from './components/MapContainer';
import BinDetailsPanel from './components/BinDetailsPanel';
import SearchAndFilters from './components/SearchAndFilters';
import RouteOptimizer from './components/RouteOptimizer';
import EnvironmentalLayers from './components/EnvironmentalLayers';
import LocationNotifications from './components/LocationNotifications';

const SmartMapInterface = () => {

  const [selectedBin, setSelectedBin] = useState(null);
  const [activeLayer, setActiveLayer] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterRadius, setFilterRadius] = useState(0);
  const [selectedWasteTypes, setSelectedWasteTypes] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const [showRouteOptimizer, setShowRouteOptimizer] = useState(false);
  const [showEnvironmentalLayers, setShowEnvironmentalLayers] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  
  const [selectedBinsForRoute, setSelectedBinsForRoute] = useState([]);
  const [optimizedRoute, setOptimizedRoute] = useState(null);

  const environmentalData = {
    airQuality: [
      { lat: 22.5744, lng: 88.3629, value: 78, level: 'moderate' },
      { lat: 22.5726, lng: 88.3639, value: 45, level: 'good' },
      { lat: 22.5708, lng: 88.3649, value: 92, level: 'poor' },
      { lat: 22.5760, lng: 88.3620, value: 34, level: 'excellent' }
    ],
    noiseLevel: [
      { lat: 22.5744, lng: 88.3629, value: 65, level: 'moderate' },
      { lat: 22.5726, lng: 88.3639, value: 72, level: 'high' },
      { lat: 22.5708, lng: 88.3649, value: 58, level: 'low' },
      { lat: 22.5760, lng: 88.3620, value: 81, level: 'high' }
    ],
    wasteGeneration: [
      { lat: 22.5744, lng: 88.3629, value: 145, level: 'high' },
      { lat: 22.5726, lng: 88.3639, value: 89, level: 'moderate' },
      { lat: 22.5708, lng: 88.3649, value: 203, level: 'very-high' },
      { lat: 22.5760, lng: 88.3620, value: 67, level: 'low' }
    ]
  };

  useEffect(() => {
    const handleOnline = () => setIsOfflineMode(false);
    const handleOffline = () => setIsOfflineMode(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    setIsOfflineMode(!navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
         
          setUserLocation({ lat: 22.5726, lng: 88.3639 });
        }
      );
    }
  }, []);

  const handleBinSelect = (bin) => {
    setSelectedBin(bin);
  };

  const handleSearchLocation = (location) => {
    setUserLocation({ lat: location?.lat, lng: location?.lng });
    setSearchQuery(location?.name);
  };

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude
          });
        },
        (error) => {
          alert('Unable to access location. Please enable location services.');
        }
      );
    }
  };

  const handleReportIssue = (bin) => {
    
    alert(`Issue reported for bin ${bin?.id}. Municipal team will be notified.`);
  };

  const handleGetDirections = (bin) => {
    if (userLocation) {
      const url = `https://www.google.com/maps/dir/${userLocation?.lat},${userLocation?.lng}/${bin?.lat},${bin?.lng}`;
      window.open(url, '_blank');
    } else {
      alert('Location access required for directions');
    }
  };

  const handleRouteGenerated = (route) => {
    setOptimizedRoute(route);
  };

  const handleNotificationAction = (notification, action) => {
    switch (action) {
      case 'View Alternative':
       
        setSelectedBin(null);
        break;
      case 'View Location':
        setUserLocation(notification?.location);
        break;
      case 'Set Reminder':
        alert('Reminder set for collection time');
        break;
      default:
        console.log(`Action: ${action} for notification: ${notification?.id}`);
    }
  };

  const addBinToRoute = (bin) => {
    if (!selectedBinsForRoute?.find(b => b?.id === bin?.id)) {
      setSelectedBinsForRoute(prev => [...prev, bin]);
      setShowRouteOptimizer(true);
    }
  };

  const removeBinFromRoute = (binId) => {
    setSelectedBinsForRoute(prev => prev?.filter(b => b?.id !== binId));
  };

  return (
    <>
      <Helmet>
        <title>Smart Map Interface - Eco Vision</title>
        <meta name="description" content="Interactive environmental map with real-time bin status, route optimization, and environmental data layers for smart waste management." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <div className="h-screen flex">
            <div className="w-80 bg-card border-r border-border flex flex-col">
              <div className="p-4 border-b border-border">
                <SearchAndFilters
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  filterRadius={filterRadius}
                  onRadiusChange={setFilterRadius}
                  selectedWasteTypes={selectedWasteTypes}
                  onWasteTypeChange={setSelectedWasteTypes}
                  onSearchLocation={handleSearchLocation}
                  isFiltersOpen={isFiltersOpen}
                  onToggleFilters={() => setIsFiltersOpen(!isFiltersOpen)}
                />
              </div>
              <div className="p-4 border-b border-border">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={showRouteOptimizer ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setShowRouteOptimizer(!showRouteOptimizer)}
                  >
                    <Icon name="Route" size={14} className="mr-1" />
                    Route
                  </Button>
                  <Button
                    variant={showEnvironmentalLayers ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setShowEnvironmentalLayers(!showEnvironmentalLayers)}
                  >
                    <Icon name="Layers" size={14} className="mr-1" />
                    Layers
                  </Button>
                  <Button
                    variant={showNotifications ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <Icon name="Bell" size={14} className="mr-1" />
                    Alerts
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedBin(null);
                      setActiveLayer(null);
                      setSelectedBinsForRoute([]);
                      setOptimizedRoute(null);
                    }}
                  >
                    <Icon name="RotateCcw" size={14} className="mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {selectedBin && (
                  <div className="p-4">
                    <BinDetailsPanel
                      bin={selectedBin}
                      onClose={() => setSelectedBin(null)}
                      onReportIssue={handleReportIssue}
                      onGetDirections={handleGetDirections}
                    />
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addBinToRoute(selectedBin)}
                        className="w-full"
                      >
                        <Icon name="Plus" size={14} className="mr-1" />
                        Add to Route
                      </Button>
                    </div>
                  </div>
                )}
                {showRouteOptimizer && (
                  <div className="p-4">
                    <RouteOptimizer
                      userLocation={userLocation}
                      selectedBins={selectedBinsForRoute}
                      onRouteGenerated={handleRouteGenerated}
                      isVisible={showRouteOptimizer}
                      onClose={() => setShowRouteOptimizer(false)}
                    />
                  </div>
                )}
                {showEnvironmentalLayers && (
                  <div className="p-4">
                    <EnvironmentalLayers
                      activeLayer={activeLayer}
                      onLayerChange={setActiveLayer}
                      layerData={environmentalData}
                      isVisible={showEnvironmentalLayers}
                      onToggleVisibility={() => setShowEnvironmentalLayers(false)}
                    />
                  </div>
                )}
                {showNotifications && (
                  <div className="p-4">
                    <LocationNotifications
                      userLocation={userLocation}
                      nearbyBins={selectedBinsForRoute}
                      onNotificationAction={handleNotificationAction}
                      isVisible={showNotifications}
                      onClose={() => setShowNotifications(false)}
                    />
                  </div>
                )}
                {!selectedBin && !showRouteOptimizer && !showEnvironmentalLayers && !showNotifications && (
                  <div className="p-6 text-center space-y-4">
                    <Icon name="Map" size={48} className="text-muted-foreground mx-auto opacity-50" />
                    <div>
                      <h3 className="text-lg font-environmental-heading text-foreground mb-2">
                        Smart Map Interface
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Click on bins to view details, use filters to find specific waste types, or create optimized routes for efficient waste disposal.
                      </p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-environmental-good rounded-full"></div>
                          <span>Available bins</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-environmental-moderate rounded-full"></div>
                          <span>Filling bins</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-environmental-poor rounded-full"></div>
                          <span>Full bins</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {selectedBinsForRoute?.length > 0 && (
                <div className="p-4 border-t border-border bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      Route Bins ({selectedBinsForRoute?.length})
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedBinsForRoute([])}
                    >
                      <Icon name="Trash2" size={12} />
                    </Button>
                  </div>
                  <div className="space-y-1 max-h-24 overflow-y-auto">
                    {selectedBinsForRoute?.map(bin => (
                      <div key={bin?.id} className="flex items-center justify-between text-xs">
                        <span className="truncate">{bin?.address}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4"
                          onClick={() => removeBinFromRoute(bin?.id)}
                        >
                          <Icon name="X" size={10} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 relative">
              <MapContainer
                selectedBin={selectedBin}
                onBinSelect={handleBinSelect}
                activeLayer={activeLayer}
                onLayerChange={setActiveLayer}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filterRadius={filterRadius}
                onRadiusChange={setFilterRadius}
                selectedWasteTypes={selectedWasteTypes}
                onWasteTypeChange={setSelectedWasteTypes}
                isOfflineMode={isOfflineMode}
                onLocationRequest={handleLocationRequest}
              />
              <div className="absolute bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs">
                <h4 className="text-sm font-medium text-foreground mb-3">Map Legend</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Icon name="Trash2" size={12} className="text-gray-600" />
                    <span>General Waste</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Recycle" size={12} className="text-blue-600" />
                    <span>Recyclable</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Leaf" size={12} className="text-green-600" />
                    <span>Organic Waste</span>
                  </div>
                  {activeLayer && (
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <Icon name="Layers" size={12} className="text-primary" />
                        <span className="capitalize">{activeLayer?.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isOfflineMode 
                    ? 'bg-warning text-warning-foreground' 
                    : 'bg-environmental-good text-white'
                }`}>
                  <Icon 
                    name={isOfflineMode ? 'WifiOff' : 'Wifi'} 
                    size={12} 
                    className="mr-1 inline" 
                  />
                  {isOfflineMode ? 'Offline' : 'Online'}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SmartMapInterface;