import React, { useState } from 'react';

const projects = [
   {
      id: 1,
      emoji: '🏪',
      tag: 'Three.js · R3F · GSAP',
      title: '3D Portfolio Café',
      description:
         'An interactive Tim Hortons café scene in Three.js with baked lighting, custom routing, and GSAP transitions.',
   },
   {
      id: 2,
      emoji: '⚛️',
      tag: 'React · TypeScript · Zustand',
      title: 'Studio App',
      description:
         'A video-generation studio with a node-based graph UI, real-time API calls, and glassmorphism design.',
   },
   {
      id: 3,
      emoji: '🏀',
      tag: 'Next.js · PostgreSQL',
      title: 'NBA Forum',
      description:
         'A full-stack sports discussion board with threaded comments, real-time updates, and team theming.',
   },
   {
      id: 4,
      emoji: '🔐',
      tag: 'Better-Auth · Node.js',
      title: 'Auth System',
      description:
         'Production-grade authentication with Google & GitHub OAuth, protected routes, and session management.',
   },
];

function ProjectsPage() {
   const [hovered, setHovered] = useState(null);

   return (
      <div className="w-full h-full flex flex-col bg-[#261A10] shadow-[4px_0_32px_rgba(0,0,0,0.5)]">
         {/* Dark red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-[linear-gradient(135deg,#932B30_0%,#B53028_100%)]">
            <span className="text-2xl">🍩</span>
            <h1 className="font-serif text-[1.25rem] font-bold text-[#F5ECD7] tracking-[0.08em] uppercase">
               Recent Projects
            </h1>
         </div>

         {/* List */}
         <div className="flex-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#4D3822_transparent]">
            {projects.map((project) => (
               <div
                  key={project.id}
                  className={`px-10 py-6 cursor-pointer flex items-start gap-5 transition-colors duration-150 border-b border-[#3F2D19] ${hovered === project.id ? 'bg-[#352415]' : 'bg-[#261A10]'}`}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
               >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-[#352415] border border-[#4D3822]">
                     {project.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-serif text-[1.05rem] font-bold text-[#F5ECD7]">
                           {project.title}
                        </h3>
                        <span className="text-[0.72rem] font-mono text-[#B53028] bg-[#2E1A0A] px-[10px] py-[3px] rounded-full font-semibold whitespace-nowrap border border-[rgba(181,48,40,0.25)]">
                           {project.tag}
                        </span>
                     </div>
                     <p className="text-[0.85rem] text-[#B8956A] leading-[1.65]">
                        {project.description}
                     </p>
                  </div>
                  <span
                     className={`text-[#B53028] text-base mt-[0.15rem] shrink-0 transition-opacity duration-150 ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`}
                  >
                     →
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ProjectsPage;
