import React from 'react';

const experiences = [
   {
      role: 'Senior Software Engineer',
      company: 'Studio Platform',
      period: '2024 — Present',
      description: 'Leading full-stack development on a video generation platform — node-graph UI, real-time API orchestration, and design systems.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      active: true,
   },
   {
      role: 'Frontend Developer',
      company: 'Web Agency',
      period: '2022 — 2024',
      description: 'Shipped interactive React apps with complex state management, GSAP animations, and performance optimizations.',
      tags: ['React', 'GSAP', 'Zustand', 'CSS'],
      active: false,
   },
   {
      role: 'Junior Developer',
      company: 'Startup',
      period: '2021 — 2022',
      description: 'Built features across a full-stack TypeScript monorepo, learning production patterns and CI/CD pipelines.',
      tags: ['Next.js', 'TypeScript', 'Docker'],
      active: false,
   },
];

function ExperiencePage() {
   return (
      <div className="w-full h-full flex flex-col" style={{ background: '#FFFFFF', boxShadow: '4px 0 24px rgba(0,0,0,0.12)' }}>
         {/* Red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3" style={{ background: '#C8102E' }}>
            <span className="text-2xl">📋</span>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
               Experience
            </h1>
         </div>

         {/* Timeline */}
         <div className="flex-1 overflow-y-auto px-10 py-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#E8D8C8 transparent' }}>
            <div className="relative">
               {/* Vertical line */}
               <div className="absolute left-[7px] top-2 bottom-2 w-[2px]" style={{ background: '#F0E8E0' }} />

               <div className="space-y-8">
                  {experiences.map((exp, idx) => (
                     <div key={idx} className="relative pl-10">
                        {/* Dot */}
                        <div
                           className="absolute left-0 top-[4px] w-[15px] h-[15px] rounded-full"
                           style={{
                              background: exp.active ? '#C8102E' : '#E8D8C8',
                              border: '2px solid #FFFFFF',
                              boxShadow: exp.active ? '0 0 0 2px rgba(200,16,46,0.25)' : 'none',
                           }}
                        />

                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-0.5">
                           <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', fontWeight: 700, color: '#1A0A00' }}>
                              {exp.role}
                           </h3>
                           <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#AAA', whiteSpace: 'nowrap' }}>
                              {exp.period}
                           </span>
                        </div>
                        <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#C8102E', marginBottom: '0.4rem' }}>
                           {exp.company}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.65, marginBottom: '0.65rem' }}>
                           {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                           {exp.tags.map(tag => (
                              <span
                                 key={tag}
                                 style={{
                                    fontSize: '0.65rem',
                                    fontFamily: 'monospace',
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    background: '#FAF3E8',
                                    color: '#6B3A2A',
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
