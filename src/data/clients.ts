// Past clients & collaborators.
// Logo file (if available) lives in /public/clients/{slug}.svg or .png.
// Without a logo, the wordmark renders as a typographic name.

export type Client = {
  name: string;
  url: string;
  logo?: string; // path in /public, e.g. '/clients/example.svg'
};

export const clients: Client[] = [
  // TODO(content): populate with real clients
  // { name: 'Example Co', url: 'https://example.com' },
];
