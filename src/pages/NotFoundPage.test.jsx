import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFoundPage from './NotFoundPage';
import { useTransitionStore } from '../store/useTransitionStore';

describe('NotFoundPage', () => {
   beforeEach(() => {
      useTransitionStore.setState({ isExiting: false, pendingPath: null });
   });

   it('tells the visitor the page does not exist', () => {
      render(<NotFoundPage />);

      expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
      expect(screen.getByText(/doesn.t exist/i)).toBeInTheDocument();
   });

   it('sends the visitor home from the button', async () => {
      render(<NotFoundPage />);

      await userEvent.click(screen.getByRole('button', { name: /back to home/i }));

      expect(useTransitionStore.getState().pendingPath).toBe('/');
   });
});
