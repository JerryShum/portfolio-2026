import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const CoffeeCupSVG = () => (
   <svg
      width="72"
      height="72"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      {/* Steam */}
      <path
         d="M28 15 C28 15, 26 11, 28 8 C30 5, 28 2, 28 2"
         stroke="#B53028"
         strokeWidth="1.8"
         strokeLinecap="round"
         opacity="0.7"
      />
      <path
         d="M40 17 C40 17, 38 13, 40 10 C42 7, 40 4, 40 4"
         stroke="#B53028"
         strokeWidth="1.8"
         strokeLinecap="round"
         opacity="0.7"
      />
      <path
         d="M52 15 C52 15, 50 11, 52 8 C54 5, 52 2, 52 2"
         stroke="#B53028"
         strokeWidth="1.8"
         strokeLinecap="round"
         opacity="0.7"
      />
      {/* Cup */}
      <path
         d="M16 22 L22 72 Q22 76 26 76 L54 76 Q58 76 58 72 L64 22 Z"
         fill="#B53028"
      />
      <path d="M18 22 L23 68 L27 68 L21 22 Z" fill="#D6453D" opacity="0.35" />
      {/* Rim */}
      <rect x="14" y="20" width="52" height="6" rx="3" fill="#F5ECD7" />
      {/* Handle */}
      <path
         d="M62 36 Q73 36 73 50 Q73 64 62 64"
         stroke="#F5ECD7"
         strokeWidth="3.5"
         fill="none"
         strokeLinecap="round"
      />
      {/* Coffee inside */}
      <ellipse cx="40" cy="23" rx="22" ry="4.5" fill="#6B3A2A" />
   </svg>
);

const LoadingScreen = () => {
   const { progress, active } = useProgress();
   const [shown, setShown] = useState(true);
   const [fadeOut, setFadeOut] = useState(false);

   useEffect(() => {
      if (!active && progress === 100) {
         const fadeOutTimer = setTimeout(() => setFadeOut(true), 200);
         const hideTimer = setTimeout(() => setShown(false), 1000);
         return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(hideTimer);
         };
      }
   }, [progress, active]);

   if (!shown) return null;

   return (
      <div
         className={`fixed inset-0 z-1000 flex flex-col items-center justify-center transition-opacity duration-900 bg-brand-brown-dark ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      >
         {/* Subtle top border accent */}
         <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />

         {/* Very subtle warm radial glow */}
         <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(181,48,40,0.08)_0%,transparent_70%)]" />

         <div className="relative flex flex-col items-center gap-7 z-10">
            {/* Cup */}
            <div className="animate-[cup-bob_2.8s_ease-in-out_infinite]">
               <CoffeeCupSVG />
            </div>

            {/* Name */}
            <div className="flex flex-col items-center gap-1.5">
               <h1 className="font-serif text-[2.5rem] font-bold tracking-[0.12em] text-brand-cream uppercase">
                  Jerry Shum
               </h1>
               <div className="flex items-center gap-3">
                  <div className="h-px w-14 bg-brand-red/50" />
                  <span className="text-[0.65rem] tracking-[0.3em] uppercase text-brand-red font-semibold">
                     Portfolio
                  </span>
                  <div className="h-px w-14 bg-brand-red/50" />
               </div>
            </div>

            {/* Progress bar */}
            <div className="flex flex-col items-center gap-2.5 w-56">
               <div className="w-full h-[3px] rounded-full overflow-hidden bg-[rgba(181,48,40,0.22)]">
                  <div
                     className="h-full rounded-full transition-all duration-300 ease-out bg-brand-red"
                     style={{ width: `${progress}%` }}
                  />
               </div>
               <span className="text-[0.7rem] font-mono tracking-[0.15em] text-brand-tan uppercase">
                  Brewing {Math.round(progress)}%
               </span>
            </div>
         </div>

         {/* Bottom */}
         <p className="absolute bottom-10 text-center text-[0.7rem] tracking-[0.3em] uppercase text-[rgba(245,236,215,0.67)] font-normal">
            Desktop is recommended for the best experience
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
