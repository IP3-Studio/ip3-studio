const channels = [
  {
    label: 'Email',
    value: 'contact@ip3.studio',
    href: 'mailto:contact@ip3.studio',
    note: 'Best for project enquiries and press.',
  },
  {
    label: 'X / Twitter',
    value: '@ip3studio',
    href: 'https://x.com/ip3studio',
    note: 'Where we post what we ship.',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'IP3 Studio',
    href: 'https://www.linkedin.com/company/ip3-studio',
    note: 'For professional intros.',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'IP3-Studio',
    href: 'https://github.com/IP3-Studio',
    note: 'Open-source projects live here.',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-divider">
      <div className="section-frame">
        <header className="mb-12 max-w-reading">
          <p className="font-label mb-4">Contact</p>
          <h2 className="section-em text-display font-medium tracking-[-0.015em] text-ink">
            Say hello — <em>we read everything</em>.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-ink-mute max-w-[58ch]">
            For project enquiries, collaborations, press, or just to send a thought —
            email is the fastest. We&rsquo;re a small team and we reply within a working day or two.
          </p>
        </header>

        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {channels.map((c) => (
            <li key={c.label} className="bg-bg">
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener' : undefined}
                className="group flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-bg-elev"
              >
                <span className="font-label">
                  {c.label}
                  {c.external ? ' ↗' : ''}
                </span>
                <span className="text-[20px] font-medium tracking-[-0.01em] text-ink group-hover:text-accent">
                  {c.value}
                </span>
                <span className="text-[13px] text-ink-mute">{c.note}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-reading text-[13px] leading-[1.55] text-ink-faint">
          Registered office: 112 Morden Road, London SW19 3BP, United Kingdom. IP3 Studio Ltd is
          registered in England &amp; Wales (company no. 14930883). ICO registration ZB623037.
        </p>
      </div>
    </section>
  );
}
