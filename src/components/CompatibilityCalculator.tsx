import React, { useState } from 'react';
import { Heart, RomanticButton, GlassCard, AnimatedPercentage } from './UI';
import { calculateNameCompatibility, getRandomPersonalityTraits, getRandomStrengths, getRandomGrowthAreas } from '../utils/algorithms';
import type { CompatibilityResult } from '../types';

export const CompatibilityCalculator: React.FC = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [birthdate1, setBirthdate1] = useState('');
  const [birthdate2, setBirthdate2] = useState('');
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    if (!name1 || !name2) return;
    
    setIsCalculating(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const percentage = calculateNameCompatibility(name1, name2);
    const personality1 = getRandomPersonalityTraits();
    const personality2 = getRandomPersonalityTraits();
    const strengths = getRandomStrengths(3);
    const growthAreas = getRandomGrowthAreas(2);
    
    setResult({
      percentage,
      personality1,
      personality2,
      strengths,
      growthAreas
    });
    
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-soft-pink to-romantic-purple bg-clip-text text-transparent">
            Love Compatibility Calculator
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the magical connection between you two
          </p>
        </div>

        <GlassCard className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                First Person's Name
              </label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="Enter name..."
                className="input-field w-full"
              />
              <label className="block text-gray-700 font-semibold mb-2 mt-4">
                Birthdate (Optional)
              </label>
              <input
                type="date"
                value={birthdate1}
                onChange={(e) => setBirthdate1(e.target.value)}
                className="input-field w-full"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Second Person's Name
              </label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="Enter name..."
                className="input-field w-full"
              />
              <label className="block text-gray-700 font-semibold mb-2 mt-4">
                Birthdate (Optional)
              </label>
              <input
                type="date"
                value={birthdate2}
                onChange={(e) => setBirthdate2(e.target.value)}
                className="input-field w-full"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <RomanticButton 
              onClick={handleCalculate}
              disabled={!name1 || !name2 || isCalculating}
            >
              {isCalculating ? 'Calculating...' : 'Calculate Compatibility'}
            </RomanticButton>
          </div>
        </GlassCard>

        {result && (
          <div className="space-y-6 animate-fade-in">
            <GlassCard>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Your Love Compatibility
                </h3>
                <AnimatedPercentage value={result.percentage} />
                <div className="mt-4">
                  <div className="flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Heart 
                        key={i} 
                        size={24} 
                        color={i < Math.ceil(result.percentage / 20) ? '#FF69B4' : '#E6E6FA'}
                        animated={i < Math.ceil(result.percentage / 20)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  {name1}'s Personality Traits
                </h4>
                <ul className="space-y-2">
                  {result.personality1.map((trait, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Heart size={16} color="#FFB6C1" />
                      <span className="text-gray-700">{trait}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  {name2}'s Personality Traits
                </h4>
                <ul className="space-y-2">
                  {result.personality2.map((trait, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Heart size={16} color="#FFB6C1" />
                      <span className="text-gray-700">{trait}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <GlassCard>
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                Relationship Strengths
              </h4>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard>
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                Growth Areas
              </h4>
              <ul className="space-y-2">
                {result.growthAreas.map((area, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-blue-500">→</span>
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};