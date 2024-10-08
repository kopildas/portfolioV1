/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear',
        panoverlay: 'panoverlay 16s linear infinite'
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1.35deg)',
          },
          '75%': {
            transform: 'rotate(-1.35deg)',
          },
        },
        panoverlay: {
          '0%': {
            'background-position': '0 0',
          },
          '100%': {
            'background-position': '0 -100%',
          }
        }
      },
      backgroundColor: {
        'shades-1': '#191F21',
        'shades-2': '#313739',
        'shades-3': '#4A5053',
        'shades-4': '#F59433',
        'shades-5': '#41484A',
        'shades-6': '#994800',
        'shades-7': '#0B1315',
        'shades-8': '#81888B',
        'back-g-1': 'rgba(54, 75, 68, 0.289)',
        'gradient-1': '#072a2348'
      },
      colors: {
        'shades-1': '#191F21',
        'shades-2': '#313739',
        'shades-3': '#4A5053',
        'shades-4': '#F59433',
        'shades-5': '#41484A',
        'shades-6': '#994800',
        'shades-7': '#0B1315',
        'shades-8': '#81888B',
        'waka_total': '#505050',
      }
    },
  },
  plugins: [],
}
