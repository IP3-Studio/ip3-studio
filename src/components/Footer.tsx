import YearStamp from './YearStamp';

const sectionLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#studio', label: 'Studio' },
  { href: '/#manifesto', label: 'Manifesto' },
  { href: '/#contact', label: 'Contact' },
];

const connectLinks = [
  { href: 'https://x.com/ip3studio', label: 'X / Twitter', external: true },
  { href: 'https://www.linkedin.com/company/ip3-studio', label: 'LinkedIn', external: true },
  { href: 'https://github.com/IP3-Studio', label: 'GitHub', external: true },
  { href: 'mailto:contact@ip3.studio', label: 'contact@ip3.studio' },
];

const productLinks = [
  { href: 'https://ukfunding.io', label: 'ukfunding.io', external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-paper">
      <div className="mx-auto grid max-w-frame gap-10 px-5 pb-8 pt-12 sm:grid-cols-3 md:gap-12 md:px-8 md:pb-8 md:pt-[60px]">
        <FooterCol title="Sections" links={sectionLinks} />
        <FooterCol title="Products" links={productLinks} external />
        <FooterCol title="Connect" links={connectLinks} respectExternal />
      </div>

      <div className="mx-auto flex max-w-frame flex-wrap justify-between gap-4 border-t border-line px-5 py-5 font-mono text-[11px] tracking-[0.08em] text-ink-mute md:px-8 md:py-6">
        <div className="flex flex-wrap gap-x-2">
          <span>
            &copy; <YearStamp /> IP3 Studio Ltd
          </span>
          <span>
            &middot;{' '}
            <a href="/legal" className="text-ink transition-colors hover:text-accent">
              Legal &amp; Privacy
            </a>
          </span>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <span>Company no. 14930883</span>
          <span>&middot; ICO ZB623037</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  external = false,
  respectExternal = false,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
  external?: boolean;
  respectExternal?: boolean;
}) {
  return (
    <div>
      <h5 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-mute">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => {
          const isExternal = external || (respectExternal && link.external);
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener' : undefined}
                className="text-[14px] text-ink transition-colors hover:text-accent"
              >
                {link.label}
                {isExternal ? ' ↗' : null}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
