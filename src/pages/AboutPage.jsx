import PageHeader from '../components/PageHeader';
import ProfileImage from '../components/ProfileImage';
import AchievementCard from '../components/AchievementCard';
import {
   TAGLINE,
   BIO,
   LINKS,
   SKILLS,
   ACHIEVEMENTS,
   FUN_FACTS,
} from '../data/about';

const NAME = 'Jerry Shum';

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

            {/* Skills Section */}
            <section className="flex flex-col gap-2">
               <SectionLabel>Skills</SectionLabel>
               <div className="flex flex-col gap-4">
                  {SKILLS.map(({ category, items }) => (
                     <div key={category} className="flex flex-col gap-2">
                        <h3 className="text-[11px] font-bold text-brand-tan/90 uppercase tracking-widest font-mono">
                           {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {items.map((item) => (
                              <span
                                 key={item}
                                 className="text-[11px] font-mono px-2 py-0.5 rounded-md
                                             bg-brand-brown-dark border border-brand-coffee text-brand-tan/70
                                             hover:text-brand-tan hover:border-brand-tan/30 transition-all duration-300"
                              >
                                 {item}
                              </span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </section>

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
               <div className="flex flex-wrap gap-3 items-center justify-center">
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
