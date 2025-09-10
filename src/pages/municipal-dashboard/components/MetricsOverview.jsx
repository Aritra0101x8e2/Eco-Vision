import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = () => {
  const metrics = [
    {
      id: 1,
      title: "Total Bins Monitored",
      value: "2,847",
      change: "+12",
      changeType: "increase",
      icon: "Trash2",
      color: "bg-primary",
      description: "Active smart bins across Kolkata"
    },
    {
      id: 2,
      title: "Collection Efficiency",
      value: "94.2%",
      change: "+2.1%",
      changeType: "increase",
      icon: "TrendingUp",
      color: "bg-environmental-good",
      description: "On-time collection rate this month"
    },
    {
      id: 3,
      title: "Citizen Reports",
      value: "1,234",
      change: "+89",
      changeType: "increase",
      icon: "Users",
      color: "bg-secondary",
      description: "Community feedback received today"
    },
    {
      id: 4,
      title: "Cost Savings",
      value: "₹4.2L",
      change: "+₹45K",
      changeType: "increase",
      icon: "IndianRupee",
      color: "bg-accent",
      description: "Monthly operational savings"
    },
    {
      id: 5,
      title: "Environmental Impact",
      value: "847 kg",
      change: "+23 kg",
      changeType: "increase",
      icon: "Leaf",
      color: "bg-environmental-excellent",
      description: "CO2 emissions reduced today"
    },
    {
      id: 6,
      title: "Active Vehicles",
      value: "156",
      change: "-3",
      changeType: "decrease",
      icon: "Truck",
      color: "bg-muted-foreground",
      description: "Collection vehicles in operation"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics?.map((metric) => (
        <div
          key={metric?.id}
          className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-environmental"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`${metric?.color} p-2 rounded-lg`}>
                  <Icon 
                    name={metric?.icon} 
                    size={20} 
                    className="text-white"
                  />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {metric?.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                <p className="text-2xl font-bold text-foreground">
                  {metric?.value}
                </p>
                
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center space-x-1 text-xs font-medium px-2 py-1 rounded-full ${
                      metric?.changeType === 'increase' ?'bg-environmental-good/10 text-environmental-good' :'bg-environmental-moderate/10 text-environmental-moderate'
                    }`}
                  >
                    <Icon
                      name={metric?.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'}
                      size={12}
                    />
                    <span>{metric?.change}</span>
                  </span>
                  <span className="text-xs text-muted-foreground">vs last period</span>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  {metric?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;