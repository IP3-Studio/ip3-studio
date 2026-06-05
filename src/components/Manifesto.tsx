// "Why UK" manifesto — first-pass draft written from known studio facts.
// Edit the paragraphs below in the founder's preferred voice.

export default function Manifesto() {
  return (
    <section id="manifesto" className="section-divider bg-bg-paper">
      <div className="section-frame">
        <header className="mb-12 max-w-reading">
          <p className="font-label mb-4">Manifesto</p>
          <h2 className="section-em text-display font-medium tracking-[-0.015em] text-ink">
            Why <em>UK</em>.
          </h2>
        </header>

        <div className="max-w-reading flex flex-col gap-5 text-[18px] leading-[1.6] text-ink">
          <p>
            Britain has always been a country of small workshops. Software, we think, is no
            different.
          </p>

          <p>
            We make our work in London because the work is better for it. The UK is small enough to
            know its own institutions — the NHS, Companies House, HMRC, the regulators, the public
            bodies, the funders — and big enough to demand serious tools to navigate them. That is
            exactly the brief a public-interest studio is for.
          </p>

          <p>
            We build for the UK first by default. UK English, UK GDPR, UK tax law, UK funding
            ecosystems. We don&rsquo;t take a US-shaped product and translate it into pounds; we
            start from the ground here, where the rules and the readers actually live.
          </p>

          <p>
            We resist the temptation to be a marketing company in a designer&rsquo;s costume. No
            affiliate fees, no introducer commissions, no advertising, no content written to please
            a search algorithm. If a tool is worth using, that ought to be enough.
          </p>

          <p>
            We think the most useful British thing we can do is to make information about Britain
            clearer — funding, regulation, public services, the unromantic plumbing that decides
            whether a small company survives its first three years. That is the editorial brief and
            we mean it literally.
          </p>

          <p>
            We are slow. We ship a small number of things, well, with our names on them. The studio
            is intentionally small so the work can stay precise. We expect to be doing this for a
            long time.
          </p>
        </div>

        <p className="mt-10 max-w-reading border-l-2 border-line-strong pl-5 text-[14px] leading-[1.55] text-ink-mute">
          Signed — Roxana Nasoi, founder.
        </p>
      </div>
    </section>
  );
}
