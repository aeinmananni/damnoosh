import { SALogo } from '../logo';
import { SANavbar, SAWidget } from './components';

export default function Header() {
  return (
    <header className="w-full flex gap-10 z-30">
      <SALogo />
      <div className="flex flex-col gap-9 w-full">
        <SAWidget />
        <SANavbar />
      </div>
    </header>
  );
}
