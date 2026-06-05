export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-frame px-5 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
        <p className="font-label mb-6">
          <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent" />
          A small UK studio
        </p>

        <h1 className="section-em text-display-xl font-medium tracking-[-0.025em] text-ink max-w-[18ch]">
          We build <em>public-interest</em> software, made in Britain.
        </h1>

        <p className="mt-8 max-w-[58ch] text-lede text-ink-mute">
          IP3 Studio is an independent product studio based in London. We design and ship editorial,
          civic, and analytical tools — calmly, without ads or affiliate fees. Endorsed by Tech
          Nation as a UK Global Talent route in the digital technology sector.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary">
            See our work <span aria-hidden>→</span>
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 md:grid-cols-4 md:gap-x-12">
          <Stat label="Founded" value="2023" />
          <Stat label="Based in" value="London, UK" />
          <Stat label="Endorsement" value="Tech Nation" />
          <Stat label="First product" value="ukfunding.io" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-label">{label}</dt>
      <dd className="mt-2 text-[18px] font-medium tracking-[-0.01em] text-ink">{value}</dd>
    </div>
  );
}
