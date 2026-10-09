import {
   GitHubIcon,
   LinkedInIcon,
   EmailIcon,
   ResumeIcon,
} from '../components/Icons';
import { RESUME_PATH } from './site';

export const TAGLINE = 'Full-Stack Developer & Information Security Specialist';

export const BIO = `I'm a Software Engineering graduate from Ontario Tech University and I like building things. My journey started with making websites look good on the outside, but these days I'm just as interested in what happens underneath, and in what happens when something breaks.

Lately, I've been pushing past the client side to learn how to build robust, scalable back-ends with Hono, TypeScript, and Bun. I write tests for the things I ship, and that habit is what pulled me toward security: I'm currently an Information Security Specialist at Celestica, hardening endpoints across 40+ global sites, automating repetitive work in Python, and triaging phishing reports.

I'm a big believer in getting 1% better at my craft every day, and I want to keep applying that to building tools that are actually useful, while growing alongside a great team.`;

export const LINKS = [
   {
      label: 'GitHub',
      href: 'https://github.com/jerryshum',
      icon: GitHubIcon,
   },
   {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/jerry-shum',
      icon: LinkedInIcon,
   },
   { label: 'Email', href: 'mailto:j.shum@outlook.com', icon: EmailIcon },
   { label: 'Resume', href: RESUME_PATH, icon: ResumeIcon },
];

export const SKILLS = [
   {
      category: 'Frontend',
      items: [
         'React',
         'Next.js',
         'TypeScript',
         'Tailwind CSS',
         'Three.js / R3F',
         'GSAP',
         'Zustand',
      ],
   },
   {
      category: 'Backend',
      items: [
         'Node.js',
         'Hono',
         'Python',
         'PostgreSQL',
         'REST APIs',
         'Supabase',
      ],
   },
   {
      category: 'Security',
      items: [
         'CrowdStrike Falcon',
         'ThreatLocker',
         'Check Point Harmony Email',
      ],
   },
   {
      category: 'QA & Testing',
      items: [
         'ServiceNow ATF',
         'UAT & Test Case Design',
         'Vitest',
         'Postman',
         'JIRA',
      ],
   },
   {
      category: 'Cloud & Tooling',
      items: ['GCP', 'Docker', 'Git', 'GitHub Actions', 'Vite', 'FFmpeg'],
   },
   {
      category: 'Design',
      items: ['Blender', 'Figma'],
   },
];

export const ACHIEVEMENTS = [
   {
      title: '1st Place Overall',
      competition: 'NASA Space Apps Challenge - Oshawa',
      period: '2024',
   },
   {
      title: '1st Place (Programming & Consulting)',
      competition: 'Ontario Tech IEC',
      period: '2023 - 2024',
   },
   {
      title: '3rd Place (Programming)',
      competition: 'Ontario Engineering Competition',
      period: '2025',
   },
   {
      title: 'Competitor (Consulting)',
      competition: 'Ontario Engineering Competition',
      period: '2024',
   },
   {
      title: 'Hacker',
      competition: 'HawkHacks',
      period: '2024',
   },
];

export const FUN_FACTS = [
   'I love french bulldogs',
   'My go-to coffee order is a Tim Hortons regular',
   'Favourite Food: Pad Thai',
];
