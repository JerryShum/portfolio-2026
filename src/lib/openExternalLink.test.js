import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { openExternalLink } from './openExternalLink';

let anchor;
let warnSpy;

beforeEach(() => {
   anchor = { href: '', target: '', rel: '', click: vi.fn() };
   vi.spyOn(document, 'createElement').mockReturnValue(anchor);
   warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(() => {
   vi.restoreAllMocks();
});

describe('openExternalLink', () => {
   it('opens a trusted https link in a new tab without an opener', () => {
      openExternalLink('https://github.com/JerryShum');

      expect(anchor.click).toHaveBeenCalledTimes(1);
      expect(anchor.href).toBe('https://github.com/JerryShum');
      expect(anchor.target).toBe('_blank');
      expect(anchor.rel).toBe('noopener noreferrer');
      expect(warnSpy).not.toHaveBeenCalled();
   });

   it('accepts a subdomain of a trusted host', () => {
      openExternalLink('https://gist.github.com/JerryShum');

      expect(anchor.click).toHaveBeenCalledTimes(1);
   });

   it('accepts the bare domain as well as the www form', () => {
      openExternalLink('https://linkedin.com/in/jerry-shum/');

      expect(anchor.click).toHaveBeenCalledTimes(1);
   });

   it('accepts the exact links the 3D scene opens', () => {
      openExternalLink('https://www.linkedin.com/in/jerry-shum/');
      openExternalLink('https://github.com/JerryShum');

      expect(anchor.click).toHaveBeenCalledTimes(2);
   });

   it('refuses a link that is not https', () => {
      openExternalLink('http://github.com/JerryShum');

      expect(anchor.click).not.toHaveBeenCalled();
      expect(warnSpy).toHaveBeenCalledTimes(1);
   });

   it('refuses an unknown host', () => {
      openExternalLink('https://example.com/');

      expect(anchor.click).not.toHaveBeenCalled();
      expect(warnSpy).toHaveBeenCalledTimes(1);
   });

   it('refuses a host that only looks trusted', () => {
      openExternalLink('https://github.com.attacker.example/');

      expect(anchor.click).not.toHaveBeenCalled();
   });

   it('refuses input that is not a URL at all', () => {
      openExternalLink('not a url');

      expect(anchor.click).not.toHaveBeenCalled();
      expect(warnSpy).toHaveBeenCalledTimes(1);
   });
});
