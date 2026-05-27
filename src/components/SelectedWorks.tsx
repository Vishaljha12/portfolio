import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  { title: "Ecommerce Website", span: "md:col-span-7", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200", href: "https://e3-com.netlify.app/" },
  { title: "drift master", span: "md:col-span-5", img: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=1200", href: "https://driftmasters222.netlify.app/" },
  { title: "Portfolio Website", span: "md:col-span-5", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200", href: "https://vishal-portfolio-eight-lac.vercel.app/" },
  { title: "Prompt Engineering", span: "md:col-span-7", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" },
];

export const SelectedWorks: React.FC = () => {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-sm mt-4">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>

          <button className="hidden md:inline-flex group relative rounded-full items-center gap-2 h-12 px-6 text-sm text-text-primary">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <div className="absolute inset-0 rounded-full bg-surface border border-stroke group-hover:border-transparent transition-colors -z-10" />
            View all work
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <a 
              key={i} 
              href={project.href || "#"}
              target={project.href ? "_blank" : "_self"}
              rel="noreferrer"
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl aspect-square md:aspect-auto md:min-h-[400px] block cursor-pointer ${project.span}`}
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{ 
                  background: 'radial-gradient(circle, #000 1px, transparent 1px) 0 0 / 4px 4px'
                }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex items-center justify-center">
                
                {/* Hover Label */}
                <div className="relative inline-flex items-center justify-center px-6 py-3 rounded-full translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift" />
                  <div className="relative bg-white text-black px-6 py-3 rounded-full text-sm">
                    View — <span className="font-display italic text-base">{project.title}</span>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
