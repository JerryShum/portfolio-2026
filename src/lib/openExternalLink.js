// Hosts that in-scene links are allowed to open. A host is trusted when it is
// one of these, or a subdomain of one, so both "linkedin.com" and
// "www.linkedin.com" work while "linkedin.com.attacker.example" does not.
const TRUSTED_LINK_HOSTS = ['github.com', 'linkedin.com'];

const isTrustedHost = (hostname) =>
   TRUSTED_LINK_HOSTS.some(
      (host) => hostname === host || hostname.endsWith(`.${host}`),
   );

/**
 * Opens an external link in a new tab, but only when it is an https URL on a
 * trusted host. Anything else is refused and warned about rather than opened,
 * so a tampered model or data source cannot send a visitor somewhere else.
 * Passing the opener no longer references this page back to the new tab.
 */
export const openExternalLink = (url) => {
   let target;

   try {
      target = new URL(url);
   } catch {
      console.warn(`Refused to open a link that is not a valid URL: ${url}`);
      return;
   }

   if (target.protocol !== 'https:' || !isTrustedHost(target.hostname)) {
      console.warn(`Refused to open an untrusted link: ${target.href}`);
      return;
   }

   const anchor = document.createElement('a');
   anchor.href = target.href;
   anchor.target = '_blank';
   anchor.rel = 'noopener noreferrer';
   anchor.click();
};
