import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const InteractiveTutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const tutorials = [
    {
      id: 'waste-sorting',
      title: 'Waste Sorting Mastery',
      description: 'Learn to properly categorize waste according to Kolkata Municipal Corporation guidelines.',
      duration: '15 min',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop',
      steps: [
        {
          title: 'Organic Waste Identification',
          content: 'Kitchen scraps, food waste, and biodegradable materials go into green bins. This includes vegetable peels, fruit waste, and leftover food.',
          image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop',
          quiz: {
            question: 'Which item belongs in organic waste?',
            options: ['Plastic bottle', 'Banana peel', 'Glass jar', 'Metal can'],
            correct: 1
          }
        },
        {
          title: 'Recyclable Materials',
          content: 'Paper, cardboard, plastic bottles, and metal cans can be recycled. Clean these items before disposal to ensure proper recycling.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
          quiz: {
            question: 'What should you do before recycling plastic containers?',
            options: ['Break them', 'Clean them', 'Paint them', 'Nothing'],
            correct: 1
          }
        },
        {
          title: 'Hazardous Waste Handling',
          content: 'Batteries, electronics, and chemicals require special disposal. Never mix these with regular waste as they can harm the environment.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
          quiz: {
            question: 'Where should old batteries be disposed?',
            options: ['Regular bin', 'Organic bin', 'Special collection point', 'Drain'],
            correct: 2
          }
        }
      ],
      completed: false
    },
    {
      id: 'composting',
      title: 'Home Composting Guide',
      description: 'Set up and maintain a composting system in your Kolkata apartment or home.',
      duration: '20 min',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
      steps: [
        {
          title: 'Choosing Compost Materials',
          content: 'Select the right mix of green materials (nitrogen-rich) and brown materials (carbon-rich) for effective composting.',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
          quiz: {
            question: 'What is a good brown material for composting?',
            options: ['Fresh grass', 'Dry leaves', 'Meat scraps', 'Dairy products'],
            correct: 1
          }
        },
        {
          title: 'Setting Up Your Bin',
          content: 'Learn how to set up a compost bin suitable for small spaces, including balcony composting options for apartment dwellers.',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
          quiz: {
            question: 'How often should you turn your compost?',
            options: ['Daily', 'Weekly', 'Monthly', 'Never'],
            correct: 1
          }
        }
      ],
      completed: true
    },
    {
      id: 'monsoon-management',
      title: 'Monsoon Waste Management',
      description: 'Special techniques for managing waste during Kolkata\'s monsoon season.',
      duration: '12 min',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&h=250&fit=crop',
      steps: [
        {
          title: 'Waterproof Storage',
          content: 'Keep waste dry and prevent overflow during heavy rains. Learn proper storage techniques and drainage management.',
          image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&h=250&fit=crop',
          quiz: {
            question: 'What is the main concern during monsoon waste management?',
            options: ['Smell', 'Water logging', 'Animals', 'Collection'],
            correct: 1
          }
        }
      ],
      completed: false
    }
  ];

  const handleStartTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (currentStep < selectedTutorial?.steps?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Tutorial completed
      setSelectedTutorial(null);
      setCurrentStep(0);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-blue-100 text-blue-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (selectedTutorial) {
    const currentStepData = selectedTutorial?.steps?.[currentStep];
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{selectedTutorial?.title}</h3>
              <p className="text-sm text-gray-600">
                Step {currentStep + 1} of {selectedTutorial?.steps?.length}: {currentStepData?.title}
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSelectedTutorial(null)}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          <div className="px-6 py-4 bg-gray-50">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / selectedTutorial?.steps?.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
      
              <div className="space-y-4">
                <Image 
                  src={currentStepData?.image}
                  alt={currentStepData?.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                {currentStepData?.quiz && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Quick Check:</h4>
                    <p className="text-gray-700 mb-3">{currentStepData?.quiz?.question}</p>
                    <div className="space-y-2">
                      {currentStepData?.quiz?.options?.map((option, index) => (
                        <button
                          key={index}
                          className="w-full text-left p-2 rounded border hover:bg-blue-100 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">{currentStepData?.title}</h4>
                <p className="text-gray-600 leading-relaxed">{currentStepData?.content}</p>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Icon name="Lightbulb" size={20} className="text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Pro Tip</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Practice this technique at home and track your progress using the Eco Vision app's 
                    waste logging feature to see your environmental impact grow!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 border-t bg-gray-50">
            <Button 
              variant="outline" 
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {selectedTutorial?.steps?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index <= currentStep ? 'bg-primary' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>

            <Button 
              variant="default" 
              onClick={handleNextStep}
              iconName={currentStep === selectedTutorial?.steps?.length - 1 ? "Check" : "ChevronRight"}
              iconPosition="right"
            >
              {currentStep === selectedTutorial?.steps?.length - 1 ? 'Complete' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Interactive Tutorials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step-by-step visual guides with hands-on practice. Learn by doing with 
            real-world scenarios specific to Kolkata's environmental challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials?.map((tutorial) => (
            <div key={tutorial?.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Image */}
              <div className="relative">
                <Image 
                  src={tutorial?.image}
                  alt={tutorial?.title}
                  className="w-full h-48 object-cover"
                />
                {tutorial?.completed && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
                    <Icon name="Check" size={16} />
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(tutorial?.difficulty)}`}>
                    {tutorial?.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tutorial?.title}</h3>
                <p className="text-gray-600 mb-4">{tutorial?.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {tutorial?.duration}
                  </span>
                  <span className="flex items-center">
                    <Icon name="BookOpen" size={16} className="mr-1" />
                    {tutorial?.steps?.length} steps
                  </span>
                </div>

                <Button
                  variant={tutorial?.completed ? "outline" : "default"}
                  fullWidth
                  iconName={tutorial?.completed ? "RotateCcw" : "Play"}
                  iconPosition="left"
                  onClick={() => handleStartTutorial(tutorial)}
                >
                  {tutorial?.completed ? 'Review Tutorial' : 'Start Tutorial'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <Icon name="Target" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ready for Advanced Learning?
            </h3>
            <p className="text-gray-600 mb-4">
              Complete all basic tutorials to unlock advanced environmental management courses 
              and earn your Environmental Steward certification.
            </p>
            <Button variant="outline" iconName="Award" iconPosition="left">
              View Certification Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTutorials;