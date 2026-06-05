import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Legal & Privacy',
  description:
    'Editorial purpose, intellectual property, privacy, cookies, and terms of use for ip3.studio.',
  alternates: { canonical: '/legal' },
};

export default function LegalPage() {
  return (
    <>
      <Header />

      <main id="top" className="mx-auto max-w-[820px] px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-20">
        <div className="mb-12 flex flex-col gap-4">
          <p className="font-mono text-label uppercase text-ink-mute">
            Last updated · {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>
          <h1 className="section-em text-display font-medium">
            Legal &amp; <em>privacy</em>.
          </h1>
          <p className="text-[16px] leading-[1.55] text-ink-mute">
            Plain-English summary first. The detail follows below. This page applies to your use of
            ip3.studio (&ldquo;the site&rdquo;), operated by IP3 Studio Ltd.
          </p>
        </div>

        <aside className="mb-12 border border-line-strong bg-bg-paper p-6 md:p-8">
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            In plain English
          </h2>
          <ul className="flex flex-col gap-3 text-[15px] leading-[1.55] text-ink">
            <li>
              <strong className="font-medium">This is a studio site.</strong> It describes who we are and
              what we&rsquo;ve built. Nothing on it is professional advice.
            </li>
            <li>
              <strong className="font-medium">Privacy:</strong> we don&rsquo;t run analytics or
              advertising trackers. If you email us, we only use that email to reply.
            </li>
            <li>
              <strong className="font-medium">No cookies for tracking.</strong> The site doesn&rsquo;t set
              any.
            </li>
            <li>
              <strong className="font-medium">Got a question or correction?</strong> Email{' '}
              <a
                href="mailto:contact@ip3.studio"
                className="text-accent underline-offset-4 hover:underline"
              >
                contact@ip3.studio
              </a>
              .
            </li>
          </ul>
        </aside>

        <Section id="about" title="1. About this site">
          <p>
            ip3.studio is the website of <strong>IP3 Studio Ltd</strong>, a small independent product
            studio incorporated in England &amp; Wales. The site describes the studio, its team, the
            products it has shipped, and how to make contact.
          </p>
          <p>
            The site is editorial in nature. Nothing on it constitutes professional advice — legal,
            financial, investment, tax, or otherwise. Where the site refers to public funding schemes,
            tax reliefs, or regulated activities, those references are descriptive and link to primary
            sources.
          </p>
        </Section>

        <Section id="ip" title="2. Intellectual property">
          <p>
            The content, design, layout, and code of ip3.studio are the property of IP3 Studio Ltd and
            are protected by UK and international copyright, database, and design-right laws.
          </p>
          <p>
            You may view the site and quote short extracts for personal or non-commercial editorial use
            with attribution to IP3 Studio. Republishing the content in full, scraping the site for
            datasets, or commercial use requires written permission.
          </p>
          <p>
            Names, marks, and logos of third parties shown on the site (clients, collaborators, projects)
            remain the property of their respective owners and are used for identification only.
          </p>
        </Section>

        <Section id="third-party" title="3. Third-party links">
          <p>
            The site contains links to third-party websites. We have no control over those sites and
            accept no responsibility for their accuracy, availability, or terms of use.
          </p>
        </Section>

        <Section id="liability" title="4. Limitation of liability">
          <p>
            To the fullest extent permitted by law, IP3 Studio Ltd shall not be liable for any loss or
            damage, whether direct, indirect, consequential, or otherwise, arising out of or in
            connection with use of the site, reliance on its content, or inability to access it.
          </p>
          <p>
            Nothing in these terms limits any liability that cannot be limited under English law,
            including liability for death or personal injury caused by negligence, fraud or fraudulent
            misrepresentation, or any other matter for which liability cannot be excluded.
          </p>
        </Section>

        <Section id="privacy" title="5. Privacy and data">
          <p>
            <strong>Data controller:</strong> IP3 Studio Ltd, registered with the UK Information
            Commissioner&rsquo;s Office under reference{' '}
            <a
              href="https://ico.org.uk/ESDWebPages/Search"
              target="_blank"
              rel="noopener"
              className="text-accent underline-offset-4 hover:underline"
            >
              ZB623037
            </a>
            .
          </p>
          <p>
            ip3.studio is designed to collect the minimum data necessary. We do not run third-party
            analytics, advertising trackers, or social-media pixels on the site.
          </p>
          <p>
            <strong>What we store:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>
              If you email{' '}
              <a
                href="mailto:contact@ip3.studio"
                className="text-accent underline-offset-4 hover:underline"
              >
                contact@ip3.studio
              </a>
              , we keep the email so we can reply and so we can find the thread again later. We do not
              add the address to any list or share it with third parties.
            </li>
            <li>
              Standard web-server access logs (timestamps, IP address, requested page, user agent),
              retained for security and abuse prevention for a limited period.
            </li>
          </ul>
          <p>
            Under the UK GDPR you have rights of access, rectification, erasure, restriction,
            portability, and to object to processing. To exercise these, email{' '}
            <a
              href="mailto:contact@ip3.studio"
              className="text-accent underline-offset-4 hover:underline"
            >
              contact@ip3.studio
            </a>
            . If you&rsquo;re unhappy with how we handle a request, you may complain to the Information
            Commissioner&rsquo;s Office at{' '}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener"
              className="text-accent underline-offset-4 hover:underline"
            >
              ico.org.uk
            </a>
            .
          </p>
        </Section>

        <Section id="cookies" title="6. Cookies">
          <p>
            ip3.studio does not set cookies for tracking, advertising, or analytics. The site is
            designed to work without any persistent client-side storage.
          </p>
        </Section>

        <Section id="governing-law" title="7. Governing law">
          <p>
            These terms and your use of the site are governed by the laws of England and Wales. The
            courts of England and Wales have exclusive jurisdiction over any dispute arising in
            connection with the site or these terms.
          </p>
        </Section>

        <Section id="changes" title="8. Changes to these terms">
          <p>
            We may update this page from time to time to reflect changes in the law, the site, or our
            practices. The &ldquo;Last updated&rdquo; date at the top of the page shows when the latest
            revision was published.
          </p>
        </Section>

        <Section id="contact" title="9. Contact &amp; trading details">
          <p>
            For legal, privacy, or correction queries, email{' '}
            <a
              href="mailto:contact@ip3.studio"
              className="text-accent underline-offset-4 hover:underline"
            >
              contact@ip3.studio
            </a>
            .
          </p>
          <p>
            ip3.studio is published by <strong>IP3 Studio Ltd</strong>, a company registered in England
            &amp; Wales (company no.{' '}
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/14930883"
              target="_blank"
              rel="noopener"
              className="text-accent underline-offset-4 hover:underline"
            >
              14930883
            </a>
            ), with its registered office at 112 Morden Road, London SW19 3BP, United Kingdom. ICO
            registration ZB623037.
          </p>
        </Section>

        <p className="mt-16 max-w-[720px] border-l-2 border-line-strong pl-5 text-[12px] leading-[1.55] text-ink-faint">
          This page is a plain-English compliance summary. It is not a substitute for advice from a
          qualified UK solicitor.
        </p>
      </main>

      <Footer />
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10 border-t border-line pt-8">
      <h2 className="mb-4 font-sans text-[22px] font-medium tracking-[-0.01em] text-ink md:text-[24px]">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-[15px] leading-[1.6] text-ink-mute [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}
