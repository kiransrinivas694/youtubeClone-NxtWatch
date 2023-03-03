import React from 'react'

const ThemeContext = React.createContext({
  isLight: true,
  onThemeChange: () => {},
})

export default ThemeContext
