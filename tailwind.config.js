/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)'],
        mono: ['var(--font-droid)'],
      },
      dropShadow: {
        black: '1px 1px 0 rgba(0, 0, 0, 0.25)',
        white: '2px 2px 0 rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwindcss-patterns'),
    require('@tailwindcss/typography'),
  ],
}
