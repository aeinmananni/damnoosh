import { SADisoalySectionHeader, SACarts } from './components';

export default function DisplaySection() {
  return (
    <div className="w-full h-full flex flex-col  neon-border shrink-0 p-2 gap-7 z-30">
      <SADisoalySectionHeader />
      <SACarts />
    </div>
  );
}
