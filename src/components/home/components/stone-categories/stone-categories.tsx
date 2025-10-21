import { SACart } from "../cart";
import type { StoneCategorisType } from "../../../../models";

type StoneCategoriesProps = {
  onReverse?: boolean;
  items: StoneCategorisType[];
  imageStone1: string;
  imgaeStone2: string;
};

export default function StoneCategories({
  onReverse,
  items,
  imageStone1,
  imgaeStone2,
}: StoneCategoriesProps) {
  return (
    <div
      style={{ direction: onReverse ? "rtl" : "ltr" }}
      className="w-full  h-full p-2 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto gap-3 rounded-lg neon-border z-30"
    >
      {items.map((it) => (
        <SACart key={it.id} {...it} />
      ))}
      <div className="flex flex-col sm:flex-row lg:flex-col w-full h-full gap-3 lg:gap-2  sm:col-span-2 lg:col-span-1 ">
        <SACart image={imageStone1} text="decorativeStones" />
        <SACart image={imgaeStone2} text="decorativeStones" />
      </div>
    </div>
  );
}
