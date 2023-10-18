import Home from 'pages/home'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme, { GlobalStyles } from 'theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
