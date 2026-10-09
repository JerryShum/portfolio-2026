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
         'Automated business processes by developing internal applications and custom JavaScript solutions, while engineering REST API integrations and comprehensive unit test suites within an Agile framework.',
      tags: ['JavaScript', 'REST API', 'Unit Testing', 'Agile', 'Postman'],
      active: false,
   },
   {
      role: 'Software Developer',
      company: 'Arkhet AI Inc.',
      period: 'Feb 2025 — Apr 2025',
      type: 'Part-Time',
      description:
         'Architected responsive interfaces using React and Shadcn UI, engineered type-safe REST APIs with Hono, and integrated AI-driven features into core application workflows.',
      tags: ['React', 'TypeScript', 'Hono', 'TailwindCSS', 'LLM'],
      active: false,
   },
   {
      role: 'Frontend Developer',
      company: 'Magnify Access',
      period: 'Jan 2024 — May 2024',
      type: 'Internship',
      description:
         'Engineered accessible, user-centric interfaces compliant with WCAG 2.1 standards and executed SEO best practices.',
      tags: ['WCAG', 'Accessibility', 'SEO', 'Lighthouse'],
      active: false,
   },
];
