module.exports = {
  purge: [
    './public/**/*.{html}',
    './content/**/*.{md,njk}',
  ],
  darkMode: 'media',
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
