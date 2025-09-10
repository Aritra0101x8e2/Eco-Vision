import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MaintenanceTracker = ({ maintenanceData }) => {
  const [selectedTab, setSelectedTab] = useState('scheduled');

  const getMaintenanceStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-environmental-excellent bg-green-50 border-green-200';
      case 'in-progress': return 'text-secondary bg-blue-50 border-blue-200';
      case 'scheduled': return 'text-environmental-moderate bg-orange-50 border-orange-200';
      case 'overdue': return 'text-environmental-poor bg-red-50 border-red-200';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-environmental-poor';
      case 'medium': return 'text-environmental-moderate';
      case 'low': return 'text-environmental-good';
      default: return 'text-muted-foreground';
    }
  };

  const tabs = [
    { id: 'scheduled', label: 'Scheduled', count: maintenanceData?.scheduled?.length || 0 },
    { id: 'in-progress', label: 'In Progress', count: maintenanceData?.inProgress?.length || 0 },
    { id: 'completed', label: 'Completed', count: maintenanceData?.completed?.length || 0 },
    { id: 'overdue', label: 'Overdue', count: maintenanceData?.overdue?.length || 0 }
  ];

  const getCurrentData = () => {
    switch (selectedTab) {
      case 'scheduled': return maintenanceData?.scheduled || [];
      case 'in-progress': return maintenanceData?.inProgress || [];
      case 'completed': return maintenanceData?.completed || [];
      case 'overdue': return maintenanceData?.overdue || [];
      default: return [];
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-environmental-heading text-foreground mb-2">
            Maintenance Tracker
          </h3>
          <p className="text-sm text-muted-foreground">
            Track bin maintenance schedules and repair status
          </p>
        </div>
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Schedule Maintenance
        </Button>
      </div>

      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setSelectedTab(tab?.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-environmental ${
              selectedTab === tab?.id
                ? 'bg-card text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>{tab?.label}</span>
            {tab?.count > 0 && (
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedTab === tab?.id ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground'
              }`}>
                {tab?.count}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {getCurrentData()?.map((item) => (
          <div key={item?.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-environmental">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Icon name="Wrench" size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{item?.binLocation}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{item?.type}</p>
                  <p className="text-sm text-foreground">{item?.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getMaintenanceStatusColor(item?.status)}`}>
                  {item?.status?.replace('-', ' ')}
                </div>
                <div className={`text-xs font-medium ${getPriorityColor(item?.priority)}`}>
                  {item?.priority} priority
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Scheduled Date</p>
                <p className="font-medium">{item?.scheduledDate}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Assigned To</p>
                <p className="font-medium">{item?.assignedTo}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Estimated Cost</p>
                <p className="font-medium">₹{item?.estimatedCost}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{item?.estimatedDuration}</p>
              </div>
            </div>

            {item?.notes && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground">Notes:</p>
                <p className="text-sm text-foreground">{item?.notes}</p>
              </div>
            )}

            <div className="flex justify-end space-x-2 mt-3">
              {item?.status === 'scheduled' && (
                <>
                  <Button variant="outline" size="sm" iconName="Play">
                    Start
                  </Button>
                  <Button variant="outline" size="sm" iconName="Edit">
                    Edit
                  </Button>
                </>
              )}
              {item?.status === 'in-progress' && (
                <Button variant="default" size="sm" iconName="Check">
                  Mark Complete
                </Button>
              )}
              {item?.status === 'overdue' && (
                <Button variant="destructive" size="sm" iconName="AlertTriangle">
                  Urgent Action
                </Button>
              )}
            </div>
          </div>
        ))}

        {getCurrentData()?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No {selectedTab?.replace('-', ' ')} maintenance items</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaintenanceTracker;