import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunityChallenge = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [userProgress, setUserProgress] = useState({});

  const challenges = [
    {
      id: 'zero-waste-week',
      title: 'Zero Waste Week Challenge',
      description: 'Reduce your household waste to near zero for one week using composting, recycling, and mindful consumption.',
      duration: '7 days',
      difficulty: 'Intermediate',
      participants: 1247,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop',
      badge: 'Zero Waste Champion',
      points: 500,
      startDate: '2025-01-15',
      endDate: '2025-01-21',
      status: 'active',
      tasks: [
        { id: 1, title: 'Set up home composting system', completed: false, points: 100 },
        { id: 2, title: 'Audit current waste generation', completed: true, points: 50 },
        { id: 3, title: 'Eliminate single-use plastics', completed: false, points: 75 },
        { id: 4, title: 'Donate or repurpose unused items', completed: false, points: 75 },
        { id: 5, title: 'Share progress with community', completed: false, points: 50 },
        { id: 6, title: 'Document waste reduction results', completed: false, points: 100 },
        { id: 7, title: 'Inspire 3 neighbors to join', completed: false, points: 50 }
      ]
    },
    {
      id: 'monsoon-prep',
      title: 'Monsoon Waste Management',
      description: 'Prepare your community for monsoon season with proper waste storage and drainage management.',
      duration: '14 days',
      difficulty: 'Advanced',
      participants: 892,
      image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&h=250&fit=crop',
      badge: 'Monsoon Master',
      points: 750,
      startDate: '2025-01-20',
      endDate: '2025-02-03',
      status: 'upcoming',
      tasks: [
        { id: 1, title: 'Install waterproof waste storage', completed: false, points: 150 },
        { id: 2, title: 'Clear drainage systems', completed: false, points: 100 },
        { id: 3, title: 'Organize community cleanup', completed: false, points: 200 },
        { id: 4, title: 'Create emergency waste plan', completed: false, points: 100 },
        { id: 5, title: 'Train 5 community members', completed: false, points: 200 }
      ]
    },
    {
      id: 'plastic-free-month',
      title: 'Plastic-Free Living',
      description: 'Eliminate single-use plastics from your daily routine and find sustainable alternatives.',
      duration: '30 days',
      difficulty: 'Beginner',
      participants: 2156,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      badge: 'Plastic-Free Pioneer',
      points: 300,
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'completed',
      tasks: [
        { id: 1, title: 'Replace plastic bags with cloth bags', completed: true, points: 50 },
        { id: 2, title: 'Use steel/glass water bottles', completed: true, points: 50 },
        { id: 3, title: 'Avoid packaged foods for a week', completed: true, points: 100 },
        { id: 4, title: 'Find plastic-free alternatives', completed: true, points: 100 }
      ]
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Priya Sharma',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      points: 2450,
      badges: 8,
      location: 'Salt Lake'
    },
    {
      rank: 2,
      name: 'Rajesh Kumar',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      points: 2280,
      badges: 7,
      location: 'Park Street'
    },
    {
      rank: 3,
      name: 'Anita Das',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      points: 2150,
      badges: 6,
      location: 'Ballygunge'
    },
    {
      rank: 4,
      name: 'Amit Ghosh',
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
      points: 1980,
      badges: 6,
      location: 'New Town'
    },
    {
      rank: 5,
      name: 'Sunita Roy',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
      points: 1850,
      badges: 5,
      location: 'Howrah'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 border-green-200';
      case 'upcoming': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const calculateProgress = (tasks) => {
    const completed = tasks?.filter(task => task?.completed)?.length;
    return Math.round((completed / tasks?.length) * 100);
  };

  const calculatePoints = (tasks) => {
    return tasks?.filter(task => task?.completed)?.reduce((sum, task) => sum + task?.points, 0);
  };

  const handleJoinChallenge = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const toggleTask = (challengeId, taskId) => {
    console.log(`Toggling task ${taskId} for challenge ${challengeId}`);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Community Challenges
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of Kolkata residents in environmental challenges. 
            Earn badges, compete with neighbors, and make a real impact together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2 space-y-6">
            {challenges?.map((challenge) => (
              <div key={challenge?.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="md:flex">
                 
                  <div className="md:w-1/3">
                    <Image 
                      src={challenge?.image}
                      alt={challenge?.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{challenge?.title}</h3>
                        <div className="flex items-center space-x-3 text-sm">
                          <span className={`px-2 py-1 rounded-full border ${getStatusColor(challenge?.status)}`}>
                            {challenge?.status?.charAt(0)?.toUpperCase() + challenge?.status?.slice(1)}
                          </span>
                          <span className={`px-2 py-1 rounded-full ${getDifficultyColor(challenge?.difficulty)}`}>
                            {challenge?.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{challenge?.points}</div>
                        <div className="text-xs text-gray-500">points</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{challenge?.description}</p>

                    {challenge?.status === 'active' && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{calculateProgress(challenge?.tasks)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${calculateProgress(challenge?.tasks)}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {calculatePoints(challenge?.tasks)} / {challenge?.points} points earned
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Icon name="Calendar" size={16} className="mr-1" />
                          {challenge?.duration}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Users" size={16} className="mr-1" />
                          {challenge?.participants?.toLocaleString()} participants
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Award" size={16} className="mr-1" />
                        <span>{challenge?.badge}</span>
                      </div>
                    </div>

                    <Button
                      variant={challenge?.status === 'active' ? "default" : challenge?.status === 'upcoming' ? "outline" : "ghost"}
                      fullWidth
                      iconName={
                        challenge?.status === 'active' ? "Eye" : 
                        challenge?.status === 'upcoming' ? "Calendar" : "Check"
                      }
                      iconPosition="left"
                      onClick={() => handleJoinChallenge(challenge)}
                      disabled={challenge?.status === 'completed'}
                    >
                      {challenge?.status === 'active' ? 'View Progress' : 
                       challenge?.status === 'upcoming'? 'Set Reminder' : 'Completed'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
         
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Community Leaders</h3>
                <Icon name="Trophy" size={20} className="text-yellow-500" />
              </div>
              
              <div className="space-y-3">
                {leaderboard?.map((user) => (
                  <div key={user?.rank} className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      user?.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                      user?.rank === 2 ? 'bg-gray-100 text-gray-700' :
                      user?.rank === 3 ? 'bg-orange-100 text-orange-700': 'bg-blue-100 text-blue-700'
                    }`}>
                      {user?.rank}
                    </div>
                    <Image 
                      src={user?.avatar}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-800 truncate">{user?.name}</div>
                      <div className="text-xs text-gray-500">{user?.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">{user?.points}</div>
                      <div className="text-xs text-gray-500">{user?.badges} badges</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" fullWidth className="mt-4">
                View Full Leaderboard
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary to-green-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Your Impact</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Points</span>
                  <span className="font-bold">1,250</span>
                </div>
                <div className="flex justify-between">
                  <span>Badges Earned</span>
                  <span className="font-bold">4</span>
                </div>
                <div className="flex justify-between">
                  <span>Challenges Completed</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Community Rank</span>
                  <span className="font-bold">#47</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-center">
                  <Icon name="TrendingUp" size={24} className="mx-auto mb-2" />
                  <p className="text-sm opacity-90">
                    You're in the top 15% of environmental champions in Kolkata!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button variant="outline" fullWidth iconName="Plus" iconPosition="left">
                  Create Challenge
                </Button>
                <Button variant="outline" fullWidth iconName="Users" iconPosition="left">
                  Invite Friends
                </Button>
                <Button variant="outline" fullWidth iconName="Share" iconPosition="left">
                  Share Progress
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityChallenge;