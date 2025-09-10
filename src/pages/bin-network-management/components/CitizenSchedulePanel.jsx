import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CitizenSchedulePanel = ({ scheduleData }) => {
  const [selectedArea, setSelectedArea] = useState(scheduleData?.[0]?.area || '');
  const [viewMode, setViewMode] = useState('week');

  const getCurrentSchedule = () => {
    const areaData = scheduleData?.find(area => area?.area === selectedArea);
    return areaData ? areaData?.schedule : [];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-environmental-excellent bg-green-50 border-green-200';
      case 'in-progress': return 'text-secondary bg-blue-50 border-blue-200';
      case 'scheduled': return 'text-environmental-moderate bg-orange-50 border-orange-200';
      case 'delayed': return 'text-environmental-poor bg-red-50 border-red-200';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getWasteTypeIcon = (type) => {
    switch (type) {
      case 'organic': return 'Leaf';
      case 'recyclable': return 'Recycle';
      case 'hazardous': return 'AlertTriangle';
      case 'general': return 'Trash2';
      default: return 'Package';
    }
  };

  const getWasteTypeColor = (type) => {
    switch (type) {
      case 'organic': return 'text-environmental-excellent';
      case 'recyclable': return 'text-secondary';
      case 'hazardous': return 'text-environmental-poor';
      case 'general': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-environmental-heading text-foreground mb-2">
            Collection Schedule
          </h3>
          <p className="text-sm text-muted-foreground">
            View collection schedules and service updates for your area
          </p>
        </div>
        <Button variant="outline" iconName="Bell" iconPosition="left">
          Set Reminders
        </Button>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Select Area</label>
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e?.target?.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {scheduleData?.map((area) => (
              <option key={area?.area} value={area?.area}>
                {area?.area}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">View</label>
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {['week', 'month']?.map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`flex-1 px-3 py-1 rounded-md text-sm font-medium transition-environmental capitalize ${
                  viewMode === mode
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {mode}ly
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Schedule List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {getCurrentSchedule()?.map((item) => (
          <div key={item?.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-environmental">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 mt-1 ${getWasteTypeColor(item?.wasteType)}`}>
                  <Icon name={getWasteTypeIcon(item?.wasteType)} size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{item?.location}</h4>
                  <p className="text-sm text-muted-foreground capitalize">{item?.wasteType} Waste Collection</p>
                  <p className="text-sm text-foreground mt-1">{item?.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item?.status)}`}>
                  {item?.status?.replace('-', ' ')}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item?.time}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">{item?.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Time Window</p>
                <p className="font-medium">{item?.timeWindow}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Frequency</p>
                <p className="font-medium">{item?.frequency}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Next Collection</p>
                <p className="font-medium">{item?.nextCollection}</p>
              </div>
            </div>

            {item?.specialInstructions && (
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={14} className="text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-secondary">Special Instructions:</p>
                    <p className="text-sm text-foreground">{item?.specialInstructions}</p>
                  </div>
                </div>
              </div>
            )}

            {item?.status === 'delayed' && (
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex items-start space-x-2">
                  <Icon name="Clock" size={14} className="text-environmental-poor mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-environmental-poor">Service Update:</p>
                    <p className="text-sm text-foreground">Collection delayed due to traffic. Expected arrival: {item?.expectedArrival}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {getCurrentSchedule()?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No scheduled collections for this area</p>
          </div>
        )}
      </div>
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
        <Button variant="outline" size="sm" iconName="Download">
          Download Schedule
        </Button>
        <Button variant="outline" size="sm" iconName="Share2">
          Share Schedule
        </Button>
        <Button variant="outline" size="sm" iconName="MessageSquare">
          Report Issue
        </Button>
      </div>
    </div>
  );
};

export default CitizenSchedulePanel;