import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Routes } from '../src/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes />
    </ThemeProvider>
  </StrictMode>
)
