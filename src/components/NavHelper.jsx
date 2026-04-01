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
   const location = useLocation();
   const { startExit, isExiting } = useTransitionStore();

   const handleNav = (path) => {
      // Already on this page or mid-transition — skip
      if (path === location.pathname || isExiting) return;
      startExit(path);
   };

   return (
      <div className="fixed bottom-6 right-6 z-20 flex flex-col items-end gap-1 pointer-events-auto">
         {routes.map(({ path, label, emoji }) => {
            const isActive = location.pathname === path;
            return (
               <button
                  key={path}
                  onClick={() => handleNav(path)}
                  className={`
                     flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all duration-150 ease-out backdrop-blur-md border border-solid
                      ${isActive
                         ? 'bg-brand-red text-brand-cream border-brand-red shadow-brand-red font-bold cursor-default'
                         : 'bg-brand-brown-dark/90 text-brand-tan-dark border-brand-tan-dark/20 shadow-md font-medium cursor-pointer hover:bg-brand-brown-medium/95 hover:border-brand-red hover:text-brand-cream'
                      }
                  `}
               >
                  {emoji && <span className="text-[0.7rem]">{emoji}</span>}
                  {label}
               </button>
            );
         })}
      </div>
   );
}

export default NavHelper;
