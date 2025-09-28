import GranitImage from '../../images/GranitImages.jpg';
import { SAAdvertising } from './components';

export default function Home() {
  return (
    <div className="h-[200%] w-full   flex flex-col lg:flex-row ">
      <div
        style={{ backgroundImage: `url(${GranitImage})` }}
        className="w-full  h-full bg-cover bg-center rounded-lg"
      />

      <SAAdvertising />
    </div>
  );
}
