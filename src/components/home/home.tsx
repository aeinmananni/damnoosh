import { SAIntro, SAStoneCategories, SADisplaySection, SACustomerClubJoin } from './components';

export default function Home() {
  return (
    <>
      <SAIntro />
      <SAStoneCategories />
      <SADisplaySection />
      <SAStoneCategories onReverse={true} />
      <SADisplaySection />
      <SACustomerClubJoin />
    </>
  );
}
