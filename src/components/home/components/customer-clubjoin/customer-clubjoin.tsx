import { SAGallery, SACustomerClubMessage } from './components';

export default function CustomerClubJoin() {
  return (
    <div className="flex h-full w-full shrink-0  neon-border p-2 z-30">
      <SAGallery />
      <SACustomerClubMessage />
    </div>
  );
}
