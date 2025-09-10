import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MapContainer = ({ 
  selectedBin, 
  onBinSelect, 
  activeLayer, 
  onLayerChange, 
  searchQuery, 
  onSearchChange,
  filterRadius,
  onRadiusChange,
  selectedWasteTypes,
  onWasteTypeChange,
  isOfflineMode,
  onLocationRequest
}) => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapZoom, setMapZoom] = useState(14);
  const [mapCenter, setMapCenter] = useState({ lat: 22.5726, lng: 88.3639 });
  const binData = [
    {
      id: 'bin-001',
      lat: 22.5744,
      lng: 88.3629,
      type: 'general',
      capacity: 85,
      status: 'full',
      lastCollection: '2025-09-09T14:30:00Z',
      nextCollection: '2025-09-10T18:00:00Z',
      address: 'Park Street, Near Metro Station'
    },
    {
      id: 'bin-002',
      lat: 22.5726,
      lng: 88.3639,
      type: 'recyclable',
      capacity: 45,
      status: 'available',
      lastCollection: '2025-09-10T08:00:00Z',
      nextCollection: '2025-09-11T08:00:00Z',
      address: 'Camac Street, Commercial Area'
    },
    {
      id: 'bin-003',
      lat: 22.5708,
      lng: 88.3649,
      type: 'organic',
      capacity: 72,
      status: 'filling',
      lastCollection: '2025-09-09T16:00:00Z',
      nextCollection: '2025-09-10T20:00:00Z',
      address: 'Russell Street, Residential Block'
    },
    {
      id: 'bin-004',
      lat: 22.5760,
      lng: 88.3620,
      type: 'general',
      capacity: 23,
      status: 'available',
      lastCollection: '2025-09-10T06:00:00Z',
      nextCollection: '2025-09-11T06:00:00Z',
      address: 'Chowringhee Road, Shopping District'
    },
    {
      id: 'bin-005',
      lat: 22.5690,
      lng: 88.3670,
      type: 'recyclable',
      capacity: 91,
      status: 'full',
      lastCollection: '2025-09-09T12:00:00Z',
      nextCollection: '2025-09-10T17:00:00Z',
      address: 'Gariahat Market, Main Entrance'
    }
  ];

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
   
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          const location = {
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude
          };
          setUserLocation(location);
          setMapCenter(location);
        },
        (error) => {
          console.log('Location access denied, using default location');
        }
      );
    }
  }, []);

  const getBinStatusColor = (status) => {
    switch (status) {
      case 'available': return '#4CAF50';
      case 'filling': return '#FF9800';
      case 'full': return '#F44336';
      default: return '#757575';
    }
  };

  const getBinIcon = (type) => {
    switch (type) {
      case 'recyclable': return 'Recycle';
      case 'organic': return 'Leaf';
      case 'general': return 'Trash2';
      default: return 'Trash2';
    }
  };

  const getEnvironmentalColor = (level) => {
    switch (level) {
      case 'excellent': return '#2E7D32';
      case 'good': return '#4CAF50';
      case 'moderate': return '#FF9800';
      case 'poor': return '#F44336';
      case 'very-high': return '#D32F2F';
      case 'high': return '#F44336';
      case 'low': return '#4CAF50';
      default: return '#757575';
    }
  };

  const filteredBins = binData?.filter(bin => {
    if (selectedWasteTypes?.length > 0 && !selectedWasteTypes?.includes(bin?.type)) {
      return false;
    }
    
    if (userLocation && filterRadius > 0) {
      const distance = calculateDistance(userLocation, { lat: bin?.lat, lng: bin?.lng });
      return distance <= filterRadius;
    }
    
    return true;
  });

  const calculateDistance = (point1, point2) => {
    const R = 6371;
    const dLat = (point2?.lat - point1?.lat) * Math.PI / 180;
    const dLng = (point2?.lng - point1?.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(point1?.lat * Math.PI / 180) * Math.cos(point2?.lat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleMapClick = (event) => {
    const rect = mapRef?.current?.getBoundingClientRect();
    const x = event?.clientX - rect?.left;
    const y = event?.clientY - rect?.top;
    
    filteredBins?.forEach(bin => {
      const binX = (bin?.lng - mapCenter?.lng + 0.01) * 5000 + rect?.width / 2;
      const binY = (mapCenter?.lat - bin?.lat + 0.01) * 5000 + rect?.height / 2;
      
      if (Math.abs(x - binX) < 20 && Math.abs(y - binY) < 20) {
        onBinSelect(bin);
      }
    });
  };

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 18));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 8));
  };

  const centerOnUser = () => {
    if (userLocation) {
      setMapCenter(userLocation);
    } else {
      onLocationRequest();
    }
  };

  if (!isMapLoaded) {
    return (
      <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading interactive map...</p>
          {isOfflineMode && (
            <p className="text-sm text-warning">Offline mode - Using cached data</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      <div 
        ref={mapRef}
        className="w-full h-full cursor-pointer relative"
        onClick={handleMapClick}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: '#f8fafc'
        }}
      >
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Kolkata Smart Waste Map"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${mapCenter?.lat},${mapCenter?.lng}&z=${mapZoom}&output=embed`}
          className="absolute inset-0"
        />

        <div className="absolute inset-0 pointer-events-none">
          {filteredBins?.map(bin => {
            const x = (bin?.lng - mapCenter?.lng + 0.01) * 5000 + 50;
            const y = (mapCenter?.lat - bin?.lat + 0.01) * 5000 + 50;
            
            return (
              <div
                key={bin?.id}
                className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110"
                style={{ left: `${Math.max(0, Math.min(x, 100))}%`, top: `${Math.max(0, Math.min(y, 100))}%` }}
                onClick={(e) => {
                  e?.stopPropagation();
                  onBinSelect(bin);
                }}
              >
                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                  selectedBin?.id === bin?.id ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
                style={{ backgroundColor: getBinStatusColor(bin?.status) }}>
                  <Icon name={getBinIcon(bin?.type)} size={16} color="white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs font-medium shadow-sm">
                    {bin?.capacity}
                  </div>
                </div>
              </div>
            );
          })}
          {activeLayer && environmentalData?.[activeLayer] && environmentalData?.[activeLayer]?.map((point, index) => {
            const x = (point?.lng - mapCenter?.lng + 0.01) * 5000 + 50;
            const y = (mapCenter?.lat - point?.lat + 0.01) * 5000 + 50;
            
            return (
              <div
                key={`env-${index}`}
                className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${Math.max(0, Math.min(x, 100))}%`, top: `${Math.max(0, Math.min(y, 100))}%` }}
              >
                <div 
                  className="w-6 h-6 rounded-full opacity-70 animate-environmental-pulse"
                  style={{ backgroundColor: getEnvironmentalColor(point?.level) }}
                >
                  <div className="w-full h-full rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-white">{point?.value}</span>
                  </div>
                </div>
              </div>
            );
          })}
          {userLocation && (
            <div
              className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                left: `${((userLocation?.lng - mapCenter?.lng + 0.01) * 5000 + 50)}%`, 
                top: `${((mapCenter?.lat - userLocation?.lat + 0.01) * 5000 + 50)}%` 
              }}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full opacity-30 animate-ping"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomIn}
          className="bg-white shadow-lg hover:shadow-xl"
        >
          <Icon name="Plus" size={16} />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomOut}
          className="bg-white shadow-lg hover:shadow-xl"
        >
          <Icon name="Minus" size={16} />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={centerOnUser}
          className="bg-white shadow-lg hover:shadow-xl"
        >
          <Icon name="Navigation" size={16} />
        </Button>
      </div>
     
      <div className="absolute bottom-4 left-4 flex space-x-2">
        <Button
          variant={activeLayer === 'airQuality' ? 'default' : 'secondary'}
          size="sm"
          onClick={() => onLayerChange(activeLayer === 'airQuality' ? null : 'airQuality')}
          className="bg-white shadow-lg hover:shadow-xl"
        >
          <Icon name="Wind" size={14} className="mr-1" />
          Air
        </Button>
        <Button
          variant={activeLayer === 'noiseLevel' ? 'default' : 'secondary'}
          size="sm"
          onClick={() => onLayerChange(activeLayer === 'noiseLevel' ? null : 'noiseLevel')}
          className="bg-white shadow-lg hover:shadow-xl"
        >
          <Icon name="Volume2" size={14} className="mr-1" />
          Noise
        </Button>
        <Button
          variant={activeLayer === 'wasteGeneration' ? 'default' : 'secondary'}
          size="sm"
          onClick={() => onLayerChange(activeLayer === 'wasteGeneration' ? null : 'wasteGeneration')}
          className="bg-white shadow-lg hover:shadow-xl"
        >
          <Icon name="BarChart3" size={14} className="mr-1" />
          Waste
        </Button>
      </div>
      {isOfflineMode && (
        <div className="absolute top-4 left-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          <Icon name="WifiOff" size={14} className="mr-1 inline" />
          Offline Mode
        </div>
      )}
    </div>
  );
};

export default MapContainer;