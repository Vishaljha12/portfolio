import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={twMerge(
          "inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300",
          scrolled && "shadow-md shadow-black/10"
        )}
      >
        {/* Logo */}
        <div className="group relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:bg-gradient-to-l opacity-80" />
          <div className="absolute inset-[2px] rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">VK</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 hidden md:block" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Work', href: '#works' }
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActiveLink(label)}
              className={twMerge(
                "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors",
                activeLink === label 
                  ? "text-text-primary bg-stroke/50" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              )}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2" />

        {/* CTA Button */}
        <a href="#contact" className="group relative text-xs sm:text-sm rounded-full h-8 sm:h-9 px-3 sm:px-4 text-text-primary hover:text-text-primary inline-flex items-center">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative h-full w-full rounded-full bg-surface backdrop-blur-md flex items-center justify-center gap-1.5 px-3">
            <span>Say hi</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </a>
      </div>
    </nav>
  );
};
