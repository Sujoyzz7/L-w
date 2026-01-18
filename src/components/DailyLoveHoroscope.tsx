import React, { useState, useEffect } from 'react';
import { Heart, RomanticButton, GlassCard } from './UI';
import { getZodiacSign, generateDailyHoroscope } from '../utils/algorithms';
import { ZODIAC_SIGNS } from '../data/predictions';
import type { HoroscopeData } from '../types';

export const DailyLoveHoroscope: React.FC = () => {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [birthdate1, setBirthdate1] = useState('');
  const [birthdate2, setBirthdate2] = useState('');
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('dailyHoroscope');
    if (saved) {
      const data = JSON.parse(saved);
      const savedDate = new Date(data.date);
      const now = new Date();
      
      if (now.toDateString() === savedDate.toDateString()) {
        setHoroscope(data.horoscope);
        setLastUpdate(savedDate);
      }
    }
  }, []);

  const handleGenerateHoroscope = async () => {
    if (!sign1 || !sign2) return;
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newHoroscope = generateDailyHoroscope(sign1, sign2);
    setHoroscope(newHoroscope);
    setLastUpdate(new Date());
    
    localStorage.setItem('dailyHoroscope', JSON.stringify({
      horoscope: newHoroscope,
      date: new Date()
    }));
  };

  const handleBirthdateChange = (birthdate: string, person: 1 | 2) => {
    if (person === 1) {
      setBirthdate1(birthdate);
      if (birthdate) {
        const date = new Date(birthdate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const zodiacSign = getZodiacSign(month, day);
        setSign1(zodiacSign);
      }
    } else {
      setBirthdate2(birthdate);
      if (birthdate) {
        const date = new Date(birthdate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const zodiacSign = getZodiacSign(month, day);
        setSign2(zodiacSign);
      }
    }
  };

  const getZodiacEmoji = (sign: string) => {
    const emojis: { [key: string]: string } = {
      'Aries': '♈', 'Taurus': '♉', 'Gemini': '♊', 'Cancer': '♋',
      'Leo': '♌', 'Virgo': '♍', 'Libra': '♎', 'Scorpio': '♏',
      'Sagittarius': '♐', 'Capricorn': '♑', 'Aquarius': '♒', 'Pisces': '♓'
    };
    return emojis[sign] || '⭐';
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-soft-pink to-romantic-purple bg-clip-text text-transparent">
            Daily Love Horoscope
          </h2>
          <p className="text-gray-600 text-lg">
            Discover your cosmic connection today
          </p>
          {lastUpdate && (
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {lastUpdate.toLocaleDateString()}
            </p>
          )}
        </div>

        <GlassCard className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                First Person's Birthdate
              </label>
              <input
                type="date"
                value={birthdate1}
                onChange={(e) => handleBirthdateChange(e.target.value, 1)}
                className="input-field w-full"
              />
              {sign1 && (
                <div className="mt-3 text-center">
                  <span className="text-2xl mr-2">{getZodiacEmoji(sign1)}</span>
                  <span className="font-semibold text-purple-600">{sign1}</span>
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Second Person's Birthdate
              </label>
              <input
                type="date"
                value={birthdate2}
                onChange={(e) => handleBirthdateChange(e.target.value, 2)}
                className="input-field w-full"
              />
              {sign2 && (
                <div className="mt-3 text-center">
                  <span className="text-2xl mr-2">{getZodiacEmoji(sign2)}</span>
                  <span className="font-semibold text-purple-600">{sign2}</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Or Select Sign 1
              </label>
              <select
                value={sign1}
                onChange={(e) => setSign1(e.target.value)}
                className="input-field w-full"
              >
                <option value="">Select zodiac sign</option>
                {ZODIAC_SIGNS.map(sign => (
                  <option key={sign} value={sign}>
                    {getZodiacEmoji(sign)} {sign}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Or Select Sign 2
              </label>
              <select
                value={sign2}
                onChange={(e) => setSign2(e.target.value)}
                className="input-field w-full"
              >
                <option value="">Select zodiac sign</option>
                {ZODIAC_SIGNS.map(sign => (
                  <option key={sign} value={sign}>
                    {getZodiacEmoji(sign)} {sign}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <RomanticButton 
              onClick={handleGenerateHoroscope}
              disabled={!sign1 || !sign2}
            >
              Generate Daily Horoscope
            </RomanticButton>
          </div>
        </GlassCard>

        {horoscope && (
          <div className="space-y-6">
            <GlassCard>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Your Cosmic Connection
                </h3>
                <div className="flex justify-center items-center space-x-4">
                  <div className="text-center">
                    <span className="text-4xl">{getZodiacEmoji(horoscope.sign1)}</span>
                    <p className="font-semibold text-purple-600 mt-1">{horoscope.sign1}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart size={24} color="#FF69B4" animated />
                    <span className="text-2xl font-bold text-love-red">
                      {horoscope.compatibility}%
                    </span>
                    <Heart size={24} color="#FF69B4" animated />
                  </div>
                  <div className="text-center">
                    <span className="text-4xl">{getZodiacEmoji(horoscope.sign2)}</span>
                    <p className="font-semibold text-purple-600 mt-1">{horoscope.sign2}</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">
                Today's Love Prediction
              </h4>
              <div className="text-center">
                <span className="text-6xl mb-4 block">{horoscope.emoji}</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {horoscope.dailyPrediction}
                </p>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">
                  Lucky Day
                </h4>
                <div className="text-center">
                  <span className="text-3xl mb-2 block">🍀</span>
                  <p className="text-lg font-semibold text-green-600">
                    {horoscope.luckyDay}
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">
                  Recommended Activity
                </h4>
                <div className="text-center">
                  <span className="text-3xl mb-2 block">💝</span>
                  <p className="text-lg text-gray-700">
                    {horoscope.recommendedActivity}
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};