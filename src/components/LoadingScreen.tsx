import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WORDS = ["Design", "Create", "Inspire"];

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Word rotation every 900ms
    const wordInterval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const DURATION = 2700;
    const START_TIME = performance.now();

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - START_TIME;
      const progress = Math.min(elapsed / DURATION, 1);
      const currentCount = Math.floor(progress * 100);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 overflow-hidden">
      {/* Top-left label */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Center words */}
      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 absolute"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-end justify-between w-full">
            <div className="w-full flex-1 mr-8 relative bottom-3">
              <div className="h-[3px] bg-stroke/50 w-full rounded-full overflow-hidden">
                <div 
                  className="h-full accent-gradient rounded-full origin-left shadow-[0_0_8px_rgba(137,170,204,0.35)]"
                  style={{ transform: `scaleX(${count / 100})`, transition: 'transform 0.1s linear' }}
                />
              </div>
            </div>
            <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
              {String(count).padStart(3, "0")}
            </div>
        </div>
      </div>
    </div>
  );
};
