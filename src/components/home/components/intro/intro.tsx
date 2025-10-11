import { SAAdvertising, SASlider } from './components';

export default function Intro() {
  return (
    <div className="relative h-2/3 w-full shrink-0 flex flex-col lg:flex-row overflow-hidden  p-2 rounded-lg neon-border">
      <div className="border-light" />
      <SASlider />
      <SAAdvertising />
    </div>
  );
}
