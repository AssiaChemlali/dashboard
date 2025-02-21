import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from './contexts/ContextProvider.js';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cWGhKYVJzWmFZfVtgcl9CaVZVRmYuP1ZhSXxWdkdiXX9acHNQR2JVUEE=');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>

  </StrictMode>,
)
