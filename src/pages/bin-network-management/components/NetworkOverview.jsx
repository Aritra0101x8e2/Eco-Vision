import React from 'react';
import Icon from '../../../components/AppIcon';

const NetworkOverview = ({ networkStats }) => {
  const statCards = [
    {
      title: 'Total Bins',
      value: networkStats?.totalBins,
      change: '+12',
      changeType: 'positive',
      icon: 'Trash2',
      color: 'text-primary'
    },
    {
      title: 'Active Bins',
      value: networkStats?.activeBins,
      change: `${((networkStats?.activeBins / networkStats?.totalBins) * 100)?.toFixed(1)}%`,
      changeType: 'neutral',
      icon: 'CheckCircle',
      color: 'text-environmental-excellent'
    },
    {
      title: 'Bins Needing Collection',
      value: networkStats?.binsNeedingCollection,
      change: '-8',
      changeType: 'positive',
      icon: 'AlertTriangle',
      color: 'text-environmental-moderate'
    },
    {
      title: 'Maintenance Required',
      value: networkStats?.maintenanceRequired,
      change: '+3',
      changeType: 'negative',
      icon: 'Wrench',
      color: 'text-environmental-poor'
    },
    {
      title: 'Collection Efficiency',
      value: `${networkStats?.collectionEfficiency}%`,
      change: '+2.3%',
      changeType: 'positive',
      icon: 'TrendingUp',
      color: 'text-secondary'
    },
    {
      title: 'Average Capacity',
      value: `${networkStats?.averageCapacity}%`,
      change: '-5.2%',
      changeType: 'positive',
      icon: 'BarChart3',
      color: 'text-accent'
    }
  ];

  const getChangeColor = (type) => {
    switch (type) {
      case 'positive': return 'text-environmental-excellent';
      case 'negative': return 'text-environmental-poor';
      default: return 'text-muted-foreground';
    }
  };

  const getChangeIcon = (type) => {
    switch (type) {
      case 'positive': return 'TrendingUp';
      case 'negative': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards?.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-environmental">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-muted ${stat?.color}`}>
              <Icon name={stat?.icon} size={24} />
            </div>
            <div className={`flex items-center space-x-1 text-sm ${getChangeColor(stat?.changeType)}`}>
              <Icon name={getChangeIcon(stat?.changeType)} size={14} />
              <span className="font-medium">{stat?.change}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat?.value}</h3>
            <p className="text-sm text-muted-foreground">{stat?.title}</p>
          </div>

          {(stat?.title?.includes('Capacity') || stat?.title?.includes('Efficiency')) && (
            <div className="mt-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    parseInt(stat?.value) >= 80 ? 'bg-environmental-excellent' :
                    parseInt(stat?.value) >= 60 ? 'bg-environmental-good' :
                    parseInt(stat?.value) >= 40 ? 'bg-environmental-moderate': 'bg-environmental-poor'
                  }`}
                  style={{ width: `${parseInt(stat?.value)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NetworkOverview;