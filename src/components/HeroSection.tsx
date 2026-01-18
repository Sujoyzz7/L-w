import React, { useState } from 'react';
import { Heart, RomanticButton, GlassCard, FloatingHeart, Sparkle } from './UI';
import { calculateNameCompatibility } from '../utils/algorithms';

export const HeroSection: React.FC = () => {
  const [quickName1, setQuickName1] = useState('');
  const [quickName2, setQuickName2] = useState('');
  const [quickResult, setQuickResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleQuickCheck = async () => {
    if (!quickName1 || !quickName2) return;
    
    setIsCalculating(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const compatibility = calculateNameCompatibility(quickName1, quickName2);
    setQuickResult(compatibility);
    setIsCalculating(false);
  };

  const handleReset = () => {
    setQuickName1('');
    setQuickName2('');
    setQuickResult(null);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 opacity-80"></div>
      
      <div className="absolute inset-0">
        <FloatingHeart delay={0} duration={4} left="10%" />
        <FloatingHeart delay={1} duration={5} left="20%" />
        <FloatingHeart delay={2} duration={3.5} left="80%" />
        <FloatingHeart delay={0.5} duration={4.5} left="90%" />
        <FloatingHeart delay={1.5} duration={3} left="50%" />
        <FloatingHeart delay={3} duration={5.5} left="30%" />
        <FloatingHeart delay={2.5} duration={4} left="70%" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Heart size={40} color="#FF69B4" animated />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-soft-pink via-rose-gold to-light-purple bg-clip-text text-transparent">
              Discover Your Love Story
            </h1>
            <Heart size={40} color="#FF69B4" animated />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Unlock the secrets of your romantic connection with our mystical love predictions
          </p>
        </div>

        <GlassCard className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Quick Compatibility Check
          </h2>
          
          {!quickResult ? (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={quickName1}
                  onChange={(e) => setQuickName1(e.target.value)}
                  placeholder="First name..."
                  className="input-field"
                />
                <input
                  type="text"
                  value={quickName2}
                  onChange={(e) => setQuickName2(e.target.value)}
                  placeholder="Second name..."
                  className="input-field"
                />
              </div>
              
              <div className="relative">
                {isCalculating && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-lg">
                    <div className="text-center">
                      <Sparkle size={30} className="mx-auto mb-2" />
                      <p className="text-gray-600">Calculating...</p>
                    </div>
                  </div>
                )}
                
                <RomanticButton 
                  onClick={handleQuickCheck}
                  disabled={!quickName1 || !quickName2 || isCalculating}
                  className="w-full"
                >
                  {isCalculating ? 'Calculating...' : 'Check Compatibility'}
                </RomanticButton>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="mb-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-love-red to-romantic-purple bg-clip-text text-transparent mb-4">
                  {quickResult}%
                </div>
                
                <div className="flex justify-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart 
                      key={i} 
                      size={24} 
                      color={i < Math.ceil(quickResult / 20) ? '#FF69B4' : '#E6E6FA'}
                      animated={i < Math.ceil(quickResult / 20)}
                    />
                  ))}
                </div>
                
                <p className="text-lg text-gray-700">
                  {quickResult >= 80 ? "Amazing! You're a perfect match!" :
                   quickResult >= 70 ? "Wonderful connection! You're meant to be!" :
                   "Great potential! Your love story is just beginning!"}
                </p>
              </div>
              
              <RomanticButton onClick={handleReset}>
                Try Another Couple
              </RomanticButton>
            </div>
          )}
        </GlassCard>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-soft-pink to-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={24} color="white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Compatibility Calculator
            </h3>
            <p className="text-gray-600">
              Deep insights into your romantic connection
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-rose-gold to-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkle size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Love Fortune Teller
            </h3>
            <p className="text-gray-600">
              Mystical predictions for your love journey
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-light-purple to-soft-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Daily Love Horoscope
            </h3>
            <p className="text-gray-600">
              Cosmic guidance for your relationship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};