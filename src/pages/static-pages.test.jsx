import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';
import BlogPage from './BlogPage';
import { projects } from '../data/projects';

describe('ProjectsPage', () => {
   it('renders a card for every project', () => {
      render(<ProjectsPage />);

      for (const project of projects) {
         expect(screen.getByText(project.title)).toBeInTheDocument();
      }
   });

   it('links every project to its repository', () => {
      render(<ProjectsPage />);

      const hrefs = screen
         .getAllByRole('link')
         .map((link) => link.getAttribute('href'));

      for (const project of projects) {
         expect(hrefs).toContain(project.github);
      }
   });
});

describe('BlogPage', () => {
   it('shows the empty state while there are no posts', () => {
      render(<BlogPage />);

      expect(screen.getByText(/posts brewing/i)).toBeInTheDocument();
      expect(screen.getByText(/check back soon/i)).toBeInTheDocument();
   });
});
