import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTransitionStore } from '../store/useTransitionStore';

const routes = [
   { path: '/', label: 'Home', emoji: '' },
   { path: '/about', label: 'About', emoji: '' },
   { path: '/projects', label: 'Projects', emoji: '' },
   { path: '/experience', label: 'Experience', emoji: '' },
   { path: '/blog', label: 'Blog', emoji: '' },
];

function NavHelper() {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();
   const { startExit, isExiting } = useTransitionStore();

   const handleNav = (path) => {
      setIsOpen(false);
      if (path === location.pathname || isExiting) return;
      startExit(path);
   };

   return (
      <div className="fixed bottom-6 right-6 z-20 flex flex-col items-end gap-3 pointer-events-auto">
         {/* Dropdown Menu (on Mobile) or Stacked (on Desktop) */}
         <div
            className={`
               flex flex-col items-end gap-2 transition-all duration-300 ease-out origin-bottom-right
               ${isOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'md:opacity-100 md:scale-100 md:visible opacity-0 scale-90 invisible translate-y-4 md:translate-y-0'}
            `}
         >
            {routes.map(({ path, label, emoji }) => {
               const isActive = location.pathname === path;
               return (
                  <button
                     key={path}
                     onClick={() => handleNav(path)}
                     className={`
                        flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 border border-solid
                        ${isActive
                           ? 'bg-brand-red text-brand-cream border-brand-red shadow-brand-red font-bold cursor-default'
                           : 'bg-brand-brown-dark/90 text-brand-tan border-brand-tan-dark/20 shadow-lg backdrop-blur-lg hover:border-brand-red hover:text-brand-cream hover:bg-brand-brown-medium/95'
                        }
                     `}
                  >
                     {emoji && <span className="text-[1rem]">{emoji}</span>}
                     {label}
                  </button>
               );
            })}
         </div>

         {/* Mobile Menu Toggle Button */}
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-brand-cream shadow-brand-red border-none cursor-pointer transition-transform active:scale-95"
            aria-label="Toggle menu"
         >
            {isOpen ? (
               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
            ) : (
               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
               </svg>
            )}
         </button>
      </div>
   );
}

export default NavHelper;
