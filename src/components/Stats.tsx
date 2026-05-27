import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stroke">
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-5xl md:text-7xl font-display italic text-text-primary mb-2">3+</div>
            <div className="text-sm text-muted uppercase tracking-[0.2em]">Languages</div>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-5xl md:text-7xl font-display italic text-text-primary mb-2">2+</div>
            <div className="text-sm text-muted uppercase tracking-[0.2em]">Key Projects</div>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-5xl md:text-7xl font-display italic text-text-primary mb-2">2029</div>
            <div className="text-sm text-muted uppercase tracking-[0.2em]">Graduation</div>
          </div>

        </div>
      </div>
    </section>
  );
};
