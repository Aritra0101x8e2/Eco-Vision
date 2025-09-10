import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const SearchAndFilters = ({ 
  searchQuery, 
  onSearchChange, 
  filterRadius, 
  onRadiusChange, 
  selectedWasteTypes, 
  onWasteTypeChange,
  onSearchLocation,
  isFiltersOpen,
  onToggleFilters
}) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const mockSuggestions = [
    { id: 1, name: 'Park Street Metro Station', type: 'transit', lat: 22.5744, lng: 88.3629 },
    { id: 2, name: 'Camac Street Commercial Area', type: 'commercial', lat: 22.5726, lng: 88.3639 },
    { id: 3, name: 'Russell Street Residential', type: 'residential', lat: 22.5708, lng: 88.3649 },
    { id: 4, name: 'Chowringhee Road Shopping', type: 'shopping', lat: 22.5760, lng: 88.3620 },
    { id: 5, name: 'Gariahat Market', type: 'market', lat: 22.5690, lng: 88.3670 },
    { id: 6, name: 'Victoria Memorial', type: 'landmark', lat: 22.5448, lng: 88.3426 },
    { id: 7, name: 'Howrah Bridge', type: 'landmark', lat: 22.5958, lng: 88.3468 }
  ];

  const wasteTypes = [
    { id: 'general', label: 'General Waste', icon: 'Trash2', color: 'text-gray-600' },
    { id: 'recyclable', label: 'Recyclable', icon: 'Recycle', color: 'text-blue-600' },
    { id: 'organic', label: 'Organic Waste', icon: 'Leaf', color: 'text-green-600' }
  ];

  const radiusOptions = [
    { value: 0.5, label: '500m' },
    { value: 1, label: '1km' },
    { value: 2, label: '2km' },
    { value: 5, label: '5km' },
    { value: 0, label: 'All' }
  ];

  const handleSearchInput = (e) => {
    const value = e?.target?.value;
    onSearchChange(value);
    
    if (value?.length > 2) {
      const filtered = mockSuggestions?.filter(suggestion =>
        suggestion?.name?.toLowerCase()?.includes(value?.toLowerCase())
      );
      setSearchSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion?.name);
    onSearchLocation(suggestion);
    setShowSuggestions(false);
  };

  const handleWasteTypeToggle = (typeId) => {
    const newTypes = selectedWasteTypes?.includes(typeId)
      ? selectedWasteTypes?.filter(id => id !== typeId)
      : [...selectedWasteTypes, typeId];
    onWasteTypeChange(newTypes);
  };

  const getSuggestionIcon = (type) => {
    switch (type) {
      case 'transit': return 'Train';
      case 'commercial': return 'Building2';
      case 'residential': return 'Home';
      case 'shopping': return 'ShoppingBag';
      case 'market': return 'Store';
      case 'landmark': return 'MapPin';
      default: return 'MapPin';
    }
  };

  return (
    <div className="space-y-4">
      
      <div className="relative">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search locations, addresses, landmarks..."
            value={searchQuery}
            onChange={handleSearchInput}
            className="pl-10 pr-12"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={onToggleFilters}
          >
            <Icon name="SlidersHorizontal" size={16} />
          </Button>
        </div>

        {showSuggestions && searchSuggestions?.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
            {searchSuggestions?.map(suggestion => (
              <button
                key={suggestion?.id}
                className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center space-x-3"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Icon name={getSuggestionIcon(suggestion?.type)} size={16} className="text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium text-foreground">{suggestion?.name}</div>
                  <div className="text-xs text-muted-foreground capitalize">{suggestion?.type}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {isFiltersOpen && (
        <div className="bg-card border border-border rounded-lg p-4 space-y-4 shadow-sm">

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Icon name="Filter" size={16} className="text-muted-foreground" />
              <span>Waste Types</span>
            </h4>
            <div className="space-y-2">
              {wasteTypes?.map(type => (
                <div key={type?.id} className="flex items-center space-x-3">
                  <Checkbox
                    checked={selectedWasteTypes?.includes(type?.id)}
                    onChange={() => handleWasteTypeToggle(type?.id)}
                  />
                  <Icon name={type?.icon} size={16} className={type?.color} />
                  <span className="text-sm text-foreground">{type?.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Icon name="MapPin" size={16} className="text-muted-foreground" />
              <span>Search Radius</span>
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {radiusOptions?.map(option => (
                <Button
                  key={option?.value}
                  variant={filterRadius === option?.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onRadiusChange(option?.value)}
                  className="text-xs"
                >
                  {option?.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex space-x-2 pt-2 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onWasteTypeChange([]);
                onRadiusChange(0);
                onSearchChange('');
              }}
              className="flex-1"
            >
              <Icon name="RotateCcw" size={14} className="mr-1" />
              Clear All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.geolocation?.getCurrentPosition(
                  (position) => {
                    onSearchLocation({
                      name: 'Current Location',
                      lat: position?.coords?.latitude,
                      lng: position?.coords?.longitude
                    });
                  }
                );
              }}
              className="flex-1"
            >
              <Icon name="Navigation" size={14} className="mr-1" />
              Near Me
            </Button>
          </div>
        </div>
      )}
      {(selectedWasteTypes?.length > 0 || filterRadius > 0) && (
        <div className="flex flex-wrap gap-2">
          {selectedWasteTypes?.map(typeId => {
            const type = wasteTypes?.find(t => t?.id === typeId);
            return (
              <div
                key={typeId}
                className="flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
              >
                <Icon name={type?.icon} size={12} />
                <span>{type?.label}</span>
                <button
                  onClick={() => handleWasteTypeToggle(typeId)}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <Icon name="X" size={10} />
                </button>
              </div>
            );
          })}
          {filterRadius > 0 && (
            <div className="flex items-center space-x-1 bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs">
              <Icon name="MapPin" size={12} />
              <span>Within {filterRadius}km</span>
              <button
                onClick={() => onRadiusChange(0)}
                className="hover:bg-secondary/20 rounded-full p-0.5"
              >
                <Icon name="X" size={10} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;