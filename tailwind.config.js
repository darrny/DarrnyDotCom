// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'metallic': {
          100: '#FFFFFF',
          200: '#F4F5F6',
          300: '#E2E4E9',
          400: '#CBD0D9',
          500: '#A2A9B8',
          600: '#828898',
          700: '#666D7C',
          800: '#4A5161',
          900: '#2E3544',
        }
      }
    },
  },
  plugins: [],
}