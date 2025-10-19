import {
  SAIntro,
  SAStoneCategories,
  SADisplaySection,
  SACustomerClubJoin,
  SACommentSection,
} from "./components";

export default function Home() {
  return (
    <>
      <SAIntro />
      <SAStoneCategories />
      <SADisplaySection />
      <SAStoneCategories onReverse={true} />
      <SADisplaySection />
      <SACustomerClubJoin />
      <SACommentSection />
    </>
  );
}
