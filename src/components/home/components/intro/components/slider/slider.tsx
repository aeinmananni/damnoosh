import { useEffect, useState } from 'react';
import { STONE_IMAGE_ITEMS } from '../../../../../../data';
import { SAImage } from '../../../../../custom';

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev < STONE_IMAGE_ITEMS.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-full z-10 ">
      {STONE_IMAGE_ITEMS.map((it, index) => (
        <SAImage
          key={it.id}
          style={{ backgroundImage: `url(${it.image})` }}
          className={`absolute w-full h-full  rounded-lg overflow-hidden transition-all duration-700 ${
            index === currentImageIndex
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-105 rotate-3'
          }`}
        />
      ))}
    </div>
  );
}
