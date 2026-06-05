import { clients } from '@/data/clients';

export default function Clients() {
  return (
    <section id="clients" className="section-divider bg-bg-paper">
      <div className="section-frame">
        <header className="mb-12 max-w-reading">
          <p className="font-label mb-4">Past clients &amp; collaborators</p>
          <h2 className="section-em text-display font-medium tracking-[-0.015em] text-ink">
            People who&rsquo;ve <em>trusted the work</em>.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-ink-mute max-w-[58ch]">
            A short list of organisations the studio has shipped for or alongside. We keep the bar
            higher than the count.
          </p>
        </header>

        {clients.length === 0 ? (
          <div className="border border-line bg-bg p-10 text-center">
            <p className="font-label mb-3">Coming soon</p>
            <p className="text-[15px] leading-[1.55] text-ink-mute max-w-[52ch] mx-auto">
              The studio is in its first chapter. Past collaborators and new clients will be listed
              here as engagements wrap. In the meantime, see what we&rsquo;ve shipped under{' '}
              <a href="#work" className="link-inline">our work</a>.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 md:grid-cols-4">
            {clients.map((client) => (
              <li key={client.name} className="bg-bg">
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-32 items-center justify-center px-6 py-5 transition-colors hover:bg-bg-elev"
                  aria-label={`${client.name} — opens in new tab`}
                >
                  <span className="font-mono text-[13px] tracking-[0.04em] text-ink-mute transition-colors group-hover:text-ink">
                    {client.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
