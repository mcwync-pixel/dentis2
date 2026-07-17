/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f0ff',
          200: '#bce4ff',
          300: '#8ed3ff',
          400: '#59b8ff',
          500: '#3398fb',
          600: '#1d79f0',
          700: '#1761dd',
          800: '#194eb3',
          900: '#1a438e',
          950: '#142b57',
        },
        teal: {
          50: '#effcf9',
          100: '#cbf7ee',
          200: '#99eee0',
          300: '#5fdccd',
          400: '#2ec3b6',
          500: '#1aa89c',
          600: '#13887f',
          700: '#136e66',
          800: '#145753',
          900: '#134846',
          950: '#062a28',
        },
        sand: {
          50: '#fbf8f3',
          100: '#f4ece0',
          200: '#e8d7c0',
          300: '#dbbd9b',
          400: '#cb9d70',
          500: '#bd8250',
          600: '#a96a40',
          700: '#8c5234',
          800: '#72432e',
          900: '#5e3929',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'slow-zoom': 'slow-zoom 12s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
