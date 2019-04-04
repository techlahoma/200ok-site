hexo.extend.helper.register('speaker_page', (pages, speaker) => {
  if (!speaker) return

  return pages.data
    .filter(page => page.speaker && page.speaker === speaker)
    .shift()
})
