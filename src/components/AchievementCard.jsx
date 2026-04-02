import React from 'react';

/**
 * AchievementCard - Compact Version
 */
function AchievementCard({ title, competition, period }) {
   return (
      <div className="flex items-center justify-between gap-4 py-2 border-b border-brand-coffee last:border-0 group">
         <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1">
            <span className="text-[10px] font-mono font-bold text-brand-red/80 min-w-[70px] tracking-tighter">
               {period}
            </span>
            
            <div className="flex flex-col">
               <h3 className="text-sm font-bold text-brand-cream group-hover:text-brand-red transition-colors duration-200 leading-tight">
                  {title}
               </h3>
               <p className="text-[11px] font-medium text-brand-tan/60 uppercase tracking-widest font-mono">
                  {competition}
               </p>
            </div>
         </div>
      </div>
   );
}

export default AchievementCard;

