import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import NetworkOverview from './components/NetworkOverview';
import BinStatusCard from './components/BinStatusCard';
import CollectionEfficiencyChart from './components/CollectionEfficiencyChart';
import RouteOptimizationPanel from './components/RouteOptimizationPanel';
import MaintenanceTracker from './components/MaintenanceTracker';
import CapacityPredictionChart from './components/CapacityPredictionChart';
import CitizenSchedulePanel from './components/CitizenSchedulePanel';

const BinNetworkManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState('citizen'); 

 
  const networkStats = {
    totalBins: 1247,
    activeBins: 1189,
    binsNeedingCollection: 87,
    maintenanceRequired: 23,
    collectionEfficiency: 94.2,
    averageCapacity: 67.8
  };

  const binStatusData = [
    {
      id: 'BIN001',
      location: 'Park Street Metro Station',
      type: 'General Waste',
      capacity: 92,
      lastCollection: '2 hours ago',
      nextCollection: 'In 4 hours',
      issues: ['Sensor malfunction']
    },
    {
      id: 'BIN002',
      location: 'Esplanade Bus Stand',
      type: 'Recyclable',
      capacity: 78,
      lastCollection: '6 hours ago',
      nextCollection: 'Tomorrow 8 AM',
      issues: []
    },
    {
      id: 'BIN003',
      location: 'New Market Area',
      type: 'Organic Waste',
      capacity: 45,
      lastCollection: '1 day ago',
      nextCollection: 'Today 6 PM',
      issues: []
    },
    {
      id: 'BIN004',
      location: 'Howrah Bridge',
      type: 'General Waste',
      capacity: 89,
      lastCollection: '3 hours ago',
      nextCollection: 'In 2 hours',
      issues: ['Lid damaged']
    },
    {
      id: 'BIN005',
      location: 'Salt Lake Stadium',
      type: 'Mixed Waste',
      capacity: 23,
      lastCollection: '12 hours ago',
      nextCollection: 'Tomorrow 10 AM',
      issues: []
    },
    {
      id: 'BIN006',
      location: 'Gariahat Market',
      type: 'Organic Waste',
      capacity: 67,
      lastCollection: '8 hours ago',
      nextCollection: 'Today 7 PM',
      issues: []
    }
  ];
  const efficiencyData = [
    { week: 'Week 1', scheduled: 95, completed: 89, efficiency: 94 },
    { week: 'Week 2', scheduled: 98, completed: 94, efficiency: 96 },
    { week: 'Week 3', scheduled: 92, completed: 87, efficiency: 95 },
    { week: 'Week 4', scheduled: 100, completed: 93, efficiency: 93 },
    { week: 'Week 5', scheduled: 97, completed: 92, efficiency: 95 },
    { week: 'Week 6', scheduled: 94, completed: 89, efficiency: 95 },
    { week: 'Week 7', scheduled: 99, completed: 95, efficiency: 96 }
  ];

  const routeData = [
    {
      id: 'ROUTE001',
      name: 'Central Kolkata Route',
      binCount: 45,
      distance: 12.5,
      estimatedTime: '2h 30m',
      fuelCost: '₹450',
      efficiency: 94,
      status: 'optimal'
    },
    {
      id: 'ROUTE002',
      name: 'Salt Lake Route',
      binCount: 32,
      distance: 8.7,
      estimatedTime: '1h 45m',
      fuelCost: '₹320',
      efficiency: 89,
      status: 'good'
    },
    {
      id: 'ROUTE003',
      name: 'South Kolkata Route',
      binCount: 67,
      distance: 18.2,
      estimatedTime: '3h 15m',
      fuelCost: '₹680',
      efficiency: 76,
      status: 'needs-optimization'
    }
  ];

  const maintenanceData = {
    scheduled: [
      {
        id: 'MAINT001',
        binLocation: 'Park Street Metro',
        type: 'Sensor Replacement',
        description: 'Replace faulty capacity sensor',
        scheduledDate: '15 Sep 2025',
        assignedTo: 'Rajesh Kumar',
        estimatedCost: '2,500',
        estimatedDuration: '2 hours',
        priority: 'high',
        status: 'scheduled',
        notes: 'Sensor showing inconsistent readings for past week'
      },
      {
        id: 'MAINT002',
        binLocation: 'New Market',
        type: 'Lid Repair',
        description: 'Fix damaged bin lid mechanism',
        scheduledDate: '16 Sep 2025',
        assignedTo: 'Amit Singh',
        estimatedCost: '800',
        estimatedDuration: '1 hour',
        priority: 'medium',
        status: 'scheduled'
      }
    ],
    inProgress: [
      {
        id: 'MAINT003',
        binLocation: 'Howrah Bridge',
        type: 'Deep Cleaning',
        description: 'Quarterly deep cleaning and sanitization',
        scheduledDate: '10 Sep 2025',
        assignedTo: 'Cleaning Team A',
        estimatedCost: '1,200',
        estimatedDuration: '3 hours',
        priority: 'low',
        status: 'in-progress'
      }
    ],
    completed: [
      {
        id: 'MAINT004',
        binLocation: 'Esplanade',
        type: 'Lock Replacement',
        description: 'Replaced broken security lock',
        scheduledDate: '8 Sep 2025',
        assignedTo: 'Suresh Pal',
        estimatedCost: '500',
        estimatedDuration: '30 minutes',
        priority: 'medium',
        status: 'completed'
      }
    ],
    overdue: [
      {
        id: 'MAINT005',
        binLocation: 'Gariahat Market',
        type: 'Paint Touch-up',
        description: 'Repaint bin exterior due to rust',
        scheduledDate: '5 Sep 2025',
        assignedTo: 'Maintenance Team B',
        estimatedCost: '1,500',
        estimatedDuration: '4 hours',
        priority: 'low',
        status: 'overdue',
        notes: 'Delayed due to weather conditions'
      }
    ]
  };
  const predictionData = [
    {
      binId: 'BIN001',
      location: 'Park Street Metro Station',
      type: 'General Waste',
      currentCapacity: 92,
      predictedFull: '4 hours',
      hourlyData: [
        { time: '00:00', actual: 45, predicted: 47 },
        { time: '02:00', actual: 52, predicted: 54 },
        { time: '04:00', actual: 61, predicted: 63 },
        { time: '06:00', actual: 68, predicted: 70 },
        { time: '08:00', actual: 75, predicted: 77 },
        { time: '10:00', actual: 82, predicted: 84 },
        { time: '12:00', actual: 89, predicted: 91 },
        { time: '14:00', actual: 92, predicted: 95 },
        { time: '16:00', actual: null, predicted: 98 },
        { time: '18:00', actual: null, predicted: 100 }
      ],
      dailyData: [
        { time: 'Mon', actual: 78, predicted: 80 },
        { time: 'Tue', actual: 85, predicted: 87 },
        { time: 'Wed', actual: 92, predicted: 94 },
        { time: 'Thu', actual: null, predicted: 89 },
        { time: 'Fri', actual: null, predicted: 95 },
        { time: 'Sat', actual: null, predicted: 88 },
        { time: 'Sun', actual: null, predicted: 76 }
      ]
    },
    {
      binId: 'BIN002',
      location: 'Esplanade Bus Stand',
      type: 'Recyclable',
      currentCapacity: 78,
      predictedFull: '12 hours',
      hourlyData: [
        { time: '00:00', actual: 35, predicted: 37 },
        { time: '02:00', actual: 42, predicted: 44 },
        { time: '04:00', actual: 51, predicted: 53 },
        { time: '06:00', actual: 58, predicted: 60 },
        { time: '08:00', actual: 65, predicted: 67 },
        { time: '10:00', actual: 72, predicted: 74 },
        { time: '12:00', actual: 78, predicted: 80 },
        { time: '14:00', actual: null, predicted: 85 },
        { time: '16:00', actual: null, predicted: 90 },
        { time: '18:00', actual: null, predicted: 95 }
      ],
      dailyData: [
        { time: 'Mon', actual: 68, predicted: 70 },
        { time: 'Tue', actual: 75, predicted: 77 },
        { time: 'Wed', actual: 78, predicted: 80 },
        { time: 'Thu', actual: null, predicted: 82 },
        { time: 'Fri', actual: null, predicted: 85 },
        { time: 'Sat', actual: null, predicted: 79 },
        { time: 'Sun', actual: null, predicted: 71 }
      ]
    }
  ];

  const scheduleData = [
    {
      area: 'Park Street',
      schedule: [
        {
          id: 'SCH001',
          location: 'Park Street Metro Station',
          wasteType: 'general',
          date: '10 Sep 2025',
          time: '8:00 AM',
          timeWindow: '8:00 AM - 10:00 AM',
          frequency: 'Daily',
          nextCollection: '11 Sep 2025',
          status: 'completed',
          description: 'Regular morning collection of general waste'
        },
        {
          id: 'SCH002',
          location: 'Park Street Shopping Area',
          wasteType: 'recyclable',
          date: '11 Sep 2025',
          time: '2:00 PM',
          timeWindow: '2:00 PM - 4:00 PM',
          frequency: 'Alternate Days',
          nextCollection: '13 Sep 2025',
          status: 'scheduled',
          description: 'Collection of recyclable materials from shops',
          specialInstructions: 'Please separate plastic and paper materials'
        }
      ]
    },
    {
      area: 'Salt Lake',
      schedule: [
        {
          id: 'SCH003',
          location: 'Salt Lake Stadium',
          wasteType: 'organic',
          date: '10 Sep 2025',
          time: '6:00 PM',
          timeWindow: '6:00 PM - 8:00 PM',
          frequency: 'Daily',
          nextCollection: '11 Sep 2025',
          status: 'delayed',
          description: 'Evening collection of organic waste',
          expectedArrival: '7:30 PM'
        }
      ]
    },
    {
      area: 'New Market',
      schedule: [
        {
          id: 'SCH004',
          location: 'New Market Complex',
          wasteType: 'general',
          date: '11 Sep 2025',
          time: '10:00 AM',
          timeWindow: '10:00 AM - 12:00 PM',
          frequency: 'Daily',
          nextCollection: '12 Sep 2025',
          status: 'in-progress',
          description: 'Market area general waste collection'
        }
      ]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Network Overview', icon: 'BarChart3' },
    { id: 'bins', label: 'Bin Status', icon: 'Trash2' },
    { id: 'efficiency', label: 'Collection Efficiency', icon: 'TrendingUp' },
    { id: 'routes', label: 'Route Optimization', icon: 'Route' },
    { id: 'maintenance', label: 'Maintenance', icon: 'Wrench' },
    { id: 'prediction', label: 'Capacity Prediction', icon: 'Brain' },
    { id: 'schedule', label: 'Collection Schedule', icon: 'Calendar' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <NetworkOverview networkStats={networkStats} />;
      case 'bins':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {binStatusData?.map((bin) => (
              <BinStatusCard key={bin?.id} bin={bin} />
            ))}
          </div>
        );
      case 'efficiency':
        return <CollectionEfficiencyChart data={efficiencyData} />;
      case 'routes':
        return <RouteOptimizationPanel routes={routeData} />;
      case 'maintenance':
        return <MaintenanceTracker maintenanceData={maintenanceData} />;
      case 'prediction':
        return <CapacityPredictionChart predictionData={predictionData} />;
      case 'schedule':
        return <CitizenSchedulePanel scheduleData={scheduleData} />;
      default:
        return <NetworkOverview networkStats={networkStats} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        
        <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <Icon name="Network" size={32} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-environmental-heading text-foreground">
                      Bin Network Management
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Comprehensive analytics and management for Kolkata's waste network
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-environmental-excellent rounded-full animate-environmental-pulse"></div>
                    <span className="text-environmental-excellent font-medium">
                      {networkStats?.activeBins} Active Bins
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-secondary" />
                    <span className="text-secondary font-medium">
                      {networkStats?.collectionEfficiency}% Efficiency
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-accent" />
                    <span className="text-accent font-medium">
                      Last Updated: 2 minutes ago
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-muted-foreground">View Mode:</span>
                  <div className="flex space-x-1 bg-muted p-1 rounded-lg">
                    {['citizen', 'municipal']?.map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setViewMode(mode)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-environmental capitalize ${
                          viewMode === mode
                            ? 'bg-card text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
                <Button variant="outline" iconName="Download" iconPosition="left">
                  Export Data
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border-b border-border sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-environmental whitespace-nowrap ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderTabContent()}
        </div>

        <div className="fixed bottom-6 right-6 z-20">
          <div className="flex flex-col space-y-2">
            <Button
              variant="default"
              size="icon"
              className="rounded-full shadow-lg"
              title="Report Issue"
            >
              <Icon name="AlertTriangle" size={20} />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-lg"
              title="Emergency Collection"
            >
              <Icon name="Phone" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg bg-card"
              title="Refresh Data"
            >
              <Icon name="RefreshCw" size={20} />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BinNetworkManagement;