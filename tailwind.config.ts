import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'iss-teal': '#05668D',
        'iss-teal-dark': '#034862',
        'iss-coral': '#F72E57',
        'iss-coral-dark': '#C81D44',
        'iss-ink': '#111111',
        'iss-body': '#333333',
        'iss-alt': '#F4F4F4',
      },
      fontFamily: {
        // Matches iss.health exactly.
        gotham: ['var(--font-gotham)', 'var(--font-ibm-plex-condensed)', 'sans-serif'],
        heading: ['var(--font-ibm-plex-condensed)', 'sans-serif'],
        body: ['var(--font-ibm-plex)', 'sans-serif'],
        nav: ['var(--font-open-sans)', 'sans-serif'],
      },
      screens: {
        xs: '375px',
        sm: '393px',
        md: '810px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-right': 'env(safe-area-inset-right)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
      },
      height: {
        dvh: '100dvh',
        svh: '100svh',
        lvh: '100lvh',
      },
      minHeight: {
        dvh: '100dvh',
      },
      fontSize: {
        display: ['clamp(32px, 4.5vw, 56px)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        stat: ['clamp(36px, 4vw, 56px)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        h1: ['clamp(28px, 3.4vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h2: ['clamp(22px, 2.4vw, 34px)', { lineHeight: '1.15', letterSpacing: '-0.005em' }],
        h3: ['clamp(17px, 1.6vw, 22px)', { lineHeight: '1.3' }],
        body: ['clamp(15px, 1.1vw, 17px)', { lineHeight: '1.65' }],
        caption: ['11px', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
}
export default config
