/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#050506',
        'noir-soft': '#0b0c0e',
        'gris-fonce': '#17181b',
        'gris-fonce-2': '#212327',
        'gris-moyen': '#6b6e74',
        'gris-clair': '#d7d9dd',
        blanc: '#fafafa',
        electrique: '#3b82f6',
        'electrique-soft': '#60a5fa',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        premium: '0 40px 90px -30px rgba(0,0,0,0.75)',
        glow: '0 0 60px -15px rgba(59,130,246,0.35)',
      },
    },
  },
  plugins: [],
}
