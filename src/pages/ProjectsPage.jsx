import React from 'react';
import PageHeader from '../components/PageHeader';

const NAME = 'Projects';
const TAGLINE = 'Projects for both learning & fun';

// ─────────────────────────────────────────────
// FILL IN YOUR PROJECTS HERE
// ─────────────────────────────────────────────

const projects = [
   {
      id: 1,
      emoji: '🏪',
      title: '3D Portfolio Café',
      description:
         'An interactive Tim Hortons café scene in Three.js with baked lighting, custom React Router integration, and GSAP page transitions.',
      tags: ['Three.js', 'R3F', 'GSAP', 'React Router'],
      github: 'https://github.com/YOUR_USERNAME/portfolio-2026',
      status: 'live', // 'live' | 'wip' | 'archived'
   },
   {
      id: 2,
      emoji: '⚛️',
      title: 'Studio App',
      description:
         'A video-generation studio with a node-based graph UI, real-time API orchestration, Zustand state management, and a glassmorphism design system.',
      tags: ['React', 'TypeScript', 'Zustand', 'Node.js'],
      github: 'https://github.com/YOUR_USERNAME/studio-app',
      status: 'wip',
   },
   {
      id: 3,
      emoji: '🏀',
      title: 'NBA Forum',
      description:
         'A full-stack sports discussion board with threaded comments, real-time updates, and team-based theming.',
      tags: ['Next.js', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/YOUR_USERNAME/nba-forum',
      status: 'live',
   },
   {
      id: 4,
      emoji: '🔐',
      title: 'Auth System',
      description:
         'Production-grade authentication with Google & GitHub OAuth, session management, and protected route middleware.',
      tags: ['Better-Auth', 'Node.js', 'Express'],
      github: 'https://github.com/YOUR_USERNAME/auth-system',
      status: 'live',
   },
   // ← Add more projects here
];

// ─────────────────────────────────────────────

const STATUS_CONFIG = {
   live: { label: 'Live', dot: 'bg-emerald-400' },
   wip: { label: 'WIP', dot: 'bg-amber-400' },
   archived: { label: 'Archived', dot: 'bg-brand-tan' },
};

function GitHubArrowIcon() {
   return (
      <svg
         width="16"
         height="16"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         viewBox="0 0 24 24"
      >
         <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
   );
}

function ProjectCard({ project }) {
   const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.live;

   return (
      <a
         href={project.github}
         target="_blank"
         rel="noopener noreferrer"
         className="
        group flex rounded-xl bg-brand-brown-light border border-brand-brown-medium
        p-5 flex-col gap-3
        hover:border-brand-red/60 hover:bg-brand-brown-elevated
        transition-all duration-200 cursor-pointer
        hover:shadow-lg hover:shadow-black/30
        no-underline
      "
      >
         {/* Card header */}
         <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
               <span className="text-2xl leading-none">{project.emoji}</span>
               <h3 className="font-serif text-base font-bold text-brand-cream group-hover:text-brand-red/90 transition-colors duration-200">
                  {project.title}
               </h3>
            </div>

            <div className="flex items-center gap-3 shrink-0">
               {/* Status badge */}
               <span className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-accent-brown">
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                  {status.label}
               </span>

               {/* Arrow */}
               <span className="text-brand-brown-medium group-hover:text-brand-red transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <GitHubArrowIcon />
               </span>
            </div>
         </div>

         {/* Description */}
         <p className="text-sm text-brand-tan leading-relaxed">
            {project.description}
         </p>

         {/* Tags */}
         <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
               <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-brand-brown-dark border border-brand-coffee text-brand-tan-dark"
               >
                  {tag}
               </span>
            ))}
         </div>
      </a>
   );
}

function ProjectsPage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* ── Header ── */}
         <PageHeader name={NAME} tagline={TAGLINE} />

         {/* Cards grid */}
         <div className="flex-1 overflow-y-auto px-8 py-7 scrollbar-brand">
            <div className="flex flex-col gap-4">
               {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
               ))}
            </div>

            {/* Footer note */}
            <p className="text-xs text-brand-accent-brown text-center mt-7 mb-2">
               ☕ More projects on{' '}
               <a
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:underline"
               >
                  GitHub
               </a>
            </p>
         </div>
      </div>
   );
}

export default ProjectsPage;
