import { STONE_CATEGORIES_ITEMS } from '../../../../data';
import { SACart } from '../cart';
import Test_image from '../../../../images/stone-categories-images/categories-image1.jpg';

type StoneCategoriesProps = {
  onReverse?: boolean;
};

export default function StoneCategories({ onReverse }: StoneCategoriesProps) {
  return (
    <div
      style={{ direction: onReverse ? 'rtl' : 'ltr' }}
      className="w-full border-2 border-dashed border-slate-900 h-full p-2 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto gap-3 rounded-lg neon-border z-30"
    >
      {STONE_CATEGORIES_ITEMS.map(it => (
        <SACart key={it.id} {...it} />
      ))}
      <div className="flex flex-col sm:flex-row lg:flex-col w-full h-full gap-3 lg:gap-2  sm:col-span-2 lg:col-span-1 ">
        <SACart image={Test_image} text="decorativeStones" />
        <SACart image={Test_image} text="decorativeStones" />
      </div>
    </div>
  );
}
