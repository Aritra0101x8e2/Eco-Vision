import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BudgetTracker = () => {
  const [activeView, setActiveView] = useState('overview');

  const budgetOverview = {
    totalBudget: 2500000,
    spent: 1875000,
    remaining: 625000,
    percentageSpent: 75,
    monthlyBurn: 208333
  };

  const monthlySpending = [
    { month: 'Apr', budget: 208333, actual: 195000, savings: 13333 },
    { month: 'May', budget: 208333, actual: 220000, savings: -11667 },
    { month: 'Jun', budget: 208333, actual: 185000, savings: 23333 },
    { month: 'Jul', budget: 208333, actual: 210000, savings: -1667 },
    { month: 'Aug', budget: 208333, actual: 198000, savings: 10333 },
    { month: 'Sep', budget: 208333, actual: 205000, savings: 3333 },
    { month: 'Oct', budget: 208333, actual: 192000, savings: 16333 },
    { month: 'Nov', budget: 208333, actual: 215000, savings: -6667 },
    { month: 'Dec', budget: 208333, actual: 201000, savings: 7333 },
    { month: 'Jan', budget: 208333, actual: 254000, savings: -45667 }
  ];

  const categoryBreakdown = [
    {
      category: 'Vehicle Operations',
      budgeted: 750000,
      spent: 562500,
      percentage: 75,
      trend: 'stable',
      subcategories: [
        { name: 'Fuel', budgeted: 300000, spent: 225000 },
        { name: 'Maintenance', budgeted: 250000, spent: 187500 },
        { name: 'Insurance', budgeted: 200000, spent: 150000 }
      ]
    },
    {
      category: 'Personnel',
      budgeted: 900000,
      spent: 675000,
      percentage: 75,
      trend: 'increasing',
      subcategories: [
        { name: 'Salaries', budgeted: 600000, spent: 450000 },
        { name: 'Benefits', budgeted: 200000, spent: 150000 },
        { name: 'Training', budgeted: 100000, spent: 75000 }
      ]
    },
    {
      category: 'Infrastructure',
      budgeted: 500000,
      spent: 375000,
      percentage: 75,
      trend: 'decreasing',
      subcategories: [
        { name: 'Bin Maintenance', budgeted: 200000, spent: 150000 },
        { name: 'Technology', budgeted: 200000, spent: 150000 },
        { name: 'Facilities', budgeted: 100000, spent: 75000 }
      ]
    },
    {
      category: 'Community Programs',
      budgeted: 200000,
      spent: 150000,
      percentage: 75,
      trend: 'stable',
      subcategories: [
        { name: 'Education', budgeted: 100000, spent: 75000 },
        { name: 'Incentives', budgeted: 75000, spent: 56250 },
        { name: 'Events', budgeted: 25000, spent: 18750 }
      ]
    },
    {
      category: 'Emergency Fund',
      budgeted: 150000,
      spent: 112500,
      percentage: 75,
      trend: 'stable',
      subcategories: [
        { name: 'Equipment Repairs', budgeted: 75000, spent: 56250 },
        { name: 'Contingency', budgeted: 75000, spent: 56250 }
      ]
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return 'TrendingUp';
      case 'decreasing': return 'TrendingDown';
      case 'stable': return 'Minus';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'increasing': return 'text-environmental-poor';
      case 'decreasing': return 'text-environmental-good';
      case 'stable': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-environmental-heading text-foreground">
          Budget Tracker
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Download">
            Export Report
          </Button>
          <Button variant="outline" size="sm" iconName="Settings">
            Configure
          </Button>
        </div>
      </div>
      {/* View Toggle */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {[
          { id: 'overview', label: 'Overview', icon: 'PieChart' },
          { id: 'trends', label: 'Spending Trends', icon: 'TrendingUp' },
          { id: 'categories', label: 'Categories', icon: 'BarChart3' }
        ]?.map((view) => (
          <button
            key={view?.id}
            onClick={() => setActiveView(view?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-environmental ${
              activeView === view?.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-background'
            }`}
          >
            <Icon name={view?.icon} size={16} />
            <span>{view?.label}</span>
          </button>
        ))}
      </div>
   
      <div className="space-y-6">
        {activeView === 'overview' && (
          <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Wallet" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Total Budget</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(budgetOverview?.totalBudget)}
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="CreditCard" size={16} className="text-environmental-moderate" />
                  <span className="text-sm font-medium text-muted-foreground">Amount Spent</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(budgetOverview?.spent)}
                </p>
                <p className="text-xs text-environmental-moderate">
                  {budgetOverview?.percentageSpent}% of budget
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="PiggyBank" size={16} className="text-environmental-good" />
                  <span className="text-sm font-medium text-muted-foreground">Remaining</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(budgetOverview?.remaining)}
                </p>
                <p className="text-xs text-environmental-good">
                  {100 - budgetOverview?.percentageSpent}% remaining
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-muted-foreground">Monthly Burn</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(budgetOverview?.monthlyBurn)}
                </p>
                <p className="text-xs text-muted-foreground">
                  Average per month
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Budget Utilization</span>
                <span className="text-sm text-muted-foreground">
                  {budgetOverview?.percentageSpent}% used
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${budgetOverview?.percentageSpent}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹0</span>
                <span>{formatCurrency(budgetOverview?.totalBudget)}</span>
              </div>
            </div>
          </div>
        )}

        {activeView === 'trends' && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Monthly Spending Trends
              </h3>
              <p className="text-sm text-muted-foreground">
                Budget vs actual spending comparison
              </p>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlySpending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#757575"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#757575" 
                    fontSize={12}
                    tickFormatter={(value) => `₹${(value / 1000)?.toFixed(0)}K`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px'
                    }}
                    formatter={(value, name) => [formatCurrency(value), name]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="budget" 
                    stroke="#757575" 
                    strokeDasharray="5 5"
                    name="Budgeted"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#2E7D32" 
                    strokeWidth={2}
                    name="Actual"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeView === 'categories' && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Category Breakdown
              </h3>
              <p className="text-sm text-muted-foreground">
                Budget allocation and spending by category
              </p>
            </div>
            
            <div className="space-y-4">
              {categoryBreakdown?.map((category, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{category?.category}</h4>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={getTrendIcon(category?.trend)} 
                        size={16} 
                        className={getTrendColor(category?.trend)}
                      />
                      <span className="text-sm font-medium text-foreground">
                        {formatCurrency(category?.spent)} / {formatCurrency(category?.budgeted)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 mb-3">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${category?.percentage}%` }}
                    ></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {category?.subcategories?.map((sub, subIndex) => (
                      <div key={subIndex} className="bg-muted/50 rounded p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{sub?.name}</span>
                          <span className="text-sm font-medium text-foreground">
                            {formatCurrency(sub?.spent)}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          of {formatCurrency(sub?.budgeted)} budgeted
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetTracker;