import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceCard from './ExperienceCard';

const baseProps = {
   role: 'Test Role',
   company: 'Test Co',
   period: 'Jan 2024 — Feb 2024',
   description: 'Did a thing.',
   tags: ['Alpha', 'Beta'],
};

describe('ExperienceCard', () => {
   it('renders the role, company, period and description', () => {
      render(<ExperienceCard {...baseProps} />);

      expect(screen.getByText(baseProps.role)).toBeInTheDocument();
      expect(screen.getByText(baseProps.company)).toBeInTheDocument();
      expect(screen.getByText(baseProps.period)).toBeInTheDocument();
      expect(screen.getByText(baseProps.description)).toBeInTheDocument();
   });

   it('renders every tag', () => {
      render(<ExperienceCard {...baseProps} />);

      for (const tag of baseProps.tags) {
         expect(screen.getByText(tag)).toBeInTheDocument();
      }
   });

   it('normalises a spaced type into its badge label', () => {
      render(<ExperienceCard {...baseProps} type="Full-Time" />);
      expect(screen.getByText('Full-Time')).toBeInTheDocument();
   });

   it('maps an internship to its badge', () => {
      render(<ExperienceCard {...baseProps} type="Internship" />);
      expect(screen.getByText('Internship')).toBeInTheDocument();
   });

   it('falls back to the raw type when it is unknown', () => {
      render(<ExperienceCard {...baseProps} type="Volunteer" />);
      expect(screen.getByText('Volunteer')).toBeInTheDocument();
   });

   it('marks the active entry with the pulsing dot', () => {
      const { container } = render(<ExperienceCard {...baseProps} active />);
      expect(container.querySelector('.animate-pulse')).not.toBeNull();
   });

   it('leaves the dot static when the entry is not active', () => {
      const { container } = render(<ExperienceCard {...baseProps} />);
      expect(container.querySelector('.animate-pulse')).toBeNull();
   });

   it('renders no tags block when there are no tags', () => {
      render(<ExperienceCard {...baseProps} tags={[]} />);
      expect(screen.queryByText('Alpha')).not.toBeInTheDocument();
   });
});
