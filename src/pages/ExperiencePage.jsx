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
      <div className="w-full h-full flex flex-col bg-[#261A10] shadow-[4px_0_32px_rgba(0,0,0,0.5)]">
         {/* Header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-[linear-gradient(135deg,#932B30_0%,#B53028_100%)]">
            <h1 className="font-serif text-3xl font-bold text-[#F5ECD7] uppercase">
               Experience
            </h1>
         </div>

         {/* Timeline */}
         <div className="flex-1 overflow-y-auto px-10 py-8 [scrollbar-width:thin] [scrollbar-color:#4D3822_transparent]">
            <div className="relative">
               {/* Vertical line */}
               <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#3F2D19]" />

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
                  className="inline-flex items-center gap-[0.55rem] px-[1.6rem] py-[0.65rem] rounded-[10px] bg-[linear-gradient(135deg,#932B30_0%,#B53028_100%)] border border-[rgba(245,236,215,0.12)] text-[#F5ECD7] font-sans text-[0.82rem] font-semibold tracking-[0.06em] uppercase no-underline cursor-pointer shadow-[0_4px_18px_rgba(181,48,40,0.35)] transition-all duration-200 ease"
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
