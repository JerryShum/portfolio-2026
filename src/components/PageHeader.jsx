import { useLocation } from 'react-router-dom';
import { useTransitionStore } from '../store/useTransitionStore';

function PageHeader({ name, tagline }) {
   const location = useLocation();
   const { startExit, isExiting } = useTransitionStore();

   const handleClose = () => {
      if (isExiting) return;
      startExit('/');
   };

   return (
      <div className="px-10 py-6 shrink-0 bg-brand-gradient flex items-center justify-between gap-4">
         <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold text-brand-cream uppercase leading-none">
               {name}
            </h1>
            <p className="text-sm font-semibold text-brand-cream/80 capitalize">
               {tagline}
            </p>
         </div>

         {/* Close Button */}
         <button
            onClick={handleClose}
            className="p-2 rounded-full bg-brand-cream/10 text-brand-cream hover:bg-brand-cream/20 transition-all duration-200 group"
            aria-label="Close page"
         >
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="group-hover:scale-110 transition-transform duration-200"
            >
               <line x1="18" y1="6" x2="6" y2="18"></line>
               <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
         </button>
      </div>
   );
}

export default PageHeader;
