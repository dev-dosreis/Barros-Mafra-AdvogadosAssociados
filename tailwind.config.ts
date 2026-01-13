import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 60% Base
        bg: '#F6F4F1',
        surface: '#FFFFFF',
        text: '#121417',
        muted: '#5E6672',
        // 30% Estrutura
        ink: '#0B0F14',
        inkSurface: 'rgba(11,15,20,0.92)',
        border: 'rgba(18,20,23,0.10)',
        // 10% Acento
        accent: '#1E3A8A',
        accentSoft: 'rgba(30,58,138,0.12)',
        accentHover: '#1e40af',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        // Mobile
        'h1-mobile': ['2.125rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h2-mobile': ['1.375rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '500' }],
        // Desktop
        'h1': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.08)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config
