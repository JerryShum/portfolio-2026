// Work history shown on the Experience page, newest first.
// The entry with `active: true` renders as the current role.
export const experiences = [
   {
      role: 'Information Security Specialist',
      company: 'Celestica',
      period: 'May 2026 — Present',
      type: 'Full-Time',
      description:
         'Hardened the global endpoint fleet by administering ThreatLocker allowlisting across 40+ sites, tuning CrowdStrike Falcon policies to reduce false positives without weakening protection, building Python automations on GCP to reconcile ThreatLocker and ServiceNow records, and triaging phishing reports in Check Point Harmony Email.',
      tags: [
         'CrowdStrike Falcon',
         'ThreatLocker',
         'Check Point Harmony',
         'Python',
         'GCP',
      ],
      active: true,
   },
   {
      role: 'IT Application Developer',
      company: 'Celestica',
      period: 'May 2024 — August 2025',
      type: 'Internship',
      description:
         'Built and shipped internal ServiceNow and JavaScript applications that automated manual workflows, saving 50+ employees 5 hours each per week (250+ hours weekly). Wrote reusable server-side Script Includes for REST integrations, and raised test coverage by 50% with ServiceNow\'s Automated Test Framework (ATF), catching critical regressions before production.',
      tags: ['ServiceNow', 'JavaScript', 'REST API', 'ATF', 'Postman'],
      active: false,
   },
   {
      role: 'Software Developer',
      company: 'Arkhet AI Inc.',
      period: 'Feb 2025 — Apr 2025',
      type: 'Part-Time',
      description:
         'Contributed to the V1 frontend with React and Shadcn UI ahead of the beta launch, designed type-safe REST APIs and middleware with Hono on edge-compatible runtimes, and modernized the stack with TanStack Query and Zod for end-to-end type safety.',
      tags: ['React', 'TypeScript', 'Hono', 'TanStack Query', 'Zod'],
      active: false,
   },
   {
      role: 'Frontend Developer',
      company: 'Magnify Access',
      period: 'Jan 2024 — May 2024',
      type: 'Internship',
      description:
         'Delivered WCAG 2.1 compliant interfaces with ARIA labels and keyboard navigation, and optimized SEO and frontend performance, driving a 20% increase in organic web traffic.',
      tags: ['WCAG', 'Accessibility', 'SEO', 'Lighthouse'],
      active: false,
   },
];
