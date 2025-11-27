import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";   // ← IMPORTANTE
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './index.scss'
import App from './App.jsx'
import GatosProvider from './providers/GatosProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GatosProvider>
    <App />
  </GatosProvider>
  </StrictMode>,
)
