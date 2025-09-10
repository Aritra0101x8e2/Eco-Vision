import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AlertsPanel = () => {
  const [activeTab, setActiveTab] = useState('critical');

  const alerts = {
    critical: [
      {
        id: 1,
        type: 'bin_overflow',
        title: "Multiple bins overflowing in Park Street area",
        description: "5 bins reported as overflowing in the past 2 hours. Immediate attention required.",
        location: "Park Street Metro Station vicinity",
        timestamp: "2025-01-10T16:30:00",
        priority: 'critical',
        status: 'unresolved',
        assignedTo: null,
        estimatedResolution: "30 minutes"
      },
      {
        id: 2,
        type: 'vehicle_breakdown',
        title: "Collection vehicle KL-07-1234 breakdown",
        description: "Vehicle reported mechanical failure during Route C collection. Backup required.",
        location: "Gariahat Road",
        timestamp: "2025-01-10T14:15:00",
        priority: 'critical',
        status: 'in_progress',
        assignedTo: "Maintenance Team A",
        estimatedResolution: "2 hours"
      },
      {
        id: 3,
        type: 'safety_incident',
        title: "Worker injury reported",
        description: "Collection worker injured during bin lifting. Medical assistance provided.",
        location: "Salt Lake Sector V",
        timestamp: "2025-01-10T11:45:00",
        priority: 'critical',
        status: 'resolved',
        assignedTo: "Safety Officer",
        estimatedResolution: "Completed"
      }
    ],
    high: [
      {
        id: 4,
        type: 'route_delay',
        title: "Route B running 2 hours behind schedule",
        description: "Heavy traffic and additional stops causing significant delays.",
        location: "New Town Collection Route",
        timestamp: "2025-01-10T15:20:00",
        priority: 'high',
        status: 'monitoring',
        assignedTo: "Route Supervisor",
        estimatedResolution: "1 hour"
      },
      {
        id: 5,
        type: 'equipment_malfunction',
        title: "Smart bin sensors offline",
        description: "12 smart bins in Ballygunge area not reporting status updates.",
        location: "Ballygunge area",
        timestamp: "2025-01-10T13:30:00",
        priority: 'high',
        status: 'assigned',
        assignedTo: "Technical Team",
        estimatedResolution: "4 hours"
      }
    ],
    medium: [
      {
        id: 6,
        type: 'citizen_complaint',
        title: "Noise complaint about early morning collection",
        description: "Residents complaining about collection starting before 6 AM.",
        location: "Alipore residential area",
        timestamp: "2025-01-10T12:00:00",
        priority: 'medium',
        status: 'under_review',
        assignedTo: "Operations Manager",
        estimatedResolution: "24 hours"
      },
      {
        id: 7,
        type: 'maintenance_due',
        title: "Scheduled maintenance overdue",
        description: "3 vehicles due for routine maintenance checks.",
        location: "Central Depot",
        timestamp: "2025-01-10T09:00:00",
        priority: 'medium',
        status: 'scheduled',
        assignedTo: "Maintenance Team B",
        estimatedResolution: "48 hours"
      }
    ]
  };

  const tabs = [
    { id: 'critical', label: 'Critical', count: alerts?.critical?.length, color: 'text-red-600' },
    { id: 'high', label: 'High Priority', count: alerts?.high?.length, color: 'text-orange-600' },
    { id: 'medium', label: 'Medium', count: alerts?.medium?.length, color: 'text-yellow-600' }
  ];

  const getAlertIcon = (type) => {
    switch (type) {
      case 'bin_overflow': return 'Trash2';
      case 'vehicle_breakdown': return 'Truck';
      case 'safety_incident': return 'Shield';
      case 'route_delay': return 'Clock';
      case 'equipment_malfunction': return 'Wifi';
      case 'citizen_complaint': return 'MessageSquare';
      case 'maintenance_due': return 'Wrench';
      default: return 'AlertTriangle';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unresolved': return 'bg-red-50 text-red-700';
      case 'in_progress': return 'bg-blue-50 text-blue-700';
      case 'resolved': return 'bg-green-50 text-green-700';
      case 'monitoring': return 'bg-purple-50 text-purple-700';
      case 'assigned': return 'bg-indigo-50 text-indigo-700';
      case 'under_review': return 'bg-yellow-50 text-yellow-700';
      case 'scheduled': return 'bg-gray-50 text-gray-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} hours ago`;
    } else {
      return date?.toLocaleDateString('en-IN');
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-environmental-heading text-foreground">
          System Alerts
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Settings">
            Configure
          </Button>
          <Button variant="outline" size="sm" iconName="RefreshCw">
            Refresh
          </Button>
        </div>
      </div>
      
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-environmental ${
              activeTab === tab?.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-background'
            }`}
          >
            <span>{tab?.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              activeTab === tab?.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : `bg-muted-foreground/20 ${tab?.color}`
            }`}>
              {tab?.count}
            </span>
          </button>
        ))}
      </div>
    
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {alerts?.[activeTab]?.map((alert) => (
          <div
            key={alert?.id}
            className={`border rounded-lg p-4 transition-environmental hover:shadow-sm ${
              alert?.status === 'unresolved' ? 'border-red-200 bg-red-50/30' : 'border-border'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  alert?.priority === 'critical' ? 'bg-red-100 text-red-600' :
                  alert?.priority === 'high'? 'bg-orange-100 text-orange-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  <Icon name={getAlertIcon(alert?.type)} size={16} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">
                    {alert?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert?.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={12} />
                      <span>{alert?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{formatTime(alert?.timestamp)}</span>
                    </div>
                    {alert?.assignedTo && (
                      <div className="flex items-center space-x-1">
                        <Icon name="User" size={12} />
                        <span>{alert?.assignedTo}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(alert?.priority)}`}>
                  {alert?.priority?.charAt(0)?.toUpperCase() + alert?.priority?.slice(1)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert?.status)}`}>
                  {alert?.status?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">ETA:</span>
                <span className="text-xs font-medium text-foreground">
                  {alert?.estimatedResolution}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                {alert?.status === 'unresolved' && (
                  <Button variant="outline" size="sm" iconName="UserPlus">
                    Assign
                  </Button>
                )}
                <Button variant="ghost" size="sm" iconName="MessageSquare">
                  Update
                </Button>
                <Button variant="ghost" size="sm" iconName="ExternalLink">
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {alerts?.[activeTab]?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="CheckCircle" size={48} className="text-environmental-good mx-auto mb-3" />
          <p className="text-muted-foreground">No {activeTab} priority alerts at this time.</p>
        </div>
      )}
    </div>
  );
};

export default AlertsPanel;