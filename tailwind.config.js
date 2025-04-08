/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['var(--font-inter)'],
        },
        colors: {
          border: {
            DEFAULT: 'var(--border)',
            dark: 'var(--border-dark)',
          },
          background: {
            DEFAULT: 'var(--background)',
            dark: 'var(--background-dark)',
          },
          foreground: {
            DEFAULT: 'var(--foreground)',
            dark: 'var(--foreground-dark)',
          },
          muted: {
            DEFAULT: 'var(--muted)',
            dark: 'var(--muted-dark)',
          },
          accent: {
            DEFAULT: 'var(--accent)',
            dark: 'var(--accent-dark)',
          },
        },
      },
    },
    plugins: [],
  }