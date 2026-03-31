import { create } from 'zustand';

export const useTransitionStore = create((set) => ({
   isTransitioning: false,
   isExiting: false,
   currentPage: '/',
   pendingPath: null,
   startTransition: () => set({ isTransitioning: true }),
   endTransition: (page) => set({ isTransitioning: false, currentPage: page }),
   startExit: (pendingPath) => set({ isExiting: true, pendingPath }),
   endExit: () => set({ isExiting: false, pendingPath: null }),
}));
