import React from 'react';

// Maps experience type to a display label and colour variant
const TYPE_CONFIG = {
   'full-time': { label: 'Full-Time', color: '#B53028', bg: 'rgba(181,48,40,0.12)', border: 'rgba(181,48,40,0.3)' },
   'internship': { label: 'Internship', color: '#D4943A', bg: 'rgba(212,148,58,0.12)', border: 'rgba(212,148,58,0.3)' },
   'co-op': { label: 'Co-op', color: '#5B9BD5', bg: 'rgba(91,155,213,0.12)', border: 'rgba(91,155,213,0.3)' },
   'part-time': { label: 'Part-Time', color: '#7BAF6E', bg: 'rgba(123,175,110,0.12)', border: 'rgba(123,175,110,0.3)' },
   'contract': { label: 'Contract', color: '#A98BD5', bg: 'rgba(169,139,213,0.12)', border: 'rgba(169,139,213,0.3)' },
   'freelance': { label: 'Freelance', color: '#C4A46B', bg: 'rgba(196,164,107,0.12)', border: 'rgba(196,164,107,0.3)' },
};

/**
 * ExperienceCard
 *
 * @param {string}   role        - Job title / role name
 * @param {string}   company     - Company name
 * @param {string}   period      - Time period (e.g. "Jan 2024 – May 2024")
 * @param {string}   description - Short blurb about the role
 * @param {string[]} tags        - Technology / skill tags
 * @param {boolean}  active      - Whether this is the current role
 * @param {string}   type        - Employment type key (see TYPE_CONFIG above)
 */
function ExperienceCard({ role, company, period, description, tags = [], active = false, type }) {
   const typeConfig = TYPE_CONFIG[type] ?? { label: type ?? 'Other', color: '#B8956A', bg: 'rgba(184,149,106,0.1)', border: 'rgba(184,149,106,0.25)' };

   return (
      <div className="relative pl-10 flex flex-col gap-[6px] group">
         {/* Timeline dot */}
         <div
            className={`absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-[#261A10] transition-transform duration-200 group-hover:scale-125 ${
               active
                  ? 'bg-[#B53028] shadow-[0_0_0_3px_rgba(181,48,40,0.3)]'
                  : 'bg-[#4D3822]'
            }`}
         />

         {/* Header row: role + period */}
         <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <h3 className="font-serif text-[1.05rem] font-bold text-[#F5ECD7] leading-snug">
               {role}
            </h3>
            <span className="text-[0.72rem] font-mono text-[#6B4030] whitespace-nowrap">
               {period}
            </span>
         </div>

         {/* Company + type badge row */}
         <div className="flex flex-wrap items-center gap-2">
            <p className="text-[0.78rem] font-semibold text-[#B53028]">{company}</p>

            {/* Experience type badge */}
            <span
               style={{
                  color: typeConfig.color,
                  backgroundColor: typeConfig.bg,
                  borderColor: typeConfig.border,
               }}
               className="inline-flex items-center text-[0.65rem] font-mono font-bold tracking-wider uppercase px-[8px] py-[2px] rounded-full border"
            >
               {typeConfig.label}
            </span>
         </div>

         {/* Description */}
         <p className="text-[0.85rem] text-[#B8956A] leading-[1.65]">{description}</p>

         {/* Tech tags */}
         {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-[2px]">
               {tags.map((tag) => (
                  <span
                     key={tag}
                     className="text-[0.72rem] font-mono px-[10px] py-[3px] rounded-[6px] bg-[#352415] border border-[#4D3822] text-[#C8956A] font-semibold transition-colors duration-150 hover:border-[#6B4030]"
                  >
                     {tag}
                  </span>
               ))}
            </div>
         )}
      </div>
   );
}

export default ExperienceCard;
