import React from 'react';
import Icon from '../../../components/AppIcon';

const BinStatusCard = ({ bin }) => {
  const getStatusColor = (capacity) => {
    if (capacity >= 90) return 'text-environmental-poor bg-red-50 border-red-200';
    if (capacity >= 70) return 'text-environmental-moderate bg-orange-50 border-orange-200';
    if (capacity >= 40) return 'text-environmental-good bg-yellow-50 border-yellow-200';
    return 'text-environmental-excellent bg-green-50 border-green-200';
  };

  const getStatusIcon = (capacity) => {
    if (capacity >= 90) return 'AlertTriangle';
    if (capacity >= 70) return 'AlertCircle';
    return 'CheckCircle';
  };

  const getCapacityBarColor = (capacity) => {
    if (capacity >= 90) return 'bg-environmental-poor';
    if (capacity >= 70) return 'bg-environmental-moderate';
    if (capacity >= 40) return 'bg-orange-400';
    return 'bg-environmental-excellent';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-environmental">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Icon name="Trash2" size={20} className="text-muted-foreground" />
          <div>
            <h3 className="font-medium text-foreground">{bin?.location}</h3>
            <p className="text-sm text-muted-foreground">{bin?.type}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(bin?.capacity)}`}>
          <Icon name={getStatusIcon(bin?.capacity)} size={12} />
          <span>{bin?.capacity}%</span>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Capacity</span>
            <span className="font-medium">{bin?.capacity}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${getCapacityBarColor(bin?.capacity)}`}
              style={{ width: `${bin?.capacity}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Last Collection</p>
            <p className="font-medium">{bin?.lastCollection}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Next Scheduled</p>
            <p className="font-medium">{bin?.nextCollection}</p>
          </div>
        </div>

        {bin?.issues && bin?.issues?.length > 0 && (
          <div className="pt-2 border-t border-border">
            <div className="flex items-center space-x-1 text-warning">
              <Icon name="AlertTriangle" size={14} />
              <span className="text-xs font-medium">{bin?.issues?.length} Issue(s)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BinStatusCard;