import React from 'react';

const experiences = [
   {
      role: 'Senior Software Engineer',
      company: 'Studio Platform',
      period: '2024 — Present',
      description:
         'Leading full-stack development on a video generation platform — node-graph UI, real-time API orchestration, and design systems.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      active: true,
   },
   {
      role: 'Frontend Developer',
      company: 'Web Agency',
      period: '2022 — 2024',
      description:
         'Shipped interactive React apps with complex state management, GSAP animations, and performance optimizations.',
      tags: ['React', 'GSAP', 'Zustand', 'CSS'],
      active: false,
   },
   {
      role: 'Junior Developer',
      company: 'Startup',
      period: '2021 — 2022',
      description:
         'Built features across a full-stack TypeScript monorepo, learning production patterns and CI/CD pipelines.',
      tags: ['Next.js', 'TypeScript', 'Docker'],
      active: false,
   },
];

function ExperiencePage() {
   return (
      <div className="w-full h-full flex flex-col bg-[#261A10] shadow-[4px_0_32px_rgba(0,0,0,0.5)]">
         {/* Dark red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-[linear-gradient(135deg,#932B30_0%,#B53028_100%)]">
            <span className="text-2xl">📋</span>
            <h1 className="font-serif text-[1.25rem] font-bold text-[#F5ECD7] tracking-[0.08em] uppercase">
               Experience
            </h1>
         </div>

         {/* Timeline */}
         <div
            className="flex-1 overflow-y-auto px-10 py-8 [scrollbar-width:thin] [scrollbar-color:#4D3822_transparent]"
         >
            <div className="relative">
               {/* Vertical line */}
               <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#3F2D19]" />

               <div className="flex flex-col gap-10">
                  {experiences.map((exp, idx) => (
                     <div key={idx} className="relative pl-10">
                        {/* Dot */}
                        <div
                           className={`absolute left-0 top-[4px] w-[15px] h-[15px] rounded-full border-2 border-[#261A10] ${exp.active ? 'bg-[#B53028] shadow-[0_0_0_3px_rgba(181,48,40,0.3)]' : 'bg-[#4D3822]'}`}
                        />

                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-0.5">
                           <h3 className="font-serif text-[1.05rem] font-bold text-[#F5ECD7]">
                              {exp.role}
                           </h3>
                           <span className="text-[0.72rem] font-mono text-[#6B4030] whitespace-nowrap">
                              {exp.period}
                           </span>
                        </div>
                        <p className="text-[0.78rem] font-semibold text-[#B53028] mb-[0.4rem]">
                           {exp.company}
                        </p>
                        <p className="text-[0.85rem] text-[#B8956A] leading-[1.65] mb-[0.65rem]">
                           {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                           {exp.tags.map((tag) => (
                              <span
                                 key={tag}
                                 className="text-[0.72rem] font-mono px-[10px] py-[3px] rounded-[6px] bg-[#352415] border border-[#4D3822] text-[#C8956A] font-semibold"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
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
