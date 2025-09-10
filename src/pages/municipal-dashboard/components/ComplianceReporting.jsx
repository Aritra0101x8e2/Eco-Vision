import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComplianceReporting = () => {
  const [activeReport, setActiveReport] = useState('environmental');

  const complianceData = {
    environmental: {
      title: "Environmental Compliance Report",
      lastUpdated: "2025-01-10T14:30:00",
      status: "compliant",
      nextDue: "2025-01-15",
      metrics: [
        {
          parameter: "Air Quality Index",
          current: 85,
          threshold: 100,
          status: "good",
          unit: "AQI",
          trend: "stable"
        },
        {
          parameter: "Waste Diversion Rate",
          current: 68,
          threshold: 60,
          status: "excellent",
          unit: "%",
          trend: "improving"
        },
        {
          parameter: "Recycling Rate",
          current: 42,
          threshold: 40,
          status: "good",
          unit: "%",
          trend: "improving"
        },
        {
          parameter: "Landfill Reduction",
          current: 35,
          threshold: 30,
          status: "good",
          unit: "%",
          trend: "stable"
        }
      ],
      violations: [],
      recommendations: [
        "Increase community education programs for better waste segregation",
        "Implement more recycling collection points in high-density areas",
        "Consider composting programs for organic waste reduction"
      ]
    },
    safety: {
      title: "Safety Compliance Report",
      lastUpdated: "2025-01-10T12:00:00",
      status: "compliant",
      nextDue: "2025-01-12",
      metrics: [
        {
          parameter: "Incident Rate",
          current: 2.1,
          threshold: 3.0,
          status: "good",
          unit: "per 1000 hours",
          trend: "improving"
        },
        {
          parameter: "Safety Training Completion",
          current: 95,
          threshold: 90,
          status: "excellent",
          unit: "%",
          trend: "stable"
        },
        {
          parameter: "Equipment Safety Checks",
          current: 98,
          threshold: 95,
          status: "excellent",
          unit: "%",
          trend: "stable"
        },
        {
          parameter: "PPE Compliance",
          current: 92,
          threshold: 85,
          status: "good",
          unit: "%",
          trend: "improving"
        }
      ],
      violations: [
        {
          id: 1,
          description: "Minor PPE violation reported on Route C",
          date: "2025-01-08",
          severity: "low",
          status: "resolved"
        }
      ],
      recommendations: [
        "Continue regular safety training sessions",
        "Implement monthly safety audits",
        "Upgrade PPE for collection teams"
      ]
    },
    operational: {
      title: "Operational Compliance Report",
      lastUpdated: "2025-01-10T16:00:00",
      status: "minor_issues",
      nextDue: "2025-01-11",
      metrics: [
        {
          parameter: "Collection Schedule Adherence",
          current: 94,
          threshold: 95,
          status: "warning",
          unit: "%",
          trend: "declining"
        },
        {
          parameter: "Route Efficiency",
          current: 87,
          threshold: 85,
          status: "good",
          unit: "%",
          trend: "stable"
        },
        {
          parameter: "Vehicle Maintenance",
          current: 96,
          threshold: 90,
          status: "excellent",
          unit: "%",
          trend: "improving"
        },
        {
          parameter: "Fuel Efficiency",
          current: 8.2,
          threshold: 9.0,
          status: "excellent",
          unit: "km/L",
          trend: "improving"
        }
      ],
      violations: [
        {
          id: 1,
          description: "Route B exceeded scheduled time by 2 hours",
          date: "2025-01-09",
          severity: "medium",
          status: "investigating"
        },
        {
          id: 2,
          description: "Missed collection reported in Sector V",
          date: "2025-01-08",
          severity: "medium",
          status: "resolved"
        }
      ],
      recommendations: [
        "Review Route B scheduling and optimize stops",
        "Implement real-time tracking for better schedule adherence",
        "Consider additional vehicles during peak periods"
      ]
    }
  };

  const reports = [
    { id: 'environmental', label: 'Environmental', icon: 'Leaf' },
    { id: 'safety', label: 'Safety', icon: 'Shield' },
    { id: 'operational', label: 'Operational', icon: 'Settings' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'bg-environmental-excellent text-white';
      case 'good': return 'bg-environmental-good text-white';
      case 'warning': return 'bg-environmental-moderate text-white';
      case 'poor': return 'bg-environmental-poor text-white';
      case 'compliant': return 'bg-environmental-good text-white';
      case 'minor_issues': return 'bg-environmental-moderate text-white';
      case 'non_compliant': return 'bg-environmental-poor text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getViolationSeverityColor = (severity) => {
    switch (severity) {
      case 'low': return 'bg-yellow-100 text-yellow-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return 'TrendingUp';
      case 'declining': return 'TrendingDown';
      case 'stable': return 'Minus';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'improving': return 'text-environmental-good';
      case 'declining': return 'text-environmental-poor';
      case 'stable': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const currentData = complianceData?.[activeReport];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-environmental-heading text-foreground">
          Compliance Reporting
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Download">
            Export All
          </Button>
          <Button variant="outline" size="sm" iconName="Send">
            Submit Reports
          </Button>
        </div>
      </div>
      {/* Report Type Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {reports?.map((report) => (
          <button
            key={report?.id}
            onClick={() => setActiveReport(report?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-environmental ${
              activeReport === report?.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-background'
            }`}
          >
            <Icon name={report?.icon} size={16} />
            <span>{report?.label}</span>
          </button>
        ))}
      </div>
      
      <div className="space-y-6">
  
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-1">
              {currentData?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              Last updated: {formatDate(currentData?.lastUpdated)}
            </p>
          </div>
          <div className="text-right">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(currentData?.status)}`}>
              {currentData?.status?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Next due: {formatDate(currentData?.nextDue)}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-md font-medium text-foreground mb-4">Key Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentData?.metrics?.map((metric, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{metric?.parameter}</span>
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={getTrendIcon(metric?.trend)} 
                      size={14} 
                      className={getTrendColor(metric?.trend)}
                    />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric?.status)}`}>
                      {metric?.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-end space-x-2 mb-2">
                  <span className="text-2xl font-bold text-foreground">{metric?.current}</span>
                  <span className="text-sm text-muted-foreground">{metric?.unit}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Threshold: {metric?.threshold} {metric?.unit}</span>
                  <span className={getTrendColor(metric?.trend)}>
                    {metric?.trend?.charAt(0)?.toUpperCase() + metric?.trend?.slice(1)}
                  </span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      metric?.status === 'excellent' ? 'bg-environmental-excellent' :
                      metric?.status === 'good' ? 'bg-environmental-good' :
                      metric?.status === 'warning'? 'bg-environmental-moderate' : 'bg-environmental-poor'
                    }`}
                    style={{ 
                      width: `${Math.min((metric?.current / metric?.threshold) * 100, 100)}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentData?.violations?.length > 0 && (
          <div>
            <h4 className="text-md font-medium text-foreground mb-4">Recent Violations</h4>
            <div className="space-y-3">
              {currentData?.violations?.map((violation) => (
                <div key={violation?.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">{violation?.description}</p>
                      <p className="text-sm text-muted-foreground">Date: {formatDate(violation?.date)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getViolationSeverityColor(violation?.severity)}`}>
                        {violation?.severity?.charAt(0)?.toUpperCase() + violation?.severity?.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        violation?.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {violation?.status?.charAt(0)?.toUpperCase() + violation?.status?.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-md font-medium text-foreground mb-4">Recommendations</h4>
          <div className="space-y-2">
            {currentData?.recommendations?.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                <Icon name="Lightbulb" size={16} className="text-accent mt-0.5" />
                <p className="text-sm text-foreground">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 pt-4 border-t border-border">
          <Button variant="outline" iconName="FileText">
            Generate Detailed Report
          </Button>
          <Button variant="outline" iconName="Calendar">
            Schedule Review
          </Button>
          <Button iconName="Send">
            Submit to Authorities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceReporting;