import React, { useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useTransitionStore } from '../store/useTransitionStore';

function TransitionComponent({ children }) {
   const location = useLocation();
   const navigate = useNavigate();
   const {
      isExiting,
      pendingPath,
      startTransition,
      endTransition,
      endExit,
   } = useTransitionStore();
   const containerRef = useRef(null);

   // Phase 2 — slide out when an exit is requested
   useEffect(() => {
      if (!isExiting || !pendingPath) return;

      const from = location.pathname;
      const to = pendingPath;

      // If leaving home (no panel visible), skip slide-out and navigate immediately
      if (from === '/') {
         endExit();
         navigate(to);
         return;
      }

      gsap.fromTo(
         containerRef.current,
         { x: '0%' },
         {
            x: '-100%',
            duration: 0.5,
            ease: 'power3.in',
            onComplete: () => {
               endExit();
               navigate(to);
            },
         }
      );
   }, [isExiting, pendingPath]);

   // Phase 1 — slide in when the route has changed
   useEffect(() => {
      if (location.pathname === '/') {
         endTransition(location.pathname);
         return;
      }

      startTransition();

      gsap.fromTo(
         containerRef.current,
         { x: '-100%' },
         {
            x: '0%',
            duration: 0.5,
            ease: 'power3.out',
            onComplete: () => endTransition(location.pathname),
         }
      );
   }, [location.pathname]);

   return (
      <div ref={containerRef} className="w-full h-full">
         {children}
      </div>
   );
}

export default TransitionComponent;
