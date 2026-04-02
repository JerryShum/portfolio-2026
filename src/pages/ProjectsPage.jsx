import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

const NAME = 'Projects';
const TAGLINE = 'Projects for both learning & fun';

// ─────────────────────────────────────────────
// FILL IN YOUR PROJECTS HERE
// ─────────────────────────────────────────────

const projects = [
   {
      id: 1,
      emoji: '🎬',
      title: 'StoryWeaver',
      description:
         'OntarioTech University Capstone Project featuring AI-powered video clip generation, seamless stitching with worker nodes, infinite canvas UI, and full-stack architecture with authentication and database integration.',
      tags: [
         'TypeScript',
         'Full-Stack',
         'AI Integration',
         'Video Processing',
         'System Design',
      ],
      github: 'https://github.com/JerryShum/capstone-2025',
      status: 'wip',
   },
   {
      id: 2,
      emoji: '🎨',
      title: 'Portfolio 2026',
      description:
         'Interactive personal portfolio showcasing modern web design and development skills with dynamic routing and engaging user experiences.',
      tags: ['JavaScript', 'React', 'Modern UI', 'Responsive Design'],
      github: 'https://github.com/JerryShum/portfolio-2026',
      status: 'live',
   },
   {
      id: 3,
      emoji: '📝',
      title: 'Blabber',
      description:
         'Minimalistic blog platform built with Next.js, featuring dynamic routing, markdown support, and server-side rendering for seamless content delivery.',
      tags: ['Next.js', 'TypeScript', 'Markdown', 'SSR', 'Content Management'],
      github: 'https://github.com/JerryShum/blabber',
      status: 'complete',
   },
   {
      id: 4,
      emoji: '🤖',
      title: 'Simple Coding Agent',
      description:
         'An LLM agent project designed for learning and experimenting with code interaction and automated debugging. Uses the Google Gemini API to intelligently process and respond to coding tasks.',
      tags: ['Python', 'LLM', 'Google Gemini', 'AI Agent', 'Automation'],
      github: 'https://github.com/JerryShum/simple-coding-agent',
      status: 'experimental',
   },
   {
      id: 5,
      emoji: '🌀',
      title: 'Maze Builder & Solver',
      description:
         'Python-based visualization application using Tkinter that generates and solves mazes with Recursive DFS and Breadth-First Search (BFS) algorithms, featuring interactive UI and algorithm demonstrations.',
      tags: [
         'Python',
         'Tkinter',
         'Algorithms',
         'Visualization',
         'Data Structures',
      ],
      github: 'https://github.com/JerryShum/maze-builder-solver',
      status: 'complete',
   },
   {
      id: 6,
      emoji: '🎰',
      title: 'Blackjack CLI',
      description:
         "A simple yet effective CLI application that helps you play smarter Blackjack. Enter your cards and the dealer's up-card to receive intelligent strategy recommendations.",
      tags: ['Python', 'CLI', 'Game Logic', 'Strategy Algorithm'],
      github: 'https://github.com/JerryShum/blackjack-cli',
      status: 'complete',
   },

   // ← Add more projects here
];

// ─────────────────────────────────────────────

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
