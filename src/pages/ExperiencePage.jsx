import React from 'react';
import PageHeader from '../components/PageHeader';

const NAME = 'Experience';
const TAGLINE = "Where I've worked & what I've done";

import ExperienceCard from '../components/ExperienceCard';

const experiences = [
   {
      role: 'IT Application Developer',
      company: 'Celestica',
      period: 'May 2024 — August 2025',
      type: 'Internship',
      description:
         'Automated business processes by developing internal applications and custom JavaScript solutions, while engineering REST API integrations and comprehensive unit test suites within an Agile framework.',
      tags: ['JavaScript', 'REST API', 'Unit Testing', 'Agile', 'Postman'],
      active: true,
   },
   {
      role: 'Software Developer',
      company: 'Arkhet AI Inc.',
      period: 'Feb 2025 — Apr 2025',
      type: 'Part-Time',
      description:
         'Architected responsive interfaces using React and Shadcn UI, engineered type-safe REST APIs with Hono, and integrated AI-driven features into core application workflows.',
      tags: ['React', 'TypeScript', 'Hono', 'TailwindCSS', 'LLM'],
      active: false,
   },
   {
      role: 'Frontend Developer',
      company: 'Magnify Access',
      period: 'Jan 2024 — May 2024',
      type: 'Internship',
      description:
         'Engineered accessible, user-centric interfaces compliant with WCAG 2.1 standards and executed SEO best practices.',
      tags: ['WCAG', 'Accessibility', 'SEO', 'Lighthouse'],
      active: false,
   },
];

function ExperiencePage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* ── Header ── */}
         <PageHeader name={NAME} tagline={TAGLINE} />

         {/* Timeline */}
         <div className="flex-1 overflow-y-auto px-10 py-8 scrollbar-brand">
            <div className="relative">
               {/* Vertical line */}
               <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-brand-coffee" />

               {/* Experience cards */}
               <div className="flex flex-col gap-10">
                  {experiences.map((exp, idx) => (
                     <ExperienceCard key={idx} {...exp} />
                  ))}
               </div>
            </div>
         </div>

         {/* Fixed Footer with Download Resume Button */}
         <div className="px-10 py-6 border-t border-brand-coffee bg-brand-brown-dark flex justify-center ">
            <a
               href="/jerry_shum_engineer.pdf"
               download="jerry_shum_engineer.pdf"
               className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-gradient border border-brand-cream/10 text-brand-cream font-sans text-sm font-semibold tracking-wider uppercase no-underline cursor-pointer shadow-brand-red ease hover:scale-105 transition-all duration-300 hover:brightness-95"
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
   );
}

export default ExperiencePage;
