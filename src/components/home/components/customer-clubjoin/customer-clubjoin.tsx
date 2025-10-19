import { SAGallery, SACustomerClubMessage } from './components';

export default function CustomerClubJoin() {
  return (
    <div className="flex h-full md:h-2/3 w-full shrink-0  neon-border p-2 z-30 flex-col md:flex-row">
      <SAGallery />
      <SACustomerClubMessage />
    </div>
  );
}
