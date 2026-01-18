import React from 'react';

interface HeartProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export const Heart: React.FC<HeartProps> = ({ size = 24, color = '#FF69B4', className = '', animated = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={{ animation: animated ? 'heart-beat 1.5s ease-in-out infinite' : '' }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
};

interface SparkleProps {
  size?: number;
  className?: string;
}

export const Sparkle: React.FC<SparkleProps> = ({ size = 20, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFB6C1"
      strokeWidth="2"
      className={className}
      style={{ animation: 'sparkle 2s ease-in-out infinite' }}
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
  );
};

interface FloatingHeartProps {
  delay?: number;
  duration?: number;
  left?: string;
}

export const FloatingHeart: React.FC<FloatingHeartProps> = ({ 
  delay = 0, 
  duration = 3, 
  left = '50%' 
}) => {
  return (
    <div
      className="absolute opacity-30"
      style={{
        left,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      <Heart size={16} color="#FFB6C1" />
    </div>
  );
};

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`glass-morphism rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};

export const RomanticButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}> = ({ children, onClick, disabled = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`heart-button disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export const AnimatedPercentage: React.FC<{
  value: number;
  className?: string;
}> = ({ value, className = '' }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  
  React.useEffect(() => {
    import('../utils/algorithms').then(({ animateValue }) => {
      animateValue(0, value, 1500, setDisplayValue);
    });
  }, [value]);
  
  return (
    <div className={`text-6xl font-bold bg-gradient-to-r from-love-red to-romantic-purple bg-clip-text text-transparent ${className}`}>
      {displayValue}%
    </div>
  );
};