import { create } from 'zustand';

export const useTransitionStore = create((set) => ({
   isTransitioning: false,
   currentPage: '/',
   startTransition: () => set({ isTransitioning: true }),
   endTransition: (page) => set({ isTransitioning: false, currentPage: page }),
}));
