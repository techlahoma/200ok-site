const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(cacheBuster({
    outputDirectory: 'public',
  }))

  eleventyConfig.addPassthroughCopy({
    'assets': 'assets',
  })

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
