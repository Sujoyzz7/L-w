import React, { useState } from 'react';
import { Heart, RomanticButton, GlassCard, Sparkle } from './UI';
import { FORTUNE_CATEGORIES } from '../data/predictions';
import { getRandomPrediction } from '../utils/algorithms';
import type { FortunePrediction } from '../types';

export const LoveFortuneTeller: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [prediction, setPrediction] = useState<string>('');
  const [isRevealing, setIsRevealing] = useState(false);
  const [history, setHistory] = useState<FortunePrediction[]>([]);

  const categories = Object.values(FORTUNE_CATEGORIES);

  const handleGetPrediction = async () => {
    if (!selectedCategory) return;
    
    setIsRevealing(true);
    setPrediction('');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newPrediction = getRandomPrediction(selectedCategory);
    setPrediction(newPrediction);
    
    const fortuneEntry: FortunePrediction = {
      category: selectedCategory,
      prediction: newPrediction,
      timestamp: new Date()
    };
    
    setHistory(prev => [fortuneEntry, ...prev.slice(0, 4)]);
    setIsRevealing(false);
  };

  const handleNewPrediction = () => {
    setPrediction('');
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-soft-pink to-romantic-purple bg-clip-text text-transparent">
            Love Fortune Teller
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what the universe has in store for your love
          </p>
        </div>

        {!prediction ? (
          <GlassCard>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Choose Your Fortune Category
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === category
                        ? 'border-love-red bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-rose-gold hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Heart size={20} color={selectedCategory === category ? '#FF69B4' : '#E6E6FA'} />
                      <span className="font-semibold text-gray-700">{category}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="relative">
                {isRevealing && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkle size={40} className="mx-auto mb-4" />
                      <p className="text-gray-600 animate-pulse">The stars are aligning...</p>
                    </div>
                  </div>
                )}
                
                <div className={isRevealing ? 'opacity-0' : 'opacity-100'}>
                  <RomanticButton
                    onClick={handleGetPrediction}
                    disabled={!selectedCategory || isRevealing}
                  >
                    {isRevealing ? 'Revealing...' : 'Reveal My Fortune'}
                  </RomanticButton>
                </div>
              </div>
            </div>
          </GlassCard>
        ) : (
          <div className="space-y-6">
            <GlassCard>
              <div className="text-center">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-soft-pink to-light-purple rounded-full text-sm font-semibold text-gray-700">
                    {selectedCategory}
                  </span>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart size={100} color="#FFE4E1" className="opacity-20" />
                  </div>
                  
                  <div className="relative z-10">
                    <Sparkle size={30} className="absolute -top-4 -left-4" />
                    <Sparkle size={25} className="absolute -top-2 -right-4" />
                    <Sparkle size={35} className="absolute -bottom-4 -left-2" />
                    <Sparkle size={28} className="absolute -bottom-2 -right-2" />
                    
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed px-8 py-6">
                      {prediction}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <RomanticButton onClick={handleNewPrediction}>
                    Get Another Fortune
                  </RomanticButton>
                </div>
              </div>
            </GlassCard>

            {history.length > 0 && (
              <GlassCard>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Recent Fortunes
                </h4>
                <div className="space-y-3">
                  {history.map((item, index) => (
                    <div key={index} className="p-3 bg-white/10 rounded-lg border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-purple-600">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {item.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{item.prediction}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}
          </div>
        )}
      </div>
    </div>
  );
};