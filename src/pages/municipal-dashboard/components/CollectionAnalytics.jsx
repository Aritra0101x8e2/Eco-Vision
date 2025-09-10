import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CollectionAnalytics = () => {
  const [activeTab, setActiveTab] = useState('efficiency');

  const efficiencyData = [
    { name: 'Mon', collections: 245, scheduled: 260, efficiency: 94.2 },
    { name: 'Tue', collections: 267, scheduled: 275, efficiency: 97.1 },
    { name: 'Wed', collections: 234, scheduled: 250, efficiency: 93.6 },
    { name: 'Thu', collections: 289, scheduled: 295, efficiency: 98.0 },
    { name: 'Fri', collections: 278, scheduled: 285, efficiency: 97.5 },
    { name: 'Sat', collections: 198, scheduled: 210, efficiency: 94.3 },
    { name: 'Sun', collections: 156, scheduled: 165, efficiency: 94.5 }
  ];

  const wasteTypeData = [
    { name: 'Organic', value: 45, color: '#4CAF50' },
    { name: 'Recyclable', value: 30, color: '#2196F3' },
    { name: 'Hazardous', value: 15, color: '#FF9800' },
    { name: 'General', value: 10, color: '#9E9E9E' }
  ];

  const routeData = [
    { route: 'Route A', time: 2.3, fuel: 45, bins: 23, efficiency: 95 },
    { route: 'Route B', time: 1.8, fuel: 38, bins: 19, efficiency: 98 },
    { route: 'Route C', time: 3.1, fuel: 52, bins: 31, efficiency: 92 },
    { route: 'Route D', time: 2.7, fuel: 48, bins: 27, efficiency: 94 },
    { route: 'Route E', time: 2.1, fuel: 41, bins: 21, efficiency: 96 }
  ];

  const tabs = [
    { id: 'efficiency', label: 'Collection Efficiency', icon: 'TrendingUp' },
    { id: 'waste-types', label: 'Waste Distribution', icon: 'PieChart' },
    { id: 'routes', label: 'Route Performance', icon: 'Route' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-environmental-heading text-foreground">
          Collection Analytics
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Download">
            Export Data
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
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
    
      <div className="space-y-6">
        {activeTab === 'efficiency' && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Weekly Collection Efficiency
              </h3>
              <p className="text-sm text-muted-foreground">
                Comparison of scheduled vs actual collections
              </p>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#757575"
                    fontSize={12}
                  />
                  <YAxis stroke="#757575" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="scheduled" 
                    fill="#e0e0e0" 
                    name="Scheduled"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="collections" 
                    fill="#2E7D32" 
                    name="Completed"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'waste-types' && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Waste Type Distribution
              </h3>
              <p className="text-sm text-muted-foreground">
                Breakdown of collected waste by category
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={wasteTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100)?.toFixed(0)}%`}
                    >
                      {wasteTypeData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry?.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                {wasteTypeData?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item?.color }}
                      ></div>
                      <span className="font-medium text-foreground">{item?.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{item?.value}%</p>
                      <p className="text-xs text-muted-foreground">of total waste</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'routes' && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Route Performance Analysis
              </h3>
              <p className="text-sm text-muted-foreground">
                Efficiency metrics for collection routes
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Route</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Time (hrs)</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Fuel (L)</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Bins</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Efficiency</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {routeData?.map((route, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium text-foreground">{route?.route}</td>
                      <td className="py-3 px-4 text-foreground">{route?.time}</td>
                      <td className="py-3 px-4 text-foreground">{route?.fuel}</td>
                      <td className="py-3 px-4 text-foreground">{route?.bins}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          route?.efficiency >= 95 
                            ? 'bg-environmental-good/10 text-environmental-good'
                            : route?.efficiency >= 90
                            ? 'bg-environmental-moderate/10 text-environmental-moderate' :'bg-environmental-poor/10 text-environmental-poor'
                        }`}>
                          {route?.efficiency}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm" iconName="ExternalLink">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionAnalytics;