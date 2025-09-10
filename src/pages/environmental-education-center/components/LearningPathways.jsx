import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathways = ({ onSelectPath }) => {
  const [selectedPath, setSelectedPath] = useState(null);

  const learningPaths = [
    {
      id: 'beginner',
      title: 'Waste Management Basics',
      level: 'Beginner',
      duration: '2-3 hours',
      modules: 8,
      icon: 'Trash2',
      color: 'green',
      description: 'Learn fundamental waste sorting, disposal methods, and basic environmental principles for Kolkata households.',
      topics: ['Waste Categories', 'Proper Sorting', 'Collection Schedule', 'Home Composting'],
      progress: 0
    },
    {
      id: 'intermediate',
      title: 'Community Environmental Action',
      level: 'Intermediate',
      duration: '4-5 hours',
      modules: 12,
      icon: 'Users',
      color: 'blue',
      description: 'Discover how to organize community initiatives, lead neighborhood cleanups, and engage others in environmental action.',
      topics: ['Community Organizing', 'Event Planning', 'Awareness Campaigns', 'Local Partnerships'],
      progress: 25
    },
    {
      id: 'advanced',
      title: 'Urban Sustainability Leadership',
      level: 'Advanced',
      duration: '6-8 hours',
      modules: 16,
      icon: 'Award',
      color: 'purple',
      description: 'Master advanced sustainability concepts, policy advocacy, and become an environmental leader in your community.',
      topics: ['Policy Analysis', 'Data Interpretation', 'Advocacy Strategies', 'Innovation Projects'],
      progress: 60
    },
    {
      id: 'specialized',
      title: 'Monsoon & Festival Management',
      level: 'Specialized',
      duration: '3-4 hours',
      modules: 10,
      icon: 'Cloud',
      color: 'orange',
      description: 'Seasonal expertise for managing waste during Kolkata\'s monsoons and major festivals like Durga Puja.',
      topics: ['Monsoon Preparedness', 'Festival Cleanup', 'Flood Management', 'Seasonal Planning'],
      progress: 0
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      green: 'bg-green-500 text-white border-green-200',
      blue: 'bg-blue-500 text-white border-blue-200',
      purple: 'bg-purple-500 text-white border-purple-200',
      orange: 'bg-orange-500 text-white border-orange-200'
    };
    return colorMap?.[color] || colorMap?.green;
  };

  const getProgressColor = (color) => {
    const colorMap = {
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };
    return colorMap?.[color] || colorMap?.green;
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Personalized learning journeys designed for different experience levels and interests. 
            Start where you are and grow at your own pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learningPaths?.map((path) => (
            <div
              key={path?.id}
              className={`relative bg-white border-2 rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                selectedPath === path?.id ? 'border-primary shadow-lg scale-105' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedPath(path?.id)}
            >
   
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${getColorClasses(path?.color)}`}>
                    <Icon name={path?.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{path?.title}</h3>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      path?.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      path?.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                      path?.level === 'Advanced'? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {path?.level}
                    </span>
                  </div>
                </div>
                {selectedPath === path?.id && (
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                )}
              </div>

              <p className="text-gray-600 mb-4">{path?.description}</p>

              {path?.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{path?.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(path?.color)}`}
                      style={{ width: `${path?.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {path?.duration}
                  </span>
                  <span className="flex items-center">
                    <Icon name="BookOpen" size={16} className="mr-1" />
                    {path?.modules} modules
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {path?.topics?.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant={selectedPath === path?.id ? "default" : "outline"}
                fullWidth
                iconName={path?.progress > 0 ? "Play" : "ArrowRight"}
                iconPosition="right"
                onClick={(e) => {
                  e?.stopPropagation();
                  onSelectPath(path);
                }}
              >
                {path?.progress > 0 ? 'Continue Learning' : 'Start Path'}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <Icon name="Zap" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Not sure where to start?
            </h3>
            <p className="text-gray-600 mb-4">
              Take our quick assessment to find the perfect learning path for your current knowledge level.
            </p>
            <Button variant="outline" iconName="Target" iconPosition="left">
              Take Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathways;