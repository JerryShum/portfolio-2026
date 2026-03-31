import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const CoffeeCupSVG = () => (
   <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Steam */}
      <path d="M28 15 C28 15, 26 11, 28 8 C30 5, 28 2, 28 2" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M40 17 C40 17, 38 13, 40 10 C42 7, 40 4, 40 4" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M52 15 C52 15, 50 11, 52 8 C54 5, 52 2, 52 2" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      {/* Cup */}
      <path d="M16 22 L22 72 Q22 76 26 76 L54 76 Q58 76 58 72 L64 22 Z" fill="#C8102E"/>
      <path d="M18 22 L23 68 L27 68 L21 22 Z" fill="#E8203E" opacity="0.35"/>
      {/* Rim */}
      <rect x="14" y="20" width="52" height="6" rx="3" fill="#E8E0D4"/>
      {/* Handle */}
      <path d="M62 36 Q73 36 73 50 Q73 64 62 64" stroke="#E8E0D4" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Coffee inside */}
      <ellipse cx="40" cy="23" rx="22" ry="4.5" fill="#6B3A2A"/>
   </svg>
);

const LoadingScreen = () => {
   const { progress, active } = useProgress();
   const [shown, setShown] = useState(true);
   const [fadeOut, setFadeOut] = useState(false);

   useEffect(() => {
      if (!active && progress === 100) {
         const fadeOutTimer = setTimeout(() => setFadeOut(true), 0);
         const hideTimer = setTimeout(() => setShown(false), 900);
         return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(hideTimer);
         };
      }
   }, [progress, active]);

   if (!shown) return null;

   return (
      <div
         className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-900 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
         style={{ backgroundColor: '#FFFFFF' }}
      >
         {/* Subtle top border accent */}
         <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#C8102E' }} />

         {/* Very subtle warm radial glow */}
         <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,16,46,0.04) 0%, transparent 70%)' }} />

         <div className="relative flex flex-col items-center gap-7 z-10">
            {/* Cup */}
            <div style={{ animation: 'cup-bob 2.8s ease-in-out infinite' }}>
               <CoffeeCupSVG />
            </div>

            {/* Name */}
            <div className="flex flex-col items-center gap-1.5">
               <h1 style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  color: '#1A0A00',
                  textTransform: 'uppercase',
               }}>
                  Jerry Shum
               </h1>
               <div className="flex items-center gap-3">
                  <div className="h-px w-14" style={{ background: '#C8102E', opacity: 0.4 }} />
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C8102E', fontWeight: 600 }}>
                     Portfolio
                  </span>
                  <div className="h-px w-14" style={{ background: '#C8102E', opacity: 0.4 }} />
               </div>
            </div>

            {/* Progress bar */}
            <div className="flex flex-col items-center gap-2.5 w-56">
               <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(200,16,46,0.12)' }}>
                  <div
                     className="h-full rounded-full transition-all duration-300 ease-out"
                     style={{
                        width: `${progress}%`,
                        background: '#C8102E',
                     }}
                  />
               </div>
               <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.15em', color: '#9B7B6A', textTransform: 'uppercase' }}>
                  Brewing {Math.round(progress)}%
               </span>
            </div>
         </div>

         {/* Bottom */}
         <p className="absolute bottom-10 text-center" style={{
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(107,58,42,0.4)',
            fontWeight: 400,
         }}>
            Always Fresh · Always Warm
         </p>

         <style>{`
            @keyframes cup-bob {
               0%, 100% { transform: translateY(0px); }
               50% { transform: translateY(-5px); }
            }
         `}</style>
      </div>
   );
};

export default LoadingScreen;
