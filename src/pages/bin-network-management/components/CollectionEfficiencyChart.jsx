import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CollectionEfficiencyChart = ({ data }) => {
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
              <span className="text-muted-foreground">{entry?.dataKey}:</span>
              <span className="font-medium">{entry?.value}%</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-environmental-heading text-foreground mb-2">
          Collection Efficiency Trends
        </h3>
        <p className="text-sm text-muted-foreground">
          Weekly collection efficiency across different zones
        </p>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="week" 
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
            <Bar 
              dataKey="scheduled" 
              name="Scheduled Collections"
              fill="var(--color-environmental-excellent)" 
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="completed" 
              name="Completed Collections"
              fill="var(--color-environmental-good)" 
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="efficiency" 
              name="Overall Efficiency"
              fill="var(--color-secondary)" 
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-environmental-excellent">94.2%</div>
          <div className="text-sm text-muted-foreground">Average Efficiency</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-environmental-good">1,247</div>
          <div className="text-sm text-muted-foreground">Collections This Week</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">23</div>
          <div className="text-sm text-muted-foreground">Missed Collections</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionEfficiencyChart;