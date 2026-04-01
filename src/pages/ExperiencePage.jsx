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
      <div
         className="w-full h-full flex flex-col"
         style={{
            background: '#261A10',
            boxShadow: '4px 0 32px rgba(0,0,0,0.5)',
         }}
      >
         {/* Dark red header stripe */}
         <div
            className="px-10 py-6 shrink-0 flex items-center gap-3"
            style={{
               background: 'linear-gradient(135deg, #932B30 0%, #B53028 100%)',
            }}
         >
            <span className="text-2xl">📋</span>
            <h1
               style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#F5ECD7',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
               }}
            >
               Experience
            </h1>
         </div>

         {/* Timeline */}
         <div
            className="flex-1 overflow-y-auto px-10 py-8"
            style={{
               scrollbarWidth: 'thin',
               scrollbarColor: '#4D3822 transparent',
            }}
         >
            <div className="relative">
               {/* Vertical line */}
               <div
                  className="absolute left-[7px] top-2 bottom-2 w-[2px]"
                  style={{ background: '#3F2D19' }}
               />

               <div className="flex flex-col gap-10">
                  {experiences.map((exp, idx) => (
                     <div key={idx} className="relative pl-10">
                        {/* Dot */}
                        <div
                           className="absolute left-0 top-[4px] w-[15px] h-[15px] rounded-full"
                           style={{
                              background: exp.active ? '#B53028' : '#4D3822',
                              border: '2px solid #261A10',
                              boxShadow: exp.active
                                 ? '0 0 0 3px rgba(181,48,40,0.3)'
                                 : 'none',
                           }}
                        />

                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-0.5">
                           <h3
                              style={{
                                 fontFamily: 'var(--font-serif)',
                                 fontSize: '1.05rem',
                                 fontWeight: 700,
                                 color: '#F5ECD7',
                              }}
                           >
                              {exp.role}
                           </h3>
                           <span
                              style={{
                                 fontSize: '0.72rem',
                                 fontFamily: 'monospace',
                                 color: '#6B4030',
                                 whiteSpace: 'nowrap',
                              }}
                           >
                              {exp.period}
                           </span>
                        </div>
                        <p
                           style={{
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              color: '#B53028',
                              marginBottom: '0.4rem',
                           }}
                        >
                           {exp.company}
                        </p>
                        <p
                           style={{
                              fontSize: '0.85rem',
                              color: '#B8956A',
                              lineHeight: 1.65,
                              marginBottom: '0.65rem',
                           }}
                        >
                           {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                           {exp.tags.map((tag) => (
                              <span
                                 key={tag}
                                 style={{
                                    fontSize: '0.72rem',
                                    fontFamily: 'monospace',
                                    padding: '3px 10px',
                                    borderRadius: '6px',
                                    background: '#352415',
                                    border: '1px solid #4D3822',
                                    color: '#C8956A',
                                    fontWeight: 600,
                                 }}
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default ExperiencePage;
