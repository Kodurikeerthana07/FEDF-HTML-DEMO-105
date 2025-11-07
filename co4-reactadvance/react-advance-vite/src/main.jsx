import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import ReactLazyDemo from '.ReactLazyDemo.jsx'
import ErrorBoundariesDemo from './ErrorBoundaryDemo'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < ErrorBoundariesDemo />
  </StrictMode>,
)
