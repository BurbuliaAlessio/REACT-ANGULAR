import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global/global.css'
import './global/reset.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
