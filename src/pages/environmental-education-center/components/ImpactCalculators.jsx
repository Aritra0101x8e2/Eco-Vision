import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ImpactCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState('waste');
  const [wasteData, setWasteData] = useState({
    organicWaste: '',
    recyclables: '',
    households: '1'
  });
  const [carbonData, setCarbonData] = useState({
    transport: 'bike',
    distance: '',
    frequency: 'daily'
  });
  const [waterData, setWaterData] = useState({
    showers: '',
    dishes: '',
    laundry: ''
  });

  const calculators = [
    {
      id: 'waste',
      title: 'Waste Reduction Impact',
      icon: 'Trash2',
      color: 'green',
      description: 'Calculate how much waste you divert from landfills'
    },
    {
      id: 'carbon',
      title: 'Carbon Footprint Tracker',
      icon: 'Leaf',
      color: 'blue',
      description: 'Measure your daily carbon emissions and savings'
    },
    {
      id: 'water',
      title: 'Water Conservation Calculator',
      icon: 'Droplets',
      color: 'cyan',
      description: 'Track your water usage and conservation efforts'
    }
  ];

  const transportOptions = [
    { value: 'walk', label: 'Walking' },
    { value: 'bike', label: 'Bicycle' },
    { value: 'bus', label: 'Public Bus' },
    { value: 'metro', label: 'Metro/Subway' },
    { value: 'auto', label: 'Auto Rickshaw' },
    { value: 'car', label: 'Private Car' },
    { value: 'motorcycle', label: 'Motorcycle' }
  ];

  const frequencyOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const calculateWasteImpact = () => {
    const organic = parseFloat(wasteData?.organicWaste) || 0;
    const recyclable = parseFloat(wasteData?.recyclables) || 0;
    const households = parseInt(wasteData?.households) || 1;
    
    const monthlyOrganic = organic * 30 * households;
    const monthlyRecyclable = recyclable * 30 * households;
    const totalDiverted = monthlyOrganic + monthlyRecyclable;
    const co2Saved = totalDiverted * 0.5; 
    const landfillReduction = totalDiverted * 0.8; 

    return {
      totalDiverted: totalDiverted?.toFixed(1),
      co2Saved: co2Saved?.toFixed(1),
      landfillReduction: landfillReduction?.toFixed(1),
      monthlyOrganic: monthlyOrganic?.toFixed(1),
      monthlyRecyclable: monthlyRecyclable?.toFixed(1)
    };
  };

  const calculateCarbonFootprint = () => {
    const distance = parseFloat(carbonData?.distance) || 0;
    const emissionFactors = {
      walk: 0,
      bike: 0,
      bus: 0.08,
      metro: 0.04,
      auto: 0.12,
      car: 0.2,
      motorcycle: 0.1
    };
    
    const dailyEmissions = distance * emissionFactors?.[carbonData?.transport];
    const multiplier = carbonData?.frequency === 'daily' ? 30 : carbonData?.frequency === 'weekly' ? 4 : 1;
    const monthlyEmissions = dailyEmissions * multiplier;
    
    const carEmissions = distance * emissionFactors?.car * multiplier;
    const savings = carEmissions - monthlyEmissions;

    return {
      dailyEmissions: dailyEmissions?.toFixed(2),
      monthlyEmissions: monthlyEmissions?.toFixed(2),
      savings: Math.max(0, savings)?.toFixed(2),
      treesEquivalent: Math.max(0, savings / 21.77)?.toFixed(1) 
    };
  };

  const calculateWaterUsage = () => {
    const showers = parseFloat(waterData?.showers) || 0;
    const dishes = parseFloat(waterData?.dishes) || 0;
    const laundry = parseFloat(waterData?.laundry) || 0;
    
    const dailyUsage = (showers * 50) + (dishes * 20) + (laundry * 100);
    const monthlyUsage = dailyUsage * 30;
    const yearlyUsage = dailyUsage * 365;
 
    const conservationPotential = monthlyUsage * 0.2;

    return {
      dailyUsage: dailyUsage?.toFixed(0),
      monthlyUsage: monthlyUsage?.toFixed(0),
      yearlyUsage: yearlyUsage?.toFixed(0),
      conservationPotential: conservationPotential?.toFixed(0)
    };
  };

  const getColorClasses = (color) => {
    const colorMap = {
      green: 'bg-green-500 text-white',
      blue: 'bg-blue-500 text-white',
      cyan: 'bg-cyan-500 text-white'
    };
    return colorMap?.[color] || colorMap?.green;
  };

  const renderWasteCalculator = () => {
    const impact = calculateWasteImpact();
    
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Daily Waste Generation</h3>
            
            <Input
              label="Organic Waste (kg/day)"
              type="number"
              placeholder="e.g., 2.5"
              value={wasteData?.organicWaste}
              onChange={(e) => setWasteData({...wasteData, organicWaste: e?.target?.value})}
              description="Kitchen scraps, food waste, garden waste"
            />
            
            <Input
              label="Recyclable Materials (kg/day)"
              type="number"
              placeholder="e.g., 1.0"
              value={wasteData?.recyclables}
              onChange={(e) => setWasteData({...wasteData, recyclables: e?.target?.value})}
              description="Paper, plastic, glass, metal"
            />
            
            <Input
              label="Number of Households"
              type="number"
              placeholder="1"
              value={wasteData?.households}
              onChange={(e) => setWasteData({...wasteData, households: e?.target?.value})}
              description="Calculate for multiple households"
            />
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">Monthly Impact</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-green-700">Total Waste Diverted:</span>
                <span className="font-semibold text-green-800">{impact?.totalDiverted} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">CO₂ Emissions Saved:</span>
                <span className="font-semibold text-green-800">{impact?.co2Saved} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Landfill Reduction:</span>
                <span className="font-semibold text-green-800">{impact?.landfillReduction} kg</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-green-200">
              <div className="text-center">
                <Icon name="Award" size={24} className="text-green-600 mx-auto mb-2" />
                <p className="text-sm text-green-700">
                  You're preventing <strong>{impact?.landfillReduction} kg</strong> of waste from reaching landfills each month!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCarbonCalculator = () => {
    const impact = calculateCarbonFootprint();
    
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Transportation Details</h3>
            
            <Select
              label="Primary Transport Mode"
              options={transportOptions}
              value={carbonData?.transport}
              onChange={(value) => setCarbonData({...carbonData, transport: value})}
              description="Your main mode of transportation"
            />
            
            <Input
              label="Daily Distance (km)"
              type="number"
              placeholder="e.g., 10"
              value={carbonData?.distance}
              onChange={(e) => setCarbonData({...carbonData, distance: e?.target?.value})}
              description="Total distance traveled per day"
            />
            
            <Select
              label="Travel Frequency"
              options={frequencyOptions}
              value={carbonData?.frequency}
              onChange={(value) => setCarbonData({...carbonData, frequency: value})}
              description="How often do you travel this distance"
            />
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Carbon Impact</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-700">Daily Emissions:</span>
                <span className="font-semibold text-blue-800">{impact?.dailyEmissions} kg CO₂</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700">Monthly Emissions:</span>
                <span className="font-semibold text-blue-800">{impact?.monthlyEmissions} kg CO₂</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700">Monthly Savings:</span>
                <span className="font-semibold text-blue-800">{impact?.savings} kg CO₂</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="text-center">
                <Icon name="TreePine" size={24} className="text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-700">
                  Equivalent to <strong>{impact?.treesEquivalent} trees</strong> worth of CO₂ absorption per month!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderWaterCalculator = () => {
    const usage = calculateWaterUsage();
    
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Daily Water Activities</h3>
            
            <Input
              label="Showers per day"
              type="number"
              placeholder="e.g., 2"
              value={waterData?.showers}
              onChange={(e) => setWaterData({...waterData, showers: e?.target?.value})}
              description="Average number of showers taken daily"
            />
            
            <Input
              label="Dish washing sessions"
              type="number"
              placeholder="e.g., 3"
              value={waterData?.dishes}
              onChange={(e) => setWaterData({...waterData, dishes: e?.target?.value})}
              description="Times dishes are washed per day"
            />
            
            <Input
              label="Laundry loads per week"
              type="number"
              placeholder="e.g., 4"
              value={waterData?.laundry}
              onChange={(e) => setWaterData({...waterData, laundry: e?.target?.value})}
              description="Number of laundry loads per week"
            />
          </div>
          
          <div className="bg-cyan-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-cyan-800 mb-4">Water Usage</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-cyan-700">Daily Usage:</span>
                <span className="font-semibold text-cyan-800">{usage?.dailyUsage} L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-700">Monthly Usage:</span>
                <span className="font-semibold text-cyan-800">{usage?.monthlyUsage} L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-700">Yearly Usage:</span>
                <span className="font-semibold text-cyan-800">{usage?.yearlyUsage} L</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-cyan-200">
              <div className="text-center">
                <Icon name="Droplets" size={24} className="text-cyan-600 mx-auto mb-2" />
                <p className="text-sm text-cyan-700">
                  You could save <strong>{usage?.conservationPotential} L</strong> per month with conservation practices!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Environmental Impact Calculators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measure your environmental impact with data-driven insights. 
            See how your daily choices affect Kolkata's environment and discover ways to improve.
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {calculators?.map((calc) => (
            <button
              key={calc?.id}
              onClick={() => setActiveCalculator(calc?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCalculator === calc?.id
                  ? getColorClasses(calc?.color)
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon name={calc?.icon} size={20} />
              <span>{calc?.title}</span>
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {calculators?.find(c => c?.id === activeCalculator)?.title}
            </h3>
            <p className="text-gray-600">
              {calculators?.find(c => c?.id === activeCalculator)?.description}
            </p>
          </div>

          {activeCalculator === 'waste' && renderWasteCalculator()}
          {activeCalculator === 'carbon' && renderCarbonCalculator()}
          {activeCalculator === 'water' && renderWaterCalculator()}
        </div>

        {/* Tips Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <Icon name="Recycle" size={32} className="text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-green-800 mb-2">Reduce Waste</h4>
            <p className="text-sm text-green-700">
              Composting organic waste can reduce your household waste by up to 40%
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <Icon name="Bike" size={32} className="text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-blue-800 mb-2">Choose Green Transport</h4>
            <p className="text-sm text-blue-700">
              Cycling instead of driving can save 2.6 kg of CO₂ per 10 km traveled
            </p>
          </div>
          
          <div className="bg-cyan-50 rounded-lg p-6 text-center">
            <Icon name="Droplets" size={32} className="text-cyan-600 mx-auto mb-3" />
            <h4 className="font-semibold text-cyan-800 mb-2">Conserve Water</h4>
            <p className="text-sm text-cyan-700">
              Shorter showers and efficient appliances can save 20% of your water usage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculators;