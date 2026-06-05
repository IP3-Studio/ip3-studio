import { ImageResponse } from 'next/og';

export const alt = 'IP3 Studio — a small UK studio building public-interest software.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          fontFamily: 'system-ui, sans-serif',
          color: '#0c0c0c',
        }}
      >
        {/* Top row: brand mark + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              border: '3px solid #0c0c0c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 12, height: 12, background: '#012169' }} />
          </div>
          <div
            style={{
              display: 'flex',
              gap: 8,
              fontSize: 26,
              fontWeight: 500,
              letterSpacing: '-0.005em',
            }}
          >
            <span>IP3</span>
            <span style={{ color: '#5e5b52' }}>Studio</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              maxWidth: 920,
            }}
          >
            We build public-interest software, made in Britain.
          </div>
          <div style={{ fontSize: 22, color: '#5e5b52', maxWidth: 720 }}>
            An independent product studio in London. Makers of ukfunding.io.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 16,
            color: '#5e5b52',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <div>ip3.studio</div>
          <div>London · est. 2023</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
