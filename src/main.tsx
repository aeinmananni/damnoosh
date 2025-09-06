import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n.ts';
import backgroundImage from '../public/images/background2.webp';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-screen w-full overflow-hidden border-2 border-blue-500 bg-center bg-no-repeat bg-cover"
    >
      <App />
    </main>
  </StrictMode>
);
