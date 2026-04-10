import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './Resigter.jsx'
import Login from '../Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<App />
  </StrictMode>,
)
