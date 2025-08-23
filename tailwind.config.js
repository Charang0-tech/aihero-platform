/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'rgb(209 213 219)',
            '--tw-prose-headings': 'rgb(243 244 246)',
            '--tw-prose-links': 'rgb(147 197 253)',
            '--tw-prose-code': 'rgb(243 244 246)',
            '--tw-prose-pre-code': 'rgb(243 244 246)',
            '--tw-prose-pre-bg': 'rgb(31 41 55)',
            '--tw-prose-quotes': 'rgb(209 213 219)',
            '--tw-prose-quote-borders': 'rgb(75 85 99)',
            '--tw-prose-captions': 'rgb(156 163 175)',
            '--tw-prose-kbd': 'rgb(243 244 246)',
            '--tw-prose-kbd-shadows': 'rgb(0 0 0)',
            '--tw-prose-counters': 'rgb(156 163 175)',
            '--tw-prose-bullets': 'rgb(75 85 99)',
            '--tw-prose-hr': 'rgb(55 65 81)',
            '--tw-prose-th-borders': 'rgb(75 85 99)',
            '--tw-prose-td-borders': 'rgb(55 65 81)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}