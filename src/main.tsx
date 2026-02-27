import { scan } from "react-scan"; // must be imported before React and React DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'
import App from './App.tsx'

scan({
  enabled: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </StrictMode>,
)
