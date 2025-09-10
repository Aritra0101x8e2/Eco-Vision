import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Image from '../../../components/AppImage';

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'waste-management', label: 'Waste Management' },
    { value: 'composting', label: 'Composting' },
    { value: 'recycling', label: 'Recycling' },
    { value: 'water-conservation', label: 'Water Conservation' },
    { value: 'energy-efficiency', label: 'Energy Efficiency' },
    { value: 'community-action', label: 'Community Action' },
    { value: 'policy-advocacy', label: 'Policy & Advocacy' }
  ];

  const formats = [
    { value: 'all', label: 'All Formats' },
    { value: 'guide', label: 'Guides & Manuals' },
    { value: 'video', label: 'Video Tutorials' },
    { value: 'infographic', label: 'Infographics' },
    { value: 'checklist', label: 'Checklists' },
    { value: 'template', label: 'Templates' },
    { value: 'research', label: 'Research Papers' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Waste Sorting Guide for Kolkata Households',
      description: 'Comprehensive manual covering all waste categories, collection schedules, and proper disposal methods specific to Kolkata Municipal Corporation guidelines.',
      category: 'waste-management',
      format: 'guide',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 15420,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop',
      author: 'Kolkata Environmental Team',
      publishDate: '2024-12-15',
      tags: ['waste sorting', 'municipal guidelines', 'household management'],
      featured: true
    },
    {
      id: 2,
      title: 'Apartment Composting Setup Video Series',
      description: 'Step-by-step video tutorials for setting up composting systems in small spaces, perfect for Kolkata apartments and balconies.',
      category: 'composting',
      format: 'video',
      type: 'Video Series',
      duration: '45 min',
      downloads: 8930,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
      author: 'Green Living Kolkata',
      publishDate: '2024-12-10',
      tags: ['apartment living', 'small space', 'organic waste'],
      featured: true
    },
    {
      id: 3,
      title: 'Monsoon Waste Management Checklist',
      description: 'Essential preparation checklist for managing waste during Kolkata\'s monsoon season, including waterproofing and drainage tips.',
      category: 'waste-management',
      format: 'checklist',
      type: 'PDF',
      size: '850 KB',
      downloads: 12650,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=300&h=200&fit=crop',
      author: 'Monsoon Preparedness Team',
      publishDate: '2024-11-28',
      tags: ['monsoon', 'seasonal preparation', 'waterproofing'],
      featured: false
    },
    {
      id: 4,
      title: 'Community Cleanup Event Planning Template',
      description: 'Ready-to-use template for organizing neighborhood cleanup events, including volunteer coordination and resource planning.',
      category: 'community-action',
      format: 'template',
      type: 'Word Doc',
      size: '1.2 MB',
      downloads: 5670,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
      author: 'Community Engagement Hub',
      publishDate: '2024-12-01',
      tags: ['event planning', 'community organizing', 'volunteer management'],
      featured: false
    },
    {
      id: 5,
      title: 'Plastic-Free Living Infographic',
      description: 'Visual guide to reducing plastic consumption with local alternatives available in Kolkata markets and stores.',
      category: 'recycling',
      format: 'infographic',
      type: 'PNG',
      size: '3.1 MB',
      downloads: 18750,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      author: 'Plastic-Free Kolkata Initiative',
      publishDate: '2024-11-20',
      tags: ['plastic reduction', 'sustainable alternatives', 'local markets'],
      featured: true
    },
    {
      id: 6,
      title: 'Water Conservation Techniques for Urban Homes',
      description: 'Practical methods for reducing water consumption in city apartments, including rainwater harvesting and greywater systems.',
      category: 'water-conservation',
      format: 'guide',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 9340,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop',
      author: 'Water Conservation Society',
      publishDate: '2024-11-15',
      tags: ['water saving', 'urban conservation', 'rainwater harvesting'],
      featured: false
    },
    {
      id: 7,
      title: 'Environmental Policy Advocacy Handbook',
      description: 'Guide for citizens to engage with local government on environmental issues, including petition templates and meeting strategies.',
      category: 'policy-advocacy',
      format: 'guide',
      type: 'PDF',
      size: '2.9 MB',
      downloads: 3420,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop',
      author: 'Civic Engagement Network',
      publishDate: '2024-10-30',
      tags: ['policy advocacy', 'citizen engagement', 'government relations'],
      featured: false
    },
    {
      id: 8,
      title: 'Energy Efficiency Home Audit Checklist',
      description: 'Self-assessment tool for identifying energy waste in homes and apartments, with specific recommendations for Kolkata\'s climate.',
      category: 'energy-efficiency',
      format: 'checklist',
      type: 'PDF',
      size: '1.1 MB',
      downloads: 7890,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop',
      author: 'Energy Efficiency Council',
      publishDate: '2024-11-05',
      tags: ['energy audit', 'home efficiency', 'cost savings'],
      featured: false
    }
  ];

  const filteredResources = resources?.filter(resource => {
    const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource?.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || resource?.format === selectedFormat;
    
    return matchesSearch && matchesCategory && matchesFormat;
  });

  const featuredResources = resources?.filter(resource => resource?.featured);

  const getFormatIcon = (format) => {
    switch (format) {
      case 'guide': return 'BookOpen';
      case 'video': return 'Play';
      case 'infographic': return 'Image';
      case 'checklist': return 'CheckSquare';
      case 'template': return 'FileText';
      case 'research': return 'FileBarChart';
      default: return 'File';
    }
  };

  const getFormatColor = (format) => {
    switch (format) {
      case 'guide': return 'bg-blue-100 text-blue-700';
      case 'video': return 'bg-red-100 text-red-700';
      case 'infographic': return 'bg-purple-100 text-purple-700';
      case 'checklist': return 'bg-green-100 text-green-700';
      case 'template': return 'bg-orange-100 text-orange-700';
      case 'research': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Resource Library
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive guides, templates, and tools for environmental action. 
            All resources are tailored for Kolkata's unique environmental challenges and opportunities.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Featured Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources?.map((resource) => (
              <div key={resource?.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <Image 
                    src={resource?.image}
                    alt={resource?.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getFormatColor(resource?.format)}`}>
                      <Icon name={getFormatIcon(resource?.format)} size={12} className="inline mr-1" />
                      {resource?.format}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-yellow-500 text-white p-1 rounded-full">
                    <Icon name="Star" size={12} />
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{resource?.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource?.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{resource?.downloads?.toLocaleString()} downloads</span>
                    <div className="flex items-center">
                      <Icon name="Star" size={12} className="text-yellow-500 mr-1" />
                      <span>{resource?.rating}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" fullWidth iconName="Download" iconPosition="left">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                type="search"
                placeholder="Search resources, guides, videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="w-full"
              />
            </div>
            
            <Select
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Category"
            />
            
            <Select
              options={formats}
              value={selectedFormat}
              onChange={setSelectedFormat}
              placeholder="Format"
            />
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <span className="text-sm text-gray-600">
              {filteredResources?.length} resources found
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option>Most Downloaded</option>
                <option>Highest Rated</option>
                <option>Newest First</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredResources?.map((resource) => (
            <div key={resource?.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex flex-col md:flex-row gap-6">
               
                <div className="md:w-48 flex-shrink-0">
                  <Image 
                    src={resource?.image}
                    alt={resource?.title}
                    className="w-full h-32 md:h-24 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{resource?.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getFormatColor(resource?.format)}`}>
                      <Icon name={getFormatIcon(resource?.format)} size={12} className="inline mr-1" />
                      {resource?.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{resource?.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource?.tags?.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>By {resource?.author}</span>
                      <span>{new Date(resource.publishDate)?.toLocaleDateString()}</span>
                      <span>{resource?.size || resource?.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="Download" size={14} className="mr-1" />
                        <span>{resource?.downloads?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="Star" size={14} className="text-yellow-500 mr-1" />
                        <span>{resource?.rating}</span>
                      </div>
                      <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-primary to-green-600 rounded-xl p-8 text-white text-center">
          <Icon name="Upload" size={32} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Share Your Knowledge</h3>
          <p className="mb-4 opacity-90">
            Have environmental resources to share with the Kolkata community? 
            Upload your guides, templates, or research to help others.
          </p>
          <Button variant="secondary" iconName="Plus" iconPosition="left">
            Upload Resource
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;