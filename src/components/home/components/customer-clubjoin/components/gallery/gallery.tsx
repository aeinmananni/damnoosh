import { useMemo } from "react";
import { CUSTOMER_CLUB_GALLARY } from "../../../../../../data";
import { SAImage } from "../../../../../custom";

export default function Gallery() {
  const renderImage = useMemo(() => {
    return CUSTOMER_CLUB_GALLARY.map((it, index) => (
      <SAImage
        key={it.id}
        src={it.image}
        style={{ animationDelay: `${index * 0.9}s` }}
        className={`${it.id === 7 && "col-span-3"} fade-opacity`}
      />
    ));
  }, []);
  return <div className="w-full h-full grid grid-cols-3">{renderImage}</div>;
}
