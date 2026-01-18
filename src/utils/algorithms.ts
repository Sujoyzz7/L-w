import { ZODIAC_DATES } from '../data/predictions';

export function calculateNameCompatibility(name1: string, name2: string): number {
  if (!name1 || !name2) return 0;
  
  const cleanName1 = name1.toLowerCase().replace(/[^a-z]/g, '');
  const cleanName2 = name2.toLowerCase().replace(/[^a-z]/g, '');
  
  let commonLetters = 0;
  const letters1 = new Set(cleanName1);
  const letters2 = new Set(cleanName2);
  
  letters1.forEach(letter => {
    if (letters2.has(letter)) {
      commonLetters++;
    }
  });
  
  const totalUniqueLetters = new Set(cleanName1 + cleanName2).size;
  const letterCompatibility = (commonLetters / totalUniqueLetters) * 50;
  
  const name1Value = cleanName1.split('').reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
  const name2Value = cleanName2.split('').reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
  const numerologyCompatibility = 50 - Math.abs(name1Value % 10 - name2Value % 10) * 5;
  
  let baseCompatibility = letterCompatibility + numerologyCompatibility;
  
  const lengthDiff = Math.abs(cleanName1.length - cleanName2.length);
  const lengthBonus = Math.max(0, 10 - lengthDiff * 2);
  baseCompatibility += lengthBonus;
  
  const finalCompatibility = Math.min(99, Math.max(60, Math.round(baseCompatibility)));
  
  return finalCompatibility;
}

export function getZodiacSign(month: number, day: number): string {
  for (const [sign, dates] of Object.entries(ZODIAC_DATES)) {
    const [startMonth, startDay] = dates.start;
    const [endMonth, endDay] = dates.end;
    
    if (startMonth === endMonth) {
      if (month === startMonth && day >= startDay && day <= endDay) {
        return sign;
      }
    } else {
      if ((month === startMonth && day >= startDay) || 
          (month === endMonth && day <= endDay)) {
        return sign;
      }
    }
  }
  return "Capricorn";
}

export function calculateZodiacCompatibility(sign1: string, sign2: string): number {
  const elementMap: { [key: string]: string } = {
    'Aries': 'Fire', 'Leo': 'Fire', 'Sagittarius': 'Fire',
    'Taurus': 'Earth', 'Virgo': 'Earth', 'Capricorn': 'Earth',
    'Gemini': 'Air', 'Libra': 'Air', 'Aquarius': 'Air',
    'Cancer': 'Water', 'Scorpio': 'Water', 'Pisces': 'Water'
  };
  
  const element1 = elementMap[sign1];
  const element2 = elementMap[sign2];
  
  if (element1 === element2) {
    return Math.floor(Math.random() * 15) + 80;
  }
  
  const compatibleElements: { [key: string]: string[] } = {
    'Fire': ['Air'],
    'Earth': ['Water'],
    'Air': ['Fire'],
    'Water': ['Earth']
  };
  
  if (compatibleElements[element1]?.includes(element2)) {
    return Math.floor(Math.random() * 20) + 70;
  }
  
  return Math.floor(Math.random() * 25) + 60;
}

import { FORTUNE_PREDICTIONS, PERSONALITY_TRAITS, RELATIONSHIP_STRENGTHS, GROWTH_AREAS, HOROSCOPE_PREDICTIONS, LUCKY_DAYS, RECOMMENDED_ACTIVITIES, LOVE_EMOJIS } from '../data/predictions';

export function getRandomPrediction(category: string): string {
  const predictions = FORTUNE_PREDICTIONS[category as keyof typeof FORTUNE_PREDICTIONS] || [];
  return predictions[Math.floor(Math.random() * predictions.length)];
}

export function getRandomPersonalityTraits(): string[] {
  const traitKeys = Object.keys(PERSONALITY_TRAITS);
  const selectedKeys: string[] = [];
  
  for (let i = 0; i < 3; i++) {
    const randomKey = traitKeys[Math.floor(Math.random() * traitKeys.length)];
    if (!selectedKeys.includes(randomKey)) {
      selectedKeys.push(randomKey);
    }
  }
  
  return selectedKeys.flatMap(key => {
    const traits = PERSONALITY_TRAITS[key as keyof typeof PERSONALITY_TRAITS];
    return traits[Math.floor(Math.random() * traits.length)];
  });
}

export function getRandomStrengths(count: number = 3): string[] {
  const shuffled = [...RELATIONSHIP_STRENGTHS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getRandomGrowthAreas(count: number = 2): string[] {
  const shuffled = [...GROWTH_AREAS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function generateDailyHoroscope(sign1: string, sign2: string) {
  const compatibility = calculateZodiacCompatibility(sign1, sign2);
  const dailyPrediction = HOROSCOPE_PREDICTIONS[Math.floor(Math.random() * HOROSCOPE_PREDICTIONS.length)];
  const luckyDay = LUCKY_DAYS[Math.floor(Math.random() * LUCKY_DAYS.length)];
  const recommendedActivity = RECOMMENDED_ACTIVITIES[Math.floor(Math.random() * RECOMMENDED_ACTIVITIES.length)];
  const emoji = LOVE_EMOJIS[Math.floor(Math.random() * LOVE_EMOJIS.length)];
  
  return {
    sign1,
    sign2,
    compatibility,
    dailyPrediction,
    luckyDay,
    recommendedActivity,
    emoji
  };
}

export function animateValue(start: number, end: number, duration: number, callback: (value: number) => void) {
  const startTime = Date.now();
  
  const update = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentValue = Math.round(start + (end - start) * progress);
    callback(currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };
  
  update();
}