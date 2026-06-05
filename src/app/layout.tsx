import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const SITE_URL = 'https://ip3.studio';
const SITE_NAME = 'IP3 Studio';
const SITE_DESCRIPTION =
  'IP3 Studio is a small UK-based studio building public-interest software. Maker of ukfunding.io and other independent products.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'IP3 Studio — a small UK studio',
    template: '%s · IP3 Studio',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'IP3 Studio',
    'UK design studio',
    'product studio London',
    'Technation endorsement',
    'ukfunding.io',
    'Roxana Nasoi',
    'independent software UK',
  ],
  authors: [{ name: 'IP3 Studio' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'IP3 Studio — a small UK studio',
    description: SITE_DESCRIPTION,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ip3studio',
    creator: '@ip3studio',
    title: 'IP3 Studio — a small UK studio',
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: 'IP3 Studio Ltd',
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      legalName: 'IP3 Studio Ltd',
      foundingLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'GB' } },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '112 Morden Road',
        addressLocality: 'London',
        postalCode: 'SW19 3BP',
        addressCountry: 'GB',
      },
      identifier: [
        { '@type': 'PropertyValue', propertyID: 'CompaniesHouse', value: '14930883' },
        { '@type': 'PropertyValue', propertyID: 'ICO', value: 'ZB623037' },
      ],
      sameAs: [
        'https://x.com/ip3studio',
        'https://www.linkedin.com/company/ip3-studio',
        'https://github.com/IP3-Studio',
      ],
      email: 'contact@ip3.studio',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}#organization` },
      inLanguage: 'en-GB',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
