import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
   {
      role: 'IT/Business Application Developer',
      company: 'Celestica',
      period: 'May 2024 — August 2025',
      type: 'Internship',
      description:
         'Leading full-stack development on a video generation platform — node-graph UI, real-time API orchestration, and design systems.',
      tags: ['JavaScript', 'RDBMS', 'REST API', 'ServiceNow'],
      active: true,
   },
   {
      role: 'Software Developer',
      company: 'Arkhet AI Inc.',
      period: 'Feb 2025 — Apr 2025',
      type: 'Part-Time',
      description:
         'Shipped interactive React apps with complex state management, GSAP animations, and performance optimizations.',
      tags: ['React', 'GSAP', 'Zustand', 'CSS'],
      active: false,
   },
   {
      role: 'Frontend Developer',
      company: 'Magnify Access',
      period: 'Jan 2024 — May 2024',
      type: 'co-op',
      description:
         'Utilized Figma to create a frontend design system for a web application, ensuring WCAG and accessibility compliance.',
      tags: ['Figma', 'WCAG', 'Accessibility'],
      active: false,
   },
];

function ExperiencePage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* Header */}
         <div className="px-10 py-6 shrink-0 bg-brand-gradient">
            <p className="text-xs font-mono font-bold tracking-widest uppercase text-brand-cream/60 mb-1">
               Portfolio — 2026
            </p>
            <h1 className="font-serif text-3xl font-bold text-brand-cream">
               Experience
            </h1>
            <p className="text-sm text-brand-cream/70 mt-1">
               Where I've worked and what I've done
            </p>
         </div>

         {/* Timeline */}
         <div className="flex-1 overflow-y-auto px-10 py-8 scrollbar-brand">
            <div className="relative">
               {/* Vertical line */}
               <div className="absolute left-2 top-2 bottom-2 w-[2px] bg-brand-coffee" />

               {/* Experience cards */}
               <div className="flex flex-col gap-10">
                  {experiences.map((exp, idx) => (
                     <ExperienceCard key={idx} {...exp} />
                  ))}
               </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-8 pb-2 flex justify-center hover:scale-105 transition-all duration-300 hover:brightness-95">
               <a
                  href="/jerry_shum_engineer.pdf"
                  download="jerry_shum_engineer.pdf"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-gradient border border-brand-cream/10 text-brand-cream font-sans text-sm font-semibold tracking-wider uppercase no-underline cursor-pointer shadow-brand-red transition-all duration-200 ease"
               >
                  {/* Download icon */}
                  <svg
                     width="15"
                     height="15"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2.2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M12 3v13M7 11l5 5 5-5" />
                     <path d="M5 21h14" />
                  </svg>
                  Download Résumé
               </a>
            </div>
         </div>
      </div>
   );
}

export default ExperiencePage;
