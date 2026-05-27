import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { BackgroundVideo } from './BackgroundVideo';
import { Navbar } from './Navbar';

const ROLES = ["CS Student", "Web Developer", "Game Dev", "AIML Enthusiast"];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.to('.name-reveal', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.1
      })
      .to('.blur-in', {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1,
        stagger: 0.1,
      }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      <BackgroundVideo />
      <Navbar />

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        <div 
          className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          CSE AIML STUDENT
        </div>

        <h1 
          className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6"
          style={{ opacity: 0, transform: 'translateY(50px)' }}
        >
          Vishal Kumar
        </h1>

        <div 
          className="blur-in text-xl md:text-2xl lg:text-3xl font-light text-muted mb-8"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{ROLES[roleIndex]}</span> lives in Ghaziabad UP.
        </div>

        <p 
          className="blur-in text-sm md:text-base text-muted max-w-md mb-12"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          Motivated Computer Science student at ABES Engineering College with a strong background in web technologies, game development, and specialized knowledge in AIML.
        </p>

        <div 
          className="blur-in flex items-center gap-4"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' }}
        >
          <a href="#works" className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-all bg-text-primary text-bg hover:bg-bg hover:text-text-primary inline-flex items-center justify-center">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <div className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            See Works
          </a>

          <a href="https://linkedin.com/in/vishal-kumar-6159b5369" target="_blank" rel="noreferrer" className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-all border-2 border-stroke bg-bg text-text-primary hover:border-transparent inline-flex items-center justify-center">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <div className="absolute inset-0 rounded-full bg-bg -z-10" />
            Reach out...
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
