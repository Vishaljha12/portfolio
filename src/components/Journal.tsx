import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ENTRIES = [
  { title: "The nuances of motion in UI", date: "May 12, 2026", readTime: "4 min read", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200" },
  { title: "Building accessible color systems", date: "Apr 28, 2026", readTime: "6 min read", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=200" },
  { title: "Why typography matters now more than ever", date: "Mar 15, 2026", readTime: "5 min read", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=200" },
  { title: "Designing for the future of web", date: "Feb 02, 2026", readTime: "8 min read", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
];

export const Journal: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-sm mt-4">
              Writing about design, technology, and everything in between.
            </p>
          </div>

          <button className="hidden md:inline-flex group relative rounded-full items-center gap-2 h-12 px-6 text-sm text-text-primary">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <div className="absolute inset-0 rounded-full bg-surface border border-stroke group-hover:border-transparent transition-colors -z-10" />
            View all
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, i) => (
            <div 
              key={i}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors cursor-pointer"
            >
              <img 
                src={entry.img} 
                alt={entry.title}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2 sm:px-0">
                <h3 className="text-lg md:text-xl text-text-primary font-medium group-hover:text-accent transition-colors">
                  {entry.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted shrink-0 pr-4">
                  <span>{entry.readTime}</span>
                  <div className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{entry.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
