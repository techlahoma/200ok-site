module.exports = {
  purge: [
    './public/**/*.{html}',
    './content/**/*.{md,njk}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        '200ok-purple': '#4D2462',
        '200ok-orange': '#F27E5B',
        '200ok-orange-dark': '#D06747',
        '200ok-logo-blue': '#2E83C4',
        '200ok-logo-red': '#EF483C',
        '200ok-logo-grey': '#AAAAAA',
        '200ok-white': '#FFFFFF',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
