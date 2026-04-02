import React from 'react';

const STATUS_CONFIG = {
   live: { label: 'Live', dot: 'bg-emerald-400' },
   wip: { label: 'WIP', dot: 'bg-amber-400' },
   complete: { label: 'Complete', dot: 'bg-indigo-400' },
   beta: { label: 'Beta', dot: 'bg-purple-400' },
   experimental: { label: 'Experimental', dot: 'bg-pink-400' },
   archived: { label: 'Archived', dot: 'bg-brand-tan' },
};

function GitHubArrowIcon() {
   return (
      <svg
         width="14"
         height="14"
         fill="none"
         stroke="currentColor"
         strokeWidth="2.5"
         strokeLinecap="round"
         strokeLinejoin="round"
         viewBox="0 0 24 24"
      >
         <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
   );
}

/**
 * ProjectCard — Vertical Hero layout.
 * Best for Grid displays.
 */
function ProjectCard({ project }) {
   const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.live;

   return (
      <a
         href={project.github}
         target="_blank"
         rel="noopener noreferrer"
         className="
            group flex flex-col sm:flex-row rounded-2xl
            bg-brand-brown-light border border-brand-brown-medium
            hover:border-brand-red/40 hover:bg-brand-brown-elevated
            transition-all duration-400 cursor-pointer
            hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1
            no-underline overflow-hidden
         "
      >
         {/* ── Left Visual Pillar ── */}
         <div className="
            flex items-center justify-center p-8 sm:w-32 bg-brand-brown-dark/50 
            border-b sm:border-b-0 sm:border-r border-brand-brown-medium/30 
            group-hover:bg-brand-red/5 transition-colors duration-400
         ">
            <span className="text-4xl sm:text-5xl group-hover:scale-125 transition-transform duration-500 ease-out drop-shadow-lg">
               {project.emoji}
            </span>
         </div>

         {/* ── Right Content Section ── */}
         <div className="flex flex-col p-6 flex-1 gap-3">

            {/* Header: Title & Status */}
            <div className="flex items-start justify-between gap-4">
               <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                     <h3 className="
                        font-serif text-xl font-bold text-brand-cream leading-tight
                        group-hover:text-brand-red transition-colors duration-200
                     ">
                        {project.title}
                     </h3>
                     <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-brown-dark/80 border border-brand-coffee text-white shadow-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                        <span className="text-xs font-mono font-bold tracking-widest uppercase">{status.label}</span>
                     </div>
                  </div>
               </div>
               <span className="text-brand-brown-medium group-hover:text-brand-red transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <GitHubArrowIcon />
               </span>
            </div>

            {/* Description */}
            <p className="text-md text-brand-tan leading-relaxed max-w-2xl">
               {project.description}
            </p>

            {/* Footer: Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
               {project.tags.map((tag) => (
                  <span
                     key={tag}
                     className="text-xs font-mono font-medium tracking-wide px-2 py-0.5 rounded-md
                                bg-brand-brown-dark border border-brand-coffee text-brand-tan/60 
                                group-hover:text-brand-tan group-hover:border-brand-tan/20 transition-all duration-300"
                  >
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </a>
   );
}

export default ProjectCard;
