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
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* Dark red header stripe */}
         <div className="px-10 py-6 shrink-0 flex items-center gap-3 bg-brand-gradient">
            <h1 className="font-serif text-3xl font-bold text-brand-cream uppercase">
               Recent Projects
            </h1>
         </div>

         {/* List */}
         <div className="flex-1 overflow-y-auto scrollbar-brand">
            {projects.map((project) => (
               <div
                  key={project.id}
                  className={`px-10 py-6 cursor-pointer flex items-start gap-5 transition-colors duration-150 border-b border-brand-coffee ${hovered === project.id ? 'bg-brand-brown-light' : 'bg-brand-brown-dark'}`}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
               >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-brand-brown-light border border-brand-brown-medium">
                     {project.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-serif text-base font-bold text-brand-cream">
                           {project.title}
                        </h3>
                        <span className="text-xs font-mono text-brand-red bg-brand-brown-dark px-2.5 py-1 rounded-full font-semibold whitespace-nowrap border border-brand-red/25">
                           {project.tag}
                        </span>
                     </div>
                     <p className="text-sm text-brand-tan leading-relaxed">
                        {project.description}
                     </p>
                  </div>
                  <span
                     className={`text-brand-red text-base mt-0.5 shrink-0 transition-opacity duration-150 ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`}
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
