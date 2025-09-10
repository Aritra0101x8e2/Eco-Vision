import React, { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';
import Icon from '../../../components/AppIcon';


const CapacityPredictionChart = ({ predictionData }) => {
  const [selectedBin, setSelectedBin] = useState(predictionData?.[0]?.binId || '');
  const [timeRange, setTimeRange] = useState('7days');

  const timeRanges = [
    { id: '24hours', label: '24 Hours' },
    { id: '7days', label: '7 Days' },
    { id: '30days', label: '30 Days' }
  ];

  const getCurrentData = () => {
    const binData = predictionData?.find(bin => bin?.binId === selectedBin);
    if (!binData) return [];

    switch (timeRange) {
      case '24hours': return binData?.hourlyData || [];
      case '7days': return binData?.dailyData || [];
      case '30days': return binData?.monthlyData || [];
      default: return binData?.dailyData || [];
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry?.color }}
              ></div>
              <span className="text-muted-foreground">{entry?.name}:</span>
              <span className="font-medium">{entry?.value}%</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const getCapacityStatus = (capacity) => {
    if (capacity >= 90) return { color: 'text-environmental-poor', label: 'Critical' };
    if (capacity >= 70) return { color: 'text-environmental-moderate', label: 'High' };
    if (capacity >= 40) return { color: 'text-orange-600', label: 'Medium' };
    return { color: 'text-environmental-excellent', label: 'Low' };
  };

  const currentBinData = predictionData?.find(bin => bin?.binId === selectedBin);
  const currentCapacity = currentBinData?.currentCapacity || 0;
  const predictedFull = currentBinData?.predictedFull || 'N/A';
  const status = getCapacityStatus(currentCapacity);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-environmental-heading text-foreground mb-2">
            Capacity Prediction Analytics
          </h3>
          <p className="text-sm text-muted-foreground">
            AI-powered bin capacity forecasting based on historical patterns
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Brain" size={20} className="text-primary" />
          <span className="text-sm font-medium text-primary">AI Powered</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Select Bin</label>
          <select
            value={selectedBin}
            onChange={(e) => setSelectedBin(e?.target?.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {predictionData?.map((bin) => (
              <option key={bin?.binId} value={bin?.binId}>
                {bin?.location} - {bin?.type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Time Range</label>
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {timeRanges?.map((range) => (
              <button
                key={range?.id}
                onClick={() => setTimeRange(range?.id)}
                className={`flex-1 px-3 py-1 rounded-md text-sm font-medium transition-environmental ${
                  timeRange === range?.id
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {range?.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className={`text-2xl font-bold ${status?.color}`}>{currentCapacity}%</div>
          <div className="text-sm text-muted-foreground">Current Capacity</div>
        </div>
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-foreground">{predictedFull}</div>
          <div className="text-sm text-muted-foreground">Predicted Full</div>
        </div>
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className={`text-lg font-bold ${status?.color}`}>{status?.label}</div>
          <div className="text-sm text-muted-foreground">Risk Level</div>
        </div>
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-environmental-excellent">94%</div>
          <div className="text-sm text-muted-foreground">Accuracy</div>
        </div>
      </div>
      <div className="w-full h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={getCurrentData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="time" 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="actual"
              name="Actual Capacity"
              stroke="var(--color-primary)"
              fillOpacity={1}
              fill="url(#actualGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="predicted"
              name="Predicted Capacity"
              stroke="var(--color-secondary)"
              fillOpacity={1}
              fill="url(#predictedGradient)"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-muted rounded-lg p-4">
        <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
          <Icon name="Lightbulb" size={16} />
          <span>AI Insights</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Peak Usage Pattern:</p>
            <p className="text-foreground font-medium">Weekdays 8-10 AM, 6-8 PM</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Weather Impact:</p>
            <p className="text-foreground font-medium">+15% capacity during rain</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Seasonal Trend:</p>
            <p className="text-foreground font-medium">Higher usage in summer months</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Recommendation:</p>
            <p className="text-environmental-excellent font-medium">Increase collection frequency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityPredictionChart;