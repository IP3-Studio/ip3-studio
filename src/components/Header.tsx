const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#studio', label: 'Studio' },
  { href: '/#manifesto', label: 'Manifesto' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-frame items-center justify-between gap-8 px-5 py-3.5 md:px-8">
        <a href="/" className="flex items-center gap-3 text-[14px] font-medium tracking-[-0.005em] text-ink">
          <BrandMark />
          <span className="font-mono text-[13px] tracking-[0.02em]">
            IP3<span className="text-ink-mute"> Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 font-mono text-[12px] font-medium tracking-[0.06em] text-ink-mute uppercase transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-4 !text-[12px]">
          Get in touch
        </a>
      </div>
    </header>
  );
}

function BrandMark() {
  return (
    <span aria-hidden className="grid h-7 w-7 place-items-center border-[1.5px] border-ink">
      <span className="h-2 w-2 bg-accent" />
    </span>
  );
}
