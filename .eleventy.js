const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster')

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

  // eleventyConfig.addWatchTarget("./assets/css/index.css");
  eleventyConfig.setUseGitIgnore(false)

  // // Filter source file names using a glob
  // eleventyConfig.addCollection('posts', function(collectionApi) {
  //   // Also accepts an array of globs!
  //   return collectionApi.getFilteredByGlob(['content/posts/*.md'])
  // })

  return {
    templateFormats: [
      "md",
      "njk",
    ],

    dir: {
      input: "content/",
      includes: "_includes",
      layouts: "_layouts",
      output: "public",
    },

    passthroughFileCopy: true,
  }
}
