import { STONE_CATEGORIES_ITEMS } from "../../data";

import {
  SAIntro,
  SAStoneCategories,
  SADisplaySection,
  SACustomerClubJoin,
  SACommentSection,
} from "./components";
import CategoieseImagemage4 from "../../images/stone-categories-images/categoise-image4.jpg";
import CategoieseImagemage5 from "../../images/stone-categories-images/categorise-image5.jpg";
export default function Home() {
  return (
    <>
      <SAIntro />
      <SAStoneCategories
        items={STONE_CATEGORIES_ITEMS}
        imageStone1={CategoieseImagemage4}
        imgaeStone2={CategoieseImagemage5}
      />
      <SADisplaySection />
      <SAStoneCategories
        onReverse={true}
        items={STONE_CATEGORIES_ITEMS}
        imageStone1={CategoieseImagemage4}
        imgaeStone2={CategoieseImagemage5}
      />
      <SADisplaySection />
      <SACustomerClubJoin />
      <SACommentSection />
    </>
  );
}
