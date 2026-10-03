import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.scss'
import App from './App.tsx'
import { AuthProviver } from './context/auth/AuthProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProviver>
      <App />
    </AuthProviver>
  </StrictMode>,
);