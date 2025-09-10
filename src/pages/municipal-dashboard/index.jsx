import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MetricsOverview from './components/MetricsOverview';
import CollectionAnalytics from './components/CollectionAnalytics';
import CitizenFeedback from './components/CitizenFeedback';
import AlertsPanel from './components/AlertsPanel';
import BudgetTracker from './components/BudgetTracker';
import ComplianceReporting from './components/ComplianceReporting';

const MunicipalDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { id: 'feedback', label: 'Citizen Feedback', icon: 'MessageSquare' },
    { id: 'alerts', label: 'Alerts', icon: 'AlertTriangle' },
    { id: 'budget', label: 'Budget', icon: 'Wallet' },
    { id: 'compliance', label: 'Compliance', icon: 'Shield' }
  ];

  const quickActions = [
    {
      title: "Generate Monthly Report",
      description: "Create comprehensive monthly performance report",
      icon: "FileText",
      action: "generate_report",
      color: "bg-primary"
    },
    {
      title: "Schedule Route Optimization",
      description: "Optimize collection routes for next week",
      icon: "Route",
      action: "optimize_routes",
      color: "bg-secondary"
    },
    {
      title: "Send Public Notice",
      description: "Broadcast important updates to citizens",
      icon: "Megaphone",
      action: "send_notice",
      color: "bg-accent"
    },
    {
      title: "Emergency Response",
      description: "Activate emergency waste management protocol",
      icon: "Siren",
      action: "emergency_response",
      color: "bg-environmental-poor"
    }
  ];

  const systemStatus = {
    binNetwork: { status: 'operational', count: 2847, issues: 12 },
    vehicles: { status: 'operational', count: 156, maintenance: 3 },
    personnel: { status: 'operational', count: 342, absent: 8 },
    systems: { status: 'operational', uptime: 99.7, alerts: 2 }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <MetricsOverview />
          
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-environmental-heading text-foreground mb-6">
                System Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Trash2" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Bin Network</span>
                    </div>
                    <div className="w-2 h-2 bg-environmental-good rounded-full"></div>
                  </div>
                  <p className="text-lg font-bold text-foreground">{systemStatus?.binNetwork?.count}</p>
                  <p className="text-xs text-muted-foreground">{systemStatus?.binNetwork?.issues} issues reported</p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Truck" size={16} className="text-secondary" />
                      <span className="text-sm font-medium text-muted-foreground">Vehicles</span>
                    </div>
                    <div className="w-2 h-2 bg-environmental-good rounded-full"></div>
                  </div>
                  <p className="text-lg font-bold text-foreground">{systemStatus?.vehicles?.count}</p>
                  <p className="text-xs text-muted-foreground">{systemStatus?.vehicles?.maintenance} in maintenance</p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Personnel</span>
                    </div>
                    <div className="w-2 h-2 bg-environmental-good rounded-full"></div>
                  </div>
                  <p className="text-lg font-bold text-foreground">{systemStatus?.personnel?.count}</p>
                  <p className="text-xs text-muted-foreground">{systemStatus?.personnel?.absent} absent today</p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Server" size={16} className="text-environmental-good" />
                      <span className="text-sm font-medium text-muted-foreground">Systems</span>
                    </div>
                    <div className="w-2 h-2 bg-environmental-good rounded-full"></div>
                  </div>
                  <p className="text-lg font-bold text-foreground">{systemStatus?.systems?.uptime}%</p>
                  <p className="text-xs text-muted-foreground">{systemStatus?.systems?.alerts} active alerts</p>
                </div>
              </div>
            </div>
            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-environmental-heading text-foreground mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions?.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start space-y-2 hover:shadow-md transition-environmental"
                  >
                    <div className={`${action?.color} p-2 rounded-lg mb-2`}>
                      <Icon name={action?.icon} size={20} className="text-white" />
                    </div>
                    <h3 className="font-medium text-foreground text-left">{action?.title}</h3>
                    <p className="text-xs text-muted-foreground text-left">{action?.description}</p>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return <CollectionAnalytics />;
      case 'feedback':
        return <CitizenFeedback />;
      case 'alerts':
        return <AlertsPanel />;
      case 'budget':
        return <BudgetTracker />;
      case 'compliance':
        return <ComplianceReporting />;
      default:
        return <MetricsOverview />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Municipal Dashboard - Eco Vision</title>
        <meta name="description" content="Comprehensive administrative interface for Kolkata municipal officials and waste management professionals with advanced analytics and operational management tools." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-16">
          <div className="flex">

            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16 bg-card border-r border-border">
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="px-4 mb-6">
                    <h1 className="text-lg font-environmental-heading text-foreground">
                      Municipal Dashboard
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      Administrative Control Center
                    </p>
                  </div>
                  
                  <nav className="flex-1 px-4 space-y-1">
                    {navigationSections?.map((section) => (
                      <button
                        key={section?.id}
                        onClick={() => setActiveSection(section?.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md transition-environmental ${
                          activeSection === section?.id
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon name={section?.icon} size={18} />
                        <span>{section?.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              
                <div className="flex-shrink-0 p-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        Municipal Admin
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        Kolkata Municipal Corp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-64 flex flex-col flex-1">
              <main className="flex-1">
                <div className="py-6">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 
                    <div className="lg:hidden mb-6">
                      <div className="flex space-x-1 overflow-x-auto pb-2">
                        {navigationSections?.map((section) => (
                          <button
                            key={section?.id}
                            onClick={() => setActiveSection(section?.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-environmental ${
                              activeSection === section?.id
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                          >
                            <Icon name={section?.icon} size={16} />
                            <span>{section?.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <h1 className="text-2xl font-environmental-heading text-foreground">
                            {navigationSections?.find(s => s?.id === activeSection)?.label || 'Overview'}
                          </h1>
                          <p className="text-muted-foreground">
                            {activeSection === 'overview' && 'Real-time system monitoring and quick actions'}
                            {activeSection === 'analytics' && 'Collection performance and operational insights'}
                            {activeSection === 'feedback' && 'Community reports and citizen engagement'}
                            {activeSection === 'alerts' && 'System alerts and priority notifications'}
                            {activeSection === 'budget' && 'Financial tracking and budget management'}
                            {activeSection === 'compliance' && 'Regulatory compliance and reporting'}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-environmental-good/10 rounded-full">
                            <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
                            <span className="text-sm font-medium text-environmental-good">
                              System Operational
                            </span>
                          </div>
                          
                          <Button variant="outline" size="sm" iconName="RefreshCw">
                            Refresh
                          </Button>
                        </div>
                      </div>
                    </div>
                    {renderContent()}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MunicipalDashboard;