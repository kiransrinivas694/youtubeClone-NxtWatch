import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideos: [],
  just: '',
  changeInVideos: () => {},
  isLight: true,
  onThemeChange: () => {},
})

export default SavedVideosContext
