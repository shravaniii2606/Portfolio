/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080c0b',
        panel: '#0e1513',
        line: '#1c2723',
        signal: '#4ade80',
        scan: '#22d3ee',
        alert: '#fbbf24',
        ink: '#e7f0ec',
        dim: '#71887f',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
