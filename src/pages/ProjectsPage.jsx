import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const NAME = 'Projects';
const TAGLINE = 'Projects for both learning & fun';

function ProjectsPage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* ── Header ── */}
         <PageHeader name={NAME} tagline={TAGLINE} />

         {/* Cards list */}
         <div className="flex-1 overflow-y-auto px-6 py-8 scrollbar-brand">
            <div className="flex flex-col gap-5 pb-6 max-w-4xl mx-auto">
               {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
               ))}
            </div>
         </div>

         {/* Fixed Footer note */}
         <div className="px-8 py-5 border-t border-brand-coffee bg-brand-brown-dark shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
            <p className="text-md text-brand-cream text-center">
               More projects on{' '}
               <a
                  href="https://github.com/jerryshum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red font-medium hover:underline transition-all duration-200"
               >
                  GitHub
               </a>
            </p>
         </div>
      </div>
   );
}

export default ProjectsPage;
