module.exports = {
  NETLIFY: Boolean(process.env.NETLIFY),
  YEAR: process.env.YEAR || (new Date().getYear() + 1900),
}
