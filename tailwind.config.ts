import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./shared/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      blue: 'var(--blue)',
      white: 'var(--white)',
    },
    extend: {
      boxShadow: {
        base: '2px 2px 6px 0px rgba(84, 60, 151, 0.25)',
      },
      backgroundImage: {
        'button-gradient':
          'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)',
      },
    },
  },
  plugins: [],
}
export default config
