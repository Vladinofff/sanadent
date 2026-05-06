/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sana: {
          black: '#0f0f0f',
          dark: '#1a1a1a',
          gray: {
            900: '#1a1a1a',
            800: '#2a2a2a',
            700: '#3a3a3a',
            600: '#5a5a5a',
            500: '#7a7a7a',
            400: '#9a9a9a',
            300: '#c5c5c0',
            200: '#e5e5e0',
            100: '#f0f0eb',
            50:  '#f8f8f4',
          },
          lime: {
            DEFAULT: '#c4d82e',
            dark: '#a8bd1f',
            light: '#d6e95a',
          },
          cream: '#faf9f4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scroll': 'scroll 35s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
