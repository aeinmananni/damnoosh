import { SALogo } from "../../../logo";
import qualityIcon from "../../../../images/high-quality_6889423.png";
import { SAImage, SALine } from "../../../custom";

type CartProps = {
  image: string;
  title: string;
  exp: string;
};

export default function Cart({ image, title, exp }: CartProps) {
  return (
    <div className="neon-border-yellow w-full h-full  flex flex-col">
      <div className="flex w-full h-1/5 gap-3  ">
        <SAImage
          src={image}
          className="w-1/4 h-full border-r neon-border-yellow shrink-0 "
        />
        <span className="w-full p-3 text-shadow">{title}</span>
      </div>
      <SALine />
      <div className="flex  gap-4 p-3 h-full overflow-hidden">
        <div className="flex flex-col justify-between h-full ">
          <SAImage src={qualityIcon} className="w-24 h-24 shrink-0" />
          <SALogo />
        </div>
        <span className=" text-justify leading-relaxed  overflow-y-auto h-full">
          {exp}
        </span>
      </div>
    </div>
  );
}
