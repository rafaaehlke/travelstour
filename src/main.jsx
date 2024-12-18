import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global'
import { Routes } from '../src/routes'
import { StrictMode } from 'react'
import theme from './styles/theme'
import {AuthProvider} from './hooks/auth'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>   
    </ThemeProvider>
  </StrictMode>
)
