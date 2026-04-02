import React from 'react';
import PageHeader from '../components/PageHeader';

const NAME = 'Jerry Shum';
const TAGLINE =
   'Full-Stack Developer & Currently a Software Engineering Student';
const BIO = `I'm a developer with a passion for building interactive, visually rich web experiences. I love sitting at the intersection of engineering and design — whether that's crafting immersive 3D scenes in Three.js, architecting complex state systems, or obsessing over the perfect animation curve.

Currently studying at [Your School], and always looking for opportunities to build things that genuinely surprise people.`;

const LINKS = [
   {
      label: 'GitHub',
      href: 'https://github.com/YOUR_USERNAME',
      icon: GitHubIcon,
   },
   {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/YOUR_USERNAME',
      icon: LinkedInIcon,
   },
   { label: 'Email', href: 'mailto:your@email.com', icon: EmailIcon },
   // { label: 'Resume', href: '/jerry_shum_engineer.pdf', icon: ResumeIcon },
];

const SKILLS = [
   {
      category: 'Frontend',
      items: [
         'React',
         'Next.js',
         'TypeScript',
         'Three.js / R3F',
         'GSAP',
         'Tailwind CSS',
      ],
   },
   {
      category: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Better-Auth'],
   },
   {
      category: 'Tooling & Design',
      items: ['Blender', 'Figma', 'Git', 'Vite', 'Zustand'],
   },
];

const TIMELINE = [
   {
      year: '2025',
      title: 'IT / Business Application Developer',
      place: 'Celestica',
      description:
         'Leading full-stack development on an internal video-generation platform — node-graph UI, real-time API orchestration, and design systems.',
   },
   {
      year: '2025',
      title: 'Software Developer',
      place: 'Arkhet AI Inc.',
      description:
         'Shipped interactive React apps with complex state management, GSAP animations, and performance optimisations.',
   },
   {
      year: '2024',
      title: 'Frontend Developer',
      place: 'Magnify Access',
      description:
         'Built a Figma-based frontend design system for a WCAG-compliant web application.',
   },
   // Add more milestones here
];

const FUN_FACTS = [
   '☕ Powered by Tim Hortons',
   '🎮 Competitive Valorant player',
   '🧩 Dabbles in Blender modelling',
   // Add more here
];

// ─────────────────────────────────────────────
// ICON COMPONENTS
// ─────────────────────────────────────────────

function GitHubIcon() {
   return (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
   );
}

function LinkedInIcon() {
   return (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
   );
}

function EmailIcon() {
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
         <rect x="2" y="4" width="20" height="16" rx="2" />
         <path d="M2 7l10 7 10-7" />
      </svg>
   );
}

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

function SectionLabel({ children }) {
   return (
      <p className="text-md font-bold tracking-widest uppercase text-brand-red mb-4">
         {children}
      </p>
   );
}

function AboutPage() {
   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* ── Header ── */}
         <PageHeader name={NAME} tagline={TAGLINE} />

         {/* ── Scrollable Body ── */}
         <div className="flex-1 overflow-y-auto px-10 py-8 space-y-8 scrollbar-brand">
            {/* Bio */}
            <section>
               <SectionLabel>About</SectionLabel>
               <p className="text-sm leading-relaxed text-brand-tan whitespace-pre-line">
                  {BIO}
               </p>
            </section>

            <div className="border-t border-brand-coffee" />

            {/* Links */}
            <section>
               <SectionLabel>Find Me</SectionLabel>
               <div className="flex flex-wrap gap-3">
                  {LINKS.map(({ label, href, icon: Icon }) => (
                     <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-brown-light border border-brand-brown-medium text-brand-tan-light text-sm font-medium hover:border-brand-red hover:text-brand-cream transition-all duration-200 group"
                     >
                        <span className="text-brand-tan group-hover:text-brand-red transition-colors duration-200">
                           <Icon />
                        </span>
                        {label}
                     </a>
                  ))}
               </div>
            </section>

            <div className="border-t border-brand-coffee" />

            {/* Skills */}
            <section>
               <SectionLabel>Skills</SectionLabel>
               <div className="flex flex-col gap-5">
                  {SKILLS.map(({ category, items }) => (
                     <div key={category}>
                        <p className="text-xs font-semibold text-brand-accent-brown uppercase tracking-wider mb-2">
                           {category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                           {items.map((skill) => (
                              <span
                                 key={skill}
                                 className="text-xs font-mono px-2.5 py-1 rounded-md bg-brand-brown-light border border-brand-brown-medium text-brand-tan-light"
                              >
                                 {skill}
                              </span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            <div className="border-t border-brand-coffee" />

            {/* Timeline */}
            <section>
               <SectionLabel>Experience</SectionLabel>
               <div className="relative flex flex-col gap-6">
                  {/* Vertical rule */}
                  <div className="absolute left-[3px] top-2 bottom-2 w-px bg-brand-coffee" />

                  {TIMELINE.map(({ year, title, place, description }) => (
                     <div key={`${year}-${title}`} className="pl-6 relative">
                        {/* Dot */}
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand-red ring-2 ring-brand-brown-dark" />
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                           <span className="text-xs font-mono text-brand-accent-brown">
                              {year}
                           </span>
                           <h3 className="text-sm font-semibold text-brand-cream">
                              {title}
                           </h3>
                           <span className="text-xs text-brand-tan">
                              @ {place}
                           </span>
                        </div>
                        <p className="text-xs text-brand-tan leading-relaxed">
                           {description}
                        </p>
                     </div>
                  ))}
               </div>
            </section>

            <div className="border-t border-brand-coffee" />

            {/* Fun facts */}
            <section>
               <SectionLabel>Outside the Editor</SectionLabel>
               <ul className="flex flex-col gap-1.5">
                  {FUN_FACTS.map((fact) => (
                     <li key={fact} className="text-sm text-brand-tan">
                        {fact}
                     </li>
                  ))}
               </ul>
            </section>
         </div>
      </div>
   );
}

export default AboutPage;
