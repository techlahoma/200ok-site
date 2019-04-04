hexo.extend.helper.register('speaker_page', function (speaker) {
  return this.site.pages.data
    .filter(page => page.speaker && page.speaker === speaker)
    .shift()
})
