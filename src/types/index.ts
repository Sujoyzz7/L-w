export interface CompatibilityResult {
  percentage: number;
  personality1: string[];
  personality2: string[];
  strengths: string[];
  growthAreas: string[];
}

export interface FortunePrediction {
  category: string;
  prediction: string;
  timestamp: Date;
}

export interface HoroscopeData {
  sign1: string;
  sign2: string;
  compatibility: number;
  dailyPrediction: string;
  luckyDay: string;
  recommendedActivity: string;
  emoji: string;
}

export interface PredictionHistory {
  compatibility: CompatibilityResult[];
  fortunes: FortunePrediction[];
  horoscopes: HoroscopeData[];
}