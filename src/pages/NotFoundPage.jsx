import PageHeader from '../components/PageHeader';
import { useTransitionStore } from '../store/useTransitionStore';

const NAME = '404';
const TAGLINE = 'Page not found';

function NotFoundPage() {
   const { startExit, isExiting } = useTransitionStore();

   const goHome = () => {
      if (isExiting) return;
      startExit('/');
   };

   return (
      <div className="w-full h-full flex flex-col bg-brand-brown-dark shadow-brand">
         {/* ── Header ── */}
         <PageHeader name={NAME} tagline={TAGLINE} />

         <div className="flex-1 overflow-y-auto scrollbar-brand">
            <div className="px-10 py-10 flex flex-col items-center justify-center text-center gap-4">
               <p className="text-sm font-mono font-bold tracking-widest uppercase text-brand-red">
                  Nothing here
               </p>
               <p className="text-sm text-brand-tan max-w-sm">
                  This page doesn&apos;t exist. It may have moved, or the
                  link might have a typo. Head back home, or use the menu to
                  find what you&apos;re looking for.
               </p>
               <button
                  onClick={goHome}
                  className="mt-2 px-5 py-2 rounded-full bg-brand-gradient text-brand-cream text-sm font-semibold shadow-brand-red hover:scale-105 transition-transform duration-200"
               >
                  Back to home
               </button>
            </div>
         </div>
      </div>
   );
}

export default NotFoundPage;
