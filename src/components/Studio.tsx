// "Studio" = about + origin story. The Technation endorsement story
// is intentionally a stub — needs the user's actual narrative.

export default function Studio() {
  return (
    <section id="studio" className="section-divider">
      <div className="section-frame">
        <header className="mb-12 max-w-reading">
          <p className="font-label mb-4">Studio</p>
          <h2 className="section-em text-display font-medium tracking-[-0.015em] text-ink">
            A studio of one, <em>built deliberately small</em>.
          </h2>
        </header>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 flex flex-col gap-5 text-[17px] leading-[1.6] text-ink-mute">
            <p>
              IP3 Studio is the working name of <strong className="text-ink font-medium">IP3 Studio Ltd</strong>, an
              independent product studio incorporated in England &amp; Wales in 2023 (company no. 14930883).
              It is founded and run by Roxana Nasoi from London. The studio takes on a small number of
              public-interest builds at a time — editorial atlases, civic tools, analytical instruments —
              and ships them slowly, without ads or affiliate fees.
            </p>
            <p>
              The studio holds a <strong className="text-ink font-medium">Tech Nation Global Talent
              endorsement</strong> in the digital technology sector. Tech Nation is the UK&rsquo;s recognised
              endorsing body for the Global Talent route in digital tech &mdash; it vouches for individuals
              considered to be making, or with the potential to make, a meaningful contribution to the
              UK&rsquo;s technology ecosystem. The endorsement is held by Roxana Nasoi, who founded the studio
              in 2023; the brief &mdash; public-interest software made in Britain &mdash; is the commitment
              that came with it.
            </p>
            <p>
              Today the studio is in its first chapter. The first product —{' '}
              <a href="https://ukfunding.io" target="_blank" rel="noopener" className="link-inline">
                ukfunding.io
              </a>{' '}
              — is live. More follows. The work is intentionally narrow: tools that explain something
              important, that don&rsquo;t need a sales team, and that earn their keep on their own merits.
            </p>
          </div>

          <aside className="md:col-span-5 md:border-l md:border-line md:pl-10">
            <h3 className="font-label mb-6">Working principles</h3>
            <ul className="flex flex-col gap-5 text-[15px] leading-[1.55] text-ink">
              <Principle
                title="Editorial first"
                body="Tools should explain themselves. We treat product copy like editorial copy — clear, opinionated, accurate."
              />
              <Principle
                title="No affiliate revenue"
                body="If we recommend something, it isn't because we get paid for the click."
              />
              <Principle
                title="British by default"
                body="Built for UK first — UK GDPR, UK English, UK funding ecosystems, UK tax law. We optimise for here."
              />
              <Principle
                title="Quiet quality"
                body="No growth-hacking, no dark patterns. We compete on craft and clarity."
              />
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <li className="border-t border-line pt-4">
      <p className="font-medium tracking-[-0.005em]">{title}</p>
      <p className="mt-1.5 text-ink-mute">{body}</p>
    </li>
  );
}
