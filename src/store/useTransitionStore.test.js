import { beforeEach, describe, expect, it } from 'vitest';
import { useTransitionStore } from './useTransitionStore';

const IDLE = {
   isTransitioning: false,
   isExiting: false,
   currentPage: '/',
   pendingPath: null,
};

describe('useTransitionStore', () => {
   beforeEach(() => {
      useTransitionStore.setState(IDLE);
   });

   it('starts idle on the home route', () => {
      const state = useTransitionStore.getState();
      expect(state.isTransitioning).toBe(false);
      expect(state.isExiting).toBe(false);
      expect(state.currentPage).toBe('/');
      expect(state.pendingPath).toBeNull();
   });

   it('startTransition marks a transition as in progress', () => {
      useTransitionStore.getState().startTransition();
      expect(useTransitionStore.getState().isTransitioning).toBe(true);
   });

   it('endTransition clears the flag and records the page that was reached', () => {
      const { startTransition, endTransition } = useTransitionStore.getState();
      startTransition();
      endTransition('/projects');

      const state = useTransitionStore.getState();
      expect(state.isTransitioning).toBe(false);
      expect(state.currentPage).toBe('/projects');
   });

   it('startExit records the route being navigated to', () => {
      useTransitionStore.getState().startExit('/about');

      const state = useTransitionStore.getState();
      expect(state.isExiting).toBe(true);
      expect(state.pendingPath).toBe('/about');
   });

   it('endExit clears the pending route', () => {
      const { startExit, endExit } = useTransitionStore.getState();
      startExit('/about');
      endExit();

      const state = useTransitionStore.getState();
      expect(state.isExiting).toBe(false);
      expect(state.pendingPath).toBeNull();
   });
});
