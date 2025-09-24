import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="h-screen w-full overflow-hidden border-2 border-blue-500 bg-center bg-no-repeat bg-cover">
      <App />
    </main>
  </StrictMode>
);
