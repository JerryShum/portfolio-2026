import PageHeader from '../components/PageHeader';
import ProfileImage from '../components/ProfileImage';
import AchievementCard from '../components/AchievementCard';

const NAME = 'Jerry Shum';
const TAGLINE =
   'Full-Stack Developer & Currently a Software Engineering Student';
const BIO = `I'm a Software Engineering student at OntarioTech University and I like building things. My journey started with making websites look good on the outside, but lately, I've been obsessed with learning how everything works under the hood.

Lately, I've been trying to push past the client side to and pushing myself to learn how to build robust, scalable back-ends using Hono, TypeScript, and Bun. I'm a big believer in getting 1% better at my craft every and strive to keep improving myself and my skills!

I'm set to graduate in June 2026 and am currently looking for opportunities to get my hands dirty. I want to apply what I'm learning to build tools that are actually useful, while growing my skills alongside a great team.`;

const LINKS = [
   {
      label: 'GitHub',
      href: 'https://github.com/jerryshum',
      icon: GitHubIcon,
   },
   {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/jerry-shum',
      icon: LinkedInIcon,
   },
   { label: 'Email', href: 'mailto:j.shum@outlook.com', icon: EmailIcon },
   { label: 'Resume', href: '/jerry_shum_engineer.pdf', icon: ResumeIcon },
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

const ACHIEVEMENTS = [
   {
      title: '1st Place (Consecutive)',
      competition: 'Internal Engineering Competition - OTU',
      period: '2023 - 2025',
   },
   {
      title: '2nd Place',
      competition: 'NASA Space Apps',
      period: '2025',
   },
   {
      title: '3rd Place (Programming)',
      competition: 'Ontario Engineering Competition',
      period: '2025',
   },
   {
      title: 'Competitor (Consulting)',
      competition: 'Ontario Engineering Competition',
      period: '2024',
   },
   {
      title: 'Hacker',
      competition: 'HawkHacks',
      period: '2024',
   },
   {
      title: '3rd Place',
      competition: 'NASA Space Apps',
      period: '2023',
   },

];

const FUN_FACTS = [
   'I love french bulldogs',
   'My go-to coffee order is a Tim Hortons regular',
   'Favourite Food: Pad Thai',
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

function ResumeIcon() {
   return (
      <svg
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
         <polyline points="14 2 14 8 20 8" />
         <line x1="16" y1="13" x2="8" y2="13" />
         <line x1="16" y1="17" x2="8" y2="17" />
         <polyline points="10 9 9 9 8 9" />
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
         <div className="flex-1 overflow-y-auto px-10 py-8 flex flex-col gap-8 scrollbar-brand">
            {/* Bio */}
            <section className='flex flex-col gap-2'>
               <SectionLabel>About</SectionLabel>
               <p className="text-md leading-relaxed text-brand-tan whitespace-pre-line">
                  {BIO}
               </p>
            </section>

            {/* Profile Image Component */}
            <ProfileImage src="/assets/portrait.webp" alt={NAME} />

            <div className="border-t border-brand-coffee" />

            {/* Achievements Section */}
            <section className="flex flex-col gap-2">
               <SectionLabel>Achievements</SectionLabel>
               <div className="flex flex-col">
                  {ACHIEVEMENTS.map((achievement, idx) => (
                     <AchievementCard key={idx} {...achievement} />
                  ))}
               </div>
            </section>

            <div className="border-t border-brand-coffee" />

            {/* Contact & Links */}
            <section className="flex flex-col gap-2">
               <SectionLabel>Find Me</SectionLabel>
               <div className="flex flex-wrap gap-3 items-center justify-center 5">
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

            {/* Fun facts */}
            <section className="flex flex-col gap-2">
               <SectionLabel>Fun Facts</SectionLabel>
               <ul className="flex flex-col gap-2 list-disc ml-10! marker:text-brand-red">
                  {FUN_FACTS.map((fact) => (
                     <li
                        key={fact}
                        className="text-md text-brand-tan tracking-wide"
                     >
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

