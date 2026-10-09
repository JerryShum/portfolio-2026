import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import AboutPage from './AboutPage';
import {
   TAGLINE,
   LINKS,
   SKILLS,
   ACHIEVEMENTS,
   FUN_FACTS,
} from '../data/about';
import { RESUME_PATH } from '../data/site';

describe('AboutPage', () => {
   it('renders the tagline', () => {
      render(<AboutPage />);
      expect(screen.getByText(TAGLINE)).toBeInTheDocument();
   });

   it('renders the bio', () => {
      render(<AboutPage />);
      expect(
         screen.getByText(/Software Engineering graduate from Ontario Tech/),
      ).toBeInTheDocument();
   });

   it('renders every skill category and each of its items', () => {
      render(<AboutPage />);
      const skills = screen.getByText('Skills').closest('section');

      for (const { category, items } of SKILLS) {
         expect(within(skills).getByText(category)).toBeInTheDocument();
         for (const item of items) {
            expect(within(skills).getAllByText(item).length).toBeGreaterThan(0);
         }
      }
   });

   it('renders every achievement', () => {
      render(<AboutPage />);
      const achievements = screen.getByText('Achievements').closest('section');

      for (const { title, competition } of ACHIEVEMENTS) {
         expect(within(achievements).getByText(title)).toBeInTheDocument();
         expect(
            within(achievements).getAllByText(competition).length,
         ).toBeGreaterThan(0);
      }
   });

   it('renders every fun fact', () => {
      render(<AboutPage />);

      for (const fact of FUN_FACTS) {
         expect(screen.getByText(fact)).toBeInTheDocument();
      }
   });

   it('links out to the résumé asset', () => {
      render(<AboutPage />);

      expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
         'href',
         RESUME_PATH,
      );
   });

   it('declares exactly one résumé link in its content', () => {
      expect(LINKS.filter((link) => link.href === RESUME_PATH)).toHaveLength(1);
   });
});
