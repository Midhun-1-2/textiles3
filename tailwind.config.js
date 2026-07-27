/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Rose-blush primary (premium feminine)
        blush: {
          50: '#fdf6f3',
          100: '#fbe9e1',
          200: '#f6d3c3',
          300: '#eeb29a',
          400: '#e2886a',
          500: '#d56848',
          600: '#bf5236',
          700: '#9c3d2a',
          800: '#7c3426',
          900: '#652e22',
        },
        // Wine / maroon secondary (deep rich Indian bridal)
        wine: {
          50: '#fcf5f6',
          100: '#f9ebed',
          200: '#f0ccd0',
          300: '#e3a3aa',
          400: '#cf6b75',
          500: '#b94855',
          600: '#9e3242',
          700: '#822834',
          800: '#5e1e28',
          900: '#3c151b',
        },
        // Gold accent (luxury)
        gold: {
          50: '#fdfbf3',
          100: '#faf3da',
          200: '#f4e3a3',
          300: '#edcd66',
          400: '#e4b33b',
          500: '#cf9920',
          600: '#a87616',
          700: '#7e5612',
          800: '#5c3f10',
          900: '#3f2c0d',
        },
        // Warm cream / ivory neutrals
        ivory: {
          50: '#fffefb',
          100: '#fdfaf3',
          200: '#f7f0e3',
          300: '#efe3cd',
          400: '#ddc9a6',
          500: '#c7ab7d',
        },
        ink: '#2a1d1f',
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(90, 30, 35, 0.18)',
        'card': '0 12px 40px -16px rgba(90, 30, 35, 0.28)',
        'glow': '0 0 0 1px rgba(207, 153, 32, 0.35), 0 8px 30px -10px rgba(207, 153, 32, 0.4)',
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(105deg, transparent 30%, rgba(237,205,102,0.55) 50%, transparent 70%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'slide-in-right': 'slide-in-right 0.4s ease-out both',
        'scale-in': 'scale-in 0.35s ease-out both',
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
