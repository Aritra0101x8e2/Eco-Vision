import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationNotifications = ({ 
  userLocation, 
  nearbyBins, 
  onNotificationAction, 
  isVisible, 
  onClose 
}) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationSettings, setNotificationSettings] = useState({
    fullBins: true,
    collectionSchedule: true,
    newBins: true,
    environmental: false
  });

  useEffect(() => {
    if (userLocation && nearbyBins) {
      generateNotifications();
    }
  }, [userLocation, nearbyBins]);

  const generateNotifications = () => {
    const now = new Date();
    const mockNotifications = [
      {
        id: 'notif-1',
        type: 'full-bin',
        priority: 'high',
        title: 'Bin Full Alert',
        message: 'Recyclable bin at Park Street is full. Alternative bin 200m away.',
        timestamp: new Date(now - 300000), 
        location: { lat: 22.5744, lng: 88.3629 },
        actionable: true,
        actions: ['View Alternative', 'Report Issue']
      },
      {
        id: 'notif-2',
        type: 'collection-schedule',
        priority: 'medium',
        title: 'Collection Reminder',
        message: 'Organic waste collection in your area starts in 30 minutes.',
        timestamp: new Date(now - 600000), 
        location: { lat: 22.5726, lng: 88.3639 },
        actionable: true,
        actions: ['Set Reminder', 'View Schedule']
      },
      {
        id: 'notif-3',
        type: 'new-bin',
        priority: 'low',
        title: 'New Bin Available',
        message: 'A new recyclable bin has been installed near Camac Street.',
        timestamp: new Date(now - 1800000), // 30 minutes ago
        location: { lat: 22.5708, lng: 88.3649 },
        actionable: true,
        actions: ['View Location', 'Add to Favorites']
      },
      {
        id: 'notif-4',
        type: 'environmental',
        priority: 'medium',
        title: 'Air Quality Alert',
        message: 'Air quality in your area has improved to "Good" level.',
        timestamp: new Date(now - 3600000),
        location: userLocation,
        actionable: false,
        actions: []
      }
    ];

    const filtered = mockNotifications?.filter(notif => {
      switch (notif?.type) {
        case 'full-bin': return notificationSettings?.fullBins;
        case 'collection-schedule': return notificationSettings?.collectionSchedule;
        case 'new-bin': return notificationSettings?.newBins;
        case 'environmental': return notificationSettings?.environmental;
        default: return true;
      }
    });

    setNotifications(filtered);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'full-bin': return 'AlertTriangle';
      case 'collection-schedule': return 'Clock';
      case 'new-bin': return 'Plus';
      case 'environmental': return 'Leaf';
      default: return 'Bell';
    }
  };

  const getNotificationColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-environmental-poor';
      case 'medium': return 'text-environmental-moderate';
      case 'low': return 'text-environmental-good';
      default: return 'text-muted-foreground';
    }
  };

  const getPriorityBg = (priority) => {
    switch (priority) {
      case 'high': return 'bg-environmental-poor/10 border-environmental-poor/20';
      case 'medium': return 'bg-environmental-moderate/10 border-environmental-moderate/20';
      case 'low': return 'bg-environmental-good/10 border-environmental-good/20';
      default: return 'bg-muted/10 border-border';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const handleNotificationAction = (notification, action) => {
    if (onNotificationAction) {
      onNotificationAction(notification, action);
    }
    
    // Remove notification after action
    setNotifications(prev => prev?.filter(n => n?.id !== notification?.id));
  };

  const dismissNotification = (notificationId) => {
    setNotifications(prev => prev?.filter(n => n?.id !== notificationId));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const toggleSetting = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev?.[setting]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg p-6 space-y-6 max-h-96 overflow-hidden flex flex-col">
    
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Bell" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-environmental-heading text-foreground">
              Location Alerts
            </h3>
            <p className="text-sm text-muted-foreground">
              {notifications?.length} active notifications
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {notifications?.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllNotifications}>
              <Icon name="Trash2" size={14} className="mr-1" />
              Clear All
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3">
        {notifications?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Bell" size={48} className="text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-sm text-muted-foreground">No active notifications</p>
            <p className="text-xs text-muted-foreground mt-1">
              You'll be notified about nearby bin status and environmental updates
            </p>
          </div>
        ) : (
          notifications?.map(notification => (
            <div 
              key={notification?.id} 
              className={`p-4 rounded-lg border ${getPriorityBg(notification?.priority)}`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-lg bg-card flex items-center justify-center ${getNotificationColor(notification?.priority)}`}>
                  <Icon name={getNotificationIcon(notification?.type)} size={16} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground truncate">
                      {notification?.title}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">
                        {formatTimeAgo(notification?.timestamp)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => dismissNotification(notification?.id)}
                      >
                        <Icon name="X" size={12} />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {notification?.message}
                  </p>
                  
                  {notification?.actionable && notification?.actions?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {notification?.actions?.map(action => (
                        <Button
                          key={action}
                          variant="outline"
                          size="sm"
                          onClick={() => handleNotificationAction(notification, action)}
                          className="text-xs"
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-border pt-4 space-y-3">
        <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
          <Icon name="Settings" size={16} className="text-muted-foreground" />
          <span>Notification Preferences</span>
        </h4>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="fullBins"
              checked={notificationSettings?.fullBins}
              onChange={() => toggleSetting('fullBins')}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
            />
            <label htmlFor="fullBins" className="text-sm text-foreground">
              Full Bins
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="collectionSchedule"
              checked={notificationSettings?.collectionSchedule}
              onChange={() => toggleSetting('collectionSchedule')}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
            />
            <label htmlFor="collectionSchedule" className="text-sm text-foreground">
              Collection Times
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="newBins"
              checked={notificationSettings?.newBins}
              onChange={() => toggleSetting('newBins')}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
            />
            <label htmlFor="newBins" className="text-sm text-foreground">
              New Bins
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="environmental"
              checked={notificationSettings?.environmental}
              onChange={() => toggleSetting('environmental')}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
            />
            <label htmlFor="environmental" className="text-sm text-foreground">
              Environmental
            </label>
          </div>
        </div>
      </div>
      <div className="bg-muted/30 rounded-lg p-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground">Location Services</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-environmental-good rounded-full animate-pulse"></div>
            <span className="text-environmental-good font-medium">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationNotifications;