import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperiencePage from './ExperiencePage';
import { experiences } from '../data/experiences';
import { RESUME_PATH, RESUME_FILENAME } from '../data/site';

describe('ExperiencePage', () => {
   it('renders every role and period in the timeline', () => {
      render(<ExperiencePage />);

      for (const experience of experiences) {
         expect(screen.getByText(experience.role)).toBeInTheDocument();
         expect(screen.getByText(experience.period)).toBeInTheDocument();
      }
   });

   it('marks exactly one entry as the current role', () => {
      const { container } = render(<ExperiencePage />);

      expect(container.querySelectorAll('.animate-pulse')).toHaveLength(1);
   });

   it('points the résumé button at the résumé asset', () => {
      render(<ExperiencePage />);

      const link = screen.getByRole('link', { name: /download r.sum/i });
      expect(link).toHaveAttribute('href', RESUME_PATH);
      expect(link).toHaveAttribute('download', RESUME_FILENAME);
   });
});
