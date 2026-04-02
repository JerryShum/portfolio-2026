import React from 'react';

// Maps experience type to a display label and color variants
const TYPE_CONFIG = {
   'full-time': {
      label: 'Full-Time',
      text: 'text-brand-red',
      bg: 'bg-brand-red/10',
      border: 'border-brand-red/20',
   },
   internship: {
      label: 'Internship',
      text: 'text-amber-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
   },
   'co-op': {
      label: 'Co-op',
      text: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
   },
   'part-time': {
      label: 'Part-Time',
      text: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
   },
   contract: {
      label: 'Contract',
      text: 'text-violet-500',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
   },
   freelance: {
      label: 'Freelance',
      text: 'text-brand-tan',
      bg: 'bg-brand-tan/10',
      border: 'border-brand-tan/20',
   },
};

/**
 * ExperienceCard
 */
function ExperienceCard({
   role,
   company,
   period,
   description,
   tags = [],
   active = false,
   type = '',
}) {
   const normalizedType = type.toLowerCase().replace(' ', '-');
   const config = TYPE_CONFIG[normalizedType] ?? {
      label: type || 'Other',
      text: 'text-brand-tan',
      bg: 'bg-brand-tan/10',
      border: 'border-brand-tan/20',
   };

   return (
      <div className="relative pl-12 flex flex-col gap-2 group">
         {/* Timeline dot */}
         <div
            className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-brand-brown-dark transition-all duration-300 group-hover:scale-125 ${
               active
                  ? 'bg-brand-red shadow-brand-red'
                  : 'bg-brand-brown-medium'
            }`}
         />

         {/* Header row: role + period */}
         <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-lg font-bold text-brand-cream leading-snug group-hover:text-brand-red/90 transition-colors duration-300">
               {role}
            </h3>
            <span className="text-sm font-mono text-brand-accent-brown whitespace-nowrap brightness-110">
               {period}
            </span>
         </div>

         {/* Company + type badge row */}
         <div className="flex flex-wrap items-center gap-3">
            <p className="text-lg font-bold text-brand-red/90 tracking-tight">
               {company}
            </p>

            {/* Experience type badge */}
            <span
               className={`
                  inline-flex items-center text-[10px] font-mono font-bold tracking-widest uppercase 
                  px-2 py-0.5 rounded-md border transition-colors duration-300
                  ${config.text} ${config.bg} ${config.border}
               `}
            >
               {config.label}
            </span>
         </div>

         {/* Description */}
         <p className="text-sm text-brand-tan leading-relaxed max-w-2xl">
            {description}
         </p>

         {/* Tech tags */}
         {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
               {tags.map((tag) => (
                  <span
                     key={tag}
                     className="text-sm font-mono px-2 py-0.5 rounded
                                 bg-brand-brown-dark border border-brand-coffee text-brand-tan font-medium
                                transition-colors duration-200 hover:border-brand-accent-brown hover:text-brand-tan"
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
