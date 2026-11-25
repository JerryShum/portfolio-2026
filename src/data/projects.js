// Projects shown on the Projects page.
// Add more projects to the end of this array; ids must stay unique.
export const projects = [
   {
      id: 1,
      emoji: '🎬',
      title: 'StoryWeaver',
      description:
         'Ontario Tech University capstone project: a monorepo with a node-based visual editor (React Flow) for AI-powered video generation. Integrates Google GenAI and backend FFmpeg processing, with media stored and scaled through Google Cloud Storage.',
      tags: [
         'Bun',
         'TypeScript',
         'React',
         'Hono',
         'PostgreSQL',
         'GCP',
         'FFmpeg',
      ],
      github: 'https://github.com/JerryShum/capstone-2025',
      status: 'archived',
   },
   {
      id: 2,
      emoji: '🎨',
      title: 'Portfolio 2026',
      description:
         'This site: an interactive 3D scene built with React Three Fiber where clicking objects opens each page, with GSAP page transitions and a built-in music player. Covered by a Vitest test suite that runs automatically through GitHub Actions.',
      tags: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'Vitest'],
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
];
