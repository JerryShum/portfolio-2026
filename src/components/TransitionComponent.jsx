import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useTransitionStore } from '../store/useTransitionStore';

function TransitionComponent({ children }) {
   const location = useLocation();
   const { isTransitioning, startTransition, endTransition } = useTransitionStore();
   const containerRef = useRef(null);

   useEffect(() => {
      // Don't animate on the home route — it renders nothing
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
            duration: 0.45,
            ease: 'power3.out',
            onComplete: () => endTransition(location.pathname),
         }
      );
   }, [location.pathname, startTransition, endTransition]);

   return (
      <div ref={containerRef} className="w-full h-full">
         {children}
      </div>
   );
}

export default TransitionComponent;
