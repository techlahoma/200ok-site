const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const yaml = require('js-yaml')

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

const filterByKeyFilter = (list, key, value) => list.filter(item => item[key] == value)

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(cacheBuster({
    outputDirectory: 'public',
  }))

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
