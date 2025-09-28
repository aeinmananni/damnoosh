import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="flex flex-col items-center min-h-screen w-full overflow-y-auto  bg-center bg-no-repeat bg-cover p-10">
      <App />
    </main>
  </StrictMode>
);
