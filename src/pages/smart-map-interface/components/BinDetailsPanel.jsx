import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BinDetailsPanel = ({ bin, onClose, onReportIssue, onGetDirections }) => {
  if (!bin) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-environmental-good';
      case 'filling': return 'text-environmental-moderate';
      case 'full': return 'text-environmental-poor';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'available': return 'bg-environmental-good/10';
      case 'filling': return 'bg-environmental-moderate/10';
      case 'full': return 'bg-environmental-poor/10';
      default: return 'bg-muted';
    }
  };

  const getCapacityColor = (capacity) => {
    if (capacity >= 80) return 'text-environmental-poor';
    if (capacity >= 60) return 'text-environmental-moderate';
    return 'text-environmental-good';
  };

  const getBinTypeIcon = (type) => {
    switch (type) {
      case 'recyclable': return 'Recycle';
      case 'organic': return 'Leaf';
      case 'general': return 'Trash2';
      default: return 'Trash2';
    }
  };

  const getBinTypeName = (type) => {
    switch (type) {
      case 'recyclable': return 'Recyclable Waste';
      case 'organic': return 'Organic Waste';
      case 'general': return 'General Waste';
      default: return 'Unknown Type';
    }
  };

  const formatTime = (dateString) => {
    return new Date(dateString)?.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeUntilCollection = (nextCollection) => {
    const now = new Date();
    const collection = new Date(nextCollection);
    const diff = collection - now;
    
    if (diff < 0) return 'Overdue';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days}d ${hours % 24}h`;
    }
    
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg p-6 space-y-6">
   
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg ${getStatusBg(bin?.status)} flex items-center justify-center`}>
            <Icon name={getBinTypeIcon(bin?.type)} size={24} className={getStatusColor(bin?.status)} />
          </div>
          <div>
            <h3 className="text-lg font-environmental-heading text-foreground">
              {getBinTypeName(bin?.type)}
            </h3>
            <p className="text-sm text-muted-foreground">ID: {bin?.id}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <Icon name="X" size={20} />
        </Button>
      </div>
     
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Current Status</span>
          <div className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusBg(bin?.status)} ${getStatusColor(bin?.status)}`}>
            {bin?.status}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Capacity</span>
            <span className={`text-sm font-medium ${getCapacityColor(bin?.capacity)}`}>
              {bin?.capacity}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                bin?.capacity >= 80 ? 'bg-environmental-poor' :
                bin?.capacity >= 60 ? 'bg-environmental-moderate' : 'bg-environmental-good'
              }`}
              style={{ width: `${bin?.capacity}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Location</span>
        </div>
        <p className="text-sm text-muted-foreground pl-6">{bin?.address}</p>
      </div>
    
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
          <Icon name="Clock" size={16} className="text-muted-foreground" />
          <span>Collection Schedule</span>
        </h4>
        
        <div className="space-y-2 pl-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Last Collection</span>
            <span className="text-sm font-medium text-foreground">
              {formatTime(bin?.lastCollection)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Next Collection</span>
            <span className="text-sm font-medium text-foreground">
              {formatTime(bin?.nextCollection)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Time Until</span>
            <span className={`text-sm font-medium ${
              getTimeUntilCollection(bin?.nextCollection) === 'Overdue' ? 'text-environmental-poor' : 'text-environmental-good'
            }`}>
              {getTimeUntilCollection(bin?.nextCollection)}
            </span>
          </div>
        </div>
      </div>
    
      <div className="space-y-3 p-4 bg-environmental-good/5 rounded-lg border border-environmental-good/20">
        <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
          <Icon name="Leaf" size={16} className="text-environmental-good" />
          <span>Environmental Impact</span>
        </h4>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-environmental-good">2.3kg</div>
            <div className="text-xs text-muted-foreground">CO₂ Saved Today</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-environmental-good">156</div>
            <div className="text-xs text-muted-foreground">Uses This Week</div>
          </div>
        </div>
      </div>
    
      <div className="flex space-x-3">
        <Button 
          variant="default" 
          className="flex-1"
          onClick={() => onGetDirections(bin)}
        >
          <Icon name="Navigation" size={16} className="mr-2" />
          Get Directions
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => onReportIssue(bin)}
        >
          <Icon name="AlertTriangle" size={16} className="mr-2" />
          Report Issue
        </Button>
      </div>
   
      <div className="flex space-x-2">
        <Button variant="ghost" size="sm" className="flex-1">
          <Icon name="Share2" size={14} className="mr-1" />
          Share Location
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <Icon name="Bookmark" size={14} className="mr-1" />
          Save Bin
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <Icon name="Bell" size={14} className="mr-1" />
          Set Alert
        </Button>
      </div>
    </div>
  );
};

export default BinDetailsPanel;