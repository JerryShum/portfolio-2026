import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
   // useProgress --> tracks the loading progress for the 3D model || active --> status of the loader (inactive == model is loaded)
   const { progress, active } = useProgress();
   const [shown, setShown] = useState(true);

   // useEffect --> runs on component refresh (everytime the progress is updated)
   useEffect(() => {
      if (!active && progress === 100) {
         const timeout = setTimeout(() => setShown(false), 800);
         return () => clearTimeout(timeout);
      }
   }, [progress, active]);

   if (!shown) return null;

   return (
      <div
         className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#171720] transition-opacity duration-1000 ${
            !active && progress === 100 ? 'opacity-0' : 'opacity-100'
         }`}
      >
         <div className="relative flex flex-col items-center">
            {/* LOGO / NAME */}
            <div className="mb-8 overflow-hidden">
               <h1 className="text-4xl font-light tracking-[0.2em] text-white/90 uppercase animate-pulse">
                  Jerry Shum
               </h1>
               <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent mt-2" />
            </div>

            {/* progress bar */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
               <div
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out animate-progress-glow"
                  style={{ width: `${progress}%` }}
               />
            </div>

            {/* percentage */}
            <div className="mt-4 text-xs font-mono tracking-widest text-white/40 uppercase">
               Loading {Math.round(progress)}%
            </div>
         </div>

         {/* desktop text */}
         <div className="absolute bottom-12 px-6 text-center ">
            <p className="text-[20px] font-light tracking-[0.2em] text-white uppercase">
               View on desktop for the best experience.
            </p>
         </div>

         {/*  background elements */}
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
         </div>
      </div>
   );
};

export default LoadingScreen;
