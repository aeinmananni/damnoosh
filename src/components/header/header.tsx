import { SAImage } from '../custom';
import { SANavbar, SAWidget } from './components';
import logo from '../../images/result.png';
export default function Header() {
  return (
    <header className="w-full flex gap-10">
      <div className=" flex-col gap-1 items-center justify-center hidden md:flex">
        <SAImage src={logo} alt="Image-Logo" width={57} height={57} className="!shrink-0" />
        <span className="font-bold text-primary">SAMASANG</span>
      </div>
      <div className="flex flex-col gap-9 w-full">
        <SAWidget />
        <SANavbar />
      </div>
    </header>
  );
}
