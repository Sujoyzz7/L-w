import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CompatibilityCalculator } from './components/CompatibilityCalculator';
import { LoveFortuneTeller } from './components/LoveFortuneTeller';
import { DailyLoveHoroscope } from './components/DailyLoveHoroscope';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'compatibility', 'fortune', 'horoscope'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="compatibility">
          <CompatibilityCalculator />
        </section>
        
        <section id="fortune">
          <LoveFortuneTeller />
        </section>
        
        <section id="horoscope">
          <DailyLoveHoroscope />
        </section>
      </main>
      
      <footer className="glass-morphism border-t border-white/30 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">💕</span>
            <span className="text-lg font-semibold text-gray-700">
              Made with love for couples everywhere
            </span>
            <span className="text-2xl">💕</span>
          </div>
          <p className="text-gray-600">
            Discover the magic of your love story
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;