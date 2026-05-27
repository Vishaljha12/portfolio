import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div 
        className="w-full min-h-screen bg-bg transition-opacity duration-1000"
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        <Hero />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
        <Footer />
      </div>
    </>
  );
}

export default App;
