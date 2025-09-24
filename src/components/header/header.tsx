import { SAImage } from '../custom';
import { SANavbar, SAWidget } from './components';
import logo from '../../images/result.png';
export default function Header() {
  return (
    <header className="w-full flex gap-3 ">
      <SAImage src={logo} alt="Image-Logo" width={60} height={60} className="!shrink-0 border" />
      <div className="flex flex-col gap-9 w-full px-4">
        <SAWidget />
        <SANavbar />
      </div>
    </header>
  );
}
