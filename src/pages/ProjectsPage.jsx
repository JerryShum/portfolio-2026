import React, { useState } from 'react';

const projects = [
   {
      id: 1,
      emoji: '🏪',
      tag: 'Three.js · R3F · GSAP',
      title: '3D Portfolio Café',
      description: 'An interactive Tim Hortons café scene in Three.js with baked lighting, custom routing, and GSAP transitions.',
   },
   {
      id: 2,
      emoji: '⚛️',
      tag: 'React · TypeScript · Zustand',
      title: 'Studio App',
      description: 'A video-generation studio with a node-based graph UI, real-time API calls, and glassmorphism design.',
   },
   {
      id: 3,
      emoji: '🏀',
      tag: 'Next.js · PostgreSQL',
      title: 'NBA Forum',
      description: 'A full-stack sports discussion board with threaded comments, real-time updates, and team theming.',
   },
   {
      id: 4,
      emoji: '🔐',
      tag: 'Better-Auth · Node.js',
      title: 'Auth System',
      description: 'Production-grade authentication with Google & GitHub OAuth, protected routes, and session management.',
   },
];

function ProjectsPage() {
   const [hovered, setHovered] = useState(null);

   return (
      <div className="w-full h-full flex flex-col" style={{ background: '#FFFFFF', boxShadow: '4px 0 24px rgba(0,0,0,0.12)' }}>
         {/* Red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3" style={{ background: '#C8102E' }}>
            <span className="text-2xl">🍩</span>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
               Recent Projects
            </h1>
         </div>

         {/* List */}
         <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#E8D8C8 transparent' }}>
            {projects.map((project, idx) => (
               <div
                  key={project.id}
                  className="px-10 py-6 cursor-pointer flex items-start gap-5 transition-colors duration-150"
                  style={{
                     borderBottom: '1px solid #F0E8E0',
                     background: hovered === project.id ? '#FFF8F3' : '#FFFFFF',
                  }}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
               >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: '#FAF3E8' }}>
                     {project.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', fontWeight: 700, color: '#1A0A00' }}>
                           {project.title}
                        </h3>
                        <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: '#C8102E', background: '#FFF3F5', padding: '1px 8px', borderRadius: '999px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                           {project.tag}
                        </span>
                     </div>
                     <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.65 }}>
                        {project.description}
                     </p>
                  </div>
                  <span style={{ color: '#C8102E', fontSize: '1rem', marginTop: '0.15rem', flexShrink: 0, opacity: hovered === project.id ? 1 : 0, transition: 'opacity 0.15s' }}>→</span>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ProjectsPage;
