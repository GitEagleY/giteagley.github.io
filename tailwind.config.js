/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Pro', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'navy': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          500: '#334155',
          700: '#1e293b',
          900: '#0f172a',
        },
        'accent': {
          500: '#3b82f6',
          600: '#2563eb',
        }
      }
    },
  },
  plugins: [],
}
