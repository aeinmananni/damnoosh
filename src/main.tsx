import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="flex flex-col items-center h-screen w-full overflow-y-auto bg-slate-900  p-10 text-slate-100 italic">
      <App />
    </main>
  </StrictMode>
);
