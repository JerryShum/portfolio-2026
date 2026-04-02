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
      image: '/assets/projects/capstone-2025.png',
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
      image: '/assets/projects/portfolio-2026.png',
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
      image: '/assets/projects/blabber.png',
      description:
         'Minimalistic blog platform built with Next.js, featuring dynamic routing, markdown support, and server-side rendering for seamless content delivery.',
      tags: ['Next.js', 'TypeScript', 'Markdown', 'SSR', 'Content Management'],
      github: 'https://github.com/JerryShum/blabber',
      status: 'live',
   },
   {
      id: 4,
      emoji: '🤖',
      title: 'Simple Coding Agent',
      image: '/assets/projects/coding-agent.png',
      description:
         'An LLM agent project designed for learning and experimenting with code interaction and automated debugging. Uses the Google Gemini API to intelligently process and respond to coding tasks.',
      tags: ['Python', 'LLM', 'Google Gemini', 'AI Agent', 'Automation'],
      github: 'https://github.com/JerryShum/simple-coding-agent',
      status: 'wip',
   },
   {
      id: 5,
      emoji: '🌀',
      title: 'Maze Builder & Solver',
      image: '/assets/projects/maze-builder-solver.png',
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
      status: 'live',
   },
   {
      id: 6,
      emoji: '🎰',
      title: 'Blackjack CLI',
      image: '/assets/projects/blackjack-cli.png',
      description:
         "A simple yet effective CLI application that helps you play smarter Blackjack. Enter your cards and the dealer's up-card to receive intelligent strategy recommendations.",
      tags: ['Python', 'CLI', 'Game Logic', 'Strategy Algorithm'],
      github: 'https://github.com/JerryShum/blackjack-cli',
      status: 'live',
   },

   // ← Add more projects here
];

// ─────────────────────────────────────────────

function ProjectsPage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* ── Header ── */}
         <PageHeader name={NAME} tagline={TAGLINE} />

         {/* Cards grid */}
         <div className="flex-1 overflow-y-auto px-8 py-8 scrollbar-brand">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
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
