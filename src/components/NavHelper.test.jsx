import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NavHelper from './NavHelper';
import { useTransitionStore } from '../store/useTransitionStore';

const IDLE = {
   isTransitioning: false,
   isExiting: false,
   currentPage: '/',
   pendingPath: null,
};

const ROUTES = ['Home', 'About', 'Projects', 'Experience', 'Blog'];

const renderNav = (path = '/') =>
   render(
      <MemoryRouter initialEntries={[path]}>
         <NavHelper />
      </MemoryRouter>,
   );

describe('NavHelper', () => {
   beforeEach(() => {
      useTransitionStore.setState(IDLE);
   });

   it('renders a button for every route', () => {
      renderNav();

      for (const label of ROUTES) {
         expect(
            screen.getByRole('button', { name: label }),
         ).toBeInTheDocument();
      }
   });

   it('requests an exit with the destination when another route is clicked', async () => {
      const user = userEvent.setup();
      renderNav('/about');

      await user.click(screen.getByRole('button', { name: 'Projects' }));

      const state = useTransitionStore.getState();
      expect(state.isExiting).toBe(true);
      expect(state.pendingPath).toBe('/projects');
   });

   it('ignores a click on the route already being viewed', async () => {
      const user = userEvent.setup();
      renderNav('/about');

      await user.click(screen.getByRole('button', { name: 'About' }));

      const state = useTransitionStore.getState();
      expect(state.isExiting).toBe(false);
      expect(state.pendingPath).toBeNull();
   });

   it('ignores clicks while an exit is already in progress', async () => {
      const user = userEvent.setup();
      useTransitionStore.setState({ isExiting: true });
      renderNav('/about');

      await user.click(screen.getByRole('button', { name: 'Projects' }));

      expect(useTransitionStore.getState().pendingPath).toBeNull();
   });
});
