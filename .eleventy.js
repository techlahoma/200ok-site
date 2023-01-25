const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const yaml = require('js-yaml')
const path = require('path')
const fs = require('fs')

const markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
}).use(markdownItAnchor)

// Filter to remove “runts” (wrapping last word of text)
//
// Usage:
//
//   ```njk
//   {{ 'some text that should not have runts` | noRunts | safe }}
//   ```
//
// Expect:
//
//   ```html
//   some text that should not <span style="white-space:nowrap;">have runts</span>
//   ```
const noRuntsFilter = value => value.replace(
  /(\S+\s+\S+\s+)(\S+\s+\S+)$/,
  '$1<span style="white-space:nowrap;">$2</span>'
)

// Filter to read a file
//
// Usage:
//
//   ```njk
//   {{ 'path/to/file.svg' | readFile | safe }}
//   ```
const readFile = (...pathSegments) => {
  const filePath = path.resolve(...pathSegments)
  return fs.readFileSync(filePath)
}

const filterByKeyFilter = (list, key, value) => list.filter(item => item[key] == value)

// Filter to add cache busting query string to URL
//
// Throws an error if the cache buster key is already in the URL.
//
// Usage:
//
//   ```njk
//   <link rel="stylesheet" href="{{ '/css/style.css' | cacheBuster }}">
//   <link rel="stylesheet" href="{{ '/css/style.css' | cacheBuster('v') }}">
//   ```
//
// Expect:
//
//   ```html
//   <link rel="stylesheet" href="/css/style.css?cache-buster=1234567">
//   <link rel="stylesheet" href="/css/style.css?v=1234567">
//   ```
const cacheBuster = (value, key = 'cache-buster') => {
  const base = 'https://example.com' // Default base so that URL can parse relative URLs.
  const url = new URL(value, base)   // If url is an absolute URL, base will be ignored.

  if (url.searchParams.has(key)) {
    throw new Error(`Cache buster key conflicts with existing search parameter: ${key} in ${value}`)
  }

  url.searchParams.set(key, new Date().valueOf())

  return url.toString().replace(base, '')
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('content/robots.txt*')
  eleventyConfig.addPassthroughCopy('content/**/*.pdf')
  eleventyConfig.addPassthroughCopy({
    'assets/logos/favicon.ico': 'favicon.ico',
  })

  const years = [2016, 2017, 2018, 2019, 2020]
  years.forEach(year => {
    eleventyConfig.addPassthroughCopy({
      [`archive/archive-${year}`]: `archive-${year}`,
      [`archive/assets-${year}`]: `assets-${year}`,
    })
  })

  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.setLibrary('md', markdownLibrary)

  // Extra data formats
  eleventyConfig.addDataExtension('yml', contents => yaml.load(contents))
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))

  // Filters
  eleventyConfig.addFilter("noRunts", noRuntsFilter);
  eleventyConfig.addFilter("filterByKey", filterByKeyFilter);
  eleventyConfig.addFilter("readFile", readFile);
  eleventyConfig.addFilter("cacheBuster", cacheBuster);

  return {
    // Use nunjucks for template usage (like includes) within Markdown files
    markdownTemplateEngine: 'njk',

    templateFormats: [
      'md',
      'njk',
    ],

    dir: {
      input: 'content/',
      includes: '_includes',
      layouts: '_layouts',
      output: 'public',
    },

    passthroughFileCopy: true,
  }
}
