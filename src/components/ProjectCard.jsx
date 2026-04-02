import React from 'react';

const STATUS_CONFIG = {
   live: { label: 'Live', dot: 'bg-emerald-400' },
   wip: { label: 'WIP', dot: 'bg-amber-400' },
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
            group flex flex-col rounded-2xl overflow-hidden
            bg-brand-brown-light border border-brand-brown-medium
            hover:border-brand-red/40 hover:bg-brand-brown-elevated
            transition-all duration-300 cursor-pointer
            hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1
            no-underline h-full
         "
      >
         {/* ── Image Hero ── */}
         <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-brand-brown-medium/50 bg-brand-brown-dark">
            {project.image ? (
               <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
            ) : (
               <div className="w-full h-full flex items-center justify-center text-4xl opacity-20 grayscale">
                  {project.emoji ?? '📁'}
               </div>
            )}
            
            {/* Elegant vignette overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            
            {/* Top-right Status Badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-lg">
               <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
               <span className="text-[10px] font-mono font-bold tracking-widest uppercase">{status.label}</span>
            </div>
         </div>

         {/* ── Content ── */}
         <div className="flex flex-col p-5 flex-1 gap-3">
            <div className="flex items-start justify-between gap-3">
               <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xl leading-none shrink-0">{project.emoji}</span>
                  <h3 className="
                     font-serif text-base font-bold text-brand-cream leading-snug truncate
                     group-hover:text-brand-red/90 transition-colors duration-200
                  ">
                     {project.title}
                  </h3>
               </div>
               <span className="text-brand-brown-medium group-hover:text-brand-red transition-all duration-300 group-hover:translate-x-0.5">
                  <GitHubArrowIcon />
               </span>
            </div>

            <p className="text-sm text-brand-tan leading-relaxed line-clamp-3">
               {project.description}
            </p>

            <div className="mt-auto pt-3 flex flex-wrap gap-2">
               {project.tags.map((tag) => (
                  <span
                     key={tag}
                     className="text-[10px] font-mono font-medium tracking-wide px-2 py-0.5 rounded-md
                                bg-brand-brown-dark/50 border border-brand-coffee text-brand-tan"
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
