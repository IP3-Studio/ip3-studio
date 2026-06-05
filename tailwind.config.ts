import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(44px, 6vw, 88px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display': ['clamp(32px, 4.4vw, 56px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'lede': ['clamp(18px, 1.6vw, 22px)', { lineHeight: '1.45', letterSpacing: '-0.005em' }],
        'label': ['11px', { lineHeight: '1.2', letterSpacing: '0.18em' }],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-paper': 'var(--bg-paper)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        ink: 'var(--ink)',
        'ink-mute': 'var(--ink-mute)',
        'ink-faint': 'var(--ink-faint)',
        accent: 'var(--accent)',
      },
      spacing: {
        'section': '120px',
        'section-mobile': '72px',
      },
      maxWidth: {
        'reading': '720px',
        'frame': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
