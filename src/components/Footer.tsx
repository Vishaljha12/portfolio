import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BackgroundVideo } from './BackgroundVideo';

export const Footer: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // GSAP Marquee
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1
    });
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden border-t border-stroke">
      <BackgroundVideo flip={true} />
      
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32">
        <div className="mb-12 overflow-hidden w-full whitespace-nowrap flex">
          <div ref={marqueeRef} className="flex gap-4 items-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-5xl md:text-8xl font-display italic text-text-primary/30 shrink-0">
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
        </div>

        <a 
          href="mailto:kjvishal336@gmail.com"
          className="group relative inline-flex items-center justify-center rounded-full text-lg md:text-2xl px-10 py-5 transition-all bg-surface border border-stroke hover:border-transparent"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          <div className="absolute inset-0 rounded-full bg-surface -z-10" />
          kjvishal336@gmail.com
        </a>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="https://github.com/Vishaljha12" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/vishal-kumar-6159b5369" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          Available for internships
        </div>
      </div>
    </footer>
  );
};
