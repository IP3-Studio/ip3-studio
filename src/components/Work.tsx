import { projects } from '@/data/projects';

export default function Work() {
  return (
    <section id="work" className="section-divider">
      <div className="section-frame">
        <header className="mb-16 max-w-reading">
          <p className="font-label mb-4">Work</p>
          <h2 className="section-em text-display font-medium tracking-[-0.015em] text-ink">
            Products built <em>by the studio</em>.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-ink-mute max-w-[58ch]">
            The studio ships its own products alongside client work. Each one is intentionally
            narrow — a single useful thing, made well.
          </p>
        </header>

        <ul className="flex flex-col">
          {projects.map((project, idx) => (
            <li key={project.slug} className={idx === 0 ? '' : 'border-t border-line'}>
              <article className="grid gap-8 py-10 md:grid-cols-12 md:gap-12 md:py-14">
                <div className="md:col-span-4">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
                    {project.year} · <StatusLabel status={project.status} />
                  </p>
                  <h3 className="mt-3 text-[28px] font-medium tracking-[-0.015em] text-ink md:text-[32px]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink-mute">{project.tagline}</p>
                </div>

                <div className="md:col-span-8">
                  <p className="text-[16px] leading-[1.6] text-ink">{project.description}</p>

                  <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 md:grid-cols-3">
                    <Meta label="Role" value={project.role} />
                    <Meta label="Stack" value={project.stack.join(' · ')} />
                    <Meta
                      label="Live at"
                      value={
                        project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener"
                            className="link-inline"
                          >
                            {project.url.replace(/^https?:\/\//, '')}
                          </a>
                        ) : (
                          '—'
                        )
                      }
                    />
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener"
                        className="btn-primary !py-2.5 !px-4 !text-[13px]"
                      >
                        Visit site <span aria-hidden>↗</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener"
                        className="btn-secondary !py-2.5 !px-4 !text-[13px]"
                      >
                        Source <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="font-label">{label}</dt>
      <dd className="mt-1.5 text-[14px] text-ink">{value}</dd>
    </div>
  );
}

function StatusLabel({ status }: { status: 'live' | 'in development' | 'archived' }) {
  return <span className="text-ink">{status.toUpperCase()}</span>;
}
