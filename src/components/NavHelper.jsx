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
      <div
         className="fixed bottom-6 right-6 z-20 flex flex-col items-end gap-1"
         style={{ pointerEvents: 'auto' }}
      >
         {routes.map(({ path, label, emoji }) => {
            const isActive = location.pathname === path;
            return (
               <button
                  key={path}
                  onClick={() => handleNav(path)}
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     padding: '0.3rem 0.7rem',
                     borderRadius: '999px',
                     fontSize: '0.75rem',
                     fontWeight: isActive ? 700 : 500,
                     textDecoration: 'none',
                     cursor: isActive ? 'default' : 'pointer',
                     background: isActive
                        ? '#C8102E'
                        : 'rgba(30, 12, 4, 0.88)',
                     color: isActive ? '#F5ECD7' : '#C8956A',
                     border: `1px solid ${isActive ? '#C8102E' : 'rgba(200,149,106,0.2)'}`,
                     boxShadow: isActive
                        ? '0 2px 12px rgba(200,16,46,0.4)'
                        : '0 1px 6px rgba(0,0,0,0.4)',
                     transition: 'all 0.18s ease',
                     backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={(e) => {
                     if (!isActive) {
                        e.currentTarget.style.background = 'rgba(40, 16, 6, 0.95)';
                        e.currentTarget.style.borderColor = '#C8102E';
                        e.currentTarget.style.color = '#F5ECD7';
                     }
                  }}
                  onMouseLeave={(e) => {
                     if (!isActive) {
                        e.currentTarget.style.background = 'rgba(30, 12, 4, 0.88)';
                        e.currentTarget.style.borderColor = 'rgba(200,149,106,0.2)';
                        e.currentTarget.style.color = '#C8956A';
                     }
                  }}
               >
                  {emoji ? (
                     <span style={{ fontSize: '0.7rem' }}>{emoji}</span>
                  ) : (
                     ''
                  )}
                  {label}
               </button>
            );
         })}
      </div>
   );
}

export default NavHelper;
