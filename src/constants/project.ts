import type { ProjectLink } from 'src/types/project';

export const BASE_WEBSITE_NAME = 'Jose Adrian Buctuanon';

export const WEBSITE_NAV: ProjectLink[] = [
  {
    id: 'home',
    label: 'Home',
    link: '/',
  },
  {
    id: 'about',
    label: 'About',
    link: '/about',
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    link: '/case-studies',
  },
  {
    id: 'codegourmetio',
    label: 'Codegourmet.io',
    link: 'https://www.codegourmet.io',
    external: true,
  },
];

export const WEBSITE_SOCIALS: ProjectLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    link: 'https://instagram.com',
  },
  {
    id: 'github',
    label: 'Github',
    link: 'https://github.com/jose-codegourmet',
  },
  {
    id: 'linked-in',
    label: 'Linked In',
    link: 'https://www.linkedin.com/in/jose-adrian-buctuanon/',
  },
];

export const MOBILE_BREAKPOINT = 768;

export const DEFAULT_ANIMATION_STATE = 'hidden';
