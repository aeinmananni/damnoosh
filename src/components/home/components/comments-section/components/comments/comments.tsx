import { useEffect, useState } from "react";
import { COMMENTS_ITEM } from "../../../../../../data";
import { SAImage } from "../../../../../custom";
import avatar from "../../../../../../images/avatar_6858441.png";
export default function Comments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // برای انیمیشن جهت بالا

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % COMMENTS_ITEM.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    const total = COMMENTS_ITEM.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) return { y: 0, scale: 1, opacity: 1, z: 10 };
    if (diff === 1) return { y: 95, scale: 0.8, opacity: 0.5, z: 5 };
    if (diff === total - 1) return { y: -95, scale: 0.8, opacity: 0.5, z: 5 };
    return { y: 200 * direction, scale: 0.8, opacity: 0, z: 0 };
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden neon-border ">
      {COMMENTS_ITEM.map((comment, index) => {
        const { y, scale, opacity, z } = getPosition(index);
        return (
          <div
            key={comment.id}
            className="absolute w-full text-center transition-all duration-700 ease-in-out p-6"
            style={{
              transform: `translateY(${y}px) scale(${scale})`,
              opacity,
              zIndex: z,
            }}
          >
            <div
              className={`italic border p-1 rounded-md border-yellow-500  ${
                opacity === 1
                  ? "text-slate-100 font-semibold"
                  : "text-slate-400"
              }`}
            >
              <div className="flex gap-2">
                <SAImage
                  style={{ backgroundImage: `url(${avatar})` }}
                  className="h-16 w-16 rounded-full"
                />
                <small>{comment.name}</small>
              </div>
              <p className="truncate">{comment.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
