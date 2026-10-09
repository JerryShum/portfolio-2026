import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';
import { describe, expect, it } from 'vitest';
import { RESUME_PATH, RESUME_FILENAME } from './site';
import { experiences } from './experiences';
import {
   TAGLINE,
   BIO,
   LINKS,
   SKILLS,
   ACHIEVEMENTS,
   FUN_FACTS,
} from './about';
import { projects } from './projects';
import { playlist } from './music';

// Vitest runs with the project root as its working directory.
const publicFile = (assetPath) =>
   resolve(process.cwd(), 'public', assetPath.replace(/^\//, ''));

describe('résumé asset', () => {
   it('exists in public/ at the path the site links to', () => {
      expect(
         existsSync(publicFile(RESUME_PATH)),
         `expected ${RESUME_PATH} to exist in public/`,
      ).toBe(true);
   });

   it('keeps the download filename and the served path in sync', () => {
      expect(RESUME_PATH).toBe(`/${RESUME_FILENAME}`);
   });
});

describe('retired résumé', () => {
   it('is not referenced by any content', () => {
      const content = JSON.stringify({
         TAGLINE,
         BIO,
         LINKS,
         SKILLS,
         ACHIEVEMENTS,
         FUN_FACTS,
         experiences,
         projects,
         playlist,
      });

      expect(content).not.toContain('jerry_shum_engineer.pdf');
   });
});

describe('experiences', () => {
   it('has exactly one current role', () => {
      expect(experiences.filter((experience) => experience.active)).toHaveLength(
         1,
      );
   });

   it('gives every role the fields the card needs', () => {
      for (const experience of experiences) {
         expect(experience.role).toBeTruthy();
         expect(experience.company).toBeTruthy();
         expect(experience.period).toBeTruthy();
         expect(experience.description).toBeTruthy();
         expect(experience.tags.length).toBeGreaterThan(0);
      }
   });

   it('does not list the same role twice', () => {
      const keys = experiences.map(
         (experience) =>
            `${experience.role}|${experience.company}|${experience.period}`,
      );
      expect(new Set(keys).size).toBe(keys.length);
   });
});

describe('skills', () => {
   it('has unique categories with unique, non-empty items', () => {
      const categories = SKILLS.map((group) => group.category);
      expect(new Set(categories).size).toBe(categories.length);

      for (const group of SKILLS) {
         expect(group.items.length).toBeGreaterThan(0);
         expect(new Set(group.items).size).toBe(group.items.length);
      }
   });
});

describe('projects', () => {
   it('has unique ids and real repository links', () => {
      const ids = projects.map((project) => project.id);
      expect(new Set(ids).size).toBe(ids.length);

      for (const project of projects) {
         expect(project.title).toBeTruthy();
         expect(project.description).toBeTruthy();
         expect(project.github).toMatch(/^https:\/\/github\.com\//);
      }
   });
});

describe('music', () => {
   it('points every track at files that exist in public/', () => {
      for (const track of playlist) {
         expect(
            existsSync(publicFile(track.src)),
            `missing audio ${track.src}`,
         ).toBe(true);
         expect(
            existsSync(publicFile(track.image)),
            `missing artwork ${track.image}`,
         ).toBe(true);
      }
   });
});

describe('links', () => {
   it('gives every link a label, a target and an icon', () => {
      for (const link of LINKS) {
         expect(link.label).toBeTruthy();
         expect(link.href).toBeTruthy();
         expect(typeof link.icon).toBe('function');
      }
   });

   it('includes exactly one résumé link pointing at the résumé asset', () => {
      expect(LINKS.filter((link) => link.href === RESUME_PATH)).toHaveLength(1);
   });
});
