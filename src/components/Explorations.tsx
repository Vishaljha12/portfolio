import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
];

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false
      });

      // Parallax movement for columns
      gsap.to(col1Ref.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(col2Ref.current, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      
      {/* Pinned Center Layer */}
      <div ref={contentRef} className="absolute inset-0 h-screen z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center text-center p-6 bg-bg/40 backdrop-blur-md rounded-3xl border border-white/5 pointer-events-auto">
          <span className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Explorations</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-sm mb-8">
            A collection of visual experiments and interface concepts.
          </p>
          <button className="group relative rounded-full text-sm px-7 py-3 hover:scale-105 transition-all bg-text-primary text-bg hover:bg-bg hover:text-text-primary">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <div className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View Dribbble
          </button>
        </div>
      </div>

      {/* Parallax Columns */}
      <div className="absolute inset-0 z-20 flex justify-center max-w-[1400px] mx-auto px-4 pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 w-full h-full pt-[50vh]">
          
          <div ref={col1Ref} className="flex flex-col gap-12 md:gap-40 items-end pointer-events-auto">
            {ITEMS.slice(0, 3).map((item, i) => (
              <div key={`col1-${i}`} className="w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden group cursor-pointer border border-stroke bg-surface hover:rotate-2 transition-transform duration-500">
                <img src={item} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>

          <div ref={col2Ref} className="flex flex-col gap-12 md:gap-40 items-start pointer-events-auto mt-[20vh]">
            {ITEMS.slice(3, 6).map((item, i) => (
              <div key={`col2-${i}`} className="w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden group cursor-pointer border border-stroke bg-surface hover:-rotate-2 transition-transform duration-500">
                <img src={item} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
