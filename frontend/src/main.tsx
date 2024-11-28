import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.tsx'

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_YXJ0aXN0aWMtbG91c2UtOTIuY2xlcmsuYWNjb3VudHMuZGV2JA";

console.log("Publishable Key (Hardcoded):", PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <AuthProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
      </AuthProvider>
    </ClerkProvider>
  </StrictMode>
);
