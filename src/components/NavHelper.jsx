import { NavLink, useLocation } from 'react-router-dom';

const routes = [
   { path: '/', label: 'Home', emoji: '' },
   { path: '/about', label: 'About', emoji: '' },
   { path: '/projects', label: 'Projects', emoji: '' },
   { path: '/experience', label: 'Experience', emoji: '' },
   { path: '/blog', label: 'Blog', emoji: '' },
];

function NavHelper() {
   const location = useLocation();

   return (
      <div
         className="fixed bottom-6 right-6 z-20 flex flex-col items-end gap-1"
         style={{ pointerEvents: 'auto' }}
      >
         {routes.map(({ path, label, emoji }) => {
            const isActive = location.pathname === path;
            return (
               <NavLink
                  key={path}
                  to={path}
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     padding: '0.3rem 0.7rem',
                     borderRadius: '999px',
                     fontSize: '0.75rem',
                     fontWeight: isActive ? 700 : 500,
                     textDecoration: 'none',
                     cursor: 'pointer',
                     background: isActive
                        ? '#C8102E'
                        : 'rgba(255,255,255,0.85)',
                     color: isActive ? '#FFFFFF' : '#3D1C0E',
                     border: `1px solid ${isActive ? '#C8102E' : 'rgba(61,28,14,0.15)'}`,
                     boxShadow: isActive
                        ? '0 2px 10px rgba(200,16,46,0.35)'
                        : '0 1px 4px rgba(0,0,0,0.1)',
                     transition: 'all 0.18s ease',
                     backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={(e) => {
                     if (!isActive) {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#C8102E';
                        e.currentTarget.style.color = '#C8102E';
                     }
                  }}
                  onMouseLeave={(e) => {
                     if (!isActive) {
                        e.currentTarget.style.background =
                           'rgba(255,255,255,0.85)';
                        e.currentTarget.style.borderColor =
                           'rgba(61,28,14,0.15)';
                        e.currentTarget.style.color = '#3D1C0E';
                     }
                  }}
               >
                  {emoji ? (
                     <span style={{ fontSize: '0.7rem' }}>{emoji}</span>
                  ) : (
                     ''
                  )}
                  {label}
               </NavLink>
            );
         })}
      </div>
   );
}

export default NavHelper;
