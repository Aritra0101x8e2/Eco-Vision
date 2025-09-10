import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CitizenFeedback = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const feedbackData = [
    {
      id: 1,
      type: 'complaint',
      title: "Overflowing bin at Park Street",
      description: "The bin near Park Street Metro station has been overflowing for 2 days. Causing hygiene issues.",
      location: "Park Street, Kolkata",
      priority: 'high',
      status: 'pending',
      reportedBy: "Rajesh Kumar",
      reportedAt: "2025-01-10T08:30:00",
      category: 'bin_overflow'
    },
    {
      id: 2,
      type: 'suggestion',
      title: "Add more recycling bins in Salt Lake",
      description: "Salt Lake City Centre needs more dedicated recycling bins to promote waste segregation.",
      location: "Salt Lake City Centre",
      priority: 'medium',
      status: 'in_progress',
      reportedBy: "Priya Sharma",
      reportedAt: "2025-01-10T10:15:00",
      category: 'infrastructure'
    },
    {
      id: 3,
      type: 'appreciation',
      title: "Excellent collection service in Ballygunge",
      description: "The waste collection team has been very punctual and efficient in our area. Great work!",
      location: "Ballygunge, Kolkata",
      priority: 'low',
      status: 'resolved',
      reportedBy: "Amit Ghosh",
      reportedAt: "2025-01-10T14:20:00",
      category: 'service_quality'
    },
    {
      id: 4,
      type: 'complaint',
      title: "Missed collection for 3 days",
      description: "Our street hasn\'t had waste collection for the past 3 days. Bins are overflowing.",
      location: "Gariahat Road",
      priority: 'high',
      status: 'assigned',
      reportedBy: "Sunita Das",
      reportedAt: "2025-01-10T16:45:00",
      category: 'missed_collection'
    },
    {
      id: 5,
      type: 'suggestion',
      title: "Mobile app for collection schedule",
      description: "It would be helpful to have a mobile app showing collection schedules for each area.",
      location: "New Town, Kolkata",
      priority: 'medium',
      status: 'under_review',
      reportedBy: "Arjun Banerjee",
      reportedAt: "2025-01-10T11:30:00",
      category: 'digital_services'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Feedback', count: feedbackData?.length },
    { id: 'complaint', label: 'Complaints', count: feedbackData?.filter(f => f?.type === 'complaint')?.length },
    { id: 'suggestion', label: 'Suggestions', count: feedbackData?.filter(f => f?.type === 'suggestion')?.length },
    { id: 'appreciation', label: 'Appreciation', count: feedbackData?.filter(f => f?.type === 'appreciation')?.length }
  ];

  const filteredFeedback = activeFilter === 'all' 
    ? feedbackData 
    : feedbackData?.filter(item => item?.type === activeFilter);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'complaint': return 'AlertTriangle';
      case 'suggestion': return 'Lightbulb';
      case 'appreciation': return 'Heart';
      default: return 'MessageSquare';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'complaint': return 'text-environmental-poor bg-red-50';
      case 'suggestion': return 'text-secondary bg-blue-50';
      case 'appreciation': return 'text-environmental-good bg-green-50';
      default: return 'text-muted-foreground bg-gray-50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-environmental-poor text-white';
      case 'medium': return 'bg-environmental-moderate text-white';
      case 'low': return 'bg-environmental-good text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'assigned': return 'bg-purple-100 text-purple-800';
      case 'under_review': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date?.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-environmental-heading text-foreground">
          Citizen Feedback
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Filter">
            Advanced Filter
          </Button>
          <Button variant="outline" size="sm" iconName="Download">
            Export
          </Button>
        </div>
      </div>
      {/* Filter Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg overflow-x-auto">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setActiveFilter(filter?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-environmental ${
              activeFilter === filter?.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-background'
            }`}
          >
            <span>{filter?.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeFilter === filter?.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted-foreground/20 text-muted-foreground'
            }`}>
              {filter?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedback?.map((feedback) => (
          <div
            key={feedback?.id}
            className="border border-border rounded-lg p-4 hover:shadow-sm transition-environmental"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getTypeColor(feedback?.type)}`}>
                  <Icon name={getTypeIcon(feedback?.type)} size={16} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">
                    {feedback?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {feedback?.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={12} />
                      <span>{feedback?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="User" size={12} />
                      <span>{feedback?.reportedBy}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{formatTime(feedback?.reportedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(feedback?.priority)}`}>
                  {feedback?.priority?.charAt(0)?.toUpperCase() + feedback?.priority?.slice(1)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feedback?.status)}`}>
                  {feedback?.status?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">Category:</span>
                <span className="text-xs font-medium text-foreground">
                  {feedback?.category?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" iconName="MessageSquare">
                  Reply
                </Button>
                <Button variant="ghost" size="sm" iconName="UserCheck">
                  Assign
                </Button>
                <Button variant="ghost" size="sm" iconName="ExternalLink">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredFeedback?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="MessageSquare" size={48} className="text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No feedback found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default CitizenFeedback;